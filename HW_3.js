console.log("Домашка ч.3");
console.log(`\n`);

'use strict'

/**
 * Функция выполнение первой части ДЗ_3 
 * @returns Ничего
 */
function Chapter_1() {

	console.log("Chapter_1");
	console.log(`\n`);

	let i = '';
	/**
	 * Функция определение четности, нечетности значений. Выводит первое верное значение. 
	 * @returns 
	 */
	function Filter_num() {
		if (i % 2) {
			console.log(`${i} - Нечетное число`)
			return;
		}
		else if (i) {
			console.log(`${i} - Четное число`)
			return;
		}
		console.log(`${i} - Это ноль`)
	}

	for (i = 0; i < 11; i++) {
		Filter_num();
	}
	console.log(`\n`);
}

/**
 * Функция выполнение второй части ДЗ_3 
 * @returns Ничего
 */
function Chapter_2() {

	console.log("Chapter_2");
	console.log(`\n`);

	const post = {
		author: "John", //вывести этот текст
		postId: 23,
		comments: [
			{
				userId: 10,
				userName: "Alex",
				text: "lorem ipsum",
				rating: {
					likes: 10,
					dislikes: 2 //вывести это число
				}
			},
			{
				userId: 5, //вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", //вывести этот текст
				rating: {
					likes: 3,
					dislikes: 1
				}
			},
		]
	};

	console.log(post.author);
	console.log(post.comments[0].rating.dislikes);
	console.log(post.comments[1].userId);
	console.log(post.comments[1].text);

	console.log(`\n`);
}

/**
 * Функция выполнение третьей части ДЗ_3 
 * @returns Ничего
 */
function Chapter_3() {

	console.log("Chapter_3");
	console.log(`\n`);

	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price: 1000,
		},
	];

	const Saleprice = products.map(function (S_price) {
		return Object.assign({}, { S_price }, { price: S_price.price - S_price.price * 0.15 });
	})

	console.log(products);
	console.log(Saleprice);

	console.log(`\n`);
}

/**
 * Функция выполнение четвертой части ДЗ_3 
 * @returns Ничего
 */
function Chapter_4() {

	console.log("Chapter_4");
	console.log(`\n`);

	const products = [
		{
			id: 3,
			price: 127,
			photos: [
				"1.jpg",
				"2.jpg",
			]
		},
		{
			id: 5,
			price: 499,
			photos: []
		},
		{
			id: 10,
			price: 26,
			photos: [
				"3.jpg"
			]
		},
		{
			id: 8,
			price: 78,
		},
	];

	/**
	 * Функция проверки не нулевой длины массива "photo" (Почему рядом с проверкой на undefined не работает так и не понял) 
	 * @param {string} photo 
	 * @returns boolean  
	 */
	function PhotoCheck(photo) {
		return photo.length !== 0;
	}

	/**
	 * функция проверки не нулевой длины и отсутствие раздела "photo"
	 * @param {*} product 
	 * @returns 
	 */
	function SerchPhoto(product) {

		console.log(typeof product.photos);

		if (typeof product.photos !== 'undefined' && PhotoCheck(product.photos))
			return true;
		else
			return false;
	}

	const ItemPhoto = products.filter(SerchPhoto);

	console.log(ItemPhoto);

	const SortPrice = products.sort(function (a, b) {
		if (a.price > b.price) {
			return 1;
		}
		if (a.price < b.price) {
			return -1;
		}
		return 0;
	});

	console.log(SortPrice);

	console.log(`\n`);
}

/**
 * Функция выполнение пятой части ДЗ_3 
 * @param {*} line Число -1 подсчета результирующего массиа 
 */
function Chapter_5(line) {

	console.log("Chapter_5");
	console.log(`\n`);
	let i = '';
	let arr = [''];


	/**
	 * Функция инкримента +1 
	 * @param {Number} incriment 
	 * @returns Возвращает результат подсчета счетчика
	 */
	function incNumber(incriment) {
		let res = incriment.push(i);

		if (!i) {
			res = incriment.shift();
		}

		i++;
		return i;
	}

	for (i = 0; incNumber(arr) < line;) { }

	console.log(arr);

	console.log(`\n`);
}

/**
 * Функция выполнение шестой части ДЗ_3 
 * @returns Ничего
 */
function Chapter_6() {

	console.log("Chapter_6");
	console.log(`\n`);

	let i = '';
	let j = '';

	let hill = [];

	for (i = 0; i < 21; i++) {
		for (j = 0; j < i; j++) {
			if (!j) {
				hill[i] = '';
			}
			hill[i] += 'x';
		}
		console.log(hill[i]);
	}

	console.log(`\n`);
}

Chapter_1();
Chapter_2();
Chapter_3();
Chapter_4();
Chapter_5(10);
Chapter_6();