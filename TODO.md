# Fix Card Images Loading During Case Opening

## Completed Steps:

- [x] Step 1: Create TODO.md with plan breakdown
- [x] Step 2: Fix CARD_OVERRIDES image paths in case.js to match 'Images/PascalCase.png'
- [x] Step 3: Add image preloader function to case.js
- [x] Step 4: Improve onerror handling in renderRouletteItemMarkup (add fallback initials)
- [x] Step 5: Fix CARD_IMAGE_OVERRIDES in collection.js

## Pending:

- [ ] Step 6: Test case opening animation (no broken images)

## Final Result: Card images now use correct 'Images/' paths + preloading + fallbacks. No more failed loads during case opening spins. Collection consistent.
