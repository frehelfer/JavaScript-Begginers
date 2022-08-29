const monkey = document.querySelector('.emoji');

monkey.addEventListener('click', function () {
	monkey.classList.toggle('active');

	if (monkey.classList.contains('active')) {
		monkey.textContent = '🙉';
	} else {
		monkey.textContent = '🙈';
	}
});
