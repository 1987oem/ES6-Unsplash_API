"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var api = "https://api.unsplash.com/photos/";
// var appID = "0b56b9d6f4b259cb29acf7337444b9a3dd9f097364d713559089c2dfcd41d886";
// var query = api + "?client_id=" + appID;

var api = "https://unsplash.it/list";
var src = "https://unsplash.it/300/300?image=";
var container = document.getElementById('authors');

function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}

/*///////////////
 Inheritance (-nasledovanie) creating)))
 */ //////////////

// class App {
// 	constructor(author, id){
// 		this.done = false;
// 		this._author = author;
// 		this.id = id;
// 		App.count += 1;
// 		// console.log(`create your tasks`);
// 	}
// 	get author() {
// 		return this._author;
// 	}
// 	set author(value) {
// 		this._author = value;
// 	}
// 	static getDefaultAuthor(){
// 		return 'James Bond';
// 	}
//
// 	complete() {
// 		this.done = true;
// 		console.log(`task "${this.author}" "${this.id}" complete`);
// 	}
// }
// App.count = 0;
//
// class SubApp extends App {
// 	constructor(author, id) {
// 		super(author, id);
// 		this.id = id;
// 		// console.log(`create your subtasks`);
// 	}
// 	complete() {
// 		super.complete();
// 		console.log(`sub-task "${this.author}" "${this.id}" complete`);
// 	}
// }
// let app = new App('James Roof', '87');
// let subapp = new SubApp('Nichel Diaz', '56');
//
// console.log(SubApp.getDefaultAuthor()); console.log(SubApp.count);
// app.complete(); subapp.complete();
// console.log(app); console.log(subapp);
// // console.log(subapp instanceof SubApp); console.log(subapp instanceof App);

/*///////////////
 Inheritance (-nasledovanie) creating done)))
 */ //////////////


/*///////////////
Class creating)))
 */ //////////////
// class App {
// 	constructor(id = '', author = App.getDefaultAuthor()){
// 		this.author = author;
// 		this.id = id;
// 		this.width = 5000;
// 		this._done = false;
// 		App.count += this.width;
// 		// console.log(`create your cool App here`);
// 	}
//
// 	get done(){
// 		return this._done === true? 'getDone' : 'doesntDone';
// 	}
// 	set done(value) {
// 		if (value !== undefined && typeof value == 'boolean') {
// 			this._done = value;
// 		} else {
// 			console.error('Error! Set value on "true" or "false"');
// 		}
// 	}
//
// 	complete(){
// 		this.done = true;
// 		console.log(`task "${this.author}" complete`);
// 	}
// 	static getDefaultAuthor(){
// 		return 'James Bond';
// 	}
//
// }
// App.count = 0;
// let app = new App(680, 'Alejandro Escamilla'); console.log(typeof App); console.log(typeof app); console.log(app instanceof App);
// let app2 = new App(780, 'Ujin Escamilla'); let app3 = new App(777); app2.complete();
// console.log(app); console.log(app2); console.log(app3); console.log(App.count);

// let app = new App(680, 'Alejandro Escamilla'); console.log(app.done, app._done); app.complete(); console.log(app.done, app._done);
/*///////////////
 Class creating done)))
 */ //////////////


// class Dataservice {
// 	constructor(url) {
//
// 	}
//
// 	async getUser() {
// 		try {
// 				let response = await fetch(`https://unsplash.it/list`);
// 				let data = await response.json();
// 				return data;
// 		} catch (error) {
// 				throw new Error('server false')
// 		}
// 	}
// }
//
// (async () => {
// 	let dataService = new Dataservice();
//
// 	try {
// 		let user = await dataService.getUser();
// 		console.log(user)
//
// 	} catch (error) {
// 		console.error('error')
// 	}
// })();


