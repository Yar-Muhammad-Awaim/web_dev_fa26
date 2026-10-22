# Assignment 2 — Book Corner

A static, responsive bookstore with a listing page and one product detail page.

## Reference website

- **Name:** Liberty Books
- **Full URL:** https://libertybooks.com/
- **Homepage screenshot:**

![Liberty Books homepage](images/reference-homepage.png)

The reference informed the book-cover cards, category navigation, rupee prices,
cart indicator and separate product information page. The HTML and CSS are
written for this assignment rather than copied from the reference.

## Run

Open `index.html` in a browser. Select **Pride and Prejudice** to open `product.html`.
All styles and book images are stored locally, so no installation is needed.
The navbar hamburger works below 768px using a checkbox and CSS. Add to Cart
buttons and the cart indicator are static for this assignment.

Tailwind CSS provides the responsive grid, navigation layout, cards, buttons and form
utilities. The compiled `../tailwind.css` is checked in for offline viewing. The grid is one column on phones, two at 768px, and four at 992px.
Custom styles use the box model, Flexbox, Grid and media queries from lectures 5–10.

## Assets

Book-cover images are downloaded from Project Gutenberg's public-domain book
collection: https://www.gutenberg.org/ (ebooks 1342, 1661, 11, 120, 514, 84, 2701
and 17396). Prices are sample coursework prices, not live store prices.
Tailwind’s MIT license is in `../TAILWIND-LICENSE.txt`.

## Submission

The completion PDF contains the task statement, running screenshots at 375px,
768px and 1440px, and selectable HTML/CSS source. Screenshots are also saved in
`screenshots/`. The reference homepage capture is separate from the built pages.

## Rebuild styles

From the repository root, run `npm ci` and `npm run build:css` after editing
Tailwind classes. `tailwind.input.css` declares the three HTML sources and keeps
the desktop breakpoint at 992px. No build or network connection is needed to view
the committed pages.
