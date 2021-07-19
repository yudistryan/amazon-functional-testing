# ./features/add-to-list.feature

Feature: Add product to list
	As an user
	I want to add a specific product
	I want to be able to search in subcategory, filter and sort it as I want

    @success
    Scenario: Add particular television to list
        Given I enter Amazon website
        And I search for N item in electronics category
        And I click the television and video subcategory
        And I click the television subsubcategory
        And I click low to high for the price sort
        And I click under 32 inches for the screen size filter
        And I click for 2017 model
        And I need product for less than 150 bucks
        And I click the first product from the search result
        And I click add to list
        And Website want me to sign in
        And I enter random username
        When I enter random password
        Then I click submit