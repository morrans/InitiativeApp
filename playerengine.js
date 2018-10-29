Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data: {
		numberOfPlayers: 0,
		players: [],
		name: null,
		shuffleImage: './assets/order button.png',
		sortImage: './assets/shuffle button.png',
		minusButton: './assets/subtract.png',
		plusButton: './assets/add.png',
		headerIcon: './assets1/applogothing.png',
		addIcon: './assets1/add_players.png',
		isRandom: true,
		avatars: [
			{
				avatarImage: './assets/Avatar1.png',
				avatarBanner: './assets/Banner1.png'
			},
			{
				avatarImage: './assets/Avatar2.png',
				avatarBanner: './assets/Banner2.png'
			},
			{
				avatarImage: './assets/Avatar3.png',
				avatarBanner: './assets/Banner3.png'
			},
			{
				avatarImage: './assets/Avatar4.png',
				avatarBanner: './assets/Banner4.png'
			},
			{
				avatarImage: './assets/Avatar5.png',
				avatarBanner: './assets/Banner5.png'
			},
			{
				avatarImage: './assets/Avatar6.png',
				avatarBanner: './assets/Banner6.png'
			},
			{
				avatarImage: './assets/Avatar7.png',
				avatarBanner: './assets/Banner7.png'
			},
			{
				avatarImage: './assets/Avatar8.png',
				avatarBanner: './assets/Banner8.png'
			}
		]

	},
	methods: {
		addPlayer() {
			let newPlayer = {
				playerId: this.numberOfPlayers,
				playerName: this.name,
				playerScore: 0
			}
			this.players.push(newPlayer)
			this.name = null
			this.numberOfPlayers += 1
		},
		activePlayer(index) {
			this.selectedPlayer = index
		},
		addScore() {
			this.players[this.selectedPlayer].playerScore += 1
		},
		reduceScore() {
			this.players[this.selectedPlayer].playerScore -= 1
		},
		setRandom () {
			if (this.isRandom) {
				this.isRandom = false
			} else {
				this.isRandom = true
			}
		},
		playerShuffle() {
			newArr = this.players.slice()
			if(this.isRandom){
				for (var i = newArr.length -1; i > 0 ;i--) {
					j = Math.floor(Math.random() * (i + 1))
					temp = newArr[i]
					newArr[i] = newArr[j]
					newArr[j] = temp
				}
				this.players = newArr
			} else {
				this.players = newArr.sort(function(obj1, obj2) {
					return obj2.playerScore - obj1.playerScore
				})
			}
			this.setRandom()
		},
	},
	computed: {
		image() {
			if(!this.isRandom) {
				return this.shuffleImage
			} else {
				return this.sortImage
			}
		}
	}
})