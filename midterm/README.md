# Midterm — Book Corner

Name: Yar Muhammad Awaim

Roll number: FA24-BCS-113

N = 13 · BP = 613px · H = 91° · K = 4

Accent: `hsl(91, 70%, 45%)`

Exam date: 29 October 2026

Open `index.html` in a browser. The cart icon opens `checkout.html`.
Tailwind and the book images are local; no installation is needed.

## Task 1 — Category navigation

Added four groups of four links to the existing navbar on the listing and product
pages. Desktop uses hover or keyboard focus to open a panel above the content;
phones use four independent native accordions inside the hamburger menu.

## Task 2 — Checkout

Added Contact and Delivery fieldsets with labels and browser validation.
The form stacks on phones and uses two columns from 613px. The cart icons on both
existing pages now link to checkout. There is no JavaScript on the checkout page.

## Files changed from the baseline

- `index.html`: category menu and checkout link.
- `product.html`: matching category menu and checkout link.
- `styles.css`: menu styles, checkout layout, and validation feedback.
- `checkout.html`: new checkout form.
- `README.md`: personal numbers, change summary, and explanation notes.
- `screenshots/task-2-*.png`: checkout at the three required widths.

## Explain Task 1

- `:hover` opens the panel with a mouse. `:focus-within` keeps it open while the
  trigger or any link inside it has keyboard focus. Tab can open it by itself.
- `position: absolute` removes the panel from normal flow, so opening it does not
  move the page. The positioned header is its reference point.
- The header's `z-index` puts the menu above the main content.
- `repeat(4, minmax(0, 1fr))` creates four equal columns.
- `<details>` and `<summary>` provide the mobile open/close behaviour themselves.
  Without an `open` attribute, each starts closed.

## Explain Task 2

- `<fieldset>` groups related fields; `<legend>` names each group. Matching
  `for` and `id` values connect each label to its field.
- `required` prevents empty submissions. `type="email"` checks email format.
- `type="tel"` alone does not enforce a phone format. The pattern
  `03[0-9]{2}-[0-9]{7}` means: literal 03, two digits, a hyphen, then seven digits.
  HTML checks the entire value against this pattern.
- The date uses `min="2026-10-29"` and `max="2026-11-11"`. Adding 13 days to
  29 October gives 11 November; both endpoints are allowed. These are fixed exam
  dates, so no date-calculation script is needed.
- `:user-invalid` adds the red border only after interaction or a submission
  attempt. The `~ .field-error` selector reveals the message in the same wrapper.
  Plain `:invalid` would show errors immediately on an empty required form.
- The form is a Grid. At `min-width: 613px`, it has two equal columns. Each
  `.field-row` also becomes a Grid with a 5rem label column and a flexible input
  column. Below that width, both grids use one column.
- `grid-column: 1 / -1` makes the submit button span every form column.
- The browser blocks invalid submission itself. A valid submission reloads this
  static demo page with form values in the URL; it does not create an order.

## Practise these small changes by hand

1. Change BP: edit the two `min-width: 613px` rules in `styles.css`.
2. Change desktop menu columns: edit `repeat(4, ...)` and add/remove a menu group
   in each page's HTML to match.
3. Change the delivery window: edit the date's `max` and its two visible messages.
4. Add a city: add an `<option>` inside the city `<select>`.
5. Change label width: edit `5rem` in the checkout `.field-row` Grid rule.

## Course connections and tools

These follow the saved cuinotes.com lectures: Lecture 4 (forms and validation),
7 (positioning and stacking), 9 (Grid), and 10 (responsive design).
AI tool used: ChatGPT / Codex.

## Original project

Copied unchanged from `assignment-2/` in baseline commit `a7e3e76`.
The original reference is Liberty Books: https://libertybooks.com/.
Its saved homepage screenshot is `images/reference-homepage.png`.
Book covers come from Project Gutenberg. The existing compiled `../tailwind.css`
and its license are retained. The copied Assignment 2 report and screenshots
belong to the baseline; new screenshots are named by midterm task.

Task 3 and the final midterm PDF have not been added yet.
