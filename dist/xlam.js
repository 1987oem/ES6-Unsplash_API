// require("babel-core/register");
// require ("babel-polyfill");
// var api = "https://api.unsplash.com/photos/";
// var appID = "0b56b9d6f4b259cb29acf7337444b9a3dd9f097364d713559089c2dfcd41d886";
// var query = api + "?client_id=" + appID;

const api = "https://unsplash.it/list";
const src = "https://unsplash.it/300/300?random=";
const container = document.getElementById('authors');

function createNode(element) {return document.createElement(element)}
function append (parent, el) {return parent.appendChild(el)}


// class Api {
// 	constructor () {
// 		this.user = { id: 1, name: 'test' };
// 		this.friends = [ this.user, this.user, this.user ];
// 		this.photo = 'not a real photo'
// 	}
//
// 	getUser () {
// 		return new Promise((resolve, reject) => {
// 			fetch(api)
// 				.then((resp) => resp.json())
// 				.then(function (user) {
// 					const user = new Api().user;
// 					return user.map(function() {
// 						return user;
// 				});
// 					});
// 						console.log(user);
// 					setTimeout(() => resolve(this.user), 200)
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
// console.log(promiseChain());
//
// async function asyncAwaitIsYourNewBestFriend () {
// 	const api = new Api()
// 	const user = await api.getUser()
// 	const friends = await api.getFriends(user.id)
// 	const photo = await api.getPhoto(user.id)
// 	console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
// }
// asyncAwaitIsYourNewBestFriend()
// console.log(asyncAwaitIsYourNewBestFriend());







/*///////////////
 Generators creating)))
 *///////////////

// run(function * () {
// 	const uri = "https://unsplash.it/list";
// 	const response = yield fetch(uri);
// 	const post = post.title;
// 	console.log('Title', post);
// });
//
// function run(generator) {
// 	const iterator = generator();
// 	const iteration = iterator.next();
// 	const promise = iterator.value;
// 	promise.then(x => {
// 		const anotherIterator = iterator.next(x);
// 		const anotherPromise = anotherIterator.value;
// 		anotherPromise.then( y = iterator.next(y))
// 	})
// }

/*///////////////
 Generators creating)))
 *///////////////


/*///////////////
 Inheritance (-nasledovanie) creating)))
 *///////////////

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
 *///////////////


/*///////////////
 Class creating)))
 *///////////////
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
 *///////////////


/*///////////////
 Object creating)))
 *///////////////
// let author = "Alejandro Escamilla";
// let author_url = "https://unsplash.com/@alejandroescamilla";
// let filename = "0000_yC-Yzbqy7PY.jpeg";
// let format = "jpeg";
// let height = 3744;
// let id = 680;
// let post_url = "https://unsplash.com/photos/yC-Yzbqy7PY";
// let width = 5616;
//
// let photoData = {
// 	el: '#app',
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
// 	methods: {
// 		getImg() {
// 			let img = createNode('img');
// 			img.src = "https://unsplash.it/300/300?image=" + photoData.id;
// 			append(container, img);
// 			// console.log(img);
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
//
// /*/////////////
// SET & GET
// *////////////
// photoData.newId = 435;
// photoData.newId;
//
// console.log(photoData);
// photoData.methods.getImg();
//
// // let imgId = 'id';
// // // photoData = {
// // // 	[imgId]: 567
// // // };
// // console.log(photoData[imgId]);
// //
// // function createObj(name, value) {
// // 	return {
// // 		[name]: value,
// // 		["_" + name]: value,
// // 		[name.toUpperCase()]: value,
// // 		['get' + name]() {
// // 			return this[name];
// // 		}
// // 	}
// // }
// // console.log(createObj(imgId, 20));

/*///////////////
 Object creating done)))
 *///////////////



// function getImage (fetch, id) {
// 	return fetch(api)
// 		.then(response => response.json());
// 			const authors = []
// 		.then(authors => {
// 			 return authors.map(function(author, id) {
//
// 				 // const id = list.id;
// 				// console.log(author);
// 			})
// 		})
// 	}
// const abc = getImage(window.fetch, id);
// abc
// console.log(abc);






// let asyncAwaitIsYourNewBestFriend = (num) => {
// 	if (num === 0)return;
// 	console.log(num);
// 	asyncAwaitIsYourNewBestFriend(num-1);
// };
// asyncAwaitIsYourNewBestFriend(10);




// getImage(window.fetch, 123)
// 	.then(
// 		img = createNode('img'),
// 		console.log(img),
// 		image.src = src + author.id,
// 		append(container, image)
// 	);









// async function getAPI (userId) {
//
// 	const response = await fetch(api);
// 	const data = await response.json();
// 	const promises = data.map(function(...userId) {
// 		return userId;
// 		promises
// 	// console.log(userId);
// 	});
// 	return Promise.all(promises);
//
// 	// return fetch(api)
// 	// 	.then(response => response.json())
// 	// 	.then(user =>  {
// 	// 			user.map(function(userData) {
// 	// 					console.log("x", userData);
// 	// 				return userData;
// 	// 		})
// 	// 	})
// }
// const result = getAPI();
// result;
// console.log(result);




