# Midterm — Book Corner

Name: Yar Muhammad Awaim

Roll number: FA24-BCS-113

N = 13 · BP = 613px · H = 91° · K = 4

Accent: `hsl(91, 70%, 45%)`

Exam date: 29 October 2026

Open `index.html` in a browser. The cart icon opens the mini cart; its checkout
link opens `checkout.html`. Without JavaScript, the icon links directly to checkout.
Tailwind and the book images are local; no installation is needed.

## Task 1 — Category navigation

Added four groups of four links to the existing navbar on the listing and product
pages. Desktop uses hover or keyboard focus to open a panel above the content;
phones use four independent native accordions inside the hamburger menu.

## Task 2 — Checkout

Added Contact and Delivery fieldsets with labels and browser validation.
The form stacks on phones and uses two columns from 613px. The cart icons on both
existing pages now link to checkout. There is no JavaScript on the checkout page.

## Task 3 — Cart

Added a plain JavaScript cart that reads book names and prices from the existing
cards. Its array drives the badge, removable item list, and reduce-based total.
Each book is limited to 3 copies; removing a copy re-enables its button.
The cart is held in memory and resets on reload.

## Files changed from the baseline

- `index.html`: category menu, mini cart with checkout link, and script link.
- `product.html`: matching category menu and checkout link.
- `styles.css`: menu styles, checkout layout, validation feedback, and mini-cart styles.
- `script.js`: product additions, removals, copy limits, badge, total, and panel toggle.
- `checkout.html`: new checkout form.
- `README.md`: personal numbers and change summary.
- `screenshots/task-1-*.png`: category menu at the three required widths.
- `screenshots/task-2-*.png`: checkout at the three required widths.
- `screenshots/task-3-*.png`: cart contents, removals, empty state, and copy limit.
- `FA24-BCS-113-midterm.pdf`: identity, task screenshots, and selectable task code.

## Course connections and tools

These follow the saved cuinotes.com lectures: Lecture 4 (forms and validation),
7 (positioning and stacking), 9 (Grid), 10 (responsive design),
and 11–13 (JavaScript, array methods, DOM, and events).
AI tool used: ChatGPT / Codex.

## Original project

Copied unchanged from `assignment-2/` in baseline commit `a7e3e76`.
The original reference is Liberty Books: https://libertybooks.com/.
Its saved homepage screenshot is `images/reference-homepage.png`.
Book covers come from Project Gutenberg. The existing compiled `../tailwind.css`
and its license are retained. The copied Assignment 2 report and screenshots
belong to the baseline; new screenshots are named by midterm task.

## Verification

Tested at 375px, 613px, and 1280px. The cart supports all 8 products, enforces
the 3-copy limit independently, updates totals on removal, and returns to an
empty state after all copies are removed. Tasks 1–2 also work with JavaScript disabled.
