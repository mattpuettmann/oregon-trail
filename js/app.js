console.log("Up & Running.");

$('.wagon').hide();

let timePassing;
let food = 0;
let seconds = 0;
let minutes = 0;

class Group {
	constructor(name, hunger, health, supplies, food) {
	this.name = name;
	this.hunger = hunger;
	this.health = health;
	this.supplies = supplies;
	this.food = food;
	}
}

let playersGroup = new Group('', 0, 0, 0, 0);









//Game begins when user submits name:
$('form').on('submit', (e) => {
	e.preventDefault();
	let playerName = $('.nameInput').val();
	console.log(playerName);
	$('.vitals h3').text(`${playerName}'s Pioneer Group:`)
	$('.gameButtonFeed').append($('<input type="button" value="Feed The Group"/>'))
	$('.gameButtonTreat').append($('<input type="button" value="Treat The Sick"/>'))
	$('.gameButtonSupplies').append($('<input type="button" value="Forage For Supplies"/>'))
	$('.nameInput').val('');
	$('.wagon').show();
	$('.timeStats .level').text(`Level: 1`);
	wagonMoves();
	timePassing = setInterval(timerStart, 100);
});


//Timer begins with name submit function above.
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
	if (seconds % 60 === 0) {
		suppliesGoDown();
	}
	if (seconds >= 180 && seconds < 181) {
		alert("You've crossed the Great Plains! Time to venture into the Rocky Mountains!");
		$('.timeStats .level').text("Level: 2");
		wagonMoves();
		levelTwo();
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
};



//Functions that begins animation:
const wagonMoves = () => {
	console.log('wagonmoves called.');
	$('.wagon').animate({left: '90%'}, 18000, function() { $('.wagon').removeAttr('style');});
};


//Functions that affect the Vital Game Stats.
const hungerGoesUp = () => {
	playersGroup.hunger++;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
};
const healthGoesUp = () => {
	playersGroup.health++;
	$('.health').text(`Health: ${playersGroup.health}`);
};
const suppliesGoDown = () => {
	let supplies = 100;
	playersGroup.supplies--;
	$('.supplies').text(`Supplies: ${playersGroup.supplies}`);
};




//Give function to the Buttons:
$('.gameButtonFeed').on('click', (e) => {
	playersGroup.hunger--;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
});
$('.gameButtonTreat').on('click', (e) => {
	playersGroup.health--;
	$('.health').text(`Health: ${playersGroup.health}`);
});
$('.gameButtonSupplies').on('click', (e) => {
	playersGroup.supplies++;
	$('.supplies').text(`Supplies: (${playersGroup.supplies}`);
});
$('.gameButtonHunt').on('click', (e) => {
	let randomNumber = Math.floor(Math.random() * 5);
	let shot = food + randomNumber;
	$('.food').text(`Food: ${shot}`);
});


//At Level 2, the FEED button will only allow a finite number of clicks, 
//equal to the amount in FOOD. A new HUNT button will appear, which will add
//to FOOD random amounts between 0-5. A .disabled=true function will be combined 
//with an if check to see if there is food in FOOD.
const levelTwo = () => {
	console.log('level2 firing');
	$('.gameButtonHunt').append($('<input type="button" value="Hunt For Food"/>'))
};















