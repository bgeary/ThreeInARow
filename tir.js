var turn = 0;

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function toggleBox(thebox) {
	var box = document.getElementById(thebox);
	
	if(endsWith(box.src, "blank.png")) {
				
		if(turn == 0) {
			box.src = "x.png";
			turn = 1;
		} else { 
			box.src = "o.png";
			turn = 0;
		}
	}
	
	
};

function clearGame() {
	turn = 0;
	for(var i=1; i < 10; i++) {
		var box = document.getElementById("box" + i);
		box.src = "blank.png";
	}	

}

