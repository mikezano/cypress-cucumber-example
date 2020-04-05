import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I open the {string} dropdown', (name) => {
	cy.visit('http://codepen.io/_zan0/pen/mdJZjMo');
	cy.get(`[data-cy=${name}]`).click();
});

When('I select {string}', (option) => {
	cy.get(`[data-cy=${option}]`).click();
});

Then('I should see a {string} displayed', (fruit) => {
	// Write code here that turns the phrase above into concrete actions
	//cy.expect(url);
	cy.contains(`[data-cy=display]`, fruit);
});
