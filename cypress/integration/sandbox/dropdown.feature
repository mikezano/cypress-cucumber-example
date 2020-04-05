@dropdown
Feature: Dropdown
	Testing out dropdown functionality

	Scenario: Apples
		Given I visit the sample site
		When I open the "fruits" dropdown and select "apple"
		Then I should see a "🍏" displayed

	Scenario: Banana
		Given I visit the sample site
		When I open the "fruits" dropdown and select "banana"
		Then I should see a "🍌" displayed
