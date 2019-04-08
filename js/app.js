console.log("Up & Running.");

$('.wagon').hide();
$('.vitals').hide();
$('.timeStats').hide();

let timePassing;
let food = 0;
let foodStart = 100;
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



$('form').on('submit', (e) => {
	e.preventDefault();
	$('form').hide();
	$('.vitals').show();
	$('.timeStats').show();
	let playerName = $('.nameInput').val();
	console.log(playerName);
	$('.vitals h3').text(`${playerName}'s Pioneer Group:`)
	$('.gameButtonFeed').append($('<input type="button" value="Feed The Group"/>'))
	$('.gameButtonTreat').append($('<input type="button" value="Treat The Sick"/>'))
	$('.gameButtonSupplies').append($('<input type="button" value="Forage For Supplies"/>'))
	$('.nameInput').val('');
	$('.wagon').show();
	$('.timeStats .level').text(`Level: 1`);
	$('.food').text(`Food: 100`);
	wagonMoves();
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
		foodGoesDown();
	}
	if (seconds % 30 === 0) {
		healthGoesUp();
	}
	if (seconds >= 180 && seconds < 181) {
		alert("You've crossed the Great Plains! Time to venture into the Rocky Mountains!");
		$('.timeStats .level').text("Level: 2");
		console.log('background switch now.');
		$('.background').css('background-image', "url('https://images.all-free-download.com/images/graphicthumb/vector_mountains_288155.jpg')")
		wagonMoves();
		levelTwo();
		// $('.gameButtonFeed').off('click');
		// $('.gameButtonFeed').on('click', (e) => {
		// 	playersGroup.food--;
		// 	playersGroup.hunger--;
		// 	$('.food').text(`Food: ${playersGroup.food}`);
		// 	console.log(playersGroup.health);
		// });
	} else if (seconds > 360 && seconds < 362) {
		console.log('level 3 firing');
		alert("You've crossed the Rockies! Now onto the Pacific Northwest!");
		$('.timeStats .level').text("Level: 3");
		$('.background').css('background-image', "url('https://images.all-free-download.com/images/graphicthumb/forest_background_leafless_trees_icons_cartoon_design_6829779.jpg')")
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




const wagonMoves = () => {
	console.log('wagonmoves called.');
	$('.wagon').animate({left: '90%'}, 18000, function() { $('.wagon').removeAttr('style');});
};
const hungerGoesUp = () => {
	playersGroup.hunger++;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
};
const healthGoesUp = () => {
	playersGroup.health++;
	$('.health').text(`Health: ${playersGroup.health}`);
};
const foodGoesDown = () => {
	let foodTotal = foodStart -= 1;
	console.log(foodTotal);
	$('.food').text(`Food: ${foodTotal}`)
};



$('.gameButtonFeed').on('click', (e) => {
	playersGroup.hunger--;
	$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
});
$('.gameButtonTreat').on('click', (e) => {
	playersGroup.health--;
	$('.health').text(`Health: ${playersGroup.health}`);
});
$('.gameButtonHunt').on('click', (e) => {
	console.log(foodTotal);
	let randoNum = Math.floor(Math.random() * 4);
	let huntTotal = food += randoNum;
	let newFoodTotal = foodTotal - huntTotal;
	console.log(randoNum);
	console.log(foodTotal);
	$('.food').text(`Food: ${newFoodTotal}`)
});


//At Level 2, the FEED button will only allow a finite number of clicks, 
//equal to the amount in FOOD. A new HUNT button will appear, which will add
//to FOOD random amounts between 0-5. A .disabled=true function will be combined 
//with an if check to see if there is food in FOOD.
const levelTwo = () => {
	console.log('level2 firing');
	$('.gameButtonHunt').append($('<input type="button" value="Hunt For Food"/>'))
};









