const trigger = document.querySelectorAll('.trigger');
const hideBody = document.querySelectorAll('.hideBody');

for (let i = 0; i < trigger.length; i++) {
	trigger[i].addEventListener('click', () => {
		trigger[i].classList.toggle('flip');
		hideBody[i].classList.toggle('active');
	});
}
