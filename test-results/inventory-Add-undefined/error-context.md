# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.js >> Add undefined
- Location: inventory.spec.js:16:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.inventory_item')
Expected: 1
Received: 6
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('.inventory_item')
    14 × locator resolved to 6 elements
       - unexpected value "6"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | const { expect } = require("@playwright/test");
  2   | 
  3   | class InventoryPage {
  4   |     constructor(page) {
  5   |         this.page = page
  6   |     }
  7   | 
  8   | 
  9   | 
  10  | async verifyInventoryPage() {
  11  |     
  12  |         await expect(this.page).toHaveURL(/inventory.html/);
  13  | 
  14  |         const inventoryTitle = this.page.getByText('Products');
  15  |     
  16  |         await expect(inventoryTitle).toBeVisible();
  17  |     
  18  |     }    
  19  | 
  20  | async openCart() {
  21  | 
  22  |     const goToCart =  this.page.locator('.shopping_cart_link')
  23  | 
  24  |     await goToCart.click();
  25  | 
  26  | 
  27  | }
  28  | 
  29  | async sortBy(options) {
  30  | 
  31  |     await this.page
  32  |     .locator('.product_sort_container')
  33  |     .selectOption({ label : options });
  34  | 
  35  | 
  36  | }
  37  | 
  38  | async addProduct(productName) {
  39  | 
  40  |         const itemInStore = this.page.locator('.inventory_item')
  41  |             .filter({
  42  |                 hasText: productName
  43  |             });
  44  | 
> 45  |         await expect(itemInStore).toHaveCount(1);
      |                                   ^ Error: expect(locator).toHaveCount(expected) failed
  46  | 
  47  |         await itemInStore
  48  |         .getByRole('button')
  49  |         .click();
  50  | 
  51  |         }
  52  | 
  53  | 
  54  | async removeProduct(productName) {
  55  |     
  56  |         const removeItem = this.page.locator('.inventory_item')
  57  |             .filter({
  58  |                 hasText: productName
  59  |             });
  60  | 
  61  |         await removeItem
  62  |         .getByRole('button')
  63  |         .click();
  64  | 
  65  |         }
  66  | 
  67  | 
  68  | async getBadgeCount() {
  69  |     
  70  |     const itemQty = this.page.locator('.shopping_cart_badge');
  71  |     
  72  |     const badgeSorting = await itemQty.count();
  73  | 
  74  |         const badgeQty = [];
  75  | 
  76  |         for ( let i = 0; i < badgeSorting; i ++ ) {
  77  |             
  78  |             const badgeNumber = itemQty.nth(i)
  79  |             
  80  |             const badgeContent = await badgeNumber.textContent();
  81  | 
  82  |             badgeQty.push(badgeContent);
  83  |             
  84  |         }
  85  |         
  86  |         return badgeQty;
  87  |      
  88  |     }
  89  | 
  90  | 
  91  | async getProductCount() {
  92  | 
  93  |     return await this.page
  94  |     .locator('.inventory_item')
  95  |     .count();
  96  |     
  97  | }
  98  | 
  99  | 
  100 | async getProductNames() {
  101 |         
  102 |         const names = [];
  103 | 
  104 |         const itemShelved = this.page.locator('.inventory_item_name');
  105 | 
  106 |         const itemslooped = await itemShelved.count();
  107 | 
  108 |         for ( let i = 0; i < itemslooped; i++ ) {
  109 | 
  110 |             const item = itemShelved.nth(i);
  111 | 
  112 |             const name =  await item.textContent();
  113 | 
  114 |             names.push(name);    
  115 |         }
  116 | 
  117 |         return names;
  118 |     }
  119 | 
  120 | async getProductDescriptions() {
  121 | 
  122 |         const descriptions = [];
  123 | 
  124 |         const itemShelved = this.page.locator('.inventory_item_desc');
  125 | 
  126 |         const itemslooped = await itemShelved.count();
  127 | 
  128 |         for ( let i = 0; i < itemslooped; i++ ) {
  129 | 
  130 |             const item = itemShelved.nth(i);
  131 | 
  132 |             const description =  await item.textContent();
  133 | 
  134 |             descriptions.push(description);
  135 |             
  136 |         }
  137 | 
  138 |         return descriptions;
  139 | 
  140 | }
  141 | 
  142 | async getProductPrices() {
  143 | 
  144 |     const prices = [];
  145 | 
```