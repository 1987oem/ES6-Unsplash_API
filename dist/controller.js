'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
	function Controller(model, view) {
		_classCallCheck(this, Controller);

		this.model = model;
		this.view = view;

		view.on('add', this.addTodo.bind(this));
		view.on('toggle', this.toggleTodo.bind(this));
		view.on('edit', this.editTodo.bind(this));
		view.on('remove', this.removeTodo.bind(this));

		view.show(model.items);
	}

	_createClass(Controller, [{
		key: 'addTodo',
		value: function addTodo(title) {
			var item = this.model.addItem({
				id: Date.now(),
				title: title,
				completed: false
			});

			this.view.addItem(item);
		}
	}, {
		key: 'toggleTodo',
		value: function toggleTodo(_ref) {
			var id = _ref.id,
			    completed = _ref.completed;

			var item = this.model.updateItem(id, { completed: completed });

			this.view.toggleItem(item);
		}
	}, {
		key: 'editTodo',
		value: function editTodo(_ref2) {
			var id = _ref2.id,
			    title = _ref2.title;

			var item = this.model.updateItem(id, { title: title });

			this.view.editItem(item);
		}
	}, {
		key: 'removeTodo',
		value: function removeTodo(id) {
			this.model.removeItem(id);
			this.view.removeItem(id);
		}
	}]);

	return Controller;
}();

exports.default = Controller;

// class Controller {
// 	constructor (model, view) {
//
// 		this.model = model;
// 		this.view = view;
//
// 		view.on('add', this.addTodo.bind(this));
// 	}
//
// 	addTodo(title) {
// 		const todo = this.model.addItem({
// 			id: user.id,
// 			author,
// 			width: user.width,
// 			completed: false
// 		});
//
// 		this.view.addItem(todo);
// 	}
//
//
// }
// export default Controller;