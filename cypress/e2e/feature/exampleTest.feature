Feature: EXAMPLE TEST

  Background: Homepage
    Given a user visits the example url

  Scenario: Verify a user can access profile page
    When the user clicks the profile link
    Then the user profile should be displayed

  Scenario: Verify user can access benefits page
    And the user clicks the profile link
    When the user clicks the benefits link
    Then all users benefits should be displayed

  Scenario: Verify user can access expense page
    And the user clicks the profile link
    When the user clicks submit an expense link
    Then the expense page should be displayed

  Scenario: Verify user can access training page
    And the user clicks the profile link
    When the user clicks the training link
    Then the complete user training should be displayed

  Scenario: Verify user can access resources page
    And the user clicks the profile link
    When the user clicks the resources link
    Then the resources page should be displayed
