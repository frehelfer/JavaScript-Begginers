const textInput = document.querySelector('.text-input');
const toDoList = document.querySelector('.to-do-list');

const submitBtn = document.querySelector('.submit-btn');
const clearAllListBtn = document.querySelector('.clear-list-btn');

submitBtn.addEventListener('click', function () {
	if (!textInput.value) {
		textInput.style.border = '2px solid #d54141';
	} else {
		textInput.style.border = '1px solid rgb(118, 118, 118)';

		const checkBtn = document.createElement('div');
		checkBtn.textContent = '👉';
		checkBtn.classList.add('check');

		const newBtnsDiv = document.createElement('div');
		newBtnsDiv.classList.add('div-btns');

		const clearItemBtn = document.createElement('button');
		clearItemBtn.textContent = 'X';
		clearItemBtn.classList.add('clear-item-btn');
		newBtnsDiv.appendChild(clearItemBtn);

		const doneItemBtn = document.createElement('button');
		doneItemBtn.textContent = 'Done';
		doneItemBtn.classList.add('done-item-btn');
		newBtnsDiv.appendChild(doneItemBtn);

		const newItem = document.createElement('li');
		const newItemText = document.createElement('p');
		newItemText.textContent = textInput.value;
		newItem.appendChild(checkBtn);
		newItem.appendChild(newItemText);
		newItem.appendChild(newBtnsDiv);

		toDoList.appendChild(newItem);

		// ------ Item Buttons ------
		const clearBtn = document.querySelectorAll('.clear-item-btn');
		const doneBtn = document.querySelectorAll('.done-item-btn');
		clearBtn.forEach((btn) => {
			btn.addEventListener('click', function () {
				btn.parentElement.parentElement.remove();
			});
		});

		doneBtn.forEach((btn) => {
			btn.addEventListener('click', function (e) {
				btn.parentElement.parentElement.firstChild.innerHTML = '✅';
			});
		});

		textInput.value = '';
	}
});

clearAllListBtn.addEventListener('click', function () {
	toDoList.innerHTML = '';
});
