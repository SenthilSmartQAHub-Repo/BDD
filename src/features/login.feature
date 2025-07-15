@smoke @login
Feature: Login Feature

  @positive
  Scenario Outline: login to the Banking application
    When I go to "https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html"
    And I enter the username "<username>"
    And I enter the password "<Password>"
    Then click on login button
Examples:
 | username | Password |
 |  SenthilSmartQAHub | demo |

  Scenario: login to the Banking application
    When I go to "https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html"
    And I enter the username "SenthilSmartQAHub"
    And I enter the password "demo"
    Then click on login button