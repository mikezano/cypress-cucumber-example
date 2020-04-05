import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the sample site', (name) => {
	cy.visit('sandbox-site/index.html');
});

When('I open the {string} dropdown and select {string}', (name, option) => {
	cy.get(`[data-cy=${name}]`).select(option);
});

Then('I should see a {string} displayed', (fruit) => {
	cy.contains(`[data-cy=display]`, fruit);
});
