console.log("Домашка ч.2");
console.log(`\n`);

let result = '';

/**
 * Функция выполнение первой части ДЗ_2 
 * @returns Ничего
 */
function Chapter_1() {

	console.log("Chapter_1");
	console.log(`\n`);

	let a = 1, b = 1, c, d;

	c = ++a;
	alert(`Пример 1 \nОтвет:   ${c} \n\nПри присвоении в переменную "c" используется префиксный инкримент переменной "a". Т.е изначально к переменной инкрементируется 1, а уже после присваивается к переменной "c". Если не помещать пример в функцию происходит комфликт с ДЗ 1 в части повторного объявления переменных a,b,c,d`);

	console.log(`Пример 1. Ответ:${c} \nПояснение: При присвоении переменной "c" используется префиксный инкримент переменной "a". Т.е изначально к переменной инкрементируется 1, а уже после присваивается к переменной "c". Если не помещать пример в функцию происходит комфликт с ДЗ 1 в части повторного объявления переменных a,b,c,d`);

	d = b++;
	alert(`Пример 2 \nОтвет:   ${d} \n\nПри присвоении в переменную "d" используется постфиксный инкримент переменной "b". Т.е изначально перменная присваивается к переменной "d", а уже после инкрементируется на 1.`);

	console.log(`Пример 1. Ответ:${d} \nПояснение: При присвоении в переменную "d" используется постфиксный инкримент переменной "b". Т.е изначально перменная присваивается к переменной "d", а уже после инкрементируется на 1.`);

	c = 2 + ++a;
	alert(`Пример 3 \nОтвет:   ${c} \n\nПри присвоении в переменную "c" используется префиксный инкримент переменной "a". Т.е изначально к переменной инкрементируется 1, а уже после сумируется с 2 и присваивается к переменной "c".`);

	console.log(`Пример 1. Ответ:${c} \nПояснение: При присвоении в переменную "c" используется префиксный инкримент переменной "a". Т.е изначально к переменной инкрементируется 1, а уже после сумируется с 2 и присваивается к переменной "c".`);

	d = 2 + b++;
	alert(`Пример 4 \nОтвет:   ${d} \n\nПри присвоении в переменную "d" используется постфиксный инкримент переменной "b". Т.е изначально перменная сумируется с 2 присваивается к переменной "d", а уже после инкрементируется на 1.`);

	console.log(`Пример 1. Ответ:${d} \nПояснение: При присвоении в переменную "d" используется постфиксный инкримент переменной "b". Т.е изначально перменная сумируется с 2 присваивается к переменной "d", а уже после инкрементируется на 1.`);

	alert(`Переменная а:   ${a} \n\nВо время выполнения кода функции инкриметировалась дважды поэтому результат 3`);

	console.log(`Переменная а:${a} \nПояснение: Во время выполнения кода функции инкриметировалась дважды поэтому результат 3`);

	alert(`Переменная b:   ${b} \n\nВо время выполнения кода функции инкриметировалась дважды поэтому результат 3`);

	console.log(`Переменная b:${b} \nПояснение: Во время выполнения кода функции инкриметировалась дважды поэтому результат 3`);
	console.log(`\n`);
}

/**
 * Функция выполнение второй части ДЗ_2 
 * @returns Ничего
 */
function Chapter_2() {

	console.log("Chapter_2");
	console.log(`\n`);

	let a = 2;

	let x = 1 + (a *= 2);
	alert(`Переменная x:   ${x} \n\nНаивысшим приоритетом является действие выполняемое в скобках, т.к приваивание имеет один из самых низких приоритетов отсутствие скобок изменит резултат вычисления. В скобках 2 увеличивается вдвое, после чего суммируется 1`);

	console.log(`Переменная b:${x} \nПояснение: Наивысшим приоритетом является действие выполняемое в скобках, т.к приваивание имеет один из самых низких приоритетов отсутствие скобок изменит резултат вычисления. В скобках 2 увеличивается вдвое, после чего суммируется 1`);
}

/**
 * Функция выполнение третей части ДЗ_2 
 * @returns Ничего
 */
