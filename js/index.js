const initPage = document.querySelector('.rating-init');
const thanksPage = document.querySelector('.rating-thanks');
const submit = document.querySelector('.submit');
const rates = document.querySelectorAll('.num-btn');
const rateDisplay = document.querySelector('.result-txt__display');
let selectedRate = 0;

function handleSubmit(event) {
	event.preventDefault();
	rateDisplay.innerHTML = selectedRate;
	initPage.classList.add('hidden');
    thanksPage.classList.remove('hidden');
}

function removeActive () {
	rates.forEach(rate => {
		rate.classList.remove('num-btn--active');
	})
}

rates.forEach(rateButton => {
    rateButton.addEventListener('click', (event) => {
		removeActive();
		event.target.classList.add('num-btn--active');
		selectedRate = event.target.dataset.rate;
	});
});

submit.addEventListener('click', handleSubmit);
