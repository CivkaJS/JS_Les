'use strick'

let block = null;
let link_id = null;


/**
 *  1 Поиск элементов на странице
 */
function Part_1() {

	console.log("Part_1");
	/**
	 * Задание. Используя поиск по id, получите ссылку с текстом link4
	 * и выведите ее в консоль.
	 * @returns {void}
	 */
	function Chapter_1_1() {

		console.log("Chapter_1");
		console.log(`\n`);

		document.querySelector('.chapter_1_1').style.display = 'block';

		link_id = document.getElementById('four');
		console.log(link_id);

		document.querySelector('.chapter_1_1').style.display = 'none';

		console.log(`\n`);
	}

	/**
	 * Задание. Используя поиск по имени класса, получите все элементы с классом .one
	 * и выведите их в консоль. 
	 * @returns {void}
	 */
	function Chapter_1_2() {

		console.log("Chapter_2");
		console.log(`\n`);

		document.querySelector('.chapter_1_2').style.display = 'block';

		link_id = document.getElementsByClassName('one');

		console.log(link_id);

		document.querySelector('.chapter_1_2').style.display = 'none';

		console.log(`\n`);
	}

	/**
	 * Задание. Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с
	 * классом .card-link, которые находятся в .card-body
	 * и выведите их в консоль.
	 * @returns {void}
	 */
	function Chapter_1_3() {

		console.log("Chapter_3");
		console.log(`\n`);

		document.querySelector('.chapter_1_3').style.display = 'block';

		link_id = document.querySelectorAll('div[class="card-body"] .card-link');

		for (let i = 0; i < link_id.length; i++) {
			console.log(link_id[i].outerHTML);
		}

		document.querySelector('.chapter_1_3').style.display = 'none';

		console.log(`\n`);
	}

	/**
	 * Задание. Используя поиск по селектору (метод querySelector) найдите div с атрибутом
	 * aria-valuenow="50" и выведите его в консоль.
	 * @returns {void}
	 */
	function Chapter_1_4() {

		console.log("Chapter_4");
		console.log(`\n`);

		link_id = document.querySelector('div[class = "progress"] div[aria-valuenow="50"]');
		console.log(link_id.outerHTML);

		console.log(`\n`);
	}

	/**
	 * Задание. Выведите содержимое тега title в консоль.
	 * @returns {void}
	 */
	function Chapter_1_5() {

		console.log("Chapter_5");
		console.log(`\n`);

		link_id = document.querySelector('head title');
		console.log(link_id.innerHTML);

		console.log(`\n`);
	}

	Chapter_1_1();
	Chapter_1_2();
	Chapter_1_3();
	Chapter_1_4();
	Chapter_1_5();
}

/**
 *  2 класс node
 */
