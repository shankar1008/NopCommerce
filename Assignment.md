Test Automation UI Assignment – NopCommerce
You are a Test Engineer who has just received a new assignment for a client project: NopCommerce (https://demo.nopcommerce.com).
Your responsibility is to develop a Test Automation framework following industry best practices. The framework will be implemented using Playwright with TypeScript as the programming language.
SCOPE
Since this is a short-term assignment, your focus will be limited to testing specific functionalities based on your team assignment. You are expected to develop 7-10 automation scripts that cover the most critical aspects of your assigned features.
There are no strict requirements regarding the length of the test scripts or specific validations - all decisions are left to your discretion.
Team Assignments and Features
Team A
    • Members: Adna Alic, Roger Jagare, Zinedin Hadzajlija, Saliha Mustafic
    • Features: User Registration and User Management
Team B
    • Members: Shankar Subramanian, Belma Begluk, Edna Basic, Svitlana Volkova
    • Features: Product Filtering and Product Details Page
Team C
    • Members: Bilal Dedovic, Feby Rachman, Sadzida Basaric
    • Features: Cart Details Page
Team D
    • Members: Elmedin Karisik, Arbon Shehu, Selma Habota
    • Features: Purchase Order and Order History Details
Important Note
Teams should focus exclusively on their assigned functionalities and should not write tests for other teams' features. However, you will naturally need to cover some navigation actions on other pages (e.g., browsing products to add to cart, user registration for testing order history, etc.) as part of your test flows - this is expected and necessary.
This is an individual assignment - each team member must develop their own complete test automation framework covering the assigned features. While you're grouped by feature area, each person should work in their own repository (use existing repo) and write their own test scripts independently.
FRAMEWORK REQUIREMENTS
    • The framework must utilize fixtures and follow the Page Object Model (POM) design pattern.
    • Test scripts should be clean and readable - avoid creating objects or variables directly within the test scripts.
    • Tests must be executable on two browsers of your choice.
    • Avoid using implicit waits. If you encounter challenges that require them, explain your reasoning in a comment above the usage, and describe the alternative approaches you attempted.
    • Use a JSON configuration file for test data or temporary storage during test execution.
    • Use the dotenv package to manage environment variables - store all relevant values accordingly.
    • Leverage test hooks where applicable to manage setup and teardown logic.
    • Apply test parameterization to increase coverage where appropriate.
    • Ensure that tests can be executed in parallel.
EXECUTION AND REPORTING
Once your framework and scripts are complete:
    • Run all tests locally.
    • Include the test report in your repository.
    • Create a comprehensive README.md file with all necessary details including setup instructions, how to run tests, framework architecture, and explain your reasoning behind choosing the specific tests you automated.
    • Push the entire solution, including the report, to Azure DevOps.
    • While tests can be rerun later, we want to see the results from your local execution as part of the assignment.
******

Hi all,

due to the https://demo.nopcommerce.com issue when accessing the web site using automated test scripts use this link: https://webapp-xgczr7dk5pfqs.azurewebsites.net (same app hosted by us).

However, if you run into the same problem (shouldn't be the case), then you can follow the steps from the ⁠NOP_COMMERCE_DOCKER.md file and host nopCommerce locally.

Due to these unforeseen circumstances, assignment deadline is postponed until end of next week (Oct 26th).

If you have any questions, feel free to reach out.