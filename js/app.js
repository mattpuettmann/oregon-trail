console.log("Up & Running.");

$('form').hide();
$('.rules').hide();
$('.gameButtons').hide();
$('.wagon').hide();
$('.title').hide();
$('.vitals').hide();
$('.timeStats').hide();
$('.bear').hide();
$('.charmin').hide();
$('.tree').hide();
$('.rock1').hide();
$('.rock2').hide();
$('.rock3').hide();


let timePassing;
let food = 0;
let foodStart = 10;
let suppliesStart = 5;
let shot = 0;
let seconds = 0;
let minutes = 0;
let lionClicks = 0;
let wolfClicks = 0;
let bearClicks = 0;
let charminClicks = 0;
let rock1Clicks = 0;
let rock2Clicks = 0;
let rock3Clicks = 0;
let treeClicks = 0;
let possibleCods = ["Dysentery", "Cholera", "Windmill Cancer"]


class Group {
	constructor(name, hunger, health, food) {
	this.name = name;
	this.hunger = hunger;
	this.health = health;
	this.food = food;
	}
}


let playersGroup = new Group('', 0, 0, 0);


$('.welcome').on('click', (e) => {
	$('.welcome').hide();
	$('.rules').show();
});
$('.rules').on('click', (e) => {
	$('.rules').hide();
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
	$('.supplies').text(`Supplies: 5`)
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
	}
	if (seconds % 30 === 0) {
		healthGoesUp();
	}
	if (seconds % 210 === 0 && seconds < 410) {
		console.log('lion shows up');
		$('.lion').append('<img id="pred" src="http://orig13.deviantart.net/9148/f/2014/335/8/a/8a4e989949e9952f033073fbffffc459-d889cdt.gif">')
		$('.lion').animate({left: '-=155px', top: '+=75px'}, 6000);
	}
	if (seconds % 260 === 0 && lionClicks < 5) {
		alert("You've been mauled by the lion! You lose!");
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	} 
	if (seconds % 320 === 0 && seconds < 640) {
		console.log('wolf shows up');
		$('.wolf').append('<img id="wolf" src="https://66.media.tumblr.com/tumblr_m6nenjMAEg1qikuj5o1_500.gif">')
		$('.wolf').animate({left: '+=200px', top: '+=75px'}, 4000);
	}
	if (seconds % 350 === 0 && wolfClicks < 5) {
		alert("You've been mauled by the wolf! You lose!");
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (seconds % 390 === 0) {
		console.log('bear shows up');
		$('.bear').show();
		$('.bear').append('<img id="bear1" src="http://bestanimations.com/Animals/Mammals/Bears/brown-bear-animated-gif-3.gif">')
		$('.bear').animate({left: '-=155px', top: '+=75px'}, 6000);
	}
	if (seconds % 444 === 0 && bearClicks < 5) {
		alert("You've been mauled by a bear! You lose.");
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (seconds % 500 === 0) {
		$('.charmin').show();
		$('.charmin').append('<img id="bear2" src="https://appstickers-cdn.appadvice.com/1196723163/820628269/d8c831f36e0550ae0dbaa13ef9cb90d3-9.gif">')
		$('.charmin').animate({left: '+=155px', top: '+=75px'}, 4000);
	}
	if (seconds % 539 === 0 && charminClicks < 5) {
		alert("You've been mauled by a bear!");
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (seconds % 550 === 0) {
		console.log('rock1 appears');
		$('.rock1').show();
		$('.rock1').append('<img id="rock1" src="https://purepng.com/public/uploads/large/purepng.com-stones-and-rocksstonerockmineralmaterialbuilding-1411527102621p7ef4.png">');
		$('.rock1').animate({left: '-=750px'}, 5000);
	}
	if (seconds % 580 === 0) {
		console.log('rock2 appears');
		$('.rock2').show();
		$('.rock2').append('<img id="rock2" src ="https://www.gobigrock.com/wp-content/uploads/2016/10/Fieldstone.png">')
		$('.rock2').animate({left: '-=750px'}, 5000);
	}
	if (seconds % 610 === 0) {
		$('.tree').show();
		$('.tree').append('<img id="tree" src="http://www.imarvintpa.com/Mapping/Terrain/Plants/Trees/Fallen/CFF_fallen-tree-jrl_kpl2.png">')
		$('.tree').animate({left: '-=750px'}, 5000);
	}
	if (seconds % 640 === 0) {
		$('.rock3').show();
		$('.rock3').append('<img id="rock3" src="https://phosphorusfive.files.wordpress.com/2017/08/rock.png">')
		$('.rock3').animate({left: '-=750px'}, 5000);
	}
	if (seconds % 590 === 0 && rock1Clicks < 1) {
		alert("You crashed into a rock and sank everyone!")
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (seconds % 610 === 0 && rock2Clicks < 1) {
		alert("You crashed into a rock and sank everyone!")
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (seconds % 635 === 0 && treeClicks < 1) {
		alert("You crashed into a tree and killed us all.");
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (seconds % 641 === 0 && rock3Clicks < 1) {
		alert("You crashed into a rock and killed us all.");
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
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
		$('.background').css('background-image', "url('backgrounds/oregon-river.png')");
		wagonMoves();
	}
	if (seconds >= 720) {
		alert("YOU'VE MADE IT! Congratulations for getting everyone to Oregon in one piece.");
		clearInterval(timePassing);
		let value = prompt("Play again? y/n");
			if (value === 'y'){
				console.log('y');
				location.reload(true);
			}
	}
	if (playersGroup.hunger > 6) {
		$('.hunger').css('color', 'red');
	} else {
		$('.hunger').css('color', 'white');
	}
	if (playersGroup.health > 6) {
		$('.health').css('color', 'red');
	} else {
		$('.health').css('color', 'white');
	}
	if (playersGroup.hunger >= 10 && seconds < 542) {
		clearInterval(timePassing);
		alert("Your group has starved to death.");
		let value = prompt('Play again? y/n')
			if (value === 'y') {
				console.log('y');
			location.reload(true);
			}
	}
	if (playersGroup.health >= 10 && seconds < 542) {
		clearInterval(timePassing);
		let randCod = Math.floor(Math.random() * 2)
		alert(`You have died of ${possibleCods[randCod]}.`);
		let value = prompt('Play again? y/n')
			if (value === 'y') {
				console.log('y');
			location.reload(true);
			}
	}
};


const wagonMoves = () => {
	console.log('wagonmoves called.');
	$('.wagon').animate({left: '+=930px'}, 18000, function() { $('.wagon').removeAttr('style');});
};
const hungerGoesUp = () => {
	if (seconds < 541) {
		playersGroup.hunger++;
		$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
	}
};
const healthGoesUp = () => {
	if (seconds < 541) {
		playersGroup.health++;
		$('.health').text(`Health: ${playersGroup.health}`);
	}
};


$('.feed').on('click', (e) => {
	if (foodStart > 0) {
		playersGroup.hunger--;
		foodStart--;
		// console.log(foodStart);
		$('.hunger').text(`Hunger: ${playersGroup.hunger}`);
		$('.food').text(`Food: ${foodStart}`);
	}		
});
$('.treat').on('click', (e) => {
	if (suppliesStart > 0) {
		playersGroup.health--;
		suppliesStart--;
		// console.log(suppliesStart);
		$('.supplies').text(`Supplies: ${suppliesStart}`);
		$('.health').text(`Health: ${playersGroup.health}`);
	}
});
$('.hunt').on('click', (e) => {
	if (suppliesStart > 0) {
		suppliesStart--;
		let randoNum = Math.floor(Math.random() * 4);
		let newFoodTotal = foodStart += randoNum;
		$('.food').text(`Food: ${newFoodTotal}`);
		$('.supplies').text(`Supplies: ${suppliesStart}`);
	}
});
$('.forage').on('click', (e) => {
	let randomNum = Math.floor(Math.random() * 3);
	console.log(randomNum);
	let newSupTotal = suppliesStart += randomNum;
	$('.supplies').text(`Supplies: ${newSupTotal}`);
});
$('.lion').on('click', (e) => {
	console.log('predator clicked');
	lionClicks++;
	console.log(lionClicks);
	if (lionClicks >= 5) {
		$('.lion').hide();
	}
});
$('.wolf').on('click', (e) => {
	console.log('predator clicked');
	wolfClicks++;
	if (wolfClicks >= 5) {
		$('.wolf').hide();
	}
});
$('.bear').on('click', (e) => {
	console.log('bear clicked');
	bearClicks++;
	if (bearClicks >= 5) {
		$('.bear').hide();
	}
});
$('.charmin').on('click', (e) => {
	charminClicks++;
	if (charminClicks >= 5) {
		$('.charmin').hide();
	}
});
$('.rock1').on('click', (e) => {
	console.log('rock clicked');
	rock1Clicks++;
	// console.log(rockClicks);
	if (rock1Clicks >= 1) {
		$('.rock1').hide();
	}
});
$('.rock2').on('click', (e) => {
	console.log('rock clicked');
	rock2Clicks++;
	// console.log(rockClicks);
	if (rock2Clicks >= 1) {
		$('.rock2').hide();
	}
});
$('.tree').on('click', (e) => {
	treeClicks++;
	if (treeClicks >= 1) {
		$('.tree').hide();
	}
});
$('.rock3').on('click', (e) => {
	rock3Clicks++;
	if (rock3Clicks >= 1) {
		$('.rock3').hide();
	}
});










