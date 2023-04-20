let timerMinutes = 1;
let timerSeconds = timerMinutes * 60;

function calculateTime(){
	const countdown = document.querySelector("#countdown");
	let minutes = Math.floor(timerSeconds/60);
	let seconds = timerSeconds%60;
	countdown.textContent = `${minutes} : ${seconds}`;
	timerSeconds--;

	console.log(timerSeconds);

	if (timerSeconds < 0){
		stopTimer();
		timerSeconds = 0;
	}
	function stopTimer(){
		clearInterval(timerID);
	}
}
let timerID = setInterval(calculateTime, 1000);
