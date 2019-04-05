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

let playersGroup = new Group('', 0, 0, 0, 0)

let timePassing;
let seconds = 0;
let minutes = 0;


$('form').on('submit', (e) => {
	e.preventDefault();
	$('.wagon').show();
	$('.timeStats .level').text("Level: 1");
	// $('.gameButtons').show();
	$('.gameButtonFeed').append($('<input type="button" value="Feed The Group"/>'))
	$('.gameButtonTreat').append($('<input type="button" value="Treat The Sick"/>'))
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
	if (seconds >= 180 && seconds < 181) {
		alert("You've crossed the Great Plains! Time to venture into the Rocky Mountains!");
		// wagonReset();
		$('.timeStats .level').text("Level: 2");
		// $('.body').css('background-image', 'url("https://data.1freewallpapers.com/detail/mountains-vector-landscape-nature.png")');
		$('body').css('background-image', 'url("https://data.1freewallpapers.com/detail/mountains-vector-landscape-nature.png")');
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


$('.gameButtonFeed').on('click', (e) => {
	playersGroup.hunger--;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
});
$('.gameButtonTreat').on('click', (e) => {
	playersGroup.health--;
	$('.health').text(`Health: ${playersGroup.health}`);
});








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
	$('.wagon').animate({left: '90%'}, 18000)
}
const wagonReset = () => {
	$('.wagon').animate({left: '-90%'}, 1)
}
const levelProgresses = () => {
	console.log('progresses being called.');
	$('body').css('background-image', 'url("https://data.1freewallpapers.com/detail/mountains-vector-landscape-nature.png")');
}



const startGame = () => {
	namePlayer();
	timerStart();
	beginLevel1();
	beginLevel2();
	beginLevel3();
	beginLevel4();
}















