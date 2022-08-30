const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over-container');
const restartBtn = document.querySelector('.btn');
const playerScore = document.querySelector('.score');

let = score = 0;

const jump = () => {
	mario.classList.add('jump');

	setTimeout(() => {
		mario.classList.remove('jump');
	}, 500);
};

const loop = setInterval(() => {
	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
	const cloudsPosition = clouds.offsetLeft;

	if (pipePosition <= 120 && pipePosition > 10 && marioPosition < 80) {
		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;

		clouds.style.animation = 'none';
		clouds.style.left = `${cloudsPosition}px`;

		mario.src = '/Mario-Jump/images/game-over.png';
		mario.style.width = '70px';
		mario.style.marginLeft = '55px';

		playerScore.textContent = score;
		gameOver.classList.remove('hidden');

		clearInterval(loop);
	}
}, 10);

function restart() {
	window.location.reload(false);
	gameOver.classList.add('hidden');
}

const scoreCount = setInterval(() => {
	score += 1;
}, 1200);

document.addEventListener('keydown', jump);
restartBtn.addEventListener('click', restart);
