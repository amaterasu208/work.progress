let burger = document.querySelector(".menu");
let menu = document.querySelector("ul");
let btn = document.getElementsByClassName('button');
let form = document.querySelector('.form');

burger.onclick = function () {
	// if (menu.style.display == "none") {
	// 	menu.style.display = "block";
	// } else {
	// 	menu.style.display = "none";
	// }

	menu.classList.toggle('active');
}

btn.onckick = function () {
	form.style.display = 'block';
}

