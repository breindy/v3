$(document).on('click', '.navbar-item', function() {
	$(this).addClass('current').siblings().removeClass('current');
});

//navbar links event listener
var navbarItem = document.querySelectorAll('.navbar-item.itemLinks');

//content sections
var contentSections = document.querySelectorAll('.section');

// CONTENT SLIDING
var links = document.querySelectorAll('li.itemLinks');

var wrapper = document.querySelector('.wrapper');

// the activeLink provides a pointer to the currently displayed item
var activeLink = 0;

// setup the event listeners
for (var i = 0; i < links.length; i++) {
	var link = links[i];

	link.addEventListener('click', setClickedItem, false);

	// identify the item for the activeLink
	link.itemID = i;
}

//add event listener to navbar-item
for (let i = 0; i < navbarItem.length - 1; i++) {
	navbarItem[i].addEventListener('click', function() {
		var navigationLink = i;
		removeActiveLinks();

		contentSections[i].classList.add('currentSection');

		links[navigationLink].classList.add('active');

		changePosition(navbarItem);
	});
}

// set first item as active
links[activeLink].classList.add('active');

function setClickedItem(e) {
	removeActiveLinks();

	var clickedLink = e.target;
	activeLink = clickedLink.itemID;
	console.log(activeLink);
}

function removeActiveLinks() {
	for (var i = 0; i < links.length; i++) {
		contentSections[i].classList.remove('currentSection');
		links[i].classList.remove('active');
	}
}

//landing cta click
var learnMore = document.querySelector('.landing-cta__learn-more');
learnMore.addEventListener('click', function() {
	for (let i = 0; i < navbarItem.length - 1; i++) {
		links[i].classList.remove('active');
		navbarItem[i].classList.remove('current');
	}
	var linkNum = 1;
	//show #about
	contentSections[1].classList.add('currentSection');
	navbarItem[linkNum].classList.add('current');
	links[linkNum].classList.add('active');
});

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {
	var position = link.getAttribute('data-pos');

	var translateValue = 'translate3d(' + position + ', 0px, 0)';
	wrapper.style.transform = translateValue;

	link.classList.add('active');
}

// SCROLL TO SECTIONS
function scrollTo(position) {
	window.scrollY(position);
}

var slideBox = document.querySelector('.slide-box');

//Display correct slideContent based on number
var slideContents = document.querySelectorAll('.slideContent');
console.log(slideContents);

//event listener on arrow buttons
var rightBtnSlider = document.querySelector('.arrow.right');
console.log(rightBtnSlider);

rightBtnSlider.addEventListener('click', next);

var leftBtnSlider = document.querySelector('.arrow.left');
console.log(leftBtnSlider);

leftBtnSlider.addEventListener('click', prev);

var slideThumbs = [
	'/assets/project-preview/chrome.png',
	'/assets/project-preview/sigmatech.png',
	'/assets/project-preview/wedev.png'
];

var slideLinks = [
	'https://github.com/breindy/SafeTrade',
	'https://github.com/breindy/College-Database-Management-System',
	'https://github.com/breindy/weDev'
];

var slideCount = 0;

//when rightBtnSlider is clicked, increment count
function next() {
	if (slideCount >= slideThumbs.length - 1) {
		slideCount = -1;
	}

	slideCount++;

	showSlideContent();
	return setSlideThumb();
}

function prev() {
	if (slideCount <= 0) {
		slideCount = slideThumbs.length;
	}
	slideCount--;

	showSlideContent();
	return setSlideThumb();
}

function setSlideThumb() {
	console.log(slideBox.onclick);
	slideBox.style.backgroundSize = 'cover';
	return (slideBox.style.backgroundImage = 'url(' + slideThumbs[slideCount] + ')');
}

//set currentSlide to slideCount's div content
function showSlideContent() {
	for (let i = 0; i < slideContents.length; i++) {
		slideContents[i].classList.remove('currentSlider');
	}

	//add currentslider class to the right slideContent div
	slideContents[slideCount].classList.add('currentSlider');
}

//change slideLink
function changeSlideLinks() {
	// window.open('http://www.google.com','new_window');
	return window.open(' ' + slideLinks[slideCount] + ' ', 'new_window');
}

// EXPERIENCE SECTION TAB SETUP
function setupTabs() {
	document.querySelectorAll('.tabs__button').forEach((button) => {
		button.addEventListener('click', () => {
			const sideBar = button.parentElement;
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

			sideBar.querySelectorAll('.tabs__button').forEach((button) => {
				button.classList.remove('tabs__button--active');
			});

			tabsContainer.querySelectorAll('.tabs__content').forEach((tab) => {
				tab.classList.remove('tabs__content--active');
			});

			button.classList.add('tabs__button--active');
			tabToActivate.classList.add('tabs__content--active');
		});
	});
}

document.addEventListener('DOMContentLoaded', () => {
	setupTabs();
});

document.querySelectorAll('.tabs').forEach((tabsContainer) => {
	tabsContainer.querySelector('.tabs__sidebar .tabs__button').click();
});