var Api = function () {
	function Api() {
		_classCallCheck(this, Api);

		this.user = {};
		this.friends = [this.user, this.user, this.user];
		this.photo = 'not a real photo';
	}

	_createClass(Api, [{
		key: "getUser",
		value: async function getUser() {
			var response = await fetch(api);
			var data = await response.json();
			return data;
			// console.log(data);
			// const user = await data.map(function(user) {
			// 	return user;
			// });
			return Promise.all(data);
		}
	}, {
		key: "getImage",
		value: async function getImage() {
			var response = await fetch(api);
			var data = await response.json();
			var output = "<h1>Hello</h1>";
			var authors = await data.forEach(function (author) {
				var photoData = {
					imgId: author.id,
					imgWidth: author.width,
					imgHeight: author.height,
					imgName: author.author
				};
				console.log(photoData);
				output += " <img src=\"https://unsplash.it/300/300?image=" + author.id + "\" alt=\"" + author.author + "\" id=\"" + author.id + "\"><p>" + author.author + "</p>";
				return authors;
			});
			container.innerHTML = output;
		}
	}, {
		key: "getFriends",
		value: async function getFriends(userId) {
			var response = await fetch(api);
			var data = await response.json();
			var friends = data.filter(function (friends) {
				return console.log(friends);
			});
			return friends;
			// console.log(friend);
		}
	}, {
		key: "getPhoto",
		value: function getPhoto(userId) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					return resolve(_this.photo);
				}, 200);
			});
		}
	}, {
		key: "throwError",
		value: function throwError() {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					return reject(new Error('Intentional Error'));
				}, 200);
			});
		}
	}]);

	return Api;
}();

async function asyncAwaitIsYourNewBestFriend() {
	var api = new Api();
	var user = await api.getUser();
	var friends = await api.getFriends(user.id);
	var photo = await api.getImage(user.id);
	console.log('asyncAwaitIsYourNewBestFriend', { user: user, friends: friends, photo: photo });
}
asyncAwaitIsYourNewBestFriend();
//
// async function asyncAwaitLoops () {
// 	const api = new Api()
// 	const user = await api.getUser()
// 	const friends = await api.getFriends(user.id)
//
// 	for (let friend of friends) {
// 		let moreFriends = await api.getFriends(friend.id)
// 		console.log('asyncAwaitLoops', moreFriends)
// 	}
// }
// asyncAwaitLoops();

// async function asyncAwaitLoopsParallel () {
// 	const api = new Api()
// 	const user = await api.getUser()
// 	const friends = await api.getFriends(user.id)
// 	const friendPromises = friends.map(friend => api.getFriends(friend.id))
// 	const moreFriends = await Promise.all(friendPromises)
// 	console.log('asyncAwaitLoopsParallel', moreFriends)
// }
// asyncAwaitLoopsParallel();
//
//
// async function getUserInfo () {
// 	const api = new Api()
// 	const user = await api.getUser()
// 	const friends = await api.getFriends(user.id)
// 	const photo = await api.getPhoto(user.id)
// 	return { user, friends, photo }
// }
// getUserInfo();
//
// function promiseUserInfo () {
// 	getUserInfo().then(({ user, friends, photo }) => {
// 		console.log('promiseUserInfo', { user, friends, photo })
// 	})
// }
// promiseUserInfo();
//
// async function awaitUserInfo () {
// 	const { user, friends, photo } = await getUserInfo()
// 	console.log('awaitUserInfo', { user, friends, photo })
// }
// awaitUserInfo();
//
// async function getLotsOfUserDataFaster () {
// 	try {
// 		const userPromises = Array(1).fill(getAPI())
// 		const users = await Promise.all(userPromises)
// 		console.log('getLotsOfUserDataFaster', users)
// 	} catch (err) {
// 		console.error(err)
// 	}
// }
// getLotsOfUserDataFaster();


/*///////////////
 Object creating)))
 */ //////////////

