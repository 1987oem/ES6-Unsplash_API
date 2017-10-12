// var query = "https://unsplash.it/list";
//
// function createNode(element) {
// 	return document.createElement(element);
// }
//
// function append(parent, el) {
// 	return parent.appendChild(el);
// }
//
// const ul = document.getElementById('authors');
// // var query = "https://unsplash.it/list";
//
// fetch(query)
// 	.then((resp) => resp.json())
// 	.then(function(res) {
// 		let authors = res;
// 		console.log(authors);
//
// 		authors.map(function(authors) {
// 			// var width = [];
// 			var name = [];
// 			// width[authors.id] = authors.width;
// 			name[authors.id] = authors.author;
// 			// console.log(name);
// 			// return width;
// 			return name;
// 		});
//
//
// 		return authors.map(function(author) {
// 			// console.log(author.author);
// 			let li = createNode('li'),
// 				img = createNode('img'),
// 				span = createNode('span'),
// 				a = createNode('a');
//
//
// 			img.src = "https://unsplash.it/300/300?image=" + author.id;
// 			span.innerHTML = author.author;
// 			// a.innerHTML= 'Link';
// 			// a.href= author.links.html;
//
//
// 			append(li, a);
// 			append(li, span);
// 			append(li, img);
// 			append(ul, li);
// 		})
// 	})
//
// 	.catch(function() {
// 		console.log("err");
// 	});
//
//
// //////////////////////////
// /////////////////////////
// // ORIGIN__VARIANT
// // var api = "https://api.unsplash.com/photos/random";
// // var appID = "9fb4a9f580f94957629fcce6ac996018dd399d23fda6aa983399b6dde68b4237";
// // var query = api +"?client_id=" + appID";
// // var query = api +"?client_id=" + appID +"&count=20";
// //
// // var photo = document.querySelector(".photo");
// //
// // var app = {
// // 	getPhoto: () => {
// // 		fetch(query)
// // 			.then(response => response.json())
// // 			.then(data =>  {
// // 				console.log("data", data);
// // 				console.log("photo", data.urls.small);
// // 				photo.src = data.urls.small;
// // 				console.log("photo", photo)
// // 				photo.prependTo('body');
// // 			})
// // 			.catch(function() {
// // 				console.log("No result");
// // 			});
// // 	}
// // };
// //////////////////////////
// /////////////////////////

// //////////////////////////
// /////////////////////////
// // ORIGIN__VARIANT
// async function getAPI () {
// 	const response = await fetch(api);
// 	const data = await response.json();
// 	const promises = data.map(function(...user) {
// 		console.log(user);
// 		return user;
// 		promises
// 	});
//
// 	return Promise.all(promises);
// }
// const result = getAPI();
// result;
// console.log(result);
// //////////////////////////
// /////////////////////////





