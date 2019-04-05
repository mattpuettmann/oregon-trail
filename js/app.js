console.log("Up & Running.");

$('.wagon').hide();

let timePassing;
let food = 0;
let shot = 0;
let seconds = 0;
let minutes = 0;

class Group {
	constructor(name, hunger, health, food) {
	this.name = name;
	this.hunger = hunger;
	this.health = health;
	this.food = food;
	}
}

let playersGroup = new Group('', 0, 0, 0);









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
	if (seconds >= 180 && seconds < 181) {
		alert("You've crossed the Great Plains! Time to venture into the Rocky Mountains!");
		$('.timeStats .level').text("Level: 2");
		wagonMoves();
		levelTwo();
	} else if (seconds > 360 && seconds < 362) {
		console.log('level 3 firing');
		alert("You've crossed the Rockies! Now onto the Pacific Northwest!");
		$('.timeStats .level').text("Level: 3");
		wagonMoves();
	} else if (seconds > 540 && seconds < 542) {
		console.log('final level firing');
		alert("You're almost there! You just need to FORD THE RIVER!!!");
		$('timeStats .level').text("Level: FINAL!");
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
// const suppliesGoDown = () => {
// 	let supplies = 100;
// 	playersGroup.supplies--;
// 	$('.supplies').text(`Supplies: ${playersGroup.supplies}`);
// };




//Give function to the Buttons:
$('.gameButtonFeed').on('click', (e) => {
	playersGroup.hunger--;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
	if (seconds % 180 === 0) {
		foodTotal--;
		console.log("button shouldn't work")
		console.log(foodTotal);
	}
});
$('.gameButtonTreat').on('click', (e) => {
	playersGroup.health--;
	$('.health').text(`Health: ${playersGroup.health}`);
});
// $('.gameButtonSupplies').on('click', (e) => {
// 	playersGroup.supplies++;
// 	$('.supplies').text(`Supplies: (${playersGroup.supplies}`);
// });
$('.gameButtonHunt').on('click', (e) => {
	// let randomNumber = Math.floor(Math.random() * 5);
	// let shot = food + randomNumber;
	// let foodTotal = shot++;
	// $('.food').text(`Food: ${foodTotal}`);
	// console.log(foodTotal);
	let randoNum = Math.floor(Math.random() * 4);
	let foodTotal = food += randoNum;
	console.log(randoNum);
	console.log(foodTotal);
	$('.food').text(`Food: ${foodTotal}`)
});


//At Level 2, the FEED button will only allow a finite number of clicks, 
//equal to the amount in FOOD. A new HUNT button will appear, which will add
//to FOOD random amounts between 0-5. A .disabled=true function will be combined 
//with an if check to see if there is food in FOOD.
const levelTwo = () => {
	console.log('level2 firing');
	$('.gameButtonHunt').append($('<input type="button" value="Hunt For Food"/>'))
};


//Check to see if Level = 2, and FOOD is 0. If so, the FEED button will 
//be disabled. Doesn't work.
// const checkFood = () => {
// 	let foodTotal = shot++;

// 	if (seconds > 180 && shot === 0) {
// 		$('.gameButtonFeed').disabled = true;
// 	};
// }




// for (let i = 0; i < gameButtonHunt.cicks; i++) {
// 	let randomNumber = Math.floor(Math.random() * 5);
// 	let food = 0;
// 	let shot = food + randomNumber;
// }