// let author = "Alejandro Escamilla";
// let author_url = "https://unsplash.com/@alejandroescamilla";
// let filename = "0000_yC-Yzbqy7PY.jpeg";
// let format = "jpeg";
// let height = 3744;
// let id = 780;
// let post_url = "https://unsplash.com/photos/yC-Yzbqy7PY";
// let width = 5616;
//
//
// const photoData = {
// 	author,
// 	author_url,
// 	filename,
// 	format,
// 	height,
// 	id,
// 	post_url,
// 	width,
// 	data: {
// 		photos: [],
// 		totalPhotos: 0,
// 		perPage: 20,
// 		currentPage: 1
// 	},
// 	get newId(){
// 		return this.author + this.id;
// 	},
// 	set newId(value) {
// 		this.id = value;
// 	},
// 	getPhoto() {
// 		fetch(api)
// 			.then(r => r.json())
// 			.then(data =>  {
// 				const authors = data; //data.splice(1, 5);
// 				return authors.filter(function(author) {
// 					// console.log(authors);
//
// 					const photoData = {
// 						id: author.id,
// 						imgWidth: author.width,
// 						imgHeight: author.height,
// 						author: author.author
// 					};
//
// 					// console.log("x", photoData);
//
// 					let div = createNode('div'),
// 						img = createNode('img'),
// 						span = createNode('span'),
// 						a = createNode('a');
//
// 					img.src = src + photoData.id;
//
// 					span.innerHTML = author.author;
// 					a.innerHTML= author.author;
// 					a.href= author.author_url;
// 					append(container, img);
// 				});
// 			})
// 			.catch(function() {
// 				console.log("err");
// 			})
// 	},
// 	methods: {
// 		getImg() {
// 			let img = createNode('img');
// 			img.src = "https://unsplash.it/300/300?random=" + photoData.id;
// 			append(container, img);
// 			console.log(img);
// 		},
// 		fetchPhotos(page) {
// 			var options = {
// 				params: {
// 					client_id: appId,
// 					page: page,
// 					per_page: this.perPage
// 				}
// 			}
// 		}
// 	}
// };

/*/////////////
 SET & GET
 */ ///////////
// photoData.newId = 435;
// photoData.newId;

// console.log(photoData);
// photoData.methods.getImg();
// photoData.getPhoto();

// let imgId = 'id';
// photoData = {
// 	[imgId]: 567
// };
// console.log(photoData[imgId]);
//
// function createObj(name, value) {
// 	return {
// 		[name]: value,
// 		["_" + name]: value,
// 		[name.toUpperCase()]: value,
// 		['get' + name]() {
// 			return this[name];
// 		}
// 	}
// }
// console.log(createObj(imgId, 20));

/*///////////////
 Object creating Done)))
 */ //////////////


//
// async function getAPI () {
// 	const response = await fetch(api);
// 	const data = await response.json();
// 	const promises = data.map(function(author) {
// 		return author;
// 	});
// 	return Promise.all(promises);
// }
//
// let result = getAPI();
// console.log('result', typeof result);
//
//
// async function getLotsOfUser () {
// 	try {
// 		const userPromises = new Array(1).fill(result);
// 		const users = await Promise.all(userPromises);
// 		console.log('getLotsOfUser', users);
// 	} catch (err) {
// 		console.error(err)
// 	}
// }
// const users = getLotsOfUser();
// users
// console.log('users', typeof users);


// let names = authors.map((x) => x.name);
// console.log(names);


// const	app = {
// 	getPhoto: () => {
// 		fetch(api)
// 			.then(r => r.json())
// 			.then(data =>  {
// 				const authors = data; //data.splice(1, 5);
// 				authors.forEach(function(author) {
// 					// console.log(author);
//
// 					const photoData = {
// 						imgId: author.id,
// 						imgWidth: author.width,
// 						imgHeight: author.height,
// 						imgName: author.author
// 					};
//
// 					// console.log("x", photoData);
//
// 					let div = createNode('div'),
// 						img = createNode('img'),
// 						span = createNode('span'),
// 						a = createNode('a');
//
// 					img.src = src + photoData.imgId;
//
// 					span.innerHTML = author.author;
// 					a.innerHTML= author.author;
// 					a.href= author.author_url;
// 					append(container, img);
// 					append(container, span);
// 				});
// 			})
// 			.catch(function() {
// 				console.log("err");
// 			})
// 	}
// };
//
// const getPhoto = new app.getPhoto();
// getPhoto
// console.log(getPhoto);


//
// const app = {
// 	async getImage () {
// 		const response = await fetch(api);
// 		const data = await response.json();
// 		let output = `<h1>Hello</h1>`;
// 		const authors = await data.forEach(function(author) {
// 			const photoData = {
// 				imgId: author.id,
// 				imgWidth: author.width,
// 				imgHeight: author.height,
// 				imgName: author.author
// 			};
// 			console.log(photoData);
// 			output += ` <img src="https://unsplash.it/300/300?image=${author.id}" alt="${author.author}" id="${author.id}"><p>${author.author}</p>`;
// 			return authors;
// 		});
// 		container.innerHTML = output;
// 	}
// };
//
// console.log(app.getImage());