import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
const assert = require('assert');

const isItFriday = (today) => {
	if (today === 'Friday') return 'TGIF';
	return 'Nope';
};

let today = '';
let actualAnswer = '';

Given('today is {string}', (givenDay) => {
	today = givenDay;
});

// Given('today is Sunday', () => {
// 	today = 'Sunday';
// });

// Given('today is Friday', function () {
// 	today = 'Friday';
// });

When("I ask whether it's Friday yet", () => {
	actualAnswer = isItFriday(today);
});

Then('I should be told {string}', (expectedAnswer) => {
	// Write code here that turns the phrase above into concrete actions
	//cy.expect(url);
	assert.equal(actualAnswer, expectedAnswer);
});
