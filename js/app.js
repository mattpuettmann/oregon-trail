console.log("Up & Running.");

$('form').hide();
$('.gameButtons').hide();
$('.predator').hide();
$('.wagon').hide();
$('.title').hide();
$('.vitals').hide();
$('.timeStats').hide();

let timePassing;
let food = 0;
let foodStart = 10;
let shot = 0;
let seconds = 0;
let minutes = 0;
let buttonClicks = 0;

class Group {
	constructor(name, hunger, health, food) {
	this.name = name;
	this.hunger = hunger;
	this.health = health;
	this.food = food;
	}
}

let playersGroup = new Group('', 0, 0, 0);

$('.play').on('click', (e) => {
	$('.welcome').hide();
	$('.play').hide();
	$('form').show();
});



$('form').on('submit', (e) => {
	e.preventDefault();
	$('.gameButtons').show();
	$('.title').show();
	$('form').hide();
	$('.vitals').show();
	$('.timeStats').show();
	$('.background').css('background-image', "url('https://img.freepik.com/free-vector/plain-blue-sky-background_1308-20781.jpg?size=626&ext=jpg')")
	let playerName = $('.nameInput').val();
	console.log(playerName);
	$('.vitals h3').text(`${playerName}'s Pioneer Group:`)
	$('.nameInput').val('');
	$('.wagon').show();
	$('.timeStats .level').text(`Level: 1`);
	$('.food').text(`Food: 10`);
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
		// foodGoesDown();
	}
	if (seconds % 30 === 0) {
		healthGoesUp();
	}
	if (seconds % 430 === 0) {
		$('.predator').show();
	}
	if (seconds % 490 === 0 && buttonClicks < 5) {
		alert("You've been mauled by the lion! You lose!");
	}







	if (seconds >= 180 && seconds < 181) {
		alert("You've crossed the Great Plains! Time to venture into the Rocky Mountains!");
		$('.timeStats .level').text("Level: 2");
		console.log('background switch now.');
		$('.background').css('background-image', "url('https://images.all-free-download.com/images/graphicthumb/vector_mountains_288155.jpg')")
		wagonMoves();
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



$('.feed').on('click', (e) => {
	if (foodStart > 0) {
		playersGroup.hunger--;
		foodStart--;
		console.log(foodStart);
		$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
		$('.food').text(`Food: ${foodStart}`);
	}		
});
$('.treat').on('click', (e) => {
	playersGroup.health--;
	$('.health').text(`Health: ${playersGroup.health}`);
});
$('.hunt').on('click', (e) => {
	let randoNum = Math.floor(Math.random() * 4);
	// let foodTotal = foodStart;
	let newFoodTotal = foodStart += randoNum;
	// console.log(foodStart);
	console.log(randoNum);
	console.log(newFoodTotal);
	// console.log(foodTotal);
	$('.food').text(`Food: ${newFoodTotal}`);
});
$('.predator').on('click', (e) => {
	console.log('predator clicked');
	buttonClicks++;
	console.log(buttonClicks);
	if (buttonClicks >= 5) {
		$('.predator').hide();
	}
});