// class Api {
// 	constructor () {
// 		this.user = { result }
// 		this.friends = [ 'result' ]
// 		// console.log(this.friends);
// 		this.photo = 'not a real photo'
// 	}
//
// 	getUser () {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve ((this.user), 200))
// 			Promise.all();
// 		})
// 	}
//
// 	getFriends (userId) {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => resolve(this.friends.slice()), 200)
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
// async function asyncAwaitIsYourNewBestFriend () {
// 	const api = new Api()
// 	const user = await api.getUser()
// 	// const friends = await api.getFriends(user.id)
// 	// const photo = await api.getPhoto(user.id)
// 	console.log('asyncAwaitIsYourNewBestFriend', { user })
// 	// console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
// }
// asyncAwaitIsYourNewBestFriend();



// const	app = {
// 	getPhoto: () => {
// 		fetch(api)
// 			.then(r => r.json())
// 			.then(data =>  {
// 				const authors = data; //data.splice(1, 5);
// 				return authors.map(function(author) {
// 					// console.log(authors);
//
// 					const photoData = {
// 						imgId: author.id,
// 						imgWidth: author.width,
// 						imgHeight: author.height,
// 						imgName: author.author
// 					};
//
// 					console.log("x", photoData.imgId);
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






/*///////////////
 Object creating)))
 *///////////////

async function getUserInfo () {
	const api = new Api()
	const user = await api.getUser()
	const friends = await api.getFriends(user.id)
	const photo = await api.getPhoto(user.id)
	return { user, friends, photo }
}

function promiseUserInfo () {
	getUserInfo().then(({ user, friends, photo }) => {
		console.log('promiseUserInfo', { user, friends, photo })
	})
}

let author = "Alejandro Escamilla";
let author_url = "https://unsplash.com/@alejandroescamilla";
let filename = "0000_yC-Yzbqy7PY.jpeg";
let format = "jpeg";
let height = 3744;
let id = 680;
let post_url = "https://unsplash.com/photos/yC-Yzbqy7PY";
let width = 5616;

let photoData = {
	el: '#app',
	author,
	author_url,
	filename,
	format,
	height,
	id,
	post_url,
	width,
	data: {
		photos: [],
		totalPhotos: 0,
		perPage: 20,
		currentPage: 1
	},

	get newId(){
		return this.author + this.id;
	},

	set newId(value) {
		this.id = value;
	},

	methods: {
		// getAuthor() {
		// 	console.log(img);
		// },
		getImg() {
			let img = createNode('img');
			img.src = "https://unsplash.it/300/300?image=" + photoData.id;
			append(container, img);
			console.log(img);
		},
		fetchPhotos(page) {
			var options = {
				params: {
					client_id: appId,
					page: page,
					per_page: this.perPage
				}
			}
		}
	}
};

/*/////////////
 SET & GET
 *////////////
// photoData.newId = 545;
// photoData.newId;

console.log(photoData);
photoData.methods.getImg();

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
 *///////////////



async function getAPI () {
	const response = await fetch(api);
	const data = await response.json();
	const promises = data.map(function(author) {
		// console.log(author.id);
		// return `${id}`;
		return author;
	});

	return Promise.all(promises);
}
let result = getAPI();
result
console.log(result);


// async function getUserInfo () {
// 	const app = new getAPI();
// 	const user = await app.newId(author.id);
// 	const photo = await photoData.methods.getImg(author.id);
// 	return { user, photo }
// }
//
// function promiseUserInfo () {
// 	getUserInfo().then(({ user, photo }) => {
// 		console.log('promiseUserInfo', { user, photo })
// 	})
// }
// promiseUserInfo();
// console.log(promiseUserInfo());



async function getLotsOfUser () {
	try {
		const userPromises = Array(1).fill(getAPI());
		const users = await Promise.all(userPromises);
		console.log('getLotsOfUserDataFaster', users)
	} catch (err) {
		console.error(err)
	}
}
const authors = getLotsOfUser();
authors
console.log(authors);


// async function asyncAwaitIsYourNewBestFriend () {
// 	const api = new Api()
// 	const user = await api.getUser()
// 	const friends = await api.getFriends(user.id)
// 	const photo = await api.getPhoto(user.id)
// 	console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
// }
// asyncAwaitIsYourNewBestFriend()
// console.log(asyncAwaitIsYourNewBestFriend());



// async function asyncAwaitLoopsParallel () {
// 	const user = await api.getUser()
// 	const friends = await api.getFriends(user.id)
// 	const friendPromises = friends.map(friend => api.getFriends(friend.id))
// 	const moreFriends = await Promise.all(friendPromises)
// 	console.log('asyncAwaitLoopsParallel', moreFriends)
// }
// asyncAwaitLoopsParallel();
// console.log(asyncAwaitLoopsParallel());












