// NATIONAL FOOTBALL CONFERENCE
document.getElementById("nl").addEventListener("click", getNl);

function getNl() {
	var x = [
		'Atlanta Braves',
		'Miami Marlins',
		'New York Mets',
		'Philadelphia Phillies',
		'Washington Nationals',
		'Chicago Cubs',
		'Cincinnati Reds',
		'Milwaukee Brewers',
		'Pittsburgh Pirates',
		'St. Louis Cardinals',
		'Arizona Diamondbacks',
		'Colorado Rockies',
		'Los Angeles Dodgers',
		'San Diego Padres',
		'San Francisco Giants'
	];

	var rand = x[Math.floor(Math.random() * x.length)];

	document.getElementById("nl").innerHTML = rand;

	return rand;

}

// disable button after click
function myNl() {
    document.getElementById("nl").disabled = true;
}

// AMERICAN FOOTBALL CONFERENCE
document.getElementById("al").addEventListener("click", getAl);

function getAl() {
	var y = [
		'Baltimore Orioles',
		'Boston Red Sox',
		'New York Yankees',
		'Tampa Bay Rays',
		'Toronto Blue Jays',
		'Chicago White Sox',
		'Cleveland Indians',
		'Detroit Tigers',
		'Kansas City Royals',
		'Minnesota Twins',
		'Houston Astros',
		'Los Angeles Angels',
		'Oakland Athletics',
		'Seattle Mariners',
		'Texas Rangers'
	];

	var rand = y[Math.floor(Math.random() * y.length)];

	document.getElementById("al").innerHTML = rand;

	return rand;
}

// disable button after click
function myAl() {
    document.getElementById("al").disabled = true;
}

// make the championship button available


// CHAMPION
document.getElementById("champ").addEventListener("click", getChamp);

// select champ from the two conference winners
function getChamp(){
	var z = [
		getNl,
		getAl
	];

	var rand = z[Math.floor(Math.random() * z.length)]();

	document.getElementById("champ").innerHTML = rand;
}

// disable button after click
function myChamp() {
    document.getElementById("champ").disabled = true;
}

// show "Good Luck"
function luck() {
	document.getElementById('luck').style.display = "block";
}
