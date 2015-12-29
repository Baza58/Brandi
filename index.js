require('./style.scss');
(function() {
	// setup vars for image nodes and buttons
	var nodes = document.querySelectorAll('.work-image-box');
	var buttonsContainer = document.querySelector('.work-buttons-container');

	buttonsContainer.addEventListener('click', handleButtonClick);

	function handleButtonClick(e) {
		// if click was not on button then return
		if (e.target.nodeName !== 'BUTTON') return;
		var name = e.target.getAttribute('data-target');
		addActiveClass(e);
		displayElementsWithName(name);
	}

	function addActiveClass(e) {
		// loop over over buttons, remove active class from from previous buttons and attach it to current button
		for (var i = 0; i < buttonsContainer.children.length; i++) {
			var buttonsClassList = buttonsContainer.children[i].classList;
			if (buttonsClassList.contains('active')) {
					buttonsClassList.remove('active');
			}
		}
		e.target.classList.add('active');
	}

	function displayElementsWithName(name) {
		// if name is All the display all images and return
		if (name === 'All') {
			for (var k = 0; k < nodes.length; k++) {
				nodes[k].style.display = 'block';
			}
			return;
		}
		// else display only images with a given name 
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].style.display = 'block';
			
			if (!nodes[i].classList.contains(name)) {
				nodes[i].style.display = 'none';
			}
				
		}
	}
})();