# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-07-30

### Added
- Complete Cart page test coverage
- Complete Checkout page test coverage
- Complete Overview page test coverage
- End-to-end purchase sanity test
- Order confirmation validation
- Cart summary validation
- Checkout customer information workflow
- Overview payment, shipping, subtotal, tax, and total retrieval methods
- Centralized product validation using shared test data

### Improved
- Refactored confirmation validation to return structured objects through `getConfirmation()`
- Improved test readability by replacing hardcoded inventory expectations with shared product data
- Standardized Page Object methods across Inventory, Cart, Checkout, and Overview pages
- Improved framework consistency through reusable helper methods and centralized assertions
- Enhanced overall maintainability by reducing duplicated validation logic

### Fixed
- Corrected cart product validation to use shared product dataset
- Fixed cart quantity expectations for multiple products
- Fixed badge count expectations after removing all cart items
- Fixed order confirmation validation after Page Object refactoring
- Corrected missing `products` import in cart specification
- Removed outdated references to deprecated confirmation methods

### Tested
- Complete login workflow
- Inventory validation
- Product sorting (A–Z, Z–A, Low–High, High–Low)
- Cart functionality
- Checkout workflow
- Overview page validation
- Complete purchase flow
- Multi-browser execution (Chromium, Firefox, WebKit)

### Result
- ✅ Framework architecture finalized for Version 1.1
- ✅ Full end-to-end purchase workflow covered
- ✅ Consistent Page Object Model implementation across the framework
- ✅ Shared test data used throughout the test suite
- ✅ Framework ready for README publication and GitHub release

### Known Limitations
- Several Overview tests still use `console.log()` for exploratory validation and will be converted into assertion-based tests in a future update.
- `getBadgeCount()` remains duplicated across multiple Page Objects and is intentionally deferred for a future framework refactor.

### Next
- Replace remaining exploratory logging tests with assertions
- Introduce API testing with Playwright
- Expand negative checkout scenarios
- Improve reporting and framework utilities
- Continue roadmap toward advanced Playwright features

## [1.0.0] - 2026-07-29

Known Issue

Firefox occasionally exhibits intermittent rendering freezes
during repeated execution against SauceDemo.

Observed:

- 38/40 passes
- Chromium unaffected
- WebKit unaffected

Status:
Under investigation.

## [1.0.0] - 2026-07-27

### Added
- Initial Playwright test framework
- Page Object Model (POM)
- Custom fixtures
- Shared test data
- Inventory page tests
- Product validation tests
- Sorting validation (A–Z, Z–A, Low–High, High–Low)
- HTML reporting
- GitHub Actions workflow
- Multi-browser support
- Environment variable configuration (.env)

### Improved
- Refactored Page Objects to use constructor-based locators
- Reduced duplicated selectors
- Replaced debug `console.log()` statements with assertions
- Improved readability and maintainability of tests
- Organized reusable methods and locators

### Tested
- Inventory page loads successfully
- Product names, descriptions, and prices
- Product summary validation
- Add/remove cart functionality
- Shopping cart badge updates
- Product sorting functionality

## 2026-07-24

### Added
- Inventory product name validation using `toEqual()`
- Inventory product description validation using `toEqual()`
- Inventory product summary validation using shared test data
- Badge count assertions for add-to-cart scenarios
- Inventory product count validation
- Individual product price assertions using parameterized test data
- Shared product descriptions in `Data/items.js` for reusable inventory validation

### Updated
- Replaced inventory `console.log()` debugging with Playwright assertions
- Improved inventory test coverage and validation reliability
- Refined inventory specification readability
- Enhanced shared product test data for object-based comparisons

### Refactored
- Login page interactions and locator handling
- Inventory assertions to use reusable data fixtures
- Product summary validation to compare against centralized test data

### Result
- ✅ Inventory tests now validate application behavior instead of printing values
- ✅ Reduced manual debugging through assertion-based verification
- ✅ Improved maintainability by centralizing expected product data
- ✅ Cleaner and more reliable Playwright test suite

### Notes
- `getBadgeCount()` currently returns an array by design for compatibility with existing specs. Refactoring has been deferred to avoid unnecessary changes across the framework.
- Sorting validation remains pending and will be implemented with dedicated assertion logic rather than static comparisons.

### Next
- Locator assertions (`toHaveText`, `toBeVisible`, `toHaveValue`, `toHaveCount`)
- Sorting validation (A→Z, Z→A, Low→High, High→Low)
- Advanced Playwright assertions
- Framework cleanup and README improvements
- API testing fundamentals

---

## 2026-07-15

Added:
- Environment configuration using `.env`
- `.env.example` template for repository sharing
- Global `playwright.config.js`
- Global browser configuration
- Global timeout configuration
- Global `baseURL` support
- Global browser selection via environment variables
- Global headless/headed mode configuration
- Global `slowMo` launch configuration
- Repository `.gitignore`
- HTML Playwright Report support
- GitHub Actions CI/CD workflow
- Automated Playwright test execution on repository changes
- Playwright report artifact uploads through GitHub Actions
- Test result artifact uploads for CI debugging

Updated:
- Inventory price validation (`getProductPrice()` fix)
- Overview cancel order validation
- Inventory parameterized price tests
- Repository structure
- Git tracking rules
- CI configuration to support missing local `.env` files using fallback `baseURL`

Fixed:
- Invalid `baseURL` configuration
- `page.goto('/')` navigation issue
- Parameterized price validation bug (`getProductPrices` → `getProductPrice`)
- Overview cancel navigation expectation
- Test artifact tracking
- CI environment variable dependency issues

Result:
- ✅ 192 Playwright tests executed successfully in CI
- ✅ Chromium, Firefox, and WebKit browser execution validated
- ✅ Automated HTML reports generated through GitHub Actions
- ✅ Test artifacts available for debugging failed runs

Notes:
- Some tests may be marked flaky due to external application loading delays, mainly during login page initialization.
- Current focus is improving test stability and reducing flaky retries.
- Known issue: WebKit occasionally exhibits timing-related flakiness when all browser projects run concurrently. Investigation deferred while continuing the learning roadmap.

Next:
- Assertions cleanup
- Smoke / Regression test tagging refinement
- Reduce flaky test behavior
- Page Object Model improvements
- API testing fundamentals

## 2026-07-14

Added:
- Product data parameterization
- Sorting data parameterization

Updated:
- Inventory spec

Next:
- Environment configuration
- Playwright config cleanup

---

## 2026-07-13

Added:
- Custom fixtures
- Screenshot utility
- External user data