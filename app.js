document.addEventListener('DOMContentLoaded', () => {

	// Elements
	const header = document.querySelector('.codeplayer__nav');
	const playerContainers = Array.from(document.querySelectorAll('.codeplayer__player'));
	const playerToggles = Array.from(document.querySelectorAll('.codeplayer__toggle'));
	const windowHeight = window.innerHeight;
	const headerHeight = header.clientHeight;
	const runButton = document.querySelector('#runButton');
	const iframe = document.querySelector('.codeplayer__results');

	// Style Elements
	playerContainers.forEach(container => {
		container.style.height = `${windowHeight - headerHeight}px`;
	});

	// Event Listeners
	playerToggles.forEach(toggle => {
		toggle.addEventListener('click', (e) => {
			toggle.classList.toggle('codeplayer__toggle--selected');
			let activeDiv = toggle.innerHTML;

			if (document.getElementById(`${activeDiv}Container`).style.display === 'block') {
				document.getElementById(`${activeDiv}Container`).style.display = 'none';

			} else {
				document.getElementById(`${activeDiv}Container`).style.display = 'block';
			}

			let showing = Array.from(document.querySelectorAll('.codeplayer__player'));
			showing = showing.filter((el) => {
				if(el.style.display !== "none" || '') {
					return (el.style.display !== 'none');
				}
			}).length;
			let width = 100/showing;

			playerContainers.forEach(container => {
				container.style.width = `${width}%`;
			});
			iframe.style.width = `${width}%`;
		})
	});

	// Update iframe upon clicking the run button
	runButton.addEventListener('click', () => {
		let cssCode = document.querySelector('#cssCode').value;
		let jsCode = document.querySelector('#jsCode').value;
		let htmlCode = document.querySelector('#htmlCode').value;
		let result = `<style>${cssCode}</style>${htmlCode}<script>${jsCode}</script>`;
		let doc;

		if (iframe.contentDocument) {
			doc = iframe.contentDocument;
		} else if (iframe.contentWindow) {
			doc = iframe.contentWindow.document;
		}
		else {
			doc = iframe.document;
		}

		doc.open();
		doc.writeln(result);
		doc.close();
	});
});