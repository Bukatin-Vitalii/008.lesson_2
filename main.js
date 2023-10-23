// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
let text = document.createTextNode('1');
let count = Math.random() * 100;
count = Math.round(count);
let array = [];

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	for (let j = 0; j < 10; j++) {
		let td = document.createElement('td');
		if (array.includes(count)) {
			count++;
		}
		array.push(count);
		let text = document.createTextNode(count);

		count = Math.random() * 100;
		count = Math.round(count);

		td.appendChild(text);
		tr.appendChild(td);
	}
	table.appendChild(tr);
}

document.body.appendChild(table);