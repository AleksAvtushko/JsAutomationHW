Feature: The Internet Guinea Pig Website_2

  Scenario Outline: As a user, I can select option in dropdown

    Given I open Dropdown page first
    When I click to dropdown
    Then I can select option 1 <message>

    Examples:
      | message |
      | Option 1|
