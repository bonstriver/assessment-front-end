console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('Form submitted successfully!')
}

const cat = document.querySelector('img')

const hoverAlert = () => {
	alert('You have good taste in cat pictures to hover your mouse over!')
}

cat.addEventListener('mouseover', hoverAlert)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);