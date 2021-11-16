
Feature: Login Salesforce
Scenario: User tries to login on Salesforce

Given We are on Salesforce Homepage
When User navigates to login menu
When tries to login with valid ceredentials

 |username|abc |
 |password|abcd|

Then User successful logs in