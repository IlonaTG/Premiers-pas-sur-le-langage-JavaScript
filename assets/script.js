const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//On récupère les éléments
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const carousel=document.getElementById('banner');

let slide = 0;

const carouselImage = carousel.children.item(0);
const carouselTag = carousel.children.item(1);
const dotDiv = document.querySelector('.dots');
const dots= dotDiv.children;


//Points
for (let i = 0; i < slides.length-1; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotDiv.appendChild(dot);
	dot.addEventListener('click', function() {
	slide = i;
	
	carouselImage.src="./assets/images/slideshow/"+slides[slide].image;
	  carouselTag.innerHTML = slides[slide].tagLine;
	  dotSelected();
	});
  }
  
  function dotSelected() {
	for (let i = 0; i < dots.length; i++) {
	  if (i === slide) {
		dots[i].classList.add('dot_selected');
	  } else {
		dots[i].classList.remove('dot_selected');
	  }
	}
  }

// Gestionnaire d'événement pour le clic sur la flèche gauche //
arrowLeft.addEventListener('click', function(){
	slide--;
	if (slide<0) {
		slide=slides.length-1;
	}
	carouselImage.src="./assets/images/slideshow/"+slides[slide].image;
carouselTag.innerHTML=slides[slide].tagLine;
dotSelected();
})

// Gestionnaire d'événement pour le clic sur la flèche droite //

arrowRight.addEventListener('click', function(){
	slide++;
	if (slide>=slides.length) {
		slide=0;
	}
	carouselImage.src="./assets/images/slideshow/"+slides[slide].image;
	carouselTag.innerHTML=slides[slide].tagLine;
	dotSelected();
	})