function Chapter_3() {

	console.log("Chapter_3");
	console.log(`\n`);

	/**
	  *Функция определения случайного числа в диапозоне min, max. 
	  * @param {Number} min минимальный диапазон случайных чисел 
	  * @param {Number} max максимальный диапазон случайных чисел
	  */
	const RandomNum = (min, max) => {
		return Math.floor(Math.random() * (+max - +min + 1)) + +min;
	}

	let a = '';
	let b = '';

	let range_info_str = '';
	let info_result;

	var min_num = '';
	var max_num = '';

	var Chose = confirm("Ввести два произвольных числа?");

	if (Chose) {
		min_num = prompt('Ввести минимальное допустимое значение');
		max_num = prompt('Вввести максимально допустимое значение');

		a = RandomNum(min_num, max_num);
		b = RandomNum(min_num, max_num);

		range_info_str = `\n\nДиапазон измерения от: ${min_num} до: ${max_num}`;
	}
	else {
		a = Number(prompt('Ввести пременную "а"'));
		b = Number(prompt('Ввести пременную "b"'));
	}

	if ((a >= 0 && b >= 0) || (a >= 0 && b < 0) || (a < 0 && b >= 0)) {
		if (a > b) {
			result = a - b;
			info_result = "(a - b)";
		}
		else {
			result = b - a;
			info_result = "(b - a)";
		}
		alert(`Результат вычитания:   ${result} ${info_result} ${range_info_str} \na : ${a} b : ${b}`);
		console.log(`Результат вычитания:   ${result} ${info_result} ${range_info_str} \na : ${a} b : ${b}`);
	}
	else {
		result = a * b;
		info_result = "(a * b)";
		alert(`Результат произведения:   ${result} ${info_result} ${range_info_str} \na : ${a} b : ${b}`);
		console.log(`Результат произведения:   ${result} ${info_result} ${range_info_str} \na : ${a} b : ${b}`);
	}
}

/**
 * Функция выполнение третей части ДЗ_2 
 * @returns Ничего
 */
function Chapter_4() {

	console.log("Chapter_4");
	console.log(`\n`);

	alert("4 часть домашнего задания")

	let a = '';
	let b = '';

	var reload_func = '';

	let Chose = '';

	/**
	  *Функция определения случайного числа в диапозоне min, max. 
	  * @param {Number} min минимальный диапазон случайных чисел 
	  * @param {Number} max максимальный диапазон случайных чисел
	  */
	const RandomNum = (min, max) => {
		return Math.floor(Math.random() * (+max - +min + 1)) + +min;
	}

	/**
	 * Функция сумирования двух переменных a+b
	 * @returns Возращение переменной result
	 */
	const Addition = () => {
		result = a + b;
	}

	/**
	 * Функция вычитания двух переменных a-b
	 * @returns Возращение переменной result
	 */
	const Subtraction = () => result = a - b;

	/**
	 * Функция умножения двух переменных a*b
	 * @returns Возращение переменной result
	 */
	const Multiplication = () => result = a * b;

	/**
	 * Функция деления двух переменных a/b
	 * @returns Возращение переменной result
	 */
	const Division = () => result = a / b;

	/**
	  * Функция пребора арифметических  функций
	  * @returns выход из функции по подтверждению пользователя в переменной "reload_func"
	  */
	function Math_work() {
		Chose = prompt('Введите арифметическую операцию \nВарианты ввода: \n- Сложение \n- Вычитание \n- Умножение \n- Деление');
		Chose = Chose.toLowerCase();

		switch (Chose) {
			case 'сложение':
				alert(`Результат сложения:   ${Addition()} \n${a} + ${b} = ${Addition()}`);
				console.log(`Результат сложения:   ${Addition()} \n${a} + ${b} = ${Addition()}`);
				break;

			case 'вычитание':
				alert(`Результат вычитания:   ${Subtraction()} \n${a} - ${b} = ${Subtraction()}`);
				console.log(`Результат вычитания:   ${Subtraction()} \n${a} - ${b} = ${Subtraction()}`);
				break;

			case 'умножение':
				alert(`Результат умножения:   ${Multiplication()} \n${a} * ${b} = ${Multiplication()}`);
				console.log(`Результат умножения:   ${Multiplication()} \n${a} * ${b} = ${Multiplication()}`);
				break;

			case 'деление':
				alert(`Результат умножения:   ${Division()} \n${a} / ${b} = ${Division()}`);
				console.log(`Результат умножения:   ${Division()} \n${a} / ${b} = ${Division()}`);
				break;
		}

		reload_func = confirm('Вы готовы перейти к следуещему разделу?');

		if (reload_func) {
			return
		}
		else {
			Math_work()
		}
	}

	Chose = confirm("Ввести два произвольных числа?");

	if (Chose) {
		a = RandomNum(-100, 100);
		b = RandomNum(-10, 10);
	}
	else {
		a = Number(prompt('Ввести пременную "а"'));
		b = Number(prompt('Ввести пременную "b"'));
	}

	Math_work();
}

/**
 * Функция выполнение третей части ДЗ_2 
 * @returns Ничего
 */
