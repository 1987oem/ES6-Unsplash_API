var query = "https://unsplash.it/list";
// var api = "https://api.unsplash.com/photos/random";
// var appID = "240fc1f4d1e3e77b88c0bd95d9e8b428bdfe807db44c8b466d66ee9dae3b8cff";
// var query = api +"?client_id=" + appID;
// var query = api +"?client_id=" + appID+ "&count=20";

function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}
const container = document.getElementById('authors');




fetch(query)
	.then((resp) => resp.json())
	.then(function(res) {
		let authors = res;
		// let authors = res.splice(0, 10);

		console.log(authors);

		authors.map(function(authors) {
			var width = [];
			var name = [];
			width[authors.id] = authors.width;
			// console.log(name);
			name[authors.id] = authors.author;
			return width;
			return name;
		});


		return authors.map(function(author) {
			console.log(author.width);
			let div = createNode('div'),
				img = createNode('img'),
				span = createNode('span'),
				a = createNode('a');


			// https://unsplash.com/@lukechesser?photo=yOkg_V0t_hw

			// img.src = author.urls.small;
			img.src = "https://unsplash.it/300/300?image=" + author.id;
			span.innerHTML = author.author;

			// a.innerHTML= 'Link';
			// a.href= author.links.html;


			//////////////////////////
			// Working only with list
			///////////////////////////
			a.innerHTML= author.author;
			a.href= author.author_url;
			//////////////////////////


			append(div, a);
			append(div, span);
			append(div, img);
			append(container, div);
		})
	})

	.catch(function() {
		console.log("err");
	});




//
// var api = "https://api.unsplash.com/photos/random";
// var appID = "240fc1f4d1e3e77b88c0bd95d9e8b428bdfe807db44c8b466d66ee9dae3b8cff";
// var query = api +"?client_id=" + appID+ "&count=20";
//
// function createNode(element) {
// 	return document.createElement(element);
// }
//
// function append(parent, el) {
// 	return parent.appendChild(el);
// }
//
// const container = document.getElementById('authors');
//
// fetch(query)
// 	.then((resp) => resp.json())
// 	.then(function(res) {
// 		let authors = res;
// 		console.log(authors);
//
// 		authors.map(function(authors) {
// 			var width = [];
// 			var name = [];
// 			width[authors.id] = authors.width;
// 			name[authors.id] = authors.author;
// 			return width;
// 			return name;
// 		});
//
//
// 		return authors.map(function(author) {
// 			console.log(author);
// 			let div = createNode('div'),
// 				img = createNode('img'),
// 				span = createNode('span'),
// 				a = createNode('a');
//
//
// 			// https://unsplash.com/@lukechesser?photo=yOkg_V0t_hw
//
// 			img.src = author.urls.small;
// 			// img.src = "https://unsplash.it/300/300?image=" + author.id;
// 			span.innerHTML = author.author;
//
// 			a.innerHTML= 'Link';
// 			a.href= author.links.html;
//
//
// 			//////////////////////////
// 			// Working only with list
// 			///////////////////////////
// 			// a.innerHTML= author.author;
// 			// a.href= author.author_url;
// 			//////////////////////////
//
//
// 			append(div, a);
// 			append(div, span);
// 			append(div, img);
// 			append(container, div);
// 		})
// 	})
//
// 	.catch(function() {
// 		console.log("err");
// 	});

