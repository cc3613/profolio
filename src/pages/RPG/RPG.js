import React, {Component} from 'react';
import axios from 'axios';

import {Button} from 'react-bootstrap';

import {config} from '../../Components/Firebase/Firebase';
import Msg from '../../Components/DeathMsg/DeathMsg';
import ItemDisplay from '../../Components/Items/ItemDisplay';
import {HeroCharacter, EnemyCharacter} from '../../Components/Character/Character';
import Store from '../../Components/Store/Store';

import './RPG.css';

class RPG extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hero: {},
			enemy: {},
			exp_chart: {},
			next_level: 0,
			max_hp: 25,
			max_mp: 10,
			gold: 50,
			death: false,
			win : false,
			store: false,
			items: {},
			item_bought: {},
			}
		}

	componentDidMount() {
		// get all metadata here. And call a monster
		axios.get(config.databaseURL + '/hero.json')
		     .then(res => this.setState({hero: res.data.default, max_hp: res.data.default.hp, max_mp: res.data.default.mp}))
		     .catch(error => console.log(error));

	    this.callNextMonster()
            .then(data => this.setState({enemy: data.data}));

        axios.get(config.databaseURL + '/exp_chart.json')
             .then(res => this.setState({exp_chart: res.data}))
             .catch(error => console.log(error));

        axios.get(config.databaseURL + '/items.json')
             .then(res => this.setState({items: res.data}))
             .catch(error => console.log(error));
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	callNextMonster() {
		// check hero's level and call corresponding monsters
		let heroLevel = this.state.hero.level;
		let monsters = [];
		if (heroLevel < 5) {
			monsters = ['hobbit', 'spiderpig']
		} else if (heroLevel < 10) {
			monsters = ['charmander', 'big_monster']
		} else if (heroLevel < 15) {
			monsters = ['sunknight', 'charmander', 'mikewazowski']
		} else if (heroLevel <= 20) {
			monsters = ['sunknight', 'charmander', 'mikewazowski', 'dragon']
		} else {
			monsters = ['hobbit', 'spiderpig']
		}

		let random_monster = monsters[this.getRandomInt(monsters.length)];
		return axios.get(config.databaseURL + '/enemies/' + random_monster + '.json')
	}

	calculateUntilNextExp(level, exp) {
		let until_next_level = this.parseNextLevelExp(level) - exp;
		return until_next_level
	}

	parseNextLevelExp(level) {
		let exp = this.state.exp_chart[level+1];
		return exp
	}

	getLevelAttributes(level) {
		return axios.get(config.databaseURL + '/hero/level_attributes.json')
	}

	handleFight(attributes, next_level_exp) {
		// fight until someone dies. Level up when exp exceeds current level
		// reset if win or dead
		let finalBoss = 'Dragon';
		let hero = attributes.hero;
		let enemy = attributes.enemy;
		let hero_atk_val = Math.max(1, hero.atk - enemy.def);
		let enemy_atk_val = Math.max(1, enemy.atk - hero.def);
		let fight_end = false;
		let dead = false;
		let win = false;
		
		while (fight_end === false) {
			if (hero.spe >= enemy.spe) {
				enemy.hp -= hero_atk_val;
				if (enemy.hp <= 0) {
					fight_end = true;
					if (enemy.name === finalBoss) {
						win = true;
					}
				} else {
					hero.hp -= enemy_atk_val;
					if (hero.hp <= 0) {
						fight_end = true;
						dead = true;
					}
				}
			} else {
				hero.hp -= enemy_atk_val;
				if (hero.hp <= 0) {
					fight_end = true;
					dead = true;
				} else {
					enemy.hp -= hero_atk_val;
					if (enemy.hp <= 0) {
						fight_end = true;
						if (enemy.name === finalBoss) {
							win = true;
						}
					}
				}
			}
			
		}

		if (hero.level < 20) {
			hero.exp += enemy.exp;

			if (hero.exp >= next_level_exp) {
				hero.level += 1;
				this.getLevelAttributes(hero.level)
				    .then(res => {
			     		let new_level_hero = res.data[hero.level];

				     	hero.atk += new_level_hero.atk;
				     	hero.def += new_level_hero.def;
				     	hero.dex += new_level_hero.dex;
				     	hero.hp += new_level_hero.hp;
				     	hero.int += new_level_hero.int;
				     	hero.mp += new_level_hero.mp;
				     	hero.spe += new_level_hero.spe;
				     	this.setState({max_hp: new_level_hero.default_hp, max_mp: new_level_hero.default_mp})
			     });
			}
		} else {
			hero.exp = 'MAX'
		}
		let gold = this.state.gold
		gold += enemy.gold

		this.callNextMonster()
            .then(data => this.setState({enemy: data.data}));
		this.setState({hero: hero,
					   enemy: enemy,
					   gold: gold});

		if (dead === true) {
			this.setState({death: true});
		} else if (win === true) {
			this.setState({win: true});
		}
	}

	resetHpMp = () => {
		let HeroStatus = JSON.parse(JSON.stringify(this.state.hero));
		HeroStatus.hp = this.state.max_hp;
		HeroStatus.mp = this.state.max_mp;
		this.setState({hero: HeroStatus});
	}

	handleModalClose = (e) => {
		// This is pretty much a reload. Reset all necessary variables and states. Reload necessary data from db as well.
		this.setState({death: false, win: false, item_bought: {}, gold: 50});
		axios.get(config.databaseURL + '/hero.json')
		     .then(res => this.setState({hero: res.data.default, max_hp: res.data.default.hp, max_mp: res.data.default.mp}))
		     .catch(error => console.log(error));
	    axios.get(config.databaseURL + '/items.json')
             .then(res => this.setState({items: res.data}))
             .catch(error => console.log(error));
        this.callNextMonster()
            .then(data => this.setState({enemy: data.data}));
	}

	handleItemEquip = (e) => {
		let attributes = ['atk', 'def', 'spe', 'dex', 'int', 'mp', 'hp'];
		let newState = this.state;
		newState.item_bought[e].equip = !newState.item_bought[e].equip;
		if (newState.item_bought[e].equip) {
			for (let i = 0; i < attributes.length; i ++) {
				let attribute = attributes[i];
				newState.hero[attribute] += newState.item_bought[e][attribute] || 0;
			} 
		} else {
			for (let i = 0; i < attributes.length; i ++) {
				let attribute = attributes[i];
				newState.hero[attribute] -= newState.item_bought[e][attribute] || 0;
			}
		}
		this.setState(newState);
	}

	handleOpenStore = () => {
		this.setState({store: true});
	}

	handleStoreClose = () => {
		this.setState({store: false});
	}

	handleTransaction = (e) => {
		let gold = this.state.gold;
		gold -= e.goldNeeded;
		let itemsBought = this.state.item_bought;
		let items = this.state.items;
		for (let i=0; i< e.itemsSelected.length; i++) {
			itemsBought[e.itemsSelected[i]] = this.state.items[e.itemsSelected[i]];
			delete items[e.itemsSelected[i]];
		}

		this.setState({'gold': gold, item_bought: itemsBought, items: items});
		this.handleStoreClose()

	}

	render () {
		const until_next_level = this.calculateUntilNextExp(this.state.hero.level, this.state.hero.exp);
		return (
			<div>
				<div>
					<Msg show={this.state.win} onClose={this.handleModalClose} title="You Win!!">You beat the dragon! Congrats! You just wasted 5 minutes playing this crappy game!</Msg>
					<Msg show={this.state.death} onClose={this.handleModalClose} title="You Died!!">You died. There are only two buttons to press. Come on, man!</Msg>
					
					<div className='character-block'>
						<HeroCharacter props={this.state.hero} until_next_level={until_next_level} gold={this.state.gold}/>
						<EnemyCharacter props={this.state.enemy}/>
					</div>
					<Store show={this.state.store} onClose={this.handleStoreClose} items={this.state.items} goback={this.handleStoreClose} 
						   gold={this.state.gold} transaction={this.handleTransaction}/>
					
					<hr></hr>
					<h1>Items</h1>
					<div className='item-block'>
						<ItemDisplay items={this.state.item_bought} selected={this.handleItemEquip}/>
					</div>
					
					<div className='action-buttons'>
						<Button variant="outline-danger" size="lg" onClick= {() => this.handleFight(this.state, this.state.exp_chart[this.state.hero.level + 1])}>Fight!</Button>
						<Button onClick = {this.resetHpMp}>Rest</Button>
						<Button onClick = {this.handleOpenStore}>Visit Store</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default RPG;