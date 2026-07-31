# Changelog

All notable changes to this project will be documented in this file.

---

## [Unreleased]

### Planned
- Advanced Playwright fixture lifecycle
- Screenshot assertions and visual testing
- Authentication using `storageState`
- Network interception and request mocking
- Playwright API testing
- Additional framework utilities and reporting improvements

---

## [1.1.0] - 2026-07-30

### Added
- Complete Cart page test coverage
- Complete Checkout page test coverage
- Complete Overview page test coverage
- End-to-end purchase workflow (sanity test)
- Cart summary validation
- Order confirmation validation
- Checkout customer information workflow
- Overview payment, shipping, subtotal, tax, and total retrieval methods
- Shared product validation using centralized test data

### Changed
- Standardized Page Object methods across Inventory, Cart, Checkout, and Overview pages
- Refactored confirmation validation to return structured objects through `getConfirmation()`
- Replaced hardcoded product expectations with centralized shared test data
- Improved framework consistency through reusable helper methods
- Reduced duplicated validation logic across specifications

### Fixed
- Corrected cart quantity validation for multiple products
- Fixed badge count expectations after removing all cart items
- Corrected shared product imports in cart specifications
- Fixed order confirmation validation after Page Object refactoring
- Removed deprecated confirmation method references

### Known Limitations
- Several Overview tests still use `console.log()` for exploratory validation and will be converted into assertion-based tests in a future update.
- `getBadgeCount()` remains duplicated across multiple Page Objects and is intentionally deferred for a future framework refactor.

---

## [1.0.0] - 2026-07-27

### Added
- Initial Playwright automation framework
- Page Object Model (POM) architecture
- Custom Playwright fixtures
- Shared test data modules
- Screenshot utility
- Inventory page test suite
- Product validation tests
- Product sorting validation (A–Z, Z–A, Low–High, High–Low)
- HTML reporting
- GitHub Actions CI workflow
- Multi-browser support (Chromium, Firefox, WebKit)
- Environment variable configuration using `.env`
- `.env.example` template for repository sharing

### Changed
- Refactored Page Objects to use constructor-based locators
- Organized reusable locators and helper methods
- Improved test readability and maintainability
- Reduced duplicated selectors throughout the framework
- Updated repository structure and project organization
- Added global Playwright configuration
- Added configurable browser, timeout, `baseURL`, headless/headed mode, and `slowMo` support
- Improved CI configuration to support missing local `.env` files through fallback `baseURL`

### Fixed
- Invalid `baseURL` configuration
- `page.goto('/')` navigation issue
- Inventory price validation (`getProductPrices()` → `getProductPrice()`)
- Overview cancel navigation expectation
- Git tracking rules for generated artifacts
- CI dependency on local environment variables

### Known Issues
- Firefox may occasionally exhibit intermittent rendering freezes during repeated execution against SauceDemo.
- WebKit may occasionally experience timing-related flakiness when all browser projects run concurrently.
- These issues are application/environment related and remain under investigation while continuing framework development.

---

## [0.5.0] - 2026-07-24

### Added
- Inventory product name validation using `toEqual()`
- Inventory product description validation using `toEqual()`
- Inventory product summary validation using shared product data
- Badge count assertions for add-to-cart scenarios
- Product count validation
- Parameterized product price assertions
- Centralized product descriptions in `Data/items.js`

### Changed
- Replaced inventory `console.log()` debugging with assertion-based validation
- Improved inventory specification readability
- Enhanced shared product test data for object-based comparisons
- Refactored inventory assertions to use centralized data

### Known Limitations
- `getBadgeCount()` currently returns an array for compatibility with existing specifications.
- Sorting validation remained pending at this stage and was completed in a later release.

---

## [0.4.0] - 2026-07-15

### Added
- Environment configuration using `.env`
- `.env.example` template
- Global `playwright.config.js`
- HTML Playwright Report support
- GitHub Actions CI/CD workflow
- Automated Playwright test execution
- Playwright report artifact uploads
- Test result artifact uploads for CI debugging

### Changed
- Repository structure
- Browser configuration
- Timeout configuration
- Global `baseURL`
- Browser selection via environment variables
- Headless/headed execution configuration
- Global `slowMo` configuration

### Fixed
- Inventory price validation
- Overview cancel order validation
- Parameterized inventory price tests
- CI configuration for missing local `.env`

---

## [0.3.0] - 2026-07-14

### Added
- Product data parameterization
- Sorting data parameterization

### Changed
- Refactored inventory specifications to use reusable datasets

---

## [0.2.0] - 2026-07-13

### Added
- Custom Playwright fixtures
- Screenshot utility
- External user data support