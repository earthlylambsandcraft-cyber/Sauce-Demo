This framework as of @07/14

# Sauce Demo Playwright Automation Framework

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Framework Design

- Page Object Model
- Custom Fixtures
- Hooks
- Test Data Management
- Screenshot Capture

## Test Coverage

- Login
- Inventory
- Cart
- Checkout
- Overview

Framework structure of the Project

Pages
 |
 ├── LoginPage
 ├── InventoryPage
 ├── CartPage
 ├── CheckoutPage
 └── OverviewPage


Fixtures

 └── pageFixtures


Hooks

 └── testHook


Utils

 └── Screenshot


Data

 ├── items.js
 └── users.js


Specs

 ├── login
 ├── inventory
 ├── cart
 ├── checkout
 ├── overview
 └── sanity