//
// // https://unsplash.com/@lukechesser?photo=yOkg_V0t_hw
// const url = "https://unsplash.it/list";
// const src = "https://unsplash.it/300/300?image=";
//
// var app = {
// 	getPhoto: () => {
// 		fetch(url)
// 			.then(response => response.json())
// 			.then(data =>  {
// 				console.log("data", data);
// 				console.log("photo", data.id);
// 				photo.src = "https://unsplash.it/300/300?image=" + data.id;
// 			})
// 			.catch(function() {
// 				console.log("No result");
// 			});
// 	}
// };
// app.getPhoto();
//
// class Api {
// 	constructor (view) {
// 		this.user = { id: 1, name: 'Nick Yamomoto', width: 3600 };
// 		this.photo = "http://placehold.it/450x250?text=Image";
// 		this.friends = [1004];
// 		this.currentPage = 1;
// 		this.perPhotos = 20;
// 	}
//
// 	getUser () {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve(this.user), 200)
// 		})
// 	}
//
// 	getFriends (userId) {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve(this.friends.slice()), 200)
// 		})
// 	}
//
// 	getPhoto (userId) {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve(this.photo), 200)
// 		})
// 	}
//
// 	throwError () {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => reject(new Error('Intentional Error')), 200)
// 		})
// 	}
// }
//
//
//
// // Попытка 2 - Цепочка обещаний
// function promiseChain () {
// 	const api = new Api();
// 	let user, friends;
// 	api.getUser()
// 		.then((returnedUser) => {
// 			user = returnedUser;
// 			return api.getFriends(user.id)
// 		})
// 		.then((returnedFriends) => {
// 			friends = returnedFriends;
// 			return api.getPhoto(user.id)
// 		})
// 		.then((photo) => {
// 			console.log('promiseChain', { user, friends, photo })
// 		})
// }
// promiseChain();
//
//
// // Попытка 3 - Async / Await
// async function asyncAwaitIsYourNewBestFriend () {
// 	const api = new Api();
// 	const user = await api.getUser();
// 	const friends = await api.getFriends(user.id);
// 	const photo = await api.getPhoto(user.id);
// 	console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
// }
// asyncAwaitIsYourNewBestFriend();
//
//
// class View {
//
// 	constructor (model) {
//
// 		this.div = document.getElementById('authors');
//
// 		this.li = document.createElement('li');
// 		this.img = document.createElement('img');
// 		this.span = document.createElement('span');
// 		this.a = document.createElement('a');
//
// 		this.span.innerHTML = author.author;
// 		this.a.innerHTML= author.author;
// 		this.a.href= author.author_url;
//
// 		this.li.appendChild('a');
// 		this.li.appendChild('span');
// 		this.li.appendChild('img');
// 		this.div.appendChild('li');
// 	}
//
// 	buildFilter(page) {
// 		const filterLarg = createElement('button', {className: 'filtr__lrg'}, 'BigPict');
// 		const filterMid = createElement('button', {className: 'filtr__md'}, 'MidPict');
// 		const filterSma = createElement('button', {className: 'filtr__sm'}, 'SmaPict');
// 		const filterAuth = createElement('button', {className: 'filtr__auth'}, 'AuthPict');
// 		return this.addEventlistener(img);
// 	}
//
// 	addEventlistener(img) {
// 		const filterAuth = document.querySelector('.filtr__auth');
// 		filterAuth.addEventListener('change', this.handleToogle.bind(this));
// 		return img;
// 	}
//
// }
//
// class Controller {
// 	constructor(view,api) {
// 		this.view = view;
// 		this.api = api;
// 		console.log("Test")
// 	}
// 	renderMethod() {
// 		this.view.constructor();
// 		this.api.exampleMethod();
// 	}
// }
//
// const myView = new View(model);
// const myApi = new Api();
//
// const myController = new Controller(myView,myApi);
// myController.renderMethod();
//
//
//
//
// LOOPS
// Попытка 1 - Рекурсивная последовательность обещаний
// function promiseLoops () {
// 	const api = new Api();
// 	api.getUser()
// 		.then((user) => {
// 			return api.getFriends(user.id)
// 		})
// 		.then((returnedFriends) => {
// 			const getFriendsOfFriends = (friends) => {
// 				if (friends.length > 0) {
// 					let friend = friends.pop();
// 					return api.getFriends(friend.id)
// 						.then((moreFriends) => {
// 							console.log('promiseLoops', moreFriends);
// 							return getFriendsOfFriends(friends)
// 						})
// 				}
// 			};
// 			return getFriendsOfFriends(returnedFriends)
// 		})
// }
// promiseLoops();
//
// // Попытка 2 - Async / Await For-Loop
// async function asyncAwaitLoops () {
// 	const api = new Api();
// 	const user = await api.getUser();
// 	const friends = await api.getFriends(user.id);
//
// 	for (let friend of friends) {
// 		let moreFriends = await api.getFriends(friend.id);
// 		console.log('asyncAwaitLoops', moreFriends)
// 	}
// }
// // asyncAwaitLoops();
//
// // ПАРАЛЛЕЛЬНЫЕ ОПЕРАЦИИ
// async function asyncAwaitLoopsParallel () {
// 	const api = new Api();
// 	const user = await api.getUser();
// 	const friends = await api.getFriends(user.id);
// 	const friendPromises = friends.map(friend => api.getFriends(friend.id));
// 	const moreFriends = await Promise.all(friendPromises);
// 	console.log('asyncAwaitLoopsParallel', moreFriends)
// }
// // asyncAwaitLoopsParallel();
//
// // ОБРАБОТКА ОШИБОК
// // Попытка 3 - Обычный блок Try / Catch
// async function asyncAwaitTryCatch () {
// 	try {
// 		const api = new Api();
// 		const user = await api.getUser();
// 		const friends = await api.getFriends(user.id);
//
// 		await api.throwError();
// 		console.log('Error was not thrown');
//
// 		const photo = await api.getPhoto(user.id);
// 		console.log('async/await', { user, friends, photo })
// 	} catch (err) {
// 		console.error(err)
// 	}
// }
// // asyncAwaitTryCatch();
//
// // СОСТАВ
// // Я упоминал ранее, что любая функция с тегом «async» фактически возвращает обещание.
// // Это позволяет нам легко создавать асинхронные потоки управления.
// // Например, мы можем перенастроить предыдущий пример, чтобы вернуть данные пользователя, а не регистрировать его.
// // Затем мы можем получить данные, вызвав функцию async как обещание.
// async function getUserInfo () {
// 	const api = new Api();
// 	const user = await api.getUser();
// 	const friends = await api.getFriends(user.id);
// 	const photo = await api.getPhoto(user.id);
// 	return { user, friends, photo }
// }
//
// function promiseUserInfo () {
// 	getUserInfo().then(({ user, friends, photo }) => {
// 		console.log('promiseUserInfo', { user, friends, photo })
// 	})
// }
// // promiseUserInfo();
//
// // Еще лучше, мы можем использовать синтаксис async / await в функции приемника, что приводит к совершенно очевидному,
// // 	даже тривиальному блоку асинхронной программирования.
// async function awaitUserInfo () {
// 	const { user, friends, photo } = await getUserInfo();
// 	console.log('awaitUserInfo', { user, friends, photo })
// }
// // awaitUserInfo();
//
// // Что делать, если теперь нам нужно получить все данные для первых 10 пользователей?
// async function getLotsOfUserData () {
// 	const users = [];
// 	while (users.length < 10) {
// 		users.push(await getUserInfo())
// 	}
// 	console.log('getLotsOfUserData', users)
// }
// // getLotsOfUserData();
//
// // Как насчет параллели? И с воздухонепроницаемой обработкой ошибок?
// async function getLotsOfUserDataFaster () {
// 	try {
// 		const userPromises = Array(10).fill(getUserInfo());
// 		const users = await Promise.all(userPromises);
// 		console.log('getLotsOfUserDataFaster', users)
// 	} catch (err) {
// 		console.error(err)
// 	}
// }
// // getLotsOfUserDataFaster();
//
//
//
//
//
//
//
// // 	fetch(api)
// // 		.then((resp) => resp.json())
// // 		.then(function(res) {
// //
// // 			let authors = res.splice(0, 10);
// //
// // 			authors.map(function(authors) {
// // 				var width = [];
// // 				var name = [];
// // 				width[authors.id] = authors.width;
// // 				// console.log(name);
// // 				name[authors.id] = authors.author;
// // 				return name;
// // 			});
// //
// // 			return authors.map(function(author) {
// // 				console.log(author.width);
// // 				let div = createNode('div'),
// // 					img = createNode('img'),
// // 					span = createNode('span'),
// // 					a = createNode('a');
// //
// // 			img.src = "https://unsplash.it/300/300?image=" + author.id;
// // 			span.innerHTML = author.author;
// // 			a.innerHTML= author.author;
// // 			a.href= author.author_url;
// // 			append(div, a);
// // 			append(div, span);
// // 			append(div, img);
// // 			append(container, div);
// // 		})
// // 	})
// //
// // 	.catch(function() {
// // 		console.log("err");
// // 	});




