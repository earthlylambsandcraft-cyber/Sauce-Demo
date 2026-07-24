# Changelog

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