let burger = document.querySelector(".menu");
let menu = document.querySelector("ul");
let btn = document.querySelectorAll('.button');
let form1 = document.querySelector('.form');
let contentForm = document.querySelector('.regestration');
let closeBtn = document.querySelector('.regestration .close');
let sendData = document.querySelector(".regestration input[type='submit']");
let thank= document.querySelector('.thanks');

burger.onclick = function () {
	menu.classList.toggle('active');
}

for (let i=0; i<btn.length; i++) {
	btn[i].onclick = function (e) {
		e.preventDefault();
		form1.classList.add('show');
		contentForm.classList.add('show');
	}
}

function closeForm1() {	
	form1.classList.remove('show');
	contentForm.classList.remove('show');
}

form1.addEventListener('click', closeForm1);

closeBtn.onclick = closeForm1;

console.log(sendData);

sendData.addEventListener('click', function () {
	closeForm1();
	setTimeout(function () {
		thank.classList.add('thanks__show');
	}, 500);
	setTimeout(function () {
		thank.classList.remove('thanks__show');
	}, 3500)
})
