function getTab(tab) {
	return document.getElementsByClassName(tab);
}
let tabs = getTab('tab-header')[0];
let tabPanes = tabs.getElementsByTagName('div');

for (let i = 0; i < tabPanes.length; i++) {
	tabPanes[i].addEventListener('click', function() {
		tabs.getElementsByClassName('active')[0].classList.remove('active');
		tabPanes[i].classList.add('active');

		getTab('tab-indicator')[0].style.top = `calc(80px + ${i * 52}px)`;

		getTab('tab-content')[0].getElementsByClassName('active')[0].classList.remove('active');
		getTab('tab-content')[0].getElementsByTagName('div')[i].classList.add('active');
	});
}
