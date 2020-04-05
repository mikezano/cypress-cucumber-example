@dropdown
Feature: Dropdown
	Testing out dropdown functionality

	Scenario: Basic Dropdown
		Given I open the "fruit" dropdown
		When I select "apple"
		Then I should see a "apple" displayed