// /**//////////////////////////////////
// // * API Model
// // *///////////////////////////////////

// var imgApp = (function imgApp(simple) {
//
// 	simple.ApiFunc = function SimpleApiFunc(model, req) {
//
// 		fetch(api)
// 			.then(response => response.json())
// 			.then(data => {
// 				 req.map(function () {
// 					return req;
// 				});
// 			})
// 			.catch(function () {
// 				console.log("err");
// 			});
//
// 	};
//
// 		this._model = model;
// 		this._req = req;

// // define getters and setters
// simple.ApiFunc.prototype = {
// 	// get just returns the value
// 	get() {
// 		return this._data;
// 	},
// 	// sets the value and notifies any even listeners
// 	set(data) {
// 		this._data = data;
// 		this.onSet.notify({ data: data });
// 	},
// };
// 	console.log(req);
//
// 	return simple;
// })(imgApp || {});




// /**//////////////////////////////////
// // *// EVENT module
// // *///////////////////////////////////

// const imgApp = (function imgApp(simple) {
//
// 	// sender is the context of the Model or View which originates the event
// 	simple._Event = function SimpleEvent(sender) {
// 		this._sender = sender;
// 		this._listeners = [];
// 	};
//
// 	simple._Event.prototype = {
// 		// add listener closures to the list
// 		attach(listener) {
// 			this._listeners.push(listener);
// 		},
// 		// loop through, calling attached listeners
// 		notify(args) { this._listeners.forEach(
// 			(v, i) => this._listeners[i](this._sender, args)
// 		)
// 		},
// 	};
//
// 	return simple;
// })(imgApp || {});


