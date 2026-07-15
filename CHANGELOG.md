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

Updated:
- Inventory price validation (`getProductPrice()` fix)
- Overview cancel order validation
- Inventory parameterized price tests
- Repository structure
- Git tracking rules

Fixed:
- Invalid `baseURL` configuration
- `page.goto('/')` navigation issue
- Parameterized price validation bug (`getProductPrices` → `getProductPrice`)
- Overview cancel navigation expectation
- Test artifact tracking

Result:
- ✅ 64 / 64 Playwright tests passing

Next:
- Assertions cleanup
- Smoke / Regression test tagging
- API testing fundamentals
- GitHub Actions CI/CD pipeline

---

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