function Chapter_5() {

	console.log("Chapter_5");
	console.log(`\n`);

	alert("5 часть домашнего задания")

	let a = '';
	let b = '';

	var reload_func = '';
	var result_math = '';

	let action = '';
	let sign = '';
	let Chose = '';

	/**
	  *Функция определения случайного числа в диапозоне min, max. 
	  * @param {Number} min минимальный диапазон случайных чисел 
	  * @param {Number} max максимальный диапазон случайных чисел
	  */
	const RandomNum = (min, max) => {
		return Math.floor(Math.random() * (+max - +min + 1)) + +min;
	}

	/**
	 * Функция арифметических действий
	 * @param {Number} arg1 Любое численное значение
	 * @param {Number} arg2 Любое численное значение
	 * @param {String} operation  Ввести один из вариантов: сложение, вычитание, умножение, деление.
	 * @returns 
	 */
	function mathOperation(arg1, arg2, operation) {
		switch (operation) {
			case 'сложение':
				sign = '+';
				action = 'сложения'
				return result = (arg1 + arg2);


			case 'вычитание':
				sign = '-';
				action = 'вычитания'
				return result = arg1 - arg2;


			case 'умножение':
				sign = '*';
				action = 'умножения'
				return result = arg1 * arg2;


			case 'деление':
				sign = '/';
				action = 'деления'
				return result = arg1 / arg2;
		}
	}

	/**
	  * Функция (основная) пребора арифметических  функций
	  * @returns выход из функции по подтверждению пользователя в переменной "reload_func"
	  */
	function Math_work() {
		Chose = prompt('Введите арифметическую операцию \nВарианты ввода: \n- Сложение \n- Вычитание \n- Умножение \n- Деление');
		Chose = Chose.toLowerCase();

		result_math = mathOperation(a, b, Chose);

		alert(`Результат ${action}:   ${result_math} \n${a} ${sign} ${b} = ${result_math}`);
		console.log(`Результат ${action}:   ${result_math} \n${a} ${sign} ${b} = ${result_math}`);

		reload_func = confirm('Вы готовы перейти к следуещему разделу?');

		if (reload_func) {
			return
		}
		else {
			Math_work()
		}
	}

	Chose = confirm("Ввести два произвольных числа?");

	if (Chose) {
		a = RandomNum(-100, 100);
		b = RandomNum(-10, 10);
	}
	else {
		a = Number(prompt('Ввести пременную "а"'));
		b = Number(prompt('Ввести пременную "b"'));
	}

	Math_work();
}

/**
 * Функция выполнение третей части ДЗ_2 
 * @returns Ничего
 */
function Chapter_6() {

	console.log("Chapter_6");
	console.log(`\n`);

	var Cash = '';
	var Cashlength = '';
	var Cash_last_number = '';

	var Chose = '';
	var Error = '';

	/**
	 * Функция вывода неверного ввода в строку зачисления финансов
	 * @returns true, false ошибки ввода данных
	 */
	function Error_message() {

		let ErrorFlag = '';

		if (isNaN(Number(Cash)) || Number(Cash) == undefined) {
			Chose = confirm('Введите в поле ввода числовое значение \nПовторить попытку ввода')
			ErrorFlag = 1;
		}
		else if ((!Number(Cash)) || Number(Cash) <= 0) {
			Chose = confirm('Некорректно вводимое значение, отрицательное или нулевое значение \nПовторить попытку ввода?')
			ErrorFlag = 1;
		}
		else {
			ErrorFlag = 0;
		}

		if (Chose) {
			Input_cash();
		}
		else if (ErrorFlag) {
			return ErrorFlag;
		}
	}


	/**
	 * Функция ввода вывода денежных средств
	 */
	function Input_cash() {

		Cash = String(prompt('Введите сумму для пополнения счета', '100'));

		Error = Error_message();

		//При отказе ввода после возникновения ошибки выйти из функции
		if (Error) {
			return;
		}

		Cashlength = Cash.length;
		Cash_last_number = Cash.charAt(Cashlength - 1);

		if (Cash_last_number == 1) {
			Chose = confirm(`Платеж на сумму ${Cash} рубль успешно зачислен.\nПовторить ввод денежных средств?`)
			console.log(`Платеж на сумму ${Cash} рубль успешно зачислен`)
		} else if (Cash_last_number == 2 ||
			Cash_last_number == 3 ||
			Cash_last_number == 4) {
			Chose = confirm(`Платеж на сумму ${Cash} рубля успешно зачислен.\nПовторить ввод денежных средств?`)
			console.log(`Платеж на сумму ${Cash} рубля успешно зачислен`)
		}
		else if (Cash_last_number == 0 ||
			Cash_last_number == 5 ||
			Cash_last_number == 6 ||
			Cash_last_number == 7 ||
			Cash_last_number == 8 ||
			Cash_last_number == 9) {
			Chose = confirm(`Платеж на сумму ${Cash} рублей успешно зачислен.\nПовторить ввод денежных средств?`)
			console.log(`Платеж на сумму ${Cash} рублей успешно зачислен`)
		}
	}

	Input_cash();

	if (Chose) {
		Input_cash();
	}
	else {
		return;
	}
}

Chapter_1();
Chapter_2();
Chapter_3();
Chapter_4();
Chapter_5();
Chapter_6();