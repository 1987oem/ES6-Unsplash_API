'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = require('./helpers');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_EventEmitter) {
	_inherits(View, _EventEmitter);

	function View() {
		_classCallCheck(this, View);

		var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

		_this.form = document.getElementById('todo-form');
		_this.input = document.getElementById('add-input');
		_this.list = document.getElementById('todo-list');

		_this.form.addEventListener('submit', _this.handleAdd.bind(_this));
		return _this;
	}

	_createClass(View, [{
		key: 'createListItem',
		value: function createListItem(todo) {
			var checkbox = (0, _helpers.createElement)('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : '' });
			var label = (0, _helpers.createElement)('label', { className: 'title' }, todo.title);
			var editInput = (0, _helpers.createElement)('input', { type: 'text', className: 'textfield' });
			var editButton = (0, _helpers.createElement)('button', { className: 'edit' }, 'Изменить');
			var deleteButton = (0, _helpers.createElement)('button', { className: 'remove' }, 'Удалить');
			var item = (0, _helpers.createElement)('li', { className: 'todo-item' + (todo.completed ? ' completed' : ''), 'data-id': todo.id }, checkbox, label, editInput, editButton, deleteButton);

			return this.addEventListeners(item);
		}
	}, {
		key: 'addEventListeners',
		value: function addEventListeners(item) {
			var checkbox = item.querySelector('.checkbox');
			var editButton = item.querySelector('button.edit');
			var removeButton = item.querySelector('button.remove');

			checkbox.addEventListener('change', this.handleToggle.bind(this));
			editButton.addEventListener('click', this.handleEdit.bind(this));
			removeButton.addEventListener('click', this.handleRemove.bind(this));

			return item;
		}
	}, {
		key: 'findListItem',
		value: function findListItem(id) {
			return this.list.querySelector('[data-id="' + id + '"]');
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd(event) {
			event.preventDefault();

			if (!this.input.value) return alert('Необходимо ввести название задачи.');

			var value = this.input.value;

			this.emit('add', value);
		}
	}, {
		key: 'handleToggle',
		value: function handleToggle(_ref) {
			var target = _ref.target;

			var listItem = target.parentNode;
			var id = listItem.getAttribute('data-id');
			var completed = target.checked;

			this.emit('toggle', { id: id, completed: completed });
		}
	}, {
		key: 'handleEdit',
		value: function handleEdit(_ref2) {
			var target = _ref2.target;

			var listItem = target.parentNode;
			var id = listItem.getAttribute('data-id');
			var label = listItem.querySelector('.title');
			var input = listItem.querySelector('.textfield');
			var editButton = listItem.querySelector('button.edit');
			var title = input.value;
			var isEditing = listItem.classList.contains('editing');

			if (isEditing) {
				this.emit('edit', { id: id, title: title });
			} else {
				input.value = label.textContent;
				editButton.textContent = 'Сохранить';
				listItem.classList.add('editing');
			}
		}
	}, {
		key: 'handleRemove',
		value: function handleRemove(_ref3) {
			var target = _ref3.target;

			var listItem = target.parentNode;

			this.emit('remove', listItem.getAttribute('data-id'));
		}
	}, {
		key: 'show',
		value: function show(todos) {
			var _this2 = this;

			todos.forEach(function (todo) {
				var listItem = _this2.createListItem(todo);

				_this2.list.appendChild(listItem);
			});
		}
	}, {
		key: 'addItem',
		value: function addItem(todo) {
			var listItem = this.createListItem(todo);

			this.input.value = '';
			this.list.appendChild(listItem);
		}
	}, {
		key: 'toggleItem',
		value: function toggleItem(todo) {
			var listItem = this.findListItem(todo.id);
			var checkbox = listItem.querySelector('.checkbox');

			checkbox.checked = todo.completed;

			if (todo.completed) {
				listItem.classList.add('completed');
			} else {
				listItem.classList.remove('completed');
			}
		}
	}, {
		key: 'editItem',
		value: function editItem(todo) {
			var listItem = this.findListItem(todo.id);
			var label = listItem.querySelector('.title');
			var input = listItem.querySelector('.textfield');
			var editButton = listItem.querySelector('button.edit');

			label.textContent = todo.title;
			editButton.textContent = 'Изменить';
			listItem.classList.remove('editing');
		}
	}, {
		key: 'removeItem',
		value: function removeItem(id) {
			var listItem = this.findListItem(id);

			this.list.removeChild(listItem);
		}
	}]);

	return View;
}(_helpers.EventEmitter);

exports.default = View;

// class View {
//
// 	constructor () {
// 		this.form = document.getElementByid('form');
// 		this.input = document.getElementByid('input');
// 		this.img = document.getElementByid('img');
// 		this. div = document.getElementById('card');
// 	}
//
// 	buildPage(page) {
// 		const filterLarg = createElement('button', {className: 'filtr__lrg'}, 'BigPict');
// 		const filterMid = createElement('button', {className: 'filtr__md'}, 'MidPict');
// 		const filterSma = createElement('button', {className: 'filtr__sm'}, 'SmaPict');
// 		const filterAuth = createElement('button', {className: 'filtr__auth'}, 'AuthPict');
//
// 		return this.addEventlistener(img);
// 	}
//
// 	handleAdd(event) {
// 		event.preventDefault();
//
// 		if(!this.input.value)return alert ('page filtered');
// 		const value = this.input.value;
//
// 		this.emit('add', value);
// 		/////////////////////////////////(add item to model)
// 	}
//
// 	handleToggle({ target }) {
//
// 		const id = listItem.getAttribute('data-id');
// 		const completed = target.completed;
// 		////////////////////////////////////(update model)
// 	}
//
//
//
// 	addEventlistener(img) {
//
// 		const filterAuth = document.querySelector('.filtr__auth');
// 		filterAuth.addEventListener('change', this.handleToogle.bind(this));
//
// 		return img;
// 	}
//
// 	findListItemId(id) {
// 		return this.list.querySelector(`[data-id=${id}]`);
// 	}
//
// 	 addAutoClass (element, className) {
// 			const elem = this.createElement(element);
// 		  this.className = this.classList.add(className);
// 		}
//
// 		parentElemFirst (parent, el) {
// 			return parent.appendChild(el);
// 		}
//
// 		addItem (todo) {
// 				const listItem = this.createElement(todo);
// 				this.input.value = '';
// 				this.list.appendChild(listItem)
// 		}
//
// 		toggleItem (todo) {
// 			const listItem = this.findListItem(todo.id);
// 			const checkbow = listItem.querySelector('.checkbox');
//
// 			checkbox.checked = todo.completed;
//
// 			if (todo.completed) {
// 				listItem.classList.add('completed');
// 			} else {
// 				listItem.classList.remove('completed');
// 			}
// 		}
//
//
// }