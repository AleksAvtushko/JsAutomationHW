Feature: The Internet Guinea Pig Website forgot password

  Scenario Outline: As a user, I can change password

    Given I am on the forgot password page
    When I add value <email>
    Then I go to next page and see next page <message>

    Examples:
      | email| message|
      | aleksavtushko@mail.com | Internal Server Error |
