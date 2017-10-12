import { EventEmitter, createElement } from './helpers';

class View extends EventEmitter {
	constructor() {
		super();

		this.form = document.getElementById('todo-form');
		this.input = document.getElementById('add-input');
		this.list = document.getElementById('todo-list');

		this.form.addEventListener('submit', this.handleAdd.bind(this));
	}

	createListItem(todo) {
		const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : '' });
		const label = createElement('label', { className: 'title' }, todo.title);
		const editInput = createElement('input', { type: 'text', className: 'textfield' });
		const editButton = createElement('button', { className: 'edit' }, 'Изменить');
		const deleteButton = createElement('button', { className: 'remove' }, 'Удалить');
		const item = createElement('li', { className: `todo-item${todo.completed ? ' completed': ''}`, 'data-id': todo.id }, checkbox, label, editInput, editButton, deleteButton);

		return this.addEventListeners(item);
	}

	addEventListeners(item) {
		const checkbox = item.querySelector('.checkbox');
		const editButton = item.querySelector('button.edit');
		const removeButton = item.querySelector('button.remove');

		checkbox.addEventListener('change', this.handleToggle.bind(this));
		editButton.addEventListener('click', this.handleEdit.bind(this));
		removeButton.addEventListener('click', this.handleRemove.bind(this));

		return item;
	}

	findListItem(id) {
		return this.list.querySelector(`[data-id="${id}"]`);
	}

	handleAdd(event) {
		event.preventDefault();

		if (!this.input.value) return alert('Необходимо ввести название задачи.');

		const value = this.input.value;

		this.emit('add', value);
	}

	handleToggle({ target }) {
		const listItem = target.parentNode;
		const id = listItem.getAttribute('data-id');
		const completed = target.checked;

		this.emit('toggle', { id, completed });
	}

	handleEdit({ target }) {
		const listItem = target.parentNode;
		const id = listItem.getAttribute('data-id');
		const label = listItem.querySelector('.title');
		const input = listItem.querySelector('.textfield');
		const editButton = listItem.querySelector('button.edit');
		const title = input.value;
		const isEditing = listItem.classList.contains('editing');

		if (isEditing) {
			this.emit('edit', { id, title });
		} else {
			input.value = label.textContent;
			editButton.textContent = 'Сохранить';
			listItem.classList.add('editing');
		}
	}

	handleRemove({ target }) {
		const listItem = target.parentNode;

		this.emit('remove', listItem.getAttribute('data-id'));
	}

	show(todos) {
		todos.forEach(todo => {
			const listItem = this.createListItem(todo);

			this.list.appendChild(listItem);
		});
	}

	addItem(todo) {
		const listItem = this.createListItem(todo);

		this.input.value = '';
		this.list.appendChild(listItem);
	}

	toggleItem(todo) {
		const listItem = this.findListItem(todo.id);
		const checkbox = listItem.querySelector('.checkbox');

		checkbox.checked = todo.completed;

		if (todo.completed) {
			listItem.classList.add('completed');
		} else {
			listItem.classList.remove('completed');
		}
	}

	editItem(todo) {
		const listItem = this.findListItem(todo.id);
		const label = listItem.querySelector('.title');
		const input = listItem.querySelector('.textfield');
		const editButton = listItem.querySelector('button.edit');

		label.textContent = todo.title;
		editButton.textContent = 'Изменить';
		listItem.classList.remove('editing');
	}

	removeItem(id) {
		const listItem = this.findListItem(id);

		this.list.removeChild(listItem);
	}
}

export default View;

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