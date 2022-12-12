Feature: Checkboxes fields for The Internet Guinea Pig Website

  Scenario: As a user, I want to make sure that the first checkbox is unchecked

    Given I open checkbox page first
    When I find the first CheckBox
    Then I should see a first checkbox doesn't check

  Scenario: As a user, I want to make sure that the first checkbox is checked

    Given I open checkbox page
    When I find the first CheckBox and check
    Then I should see a first checkbox is checked


  Scenario: As a user, I want to make sure that the second checkbox is checked

    Given I open checkbox page second
    When I find the second CheckBox
    Then I should see a second checkbox is checked

