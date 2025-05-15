

# Cypress-OrangeHRM-Tests ![Node.js CI](https://img.shields.io/badge/Node.js-%3E%3D14.0.0-brightgreen?logo=node.js) ![Cypress](https://img.shields.io/badge/Cypress-Testing-9cf?logo=cypress) ![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?logo=javascript)

> **Automated end-to-end test suite for [OrangeHRM](https://opensource-demo.orangehrmlive.com/) using Cypress.**

---

## 📋 Overview

This repository contains Cypress test automation scripts for the OrangeHRM demo application. The project follows the Page Object Model (POM) pattern for scalability and maintainability. Tests cover core User Management features, such as user creation, editing roles, resetting passwords, and validation scenarios.

---

## 🗂️ Project Structure

```
cypress/
  ├── Locators/                 # Centralized selectors for UI elements
  │    ├── pageElements.js
  │    └── pageLocators.js
  ├── e2e/
  │    ├── Pages/               # Page Object Model classes for each page
  │    │    ├── adminPage.js
  │    │    ├── dashBoardPage.js
  │    │    ├── landingPage.js
  │    │    ├── loginPage.js
  │    │    └── userManagementPage.js
  │    └── Tests/               # Cypress test cases
  │         ├── addingNewUser.cy.js
  │         ├── bulkUserCreation.cy.js
  │         ├── deletingUser.cy.js
  │         ├── editingUserRole.cy.js
  │         ├── resettingUserPassword.cy.js
  │         ├── searchingUsersForRole.cy.js
  │         ├── updatingSystemUserStatus.cy.js
  │         ├── validatingUserRolePermissions.cy.js
  │         ├── verifyMandatoryFields.cy.js
  │         └── verifyingDuplicateUser.cy.js
  ├── fixtures/                 # Test data for data-driven testing
  │    ├── example.json
  │    └── testData.json
  └── support/                  # Custom commands and reusable utilities

cypress.config.js               # Cypress configuration file
package.json                    # Project dependencies and scripts
package-lock.json
```

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/HripsimeManukyan/Cypress-OrangeHRM-Tests.git
cd Cypress-OrangeHRM-Tests
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run Tests**

* Open Cypress Test Runner:

  ```bash
  npx cypress open
  ```
* Run tests headlessly (in CLI):

  ```bash
  npx cypress run
  ```

---

## 🧪 Example Test Data

Located at: `cypress/fixtures/testData.json`

```json
{
  "newUsers": [
    {
      "employeeName": "Jobin Mathew Sam",
      "username": "jobin.sam2024",
      "password": "TestPass123!",
      "role": "ESS",
      "status": "Enabled"
    },
    ...
  ]
}
```

---

## 🔑 Credentials

Sample test credentials (for demo site):

* **URL:** [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)
* **Username:** `Admin`
* **Password:** `admin123`

---

## 🏗️ Features Covered

* Add new user
* Bulk user creation
* Edit user roles
* Delete users
* Reset user passwords
* Search users by role
* Validate role permissions
* Mandatory field validation
* Duplicate user checks

---

## 👩‍💻 Technologies Used

* [Cypress](https://www.cypress.io/)
* JavaScript (ES6)
* Page Object Model (POM)
* Node.js

---

## 📈 Badges

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hripsime-blue?logo=linkedin)](https://www.linkedin.com/in/hripsime-manukyan-0336901a0/)
[![GitHub](https://img.shields.io/badge/GitHub-Portfolio-black?logo=github)](https://github.com/HripsimeManukyan)
[![Portfolio Badge](https://img.shields.io/badge/My_Portfolio-Visit_Now-green?logo=notion\&style=for-the-badge)](https://tasteful-grape-0c4.notion.site/Hripsime-QA-Engineer-Portfolio-1f12cb0861fc80819f14d936f47643d5)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♀️ Author

**Hripsime Manukyan**





