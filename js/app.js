console.log("Welcome to the Oregon Trail!");




//Welcome screen, Start Game button.
//Welcome screen hides, name input appears.
//User inputs name.
//Game begins.

//Hide welcome/start screen, load Level 1 background image and player's wagon.
//Timer starts.
//Animation begins.
//Hunger and Health will incrementally increase/dcrease.
//Player clicks corresponding buttons to replenish hunger/health stats.
//If a pre-determined amount of time passes, the player advances to Level 2.

//Hide Level 1 background image.
//Load Level 2 background image.
//Reset wagon's position on left side of the screen.
//Resume timer, restart right-moving animation.
//Add "Hunt" button.
//Add "Ammo" statistic.
//Beginning with Level 2, Hunger can only be replenished if the new Food statistic has value.
//Hunt will replenish Food statistic by random integers.

class Group {
	constructor(name, hunger, health, food, ammo) {
	this.name = name;
	this.hunger = hunger;
	this.health = health;
	this.food = food;
	this.ammo = ammo;
	}
}

let playersGroup = new Group('', 0, 0, 0, 0)


let timePassing;
let seconds = 0;
let minutes = 0;


$('form').on('submit', (e) => {
	e.preventDefault();
	const playerName = $('.nameInput').val();
	console.log(playerName);
	$('.nameInput').val('');
	$('.vitals h3').text(`${playerName}'s Pioneer Group:`)
	timePassing = setInterval(timerStart, 100);


});





const timerStart = () => {
	seconds++;
	$('.seconds').text(`Seconds: ${seconds}`);
	if (seconds % 60 === 0) {
		minutes++;
		$('.minutes').text(`Minutes: ${minutes}`);
	}
	if (seconds % 120 === 0 && seconds > 60) {
		hungerGoesUp();
	}
}









const hungerGoesUp = () => {

}



const startGame = () => {
	namePlayer();
	timerStart();
	beginLevel1();
	beginLevel2();
	beginLevel3();
	beginLevel4();
}















