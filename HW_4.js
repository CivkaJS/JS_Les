console.log("Домашка ч.3");
console.log(`\n`);

'use strict'

/**
 * Функция выполнение 1_1 части ДЗ_4 
 * @returns Ничего
 */
function Chapter_1_1() {

	console.log("Chapter_1_1");
	console.log(`\n`);

	var Chose = confirm("Использовать стиль cs5?");

	if (Chose) {

		let percent = {
			make25PercentDiscount: function (discount) {
				this.price = this.price * (1 - discount / 100);
			}
		};

		function Product(name, price) {
			this.name = name;
			this.price = price;
		}

		Product.prototype = percent;

		let objProduct = new Product('Decktop', 600);

		console.log(`Наименование товара : ${objProduct.name}`);
		console.log(`Начальная цена : ${objProduct.price}`);

		objProduct.make25PercentDiscount(25);
		console.log(`Скидка 25% : ${objProduct.price}`);
	}
	else {

		class Product {
			constructor(name, price) {

				this.name = name;
				this.price = price;
			}

			make25PercentDiscount(discount) {
				this.price = this.price * (1 - discount / 100);
			}
		}

		let objProduct = new Product('Decktop', 600);
		console.log(`Наименование товара : ${objProduct.name}`);
		console.log(`Начальная цена : ${objProduct.price}`);

		objProduct.make25PercentDiscount(25);
		console.log(`Скидка 25% : ${objProduct.price}`);
	}

	console.log(`\n`);
}

/**
 * Функция выполнение 1_2 части ДЗ_4 
 * @returns Ничего
 */
function Chapter_1_2() {

	console.log("Chapter_1_2");
	console.log(`\n`);

	Chose = confirm("Использовать стиль cs5?");

	if (Chose) {

		let input_text = prompt('Введите текст');

		let edit = {
			editText: function (reload) {
				// this.author = 'Иванов';
				this.text = reload;
				// this.data = '2020';
			}
		}

		function Post(author, text, data) {
			this.author = author;
			this.text = text;
			this.data = data;
		}

		Post.prototype = edit;

		let objPost = new Post('Петров', '', 2018);
		objPost.editText(input_text);

		console.log(objPost);
		console.log(`\n`);


		function AttachedPost(author, text, data, highlighted) {
			Post.call(this, author, text, data);
			this.highlighted = highlighted;
		}

		AttachedPost.prototype = Object.create(Post.prototype);
		AttachedPost.prototype.constructor = AttachedPost;

		AttachedPost.prototype.makeTextHighlighted = function (booler) {
			this.highlighted = booler;
		}

		let objAttachedPost = new AttachedPost('Иванов', '', 2020, false);
		objAttachedPost.editText('Научная литература');
		objAttachedPost.makeTextHighlighted(true);

		console.log(objAttachedPost);
		console.log(`\n`);
	}
	else {

		input_text = prompt('Введите текст');

		class Post {

			constructor(author, text, data) {
				this.author = author;
				this.text = text;
				this.data = data;
			}

			editText(reload) {
				this.text = reload;
			}

		}

		let objPost = new Post('Петров', '', 2018);
		objPost.editText(input_text);

		console.log(objPost);
		console.log(`\n`);

		class AttachedPost extends Post {
			constructor(author, text, data, highlighted) {
				super(author, text, data);
				this.highlighted = highlighted;
			}

			makeTextHighlighted(booler) {
				this.highlighted = booler;
			}
		}

		let objAttachedPost = new AttachedPost('Иванов', '', 2020, false);
		objAttachedPost.editText('Научная литература');
		objAttachedPost.makeTextHighlighted(true);

		console.log(objAttachedPost);
		console.log(`\n`);
	}
}

Chapter_1_1()
Chapter_1_2();
