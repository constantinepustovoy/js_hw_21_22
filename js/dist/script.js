"use strict";
//data23

$(function () {
	var questions = [{
		question_text: 'Что будет в консоле при console.log((\'5\'*5)+"5"+(+5));?',
		ansvers: ['NaN55', '2555', '35'],
		true_ansver: [false, true, false],
		number: 0
	}, {
		question_text: 'Что будет в консоле при var i=\'8\'; console.log((i++)++);?',
		ansvers: ['Uncaught ReferenceError: Invalid left-hand side expression in postfix operation', 'Uncaught ReferenceError: Invalid type operation', '10'],
		true_ansver: [true, false, false],
		number: 1
	}, {
		question_text: 'Что будет в консоле при var i=[{}]; console.log(i++);?',
		ansvers: ['Uncaught ReferenceError: Undefined operator ++ ', 'NaN', '[Object]'],
		true_ansver: [false, true, false],
		number: 2
	}, {
		question_text: 'Какие варианты правильно объявляют переменную для f, возвращающей сумму двух аргументов ?',
		ansvers: ['var f = function(a,b) { return a+b }', 'var f = new Function(\'a,b\', \'return a+b\')', 'var f = new Function(\'a\', \'b\', \'return a+b\')', 'Никакие.'],
		true_ansver: [true, true, true, false],
		number: 3
	}, {
		question_text: 'В каких браузерах будет работать этот код?\nelement.style.setExpression("width", "100px")',
		ansvers: [' Internet Explorer 5.0+', ' Internet Explorer 6.0+', 'Opera', ' Firefox', 'Safari'],
		true_ansver: [false, false, true, true, true],
		number: 4
	}];

	var json_questions = JSON.stringify(questions);
	localStorage.setItem('local_storage_questions', json_questions);
	var store_questions = localStorage.getItem('local_storage_questions');
	store_questions = JSON.parse(store_questions); //+ object
	var page_template = $('#0').html(); //+ template
	var tmpl = _.template(page_template);
	var result = tmpl({ list: store_questions });
	$('body').append(result);

	function show_answer() {
		var test_result = arguments.length <= 0 || arguments[0] === undefined ? [false] : arguments[0];

		var you_res = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = test_result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var i = _step.value;

				if (i) ++you_res;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var modal_window_template = $("#modal_window").html(); //template
		modal_window_template = _.template(modal_window_template);
		var new_modal = modal_window_template({ test_result: test_result, you_res: you_res });
		$('body').append(new_modal);
		$(".overlay").css({ "visibility": "visible" });
		$("#closeModal").on("click", function () {
			$(".overlay").detach();
		});
	}

	function check(e) {
		e.preventDefault();
		var test_result = [];

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var i = _step2.value;

				var is_correct = false;
				var correct_counter = 0;
				var jnumber = 0;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = i.true_ansver[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var j = _step3.value;

						if (j === document.getElementsByName(i.number + 'name')[jnumber].checked) {

							correct_counter++;
						}
						document.getElementsByName(i.number + 'name')[jnumber].checked = false;
						jnumber++;
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				if (correct_counter === i.true_ansver.length) is_correct = true;

				test_result.push(is_correct);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		show_answer(test_result);
	}

	var Button = document.getElementsByClassName("Button");
	Button[0].addEventListener("click", check);
});
//# sourceMappingURL=script.js.map
