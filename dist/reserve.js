// var query = "https://unsplash.it/list";
// // var api = "https://api.unsplash.com/photos/random";
// // var appID = "240fc1f4d1e3e77b88c0bd95d9e8b428bdfe807db44c8b466d66ee9dae3b8cff";
// // var query = api +"?client_id=" + appID+"&count=40";
// //
// //
// function createNode(element) {
// 	return document.createElement(element);
// }
//
// function append(parent, el) {
// 	return parent.appendChild(el);
// }
//
// const ul = document.getElementById('authors');
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
//
//
//
//
//
// // var api = "https://api.unsplash.com/photos/";
// // var appID = "9fb4a9f580f94957629fcce6ac996018dd399d23fda6aa983399b6dde68b4237";
// // var query = api +"?client_id=" + appID;
// //
// // var photo = document.querySelector("#photo");
// //
// //
// var app = {
// 		getPhoto: () => {
// 			fetch(query)
// 				.then(response => response.json())
// 				.then(data =>  {
// 					console.log("data", data);
// 					// console.log("photo", data[9].urls.small);
// 					// photo.src = data[9].urls.small;
// 					// console.log("photo", photo)
// 				})
// 				.catch(function() {
// 					console.log("No result");
// 				});
// 		}
// };
//
// //
// // $.getJSON('https://unsplash.it/list', function(data) {
// // 	// console.log(data[6].id);
// // 	var max = 50;
// // 	for (var i = 0; i < max; i++) {
// // 		$('<img src="https://unsplash.it/100/100?image=' + data[i].id + '" />').prependTo('body');
// // 	}
// // GET ALL IMAGES
//
// // for (elem in data) {
// // $('<img src="https://unsplash.it/100/100?image=' + data[elem].id + '" />').prependTo('body');
// // }
//
// // });
//
// //
// //
// // var request = new XMLHttpRequest();
// // request.open('GET', 'https://unsplash.it/list', true);
// //
// // request.onload = function(data) {
// // 	if (request.status >= 200 && request.status < 400) {
// //
// // 			var data = JSON.parse(request.responseText);
// // 			console.log(data);
// // 			let li = document.createElement('li');
// // 			let img = document.createElement("img");
// //
// // 			let src = "https://unsplash.it/300/300?image=" + data[987].id;
// //
// // 			img.setAttribute('src', src);
// // 			console.log(img);
// // 			console.log(src);
// //
// //
// // 			append(li, img);
// // 			append(ul, li);
// // 		// $('<img src="https://unsplash.it/100/100?image=' + data[i].id + '" />').prependTo('body');
// //
// // 		// Success!
// // 	} else {
// // 		console.log("err");
// //
// // 	}
// // };
// //
// // request.onerror = function() {
// // 	// There was a connection error of some sort
// // };
// //
// // request.send();
//
//
//
// // var api = "https://unsplash.it/list";
//
// function createNode(element) {return document.createElement(element);}
// // let createClass = function(element) {return document.addClass(element, class);}
// function append(parent, el) {return parent.appendChild(el);}
//
// const ul = document.getElementById('authors');
//
// // console.log(new_height);
//
//
// (function() {
//
// 	$.fn.unsplash = function (options) {
//
// 		const defaults = {
// 			client_id: '',
// 			limit: '',
// 			columns: '',
// 			width: ''
// 		};
//
// 		const extend = function (out = {}) {
// 			for (let i = 1; i < arguments.length; i++) {
// 				if (!arguments[i])
// 					continue;
//
// 				for (const key in arguments[i]) {
// 					if (arguments[i].hasOwnProperty(key))
// 						out[key] = arguments[i][key];
// 				}
// 			}
// 			return out;
// 		};
//
// 		// const settings = extend({}, defaults);
// 		const settings = extend({}, defaults, options);
//
// 		var page = document.querySelector(".more");
// 		page.getAttribute("href");
//
// 		var filter = document.querySelector(".dropdown a");
// 		filter.getAttribute("href");
//
// 		var api = 'https://api.unsplash.com/photos';
//
// 		function unsplash (page, filter) {
// 			fetch(api, {
// 				data: {
// 					client_id: settings.client_id,
// 					page: page,
// 					per_page: settings.limit,
// 					order_by: filter
// 				},
// 			})
// 				.then((resp) => resp.json())
// 				.then(function (data) {
//
// 						let authors = data;
//
// 						authors.forEach(function (i, item) {
//
//
// 							var containerWidth = document.querySelector(".container");
// 							containerWidth = parseInt(getComputedStyle(containerWidth).width);
// 							// console.log(containerWidth);
//
// 							authors.map(function (authors) {
//
// 								var width = item.width;
// 								var height = item.height;
// 								var item_width = document.querySelectorAll(".item");
// 								item_width =  parseInt(getComputedStyle(item_width).width);
//
// 								var new_height = Math.round((height / width) * containerWidth/settings.columns);
//
// 								//Set custom width
// 								var image_url = item.urls.small.replace("&w=400", "&w=" + settings.width);
// 								var image = document.getElementsByTagName("img").setAttribute("src", image_url);
// 								image.style.display = 'none';
// 								image.fadeToggle("slow");
//
// 								var link = document.createElement('a');
// 								link.className = 'link';
// 								link.setAttribute("target", "_blank");
// 								link.setAttribute("href", item.links.html);
// 								link.appendChild(image);
// 								link.style.height = new_height;
// 								link.style.background = item.color;
//
// 								var name = document.createElement('p');
// 								name.textContent = "By ";
// 								name.appendChild(item.user.name);
//
// 								var item = document.createElement('div');
// 								item.className = 'item';
// 								item.appendChild(link);
// 								item.appendChild(name);
// 								item.style.width = containerWidth/settings.columns;
//
// 								var $container = document.querySelectorAll('#unsplash');
// 								//Append item to Masonry
// 								var $item = $(item);
// 								$container.appendChild($item).masonry().masonry( 'appended', $item );
//
//
// 								// console.log(authors.id);
// 								// var width = [];
// 								// var name = [];
// 								// width[authors.id] = authors.width;
// 								// name[authors.id] = authors.author;
// 								// return width;
// 								// return name;
// 							});
//
// 							return authors.map(function (author) {
//
// 								//Set page number value in MORE button
// 								var more = document.createElement('a');
// 								more.className = 'more';
// 								more.setAttribute("href", page);
// 								more.innerHTML = "<span>...</span>";
//
// 								var $more = document.querySelectorAll("#more");
// 								$more.innerHTML = more;
//
//
// 								// let li = createNode('li'),
// 								// 	img = createNode('img'),
// 								// 	span = createNode('span'),
// 								// 	a = createNode('a');
// 								// img.src = "https://unsplash.it/200/200?image=" + author.id;
// 								// span.innerHTML = author.author;
// 								// // a.innerHTML= 'Link';
// 								// // a.href= author.links.html;
// 								// append(li, a);
// 								// append(li, span);
// 								// append(li, img);
// 								// append(ul, li);
//
// 							})
// 						})
// 					}
// 					// .catch(function() {
// 					// 	console.log("err");
// 					// })
// 				)
// 		}
//
// 		//Click function to get the next page
// 		document.addEventListener('click', function(e) {
// 			if (e.target.matches('.more')) {
// 				var page = document.querySelectorAll(".more");
// 				page.getAttribute("href");
// 				page++;
// 				unsplash(page, filter);
// 				return false;
// 				// event.stopPropagation();
// 			}
// 		});
//
// 		document.addEventListener('click', function(e) {
// 			if (e.target.matches('.dropdown a')) {
// 				e.preventDefault();
// 				document.querySelectorAll("#unsplash").masonry( 'destroy' );
// 				document.querySelectorAll("#unsplash").innerHTML = '';
// 				document.querySelectorAll("#more").innerHTML = '';
// 				filter = this.attr("href");
// 				unsplash(1, filter);
// 			}
// 		});
//
// 		//Initial Load
// 		unsplash(page, filter);
//
// 		$( document ).ajaxComplete(function( event, xhr, settings,XMLHttpRequest ) {
// 			setTimeout(function() {
// 				if(xhr.status == 200){
// 					document.querySelectorAll(".more").innerHTML = "MORE";
// 				} else {
// 					document.querySelectorAll(".more").innerHTML = "ERROR";
// 				}
// 			}, 1500);
// 		});
// 	}
// }());
//
// // getPhoto();
//
// // }
//
//
//
//
//
//
//
// //
// // const { Component } = React;
// // const { render } = ReactDOM;
// //
// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			photos: [],
// 			totalPhotos: 0,
// 			perPage: 5,
// 			currentPage: 1
// 		}
// 	}
//
// 	componentDidMount() {
// 		this.fetchPhotos(this.state.currentPage);
// 	}
//
// 	fetchPhotos(page) {
// 		var self = this;
// 		const { perPage } = this.state;
// 		const { appId, baseUrl } = this.props;
// 		const options = {
// 			params: {
// 				client_id: appId,
// 				page: page,
// 				per_page: perPage
// 			}
// 		};
//
// 		axios.get(baseUrl, options).then((response) => {
// 			self.setState({
// 				photos: response.data,
// 				totalPhotos: parseInt(response.headers['x-total']),
// 				currentPage: page
// 			});
// 		}, window.alert);
// 	}
//
// 	render() {
// 		return (
// 			<div className="app">
// 				<Pagination
// 					current={this.state.currentPage}
// 					total={this.state.totalPhotos}
// 					perPage={this.state.perPage}
// 					onPageChanged={this.fetchPhotos.bind(this)}
// 				/>
// 				<List data={this.state.photos} />
// 			</div>
// 		)
// 	}
// }
//
//
//
// const ListItem = ({ photo }) => {
// 	return (
// 		<div key={photo.id} className="grid__item card">
// 			<div className="card__body">
// 				<img src={photo.urls.small} alt="" />
// 			</div>
// 			<div className="card__footer media">
// 				<img src={photo.user.profile_image.small} alt="" className="media__obj" />
// 				<div className="media__body">
// 					<a href={photo.user.portfolio_url} target="_blank">{ photo.user.name }</a>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
//
// const List = ({ data }) => {
// 	var items = data.map(photo => <ListItem key={photo.id} photo={photo}/>);
// 	return (
// 		<div className="grid">
// 			{ items }
// 		</div>
// 	)
// }
//
// class Pagination extends Component {
// 	pages() {
// 		var pages = [];
// 		for(var i = this.rangeStart(); i <= this.rangeEnd(); i++) {
// 			pages.push(i)
// 		};
// 		return pages;
// 	}
//
// 	rangeStart() {
// 		var start = this.props.current - this.props.pageRange;
// 		return (start > 0) ? start : 1
// 	}
//
// 	rangeEnd() {
// 		var end = this.props.current + this.props.pageRange;
// 		var totalPages = this.totalPages();
// 		return (end < totalPages) ? end : totalPages;
// 	}
//
// 	totalPages() {
// 		return Math.ceil(this.props.total / this.props.perPage);
// 	}
//
// 	nextPage() {
// 		return this.props.current + 1;
// 	}
//
// 	prevPage() {
// 		return this.props.current - 1;
// 	}
//
// 	hasFirst() {
// 		return this.rangeStart() !== 1
// 	}
//
// 	hasLast() {
// 		return this.rangeEnd() < this.totalPages();
// 	}
//
// 	hasPrev() {
// 		return this.props.current > 1;
// 	}
//
// 	hasNext() {
// 		return this.props.current < this.totalPages();
// 	}
//
// 	changePage(page) {
// 		this.props.onPageChanged(page);
// 	}
//
// 	render() {
// 		return (
// 			<div className="pagination">
// 				<div className="pagination__left">
// 					<a href="#" className={!this.hasPrev() ? 'hidden': ''}
// 					   onClick={e => this.changePage(this.prevPage())}
// 					>Prev</a>
// 				</div>
//
// 				<div className="pagination__mid">
// 					<ul>
// 						<li className={!this.hasFirst() ? 'hidden' : ''}>
// 							<a href="#" onClick={e => this.changePage(1)}>1</a>
// 						</li>
// 						<li className={!this.hasFirst() ? 'hidden' : ''}>...</li>
// 						{
// 							this.pages().map((page, index) => {
// 								return (
// 									<li key={index}>
// 										<a href="#"
// 										   onClick={e => this.changePage(page)}
// 										   className={ this.props.current == page ? 'current' : '' }
// 										>{ page }</a>
// 									</li>
// 								);
// 							})
// 						}
// 						<li className={!this.hasLast() ? 'hidden' : ''}>...</li>
// 						<li className={!this.hasLast() ? 'hidden' : ''}>
// 							<a href="#" onClick={e => this.changePage(this.totalPages())}>{ this.totalPages() }</a>
// 						</li>
// 					</ul>
// 				</div>
//
// 				<div className="pagination__right">
// 					<a href="#" className={!this.hasNext() ? 'hidden' : ''}
// 					   onClick={e => this.changePage(this.nextPage())}
// 					>Next</a>
// 				</div>
// 			</div>
// 		);
// 	}
// };
//
// Pagination.defaultProps = {
// 	pageRange: 2
// }
//
// render(
// 	<App
// 		appId={CONFIG.__APP_ID__}
// 		baseUrl={CONFIG.BASE_URL}
// 	/>,
// 	document.getElementById('mount-point')
// );
//
//
// //////////////////////EXAMPLE/////////////////////////////
// //////////////////////EXAMPLE/////////////////////////////
// //////////////////////EXAMPLE/////////////////////////////
// //////////////////////EXAMPLE/////////////////////////////
// // function xthr () {
// // 	return fetch('https://jsonplaceholder.typicode.com/users')
// // 		.then(r => r.json())
// // 		.then(([{id}]) => (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
// // 		// .then(([{id}]) => ("https://unsplash.it/300/300?image=" + author.id),
// // 		)
// // 		.then(r => r.json())
// // 		.then(posts => {
// // 			const div = document.getElementById('authors');
// // 			const header = document.createElement('h1');
// // 			header.textContent = 'Posts';
// // 			div.appendChild(header);
// // 			const ul = document.createElement('ul');
// // 			posts.forEach(({title}) => {
// // 				const li = document.createElement('li');
// // 				header.textContent = title;
// // 				ul.appendChild(li);
// // 			});
// // 			div.appendChild(ul);
// // 		})
// // }
// // xthr().then(
// // 	() => console.log('ok'),
// // 	() => console.log('bad')
// // );
// // xthr();
//
//
//
//
//
"use strict";