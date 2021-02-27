burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
searchengine = document.querySelector('.searchengine')
burger.addEventListener('click', ()=>{
	searchengine.classList.toggle('v-class-resp');
	navList.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
})