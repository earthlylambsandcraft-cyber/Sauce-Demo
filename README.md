# Sauce Demo Playwright Automation Framework
![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![Status](https://img.shields.io/badge/Status-Active-blue)

## Overview

This project is an end-to-end UI automation framework built using Playwright and JavaScript.

Application Under Test:

https://www.saucedemo.com/


The framework automates the Sauce Demo e-commerce application and validates critical user workflows including:

- User authentication
- Inventory management
- Product interactions
- Shopping cart operations
- Checkout workflow
- Order completion

The framework was designed using industry-standard automation practices to improve maintainability, scalability, and test reusability.

# Table of Contents

- Overview
- Tech Stack
- Framework Architecture
- Framework Design
  - Page Object Model
  - Custom Fixtures
  - Hooks
  - Data Driven Testing
- Test Coverage
- Installation
- Running Tests

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | End-to-end browser automation |
| JavaScript | Automation scripting language |
| Node.js | Runtime environment |
| npm | Package management |
| Git | Version control |
| GitHub | Source repository |

---

# Framework Architecture

```text
Sauce Demo Automation Framework

├── Pages
│ ├── LoginPage.js
│ ├── InventoryPage.js
│ ├── CartPage.js
│ ├── CheckoutPage.js
│ └── OverviewPage.js
│
├── Specs
│ ├── login.spec.js
│ ├── inventory.spec.js
│ ├── cart.spec.js
│ ├── checkout.spec.js
│ └── sanity.spec.js
│
├── Fixtures
│ └── pageFixtures.js
│
├── Hooks
│ └── testHook.js
│
├── Data
│ ├── users.js
│ ├── items.js
│ └── sorting.js
│
├── Utils
│ └── Screenshot.js
│
├── playwright.config.js
├── package.json
└── README.md
```

Each directory has a dedicated responsibility within the framework:

- **Pages** – Contains Page Object Model classes responsible for UI interactions.
- **Specs** – Contains automated test scenarios and assertions.
- **Fixtures** – Creates and injects reusable Page Object instances into tests.
- **Hooks** – Handles common setup and teardown actions.
- **Data** – Stores reusable test data such as users, products, and sorting options.
- **Utils** – Contains reusable helper classes used across the framework.


---

# Framework Design

## Page Object Model (POM)

The framework uses the Page Object Model design pattern.

Each application page has its own class containing:

- Locators
- UI actions
- Page-specific methods

Example Page Objects:

- LoginPage.js
- InventoryPage.js
- CartPage.js
- CheckoutPage.js
- OverviewPage.js



This separation keeps test scenarios independent from UI implementation details, making locator updates easier and reducing maintenance effort.

Benefits:

- Improved maintainability
- Reusable actions
- Easier locator updates

---

## Custom Fixtures

The framework uses Playwright custom fixtures to manage and inject Page Object instances into test files.

Instead of creating Page Object instances manually inside every test:

```javascript
const inventory = new InventoryPage(page);
```

Tests can directly request the required Page Object fixtures:

```javascript
test('Inventory test', async({inventory}) => {

});
```


The fixture layer is responsible for creating and providing reusable Page Object instances.

Currently available fixtures:

- Login
- Inventory
- Cart
- Checkout
- Overview

Benefits:

- Reduces repeated object instantiation
- Improves test readability
- Centralizes Page Object management
- Makes the framework easier to maintain and scale

---

## Hooks

The framework uses Playwright hooks to manage common test lifecycle actions.

Hooks are used to execute reusable actions before and after test execution.

### Before Each Test

The framework automatically navigates to the application URL before every test.

Example:

```javascript
test.beforeEach(async({page}) => {

    await page.goto('https://saucedemo.com');

});
```

### After Each Test

After test execution, the framework checks the test status.

If a test fails, a screenshot is automatically captured using the Screenshot utility.

Example workflow:

```text
Test Execution

      ↓

Test Failed?

      ↓ Yes

AfterEach Hook

      ↓

Screenshot Utility

      ↓

test-results/
```

Benefits:

- Improves debugging after failures
- Automatically captures failure evidence
- Reduces manual screenshot handling
- Provides consistent failure reporting

---

## Data Driven Testing

The framework separates test data from test implementation by storing reusable values in dedicated data files.

Current data files include:

- users.js
- items.js
- sorting.js

This approach removes hardcoded values from test scenarios and allows the same test logic to execute against multiple data sets.

### Current Test Data

#### users.js

Stores reusable login credentials for different user types.

Example:

```javascript
const username = users.standardUser.username;
const password = users.standardUser.password;

```

#### items.js

Stores reusable product information used throughout inventory and cart tests.

Example:

```javascript
productNames.backpack

products = [
    {
        name: "Sauce Labs Backpack",
        price: "$29.99"
    }
]
```

#### sorting.js

Stores available inventory sorting options.

Example:

```javascript
sortingOptions = [
    "Name (A to Z)",
    "Name (Z to A)",
    "Price (low to high)",
    "Price (high to low)"
]
```

### Parameterized Testing

The framework supports parameterized test execution by looping through reusable datasets.

Instead of creating separate tests for every product or sorting option, the same test logic can execute against multiple data inputs.

Example:

```javascript
for (const product of products) {

    test(`Add ${product.name}`, async ({login, inventory}) => {

        await inventory.addProduct(product.name);

    });

}
```

Benefits:

- Eliminates duplicated test cases
- Improves scalability
- Centralizes test data management
- Simplifies future maintenance

---

# Test Coverage

The framework currently automates the core functionality of the Sauce Demo application.

The following modules and user workflows are covered by the automated test suite:

## Login

Covered scenarios:

- Valid user authentication
- Invalid username validation
- Invalid password validation
- Locked user validation

---

## Inventory

Covered scenarios:

- Inventory page validation
- Product count verification
- Product information retrieval
- Product addition
- Product removal
- Badge count validation
- Product sorting
- Product data validation
- UI assertions


---

## Cart

Covered scenarios:

- Cart navigation
- Product display
- Product price validation
- Product quantity validation
- Continue shopping
- Checkout navigation
- Product removal
- Empty cart validation
- Cart badge updates
- Cart state validation
- Price assertions
- Quantity assertions

---

## Checkout

Covered scenarios:

- Checkout page navigation
- Customer information validation
- Checkout workflow

---

## End-to-End Purchase Flow

Critical user workflow validation covering:

```text
Login
    ↓
Inventory
    ↓
Cart
    ↓
Checkout
    ↓
Overview
    ↓
Finish Order
```

---

# Prerequisites

Ensure the following software is installed before running the framework:

- Node.js (v20 or later)
- npm
- Git
- Visual Studio Code (recommended)

# Installation


## Clone the Repository

To run the framework locally, complete the following setup steps:

```bash
git clone https://github.com/earthlylambsandcraft-cyber/Sauce-Demo.git
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test Specs/cart.spec.js
```

Open the HTML report:

```bash
npx playwright show-report
```


---

# Future Improvements

Planned enhancements for the framework include:

- Environment configuration using `.env`
- Multi-environment execution (QA, Staging, Production)
- Advanced assertions and validation helpers
- GitHub Actions CI/CD pipeline
- Advanced HTML and Allure reporting
- Cross-browser execution
- Parallel test optimization
- API testing with Playwright
- Docker support

---

# Project Status

This framework is actively being developed as part of a continuous learning journey in Playwright automation and software quality assurance.

New features and architectural improvements will be added as the project evolves.