// /**//////////////////////////////////
// // * MODEL
// // *///////////////////////////////////

// var imgApp = (function imgApp(simple) {
//
// 	simple.Model = function SimpleModel(data) {
//
// 		this.imgData = { id: 1, name: 'Nick Yamomoto', width: 3600 };
// 		this.photo = "http://placehold.it/450x250?text=Image";
// 		this.friends = [1004];
// 		this.firstPage = 1;
// 		this.perPhotos = 20;
//
// 		this._data = data;
// 		this.onSet = new simple._Event(this);
// 	};
//
//
// 	// define getters and setters
// 	simple.Model.prototype = {
// 		// get just returns the value
// 		get(req) {
// 			return this._data;
// 		},
// 		// sets the value and notifies any even listeners
// 		set(data) {
// 			this._data = data;
// 			this.onSet.notify({ data: data });
// 		},
// 	};
//
// 	return simple;
// })(imgApp || {});
//
//
// /**//////////////////////////////////
//  // * VIEW Module (1-way/only show)
//  // *///////////////////////////////////
// let imgApp = (function imgApp(simple) {
//
// 	simple.OneWayView = function simpleOneWayView(model, selector) {
//
// 		this._model = model;
// 		this._selector = selector;
//
// 		// since not a 2-way, don't need to set this.onChanged
//
// 		// attach model listeners
// 		this._model.onSet.attach(
// 			() => this.show()
// 		);
//
// 	};
//
// 	simple.OneWayView.prototype = {
// 		show() {
// 			this._selector.innerHTML = this._model.get();
// 		},
// 	};
//
// 	return simple;
// })(imgApp || {});
//
//
// /**//////////////////////////////////
// // * VIEW Module (2-way/listen & show)
// // *///////////////////////////////////
//
// let imgApp = (function imgApp(simple) {
//
// 	// selector is a DOM element that supports .onChanged and .value
// 	simple.TwoWayView = function simpleTwoWayView(model, selector) {
//
// 		this._model = model;
// 		this._selector = selector;
//
// 		// for 2-way binding
// 		this.onChanged = new simple._Event(this);
//
// 		// attach model listeners
// 		this._model.onSet.attach(
// 			() => this.show()
// 		);
//
// 		// attach change listener for two-way binding
// 		this._selector.addEventListener("change",
// 			e => this.onChanged.notify(e.target.value)
// 		);
//
// 	};
//
// 	simple.TwoWayView.prototype = {
// 		show() {
// 			this._selector.value = this._model.get();
// 		},
// 	};
//
// 	return simple;
// })(imgApp || {});
//
//
// /**//////////////////////////////////
// // * CONTROLLER Module
// // *///////////////////////////////////
//
// let imgApp = (function imgApp(simple) {
//
// 	simple.Controller = function SimpleController(model, view) {
//
// 		this._model = model;
// 		this._view = view;
//
// 		if (this._view.hasOwnProperty('onChanged')) {
// 			this._view.onChanged.attach(
// 				(sender, data) => this.update(data)
// 			);
// 		}
// 	};
//
// 	simple.Controller.prototype = {
// 		update(data) {
// 			this._model.set(data);
// 		},
// 	};
//
// 	return simple;
// })(imgApp || {});


