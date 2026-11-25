# The Recipe Feed

A simple static site that hosts every recipe you have posted on Instagram.
No build step, no dependencies. Open `index.html` in a browser, or host the
folder on any static host (GitHub Pages, Netlify, Vercel).

## Adding your real recipes

All recipes live in `recipes.js`. Each entry mirrors one Instagram post:

```js
{
  id: "unique-short-id",          // used in the URL, e.g. #/r/miso-butter-pasta
  title: "Recipe Title",
  date: "2026-01-15",             // Instagram post date
  category: "Mains",              // Breakfast / Mains / Sides / Desserts / Drinks
  image: "https://...",           // photo URL for the post
  instagramUrl: "https://instagram.com/p/...",  // link back to the post
  caption: "The caption exactly as posted",
  description: "One-line summary for the card",
  prepTime: "10 min",
  cookTime: "20 min",
  servings: "2 bowls",
  ingredients: ["..."],
  steps: ["..."],
  notes: "optional",
  sample: false
}
```

The six recipes currently in the file were imported from @bt.cooks posts whose
captions contained full recipes. Posts without recipe details (announcements,
taste tests, promos) are intentionally excluded.

## Going live

When you host the site on a real domain, update the `og:image` meta tag in
`index.html` to an absolute URL (for example
`https://yourdomain.com/images/DgA2hwqy6yf.jpg`). Social platforms require
absolute URLs for link previews. The share buttons and copy-link button work
off the current page URL automatically.

## Adding personal photos

The About section's "TV & cookout highlights" row looks for these files:

- `images/about/4th-of-july-1.jpg` (add `-2`, `-3`, etc. to show more slots by
  copying the figure block in `app.js`)

Drop the photos in with those exact names and they appear automatically. Any
missing photo slot hides itself, so the layout never breaks.

## Getting your posts out of Instagram

Instagram's data export (Settings > Your activity > Download your information)
includes your posts and captions. Send the export or paste your captions with
photos and the recipes can be converted into `recipes.js` entries directly.
