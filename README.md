# Sauce Demo Playwright Automation Framework

## Overview

This project is an end-to-end UI automation framework built using Playwright and JavaScript.

The framework automates the Sauce Demo e-commerce application and validates critical user workflows including:

- User authentication
- Inventory management
- Product interactions
- Shopping cart operations
- Checkout workflow
- Order completion

The framework was designed using industry-standard automation practices to improve maintainability, scalability, and test reusability.

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



This separates test scenarios from UI implementation details.

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
users.standardUser.username
users.standardUser.password

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

The framework currently automates the following application modules and workflows.

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

---

## Checkout

Covered scenarios:

- Checkout page navigation
- Customer information validation
- Checkout workflow

---

## End-to-End Sanity

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