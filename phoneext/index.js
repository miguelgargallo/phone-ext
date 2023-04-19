import fetch from 'node-fetch';

const list = './CountryCodes.json';

async function fetchCountryCodes() {
	const response = await fetch(list);
	const countryCodes = await response.json();
	return countryCodes;
}

function findByCode(code) {
	return fetchCountryCodes().then((codes) => codes.find((country) => country.code === code));
}

function findByName(name) {
	return fetchCountryCodes().then((codes) => codes.find((country) => country.name === name));
}

function findByDialCode(dialCode) {
	return fetchCountryCodes().then((codes) =>
		codes.find((country) => country.dial_code === dialCode)
	);
}

export default {
	fetchCountryCodes,
	findByCode,
	findByName,
	findByDialCode
};
