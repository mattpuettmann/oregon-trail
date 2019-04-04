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


$('.wagon').hide();
$('.gameButtons').hide();
let playersGroup = new Group('', 0, 0, 0, 0)

let timePassing;
let seconds = 0;
let minutes = 0;

$('.feed').on('click', (e) => {
	playersGroup.hunger--;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
});
$('.treat').on('click', (e) => {
	playersGroup.health--;
	$('.health').text(`Health: ${playersGroup.health}`);
});


$('form').on('submit', (e) => {
	e.preventDefault();
	$('.wagon').show();
	$('.gameButtons').show();
	wagonMoves();
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
	if (seconds % 10 === 0) {
		hungerGoesUp();
	}
	if (seconds % 30 === 0) {
		healthGoesUp();
	}
	if (seconds >= 180) {
		alert("You've crossed the Great Plains! Time to venture into the Rocky Mountains!");
		clearInterval(timePassing);
	}






	if (playersGroup.hunger >= 10 || playersGroup.health >= 10) {
		clearInterval(timePassing);
		alert("Everyone is dead!");
		let value = prompt('Play again? y/n')
			if (value === 'y') {
				console.log('y');
			location.reload(true);
			}
	}







}








// const levelGoesUp = () => {

// }
const hungerGoesUp = () => {
	playersGroup.hunger++;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
}
const healthGoesUp = () => {
	playersGroup.health++;
	$('.health').text(`Health: ${playersGroup.health}`);
}
const wagonMoves = () => {
	$('.wagon').animate({left: '1050px'}, 18000)
}



const startGame = () => {
	namePlayer();
	timerStart();
	beginLevel1();
	beginLevel2();
	beginLevel3();
	beginLevel4();
}















