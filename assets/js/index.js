$(document).on('click', '.navbar-item', function() {
	$(this).addClass('current').siblings().removeClass('current');
});

//navbar links event listener
var navbarItem = document.querySelectorAll('.navbar-item.itemLinks');

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
for (let i = 0; i < navbarItem.length; i++) {
	navbarItem[i].addEventListener('click', function() {
		var navigationLink = i;
		removeActiveLinks();

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
		links[i].classList.remove('active');
	}
}

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
