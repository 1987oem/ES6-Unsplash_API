'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createElement(tag, props) {
	var element = document.createElement(tag);

	Object.keys(props).forEach(function (key) {
		if (key.startsWith('data-')) {
			element.setAttribute(key, props[key]);
		} else {
			element[key] = props[key];
		}
	});

	for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		children[_key - 2] = arguments[_key];
	}

	children.forEach(function (child) {
		if (typeof child === 'string') {
			child = document.createTextNode(child);
		}

		element.appendChild(child);
	});

	return element;
}

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this.events = {};
	}

	_createClass(EventEmitter, [{
		key: 'on',
		value: function on(type, listener) {
			this.events[type] = this.events[type] || [];
			this.events[type].push(listener);
		}
	}, {
		key: 'emit',
		value: function emit(type, arg) {
			if (this.events[type]) {
				this.events[type].forEach(function (listener) {
					return listener(arg);
				});
			}
		}
	}]);

	return EventEmitter;
}();

function save(data) {
	var string = JSON.stringify(data);

	localStorage.setItem('todos', string);
}

function load() {
	var string = localStorage.getItem('todos');
	var data = JSON.parse(string);

	return data;
}

exports.createElement = createElement;
exports.EventEmitter = EventEmitter;
exports.save = save;
exports.load = load;

// import {EventEmitter} from 'helpers.js';
//
// class EventEmitter {
// 	constructor () {
// 		this.events = {
// 			'add': [callback, callback, callback],
// 			'edit': [cb, cb, cb],
// 		};
// 	}
// 	on (type, callback){
// 		this.events[type] = this.events[type] || [];
// 		this.events[type].push(callback);
// 	}
// 	emit (type, arg){
// 		if (this.event[type]) {
// 			this.events[type].forEach(callback => callback(arg));
// 		}
// 	}
// }
// export {EventEmitter};