# Changelog

All notable changes to this project will be documented in this file.

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