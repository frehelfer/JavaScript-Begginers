let data = [
	{
		name: 'Igo',
		age: 30,
	},
	{
		name: 'Tany',
		age: 32,
	},
	{
		name: 'Fre',
		age: 27,
	},
	{
		name: 'Thi',
		age: 33,
	},
	{
		name: 'Chester',
		age: 28,
	},
	{
		name: 'Igow',
		age: 31,
	},
];

const info = document.querySelector('.info');

let details = data.map(function (item) {
	return `<div> Name: ${item.name}<br>Age: ${item.age}</div>`;
});

info.innerHTML = details.join('\n');