/**//////////////////////////////////
// * EXAMPLE Event's
// *///////////////////////////////////


// let main = function() {
// 	let model = new imgApp.Model(12),
//
// 		aView = new imgApp.TwoWayView(model, document.getElementById('points-a'));
// 		aController = new imgApp.Controller(model, aView);
//
// 		bView = new imgApp.OneWayView(model, document.getElementById('points-b'));
// 		bController = new imgApp.Controller(model, bView);
//
// 	// these are for initial show, if not shown some other way
// 	aView.show();
// 	bView.show();
//
// 	// example of changing the model directly
// 	window.setTimeout(
// 		() => model.set(20),
// 		2000
// 	);
// };

// document.addEventListener('DOMContentLoaded', main, false);

//
//
//
//
//
//
//
//
// fetch('https://unsplash.it/list')
// 	.then(res => res.json())
// 	.then(images => {
// 		const imageList = images;
// 		console.log(imageList);
// 		imageList.forEach((image, i) => {
// 			const imgTag = new Image(150,150);
// 			let apiUrl = 'https://unsplash.it/';
// 			apiUrl += `/150/150?image=${image.id}`;
// 			imgTag.src = apiUrl;
// 			imgTag.style.transition = `${i * .05}s all cubic-bezier(0.645, 0.045, 0.355, 1)`;
// 			imgTag.alt = `Author: ${image.author}`;
// 			container.appendChild(imgTag);
// 		});
// 	});

// CLIMOV ASYNC
/////////////////////////
/////////////////////////

// 	const userPromise = new Promise((resolve, reject) => {
// 		const userRequest = new XMLHttpRequest();
// 		userRequest.open('GET', 'https://unsplash.it/list');
// 		userRequest.addEventListener('readystatechange', () => {
// 			if (userRequest.readyState !== userRequest.DONE) {
// 				return;
// 			}
// 			if (userRequest.status !== 200) {
// 				return reject ('so bad');
// 			}
// 			resolve(JSON.parse(userRequest.responseText));
// 			// setTimeout(() => resolve(this.user), 200)
// 		});
// 		userRequest.send();
// 	});

// userPromise.then(data => console.log(data));



// function xhr(url) {
// 	return new Promise((resolve, reject) => {
// 		const request = new XMLHttpRequest();
// 		request.open('GET', url);
// 		request.addEventListener('readystatechange', () => {
// 			if (request.readyState !== request.DONE) {
// 				return;
// 			}
// 			if (request.status !== 200) {
// 				return reject ('so bad');
// 			}
// 			resolve(JSON.parse(request.responseText));
// 		});
// 		request.send();
// 	});
// }

// function getPostsFirstUser() {
// 	return xhr ("https://unsplash.it/list")
// 		.then(posts => {
// 			console.log(posts);
// 			const div = document.querySelector('.authors');
// 			const header = document.createElement('h1');
// 			header.textContent = 'Posts';
// 			div.appendChild(header);
// 			const ul = document.createElement('ul');
//
// 			posts.forEach(({ id, author_url, author }) => {
// 				const li = document.createElement('li');
// 				li.textContent = author;
// 				ul.appendChild(li);
// 			});
// 			div.appendChild(ul);
// 		});
// }
//
// getPostsFirstUser().then(
// 	() => console.log('all ok'),
// 	() => console.log('all bad'),
// );
/////////////////////////
/////////////////////////
/////////////////////////
// function getPostsFirstUser() {
// 	return fetch("https://unsplash.it/list")
// 		.then((resp) => resp.json())
// 		.then(posts => {
// 			console.log(posts);
// 			const div = document.querySelector('.authors');
// 			const header = document.createElement('h1');
// 			header.textContent = 'Posts';
// 			div.appendChild(header);
// 			const ul = document.createElement('ul');
//
// 			posts.forEach(({ id, author_url, author }) => {
// 				const li = document.createElement('li');
// 				li.textContent = author;
// 				ul.appendChild(li);
// 			});
// 			div.appendChild(ul);
// 		})
// 		.catch(function() {
// 			console.log("err");
// 		});
// }
//
// getPostsFirstUser();

