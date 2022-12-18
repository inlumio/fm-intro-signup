const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const fnameVal = fname.value.trim();
	const lnameVal = lname.value.trim();
	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();

	const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	if (fnameVal === '') {
		setEmptyErrMsg(fname);
	} else {
		setSuccessFiled(fname);
	}

	if (lnameVal === '') {
		setEmptyErrMsg(lname);
	} else {
		setSuccessFiled(lname);
	}

	if (emailVal === '') {
		setEmptyErrMsg(email);
	} else if (!emailVal.match(pattern)) {
		setEmailInvalidMsg(email);
	} else {
		setSuccessFiled(email);
	}

	if (passwordVal === '') {
		setEmptyErrMsg(password);
	} else {
		setSuccessFiled(password);
	}
}

function setSuccessFiled(input) {
	input.classList.remove('invalid');
}

function setEmptyErrMsg(input) {
	input.classList.add('invalid');
	const parent = input.parentElement;
	const errField = parent.querySelector('.form__error');
	const fieldPlaceholder = input.getAttribute('placeholder');
	errField.innerText = `${fieldPlaceholder} cannot be empty`;
}

function setEmailInvalidMsg(email) {
	email.classList.add('invalid');
	const parent = email.parentElement;
	const errField = parent.querySelector('.form__error');
	errField.innerText = `Looks like this is not an email`;
}
