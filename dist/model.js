'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = require('./helpers');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Model = function (_EventEmitter) {
	_inherits(Model, _EventEmitter);

	function Model() {
		var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, Model);

		var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

		_this.items = items;
		return _this;
	}

	_createClass(Model, [{
		key: 'getItem',
		value: function getItem(id) {
			return this.items.find(function (item) {
				return item.id == id;
			});
		}
	}, {
		key: 'addItem',
		value: function addItem(item) {
			this.items.push(item);
			this.emit('change', this.items);
			return item;
		}
	}, {
		key: 'updateItem',
		value: function updateItem(id, data) {
			var item = this.getItem(id);

			Object.keys(data).forEach(function (prop) {
				return item[prop] = data[prop];
			});

			this.emit('change', this.items);

			return item;
		}
	}, {
		key: 'removeItem',
		value: function removeItem(id) {
			var index = this.items.findIndex(function (item) {
				return item.id == id;
			});

			if (index > -1) {
				this.items.splice(index, 1);
				this.emit('change', this.items);
			}
		}
	}]);

	return Model;
}(_helpers.EventEmitter);

exports.default = Model;

// class Model {
// 		constructor(state = []) {
// 			this.state = state;
// 			// {
// 			// 	id: [{}]
// 			// 	title: ""
// 			// 	complited:false
// 			// }
// 		}
//
//
// 		getItem(id) {
// 			return this.state.find(item => item.id == id);
// 		}
//
// 		addItem(item) {
// 			this.state.push(item);
// 			return item;
// 		}
//
//
// 		updateItem(id, data) {
// 			let item = this.getItem(id);
//
// 			Object.keys(data).forEach(prop => item[prop] = data[prop]);
// 		}
//
// 		removeItem (id) {
// 			const index = this.state.findIndex(item => item.id == id);
//
// 			if (index > -1) {
// 				this.state.splice(index, 20);
// 			}
//
// 		}
//
// 	}
//
// 	export default Model;