function Part_2() {

	console.log("Part_2");
	/**
	* Задание. Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с
	* классом .media-body.
	* @returns {void}
	*/
	function Chapter_2_1() {

		console.log("Chapter_1");
		console.log(`\n`);

		document.querySelector('.chapter_2_1').style.display = 'block';

		link_id = document.getElementsByClassName('mt-0');
		console.log(link_id[0].parentNode);

		document.querySelector('.chapter_2_1').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. Добавьте в div c помощью appendChild следующую разметку:
	* <h3>hello world</h3>
	* @returns {void}
	*/
	function Chapter_2_2() {

		console.log("Chapter_2");
		console.log(`\n`);

		document.querySelector('.chapter_2_2').style.display = 'block';

		let block = document.querySelector('div[class="chapter_2_2"] div');

		let list = document.createTextNode('Hello world');

		console.log(block.appendChild(list));

		document.querySelector('.chapter_2_2').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. 
	* 1. Найдите элемент с классом .btn-outline-warning и удалите его.
	* 2. Аналогичным образом удалите элемент с классом .btn-outline-dark
	* Задание. Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка"
	* @returns {void}
	*/
	function Chapter_2_3() {

		console.log("Chapter_3");
		console.log(`\n`);

		document.querySelector('.chapter_2_3').style.display = 'block';

		let delete_item = document.querySelector('div[class="chapter_2_3"] .btn-outline-warning');
		delete_item.remove();

		delete_item = document.querySelector('div[class="chapter_2_3"] .btn-outline-dark');
		delete_item.remove();

		let change_item = document.querySelector('div[class="chapter_2_3"] .btn-outline-info');
		change_item.innerHTML = 'Кнопка';

		document.querySelector('.chapter_2_3').style.display = 'none';

		console.log(`\n`);
	}

	Chapter_2_1();
	Chapter_2_2();
	Chapter_2_3();
}

/**
 *  3 работа с атрибутами
 */
function Part_3() {

	console.log("Part_3");
	/**
	* Задание. Найдите тег ul. И добавьте ему класс one.
	* @returns {void}
	*/
	function Chapter_3_1() {

		console.log("Chapter_1");
		console.log(`\n`);

		document.querySelector('.chapter_3_1').style.display = 'block';

		let add_class = document.querySelector('div[class="chapter_3_1"] ul');
		add_class.classList.add("one");

		document.querySelector('.chapter_3_1').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. Найдите элемент с классом .nav-link и используя метод toggle из свойства classList
	* у элемента, добавьте или уберите класс .active.
	* @returns {void}
	*/
	function Chapter_3_2() {

		console.log("Chapter_2");
		console.log(`\n`);

		document.querySelector('.chapter_3_2').style.display = 'block';

		let toggle_item = document.querySelector('div[class="chapter_3_2"] .nav-link');
		toggle_item.classList.toggle("active");
		console.log(toggle_item.classList.contains("active"));
		toggle_item.classList.toggle("active");
		console.log(toggle_item.classList.contains("active"));

		document.querySelector('.chapter_3_2').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство classList
	* у элемента, и метод remove().
	* @returns {void}
	*/
	function Chapter_3_3() {

		console.log("Chapter_3");
		console.log(`\n`);

		document.querySelector('.chapter_3_3').style.display = 'block';

		let delete_item = document.querySelector('div[class="chapter_3_3"] .menu');
		delete_item.classList.remove("dropdown-menu");
		console.log(delete_item.classList.contains("dropdown-menu"));

		document.querySelector('.chapter_3_3').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. Добавьте в div с классом .menu следующую разметку:
	* <a href="#">link</a>
	* используя метод insertAdjacentHTML
	* @returns {void}
	*/
	function Chapter_3_4() {

		console.log("Chapter_4");
		console.log(`\n`);

		document.querySelector('.chapter_3_4').style.display = 'block';


		let parent = document.querySelector('div[class="chapter_3_4"] .menu');

		let link = document.createElement('a')

		link.href = '#';
		link.innerHTML = 'link';

		parent.appendChild(link)

		document.querySelector('.chapter_3_4').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. Выведите в консоль значение атрибутов data-dismiss
	* и aria-label с помощью метода getAttribute.
	* @returns {void}
	*/
	function Chapter_3_5() {

		console.log("Chapter_5");
		console.log(`\n`);

		document.querySelector('.chapter_3_5').style.display = 'block';


		let button_atribut = document.querySelector('div[class="chapter_3_5"] button[class="close"]');

		console.log(`Атрибут data-dismiss: ${button_atribut.getAttribute('data-dismiss')}`);
		console.log(`Атрибут aria-label: ${button_atribut.getAttribute('aria-label')}`);

		document.querySelector('.chapter_3_5').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. Добавьте заголовку атрибут data-one="один" и атрибут
	* data-two="два" с помощью метода setAttribute.
	* @returns {void}
	*/
	function Chapter_3_6() {

		console.log("Chapter_6");
		console.log(`\n`);

		document.querySelector('.chapter_3_6').style.display = 'block';


		let add_atribut = document.querySelector('div[class="chapter_3_6"] h1');

		add_atribut.setAttribute('data-one', '1');
		add_atribut.setAttribute('data-two', '2');

		document.querySelector('.chapter_3_6').style.display = 'none';

		console.log(`\n`);
	}

	/**
	* Задание. найдите заголовок с id="title" и замените значение id
	* на что-то другое.
	* @returns {void}
	*/
	function Chapter_3_7() {

		console.log("Chapter_6");
		console.log(`\n`);

		document.querySelector('.chapter_3_7').style.display = 'block';

		let id_items = document.getElementById('title');
		id_items.innerText = 'head';
		console.log(document.getElementById('title'));

		document.querySelector('.chapter_3_7').style.display = 'none';

		console.log(`\n`);
	}

	Chapter_3_1();
	Chapter_3_2();
	Chapter_3_3();
	Chapter_3_4();
	Chapter_3_5();
	Chapter_3_6();
	Chapter_3_7();
}


Part_1();
Part_2();
Part_3();
