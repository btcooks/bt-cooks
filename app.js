(function () {
  const app = document.getElementById("app");
  const searchInput = document.getElementById("search");

  const state = { query: "", category: "All" };

  function esc(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function shortCaption(caption) {
    if (!caption) return "";
    const firstPara = caption.split(/\n\n/)[0].trim();
    if (firstPara.length <= 200) return firstPara;
    return firstPara.slice(0, 200).replace(/\s+\S*$/, "") + "\u2026";
  }

  function allCategories() {
    const cats = new Set(RECIPES.map((r) => r.category));
    return ["All", "Popular", ...[...cats].sort()];
  }

  function popularRecipes() {
    return RECIPES.filter((r) => r.likes)
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 12);
  }

  const POPULAR_IDS = new Set(popularRecipes().map((r) => r.id));

  function fmtLikes(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
  }

  function filtered() {
    const q = state.query.trim().toLowerCase();
    const base =
      state.category === "Popular"
        ? popularRecipes()
        : RECIPES.filter((r) => state.category === "All" || r.category === state.category);
    return base.filter((r) => {
      if (!q) return true;
      const haystack = [
        r.title, r.description, r.caption, r.category,
        ...(r.ingredients || []),
        ...(r.ingredientGroups || []).flatMap((g) => g.items || [])
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    }).sort((a, b) =>
      state.category === "Popular" ? b.likes - a.likes : (b.date || "").localeCompare(a.date || "")
    );
  }

  function heroHtml() {
    return `
      <section class="hero">
        <div class="shell hero-content">
          <p class="hero-kicker">Home cooking &amp; backyard grilling</p>
          <h1 class="hero-title">Real fire. Real flavor.<br/>Recipes worth making.</h1>
          <p class="hero-copy">
            Home cooking and live-fire grilling from Emerson Bartolome &mdash; Next Level Chef Season 5
            contestant and 2x Food Network feature. Every recipe is straight from
            the @bt.cooks feed and written out so you can actually cook it.
          </p>
          <p class="hero-sub">
            <span class="hero-badge">Next Level Chef S5 &middot; FOX</span>
            <span class="hero-badge">Featured 2x on Food Network</span>
          </p>
          <div class="hero-cta">
            <button class="btn primary" data-scroll="#latest">Browse the recipes</button>
          </div>
        </div>
      </section>`;
  }

  function aboutHtml() {
    return `
      <section class="about shell">
        <div class="about-grid">
          <figure class="about-photo">
            <img src="images/about/emerson-apron.jpg" alt="Emerson Bartolome in his apron" loading="lazy" />
            <figcaption>Emerson Bartolome &middot; @bt.cooks</figcaption>
          </figure>
          <div class="about-copy">
            <h2>Meet Emerson Bartolome</h2>
            <p>
              Philippine-born, live-fire raised. Emerson grew up on the flavors,
              traditions, and family-centered food culture of the Philippines before
              moving to the United States, where he fused his heritage with American
              barbecue technique. The result is @bt.cooks: bold seasoning, real fire,
              and recipes people actually recreate in their own backyards.
            </p>
            <p>
              Television came calling because the food demanded it. Emerson competed
              as a home cook on <strong>Next Level Chef Season 5</strong>, Gordon
              Ramsay's hit FOX competition, bringing his signature grilling style and
              Filipino-inspired flavors into the high-pressure kitchen. Before that,
              he cooked his way through <strong>Guy's Grocery Games</strong> on the
              episodes "Global Food Fanatics" and "Host with the Most."
            </p>
            <ul class="accomplishments">
              <li>Self-Competitor, <strong>Next Level Chef Season 5</strong> (FOX &amp; Hulu, 2026)</li>
              <li>Self-Contestant, <strong>Guy's Grocery Games</strong> &mdash; "Global Food Fanatics" &amp; "Host with the Most" (2022)</li>
              <li>Featured <strong>2x on Food Network</strong></li>
              <li><strong>14K+ followers</strong> and 579+ recipe &amp; cook posts on Instagram</li>
              <li>Ambassador for the gear he actually cooks on &mdash; Kamado Joe, MEATER, The Good Charcoal, and more</li>
            </ul>
          </div>
        </div>
        <div class="tv-highlights">
          <h3>TV &amp; cookout highlights</h3>
          <div class="highlight-row">
            <figure class="highlight-card">
              <img src="images/about/next-level-chef-kitchen.jpg" alt="Emerson cooking alongside Gordon Ramsay on Next Level Chef" loading="lazy" />
              <figcaption><strong>Next Level Chef &middot; Season 5</strong><span>Cooking alongside Gordon Ramsay &middot; FOX, 2026</span></figcaption>
            </figure>
            <figure class="highlight-card">
              <img src="images/about/4th-of-july-3.jpg" alt="Emerson in the Next Level Chef apron on set" loading="lazy" onerror="this.closest('figure').remove()" />
              <figcaption><strong>Next Level Chef &middot; Set life</strong><span>In the apron &middot; high-pressure kitchen</span></figcaption>
            </figure>
            <figure class="highlight-card">
              <img src="images/about/guys-grocery-games.jpg" alt="Emerson cooking with Guy Fieri on Guy's Grocery Games" loading="lazy" />
              <figcaption><strong>Guy's Grocery Games</strong><span>Self-Contestant &middot; 2 episodes, 2022</span></figcaption>
            </figure>
            <figure class="highlight-card">
              <img src="images/about/4th-of-july-1.jpg" alt="4th of July cookout" loading="lazy" onerror="this.closest('figure').remove()" />
              <figcaption><strong>4th of July</strong><span>Backyard cookout &middot; live fire</span></figcaption>
            </figure>
          </div>
        </div>
      </section>`;
  }

  function cardHtml(r) {
    const meta = [r.date, r.cookTime ? `Cook ${r.cookTime}` : null].filter(Boolean).join(" \u00B7 ");
    const star =
      r.likes && POPULAR_IDS.has(r.id)
        ? `<span class="star-badge" title="${r.likes} likes on Instagram">&#9733; ${fmtLikes(r.likes)}</span>`
        : "";
    return `
      <a class="card" href="#/r/${encodeURIComponent(r.id)}">
        <div class="card-media">
          <img src="${esc(r.image)}" alt="${esc(r.title)}" loading="lazy" />
          ${star}
          <span class="card-tag">${esc(r.category)}</span>
        </div>
        <div class="card-body">
          <h2>${esc(r.title)}${r.sample ? '<span class="sample-badge">Sample</span>' : ""}</h2>
          <div class="card-meta">${esc(meta)}</div>
          <p class="card-desc">${esc(r.description || "")}</p>
        </div>
      </a>`;
  }

  function feedView() {
    const recipes = filtered();
    const pop = popularRecipes();
    const showPopular = state.category === "All" && !state.query && pop.length > 0;
    const latest = showPopular ? recipes.filter((r) => !POPULAR_IDS.has(r.id)) : recipes;
    const chips = allCategories()
      .map(
        (c) =>
          `<button class="chip ${c === state.category ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`
      )
      .join("");

    return `
      ${heroHtml()}
      ${aboutHtml()}
      ${
        showPopular
          ? `<div class="shell" id="popular">
              <div class="feed-head">
                <h1>Most popular</h1>
                <p>The recipes people keep coming back for &mdash; ranked by Instagram likes.</p>
              </div>
              <div class="grid">${pop.map(cardHtml).join("")}</div>
            </div>`
          : ""
      }
      <div class="shell" id="latest">
        <div class="feed-head">
          <h1>Latest recipes</h1>
          <p>Straight from the Instagram feed &mdash; full recipes, not just captions.</p>
        </div>
        <div class="filters">${chips}</div>
        ${
          latest.length
            ? `<div class="grid">${latest.map(cardHtml).join("")}</div>`
            : `<div class="empty">No recipes match that search.</div>`
        }
      </div>
      ${contactHtml()}
      `;
  }

  function shareHtml(r) {
    const url = encodeURIComponent(location.href);
    const text = encodeURIComponent(`${r.title} by @bt.cooks`);
    return `
      <div class="share-row">
        <span class="share-label">Share this recipe</span>
        <button class="share-btn" data-share="copy">Copy link</button>
        <a class="share-btn" href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" rel="noopener">Share on X</a>
        <a class="share-btn" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener">Facebook</a>
      </div>`;
  }

  function contactHtml() {
    return `
      <section class="contact shell">
        <div class="contact-band">
          <div class="contact-copy">
            <h2>Contact &amp; Inquiries</h2>
            <p>
              Brand partnerships, collaborations, appearances, or just want to talk
              live fire? Send an email and it goes straight to Emerson.
            </p>
          </div>
          <div class="contact-actions">
            <a class="btn primary" href="mailto:bt.cooks@hotmail.com?subject=Inquiry%20for%20bt.cooks"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>bt.cooks@hotmail.com</a>
            <a class="btn ghost dark" href="https://instagram.com/bt.cooks" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>DM on Instagram</a>
            <a class="btn ghost dark" href="https://www.tiktok.com/@bt.cooks" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>TikTok @bt.cooks</a>
          </div>
        </div>
      </section>`;
  }

  function detailView(r) {
    const sorted = [...RECIPES].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    const idx = sorted.findIndex((x) => x.id === r.id);
    const older = sorted[idx + 1];
    const newer = idx > 0 ? sorted[idx - 1] : null;

    const facts = [
      ["Posted", r.date],
      ["Prep", r.prepTime],
      ["Cook", r.cookTime],
      ["Makes", r.servings]
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `<div class="fact"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`)
      .join("");

    const intro = (r.intro || []).map((p) => `<p class="recipe-intro">${esc(p)}</p>`).join("");

    const groups = r.ingredientGroups || [{ heading: null, items: r.ingredients || [] }];
    const ingredientHtml = groups
      .map(
        (g) => `
        ${g.heading ? `<h4 class="group-heading">${esc(g.heading)}</h4>` : ""}
        <ul class="ingredients">${(g.items || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`
      )
      .join("");

    const steps = (r.steps || []).map((s) => `<li>${esc(s)}</li>`).join("");
    const hasIngredients = groups.some((g) => (g.items || []).length > 0);
    const hasSteps = steps.length > 0;
    const needsFullCaption = !hasIngredients || !hasSteps;
    const tips = (r.tips || []).map((t) => `<li>${esc(t)}</li>`).join("");
    const gear = (r.gear || []).map((g) => `<li>${esc(g)}</li>`).join("");
    const nav = `
      ${older ? `<a class="recipe-nav" href="#/r/${encodeURIComponent(older.id)}"><span>&larr; Previous recipe</span><strong>${esc(older.title)}</strong></a>` : "<span></span>"}
      ${newer ? `<a class="recipe-nav next" href="#/r/${encodeURIComponent(newer.id)}"><span>Next recipe &rarr;</span><strong>${esc(newer.title)}</strong></a>` : "<span></span>"}`;

    const short = shortCaption(r.caption);

    return `
      <div class="shell">
        <a class="back-link" href="#/">&larr; All recipes</a>
        <h1 class="recipe-title">${esc(r.title)}${r.sample ? '<span class="sample-badge">Sample</span>' : ""}</h1>
        <p class="recipe-sub">
          ${esc(r.category)} \u00B7 Posted on Instagram
          ${r.instagramUrl ? `<a href="${esc(r.instagramUrl)}" target="_blank" rel="noopener">View the original post</a>` : ""}
        </p>
        ${shareHtml(r)}
        <div class="fact-row">${facts}</div>
        <div class="recipe-hero"><img src="${esc(r.image)}" alt="${esc(r.title)}" /></div>
        ${intro}
        ${
          hasIngredients || hasSteps
            ? `<div class="recipe-columns">
          ${hasIngredients ? `<div class="panel"><h3>Ingredients</h3>${ingredientHtml}</div>` : '<div class="panel"></div>'}
          ${hasSteps ? `<div class="panel"><h3>Instructions</h3><ol class="steps">${steps}</ol>
            ${tips ? `<h3>Chef's Tips</h3><ul class="tips-list">${tips}</ul>` : ""}
            ${gear ? `<h3>Gear Used</h3><ul class="gear-list">${gear}</ul>` : ""}
            ${r.notes ? `<h3>Notes</h3><div class="note-block">${esc(r.notes)}</div>` : ""}</div>` : '<div class="panel"></div>'}
        </div>`
            : ""
        }
        ${
          short
            ? `<blockquote class="caption-block"><span class="caption-label">From the Instagram caption</span>${esc(short)}${r.instagramUrl ? ` <a href="${esc(r.instagramUrl)}" target="_blank" rel="noopener">Read the full post</a>` : ""}</blockquote>`
            : ""
        }
        ${
          needsFullCaption && r.caption
            ? `<details class="caption-details"><summary>Read the full Instagram caption</summary><div class="caption-full">${esc(r.caption)}</div></details>`
            : ""
        }
        <section class="follow-cta">
          <h2>New recipes drop on Instagram first</h2>
          <p>Follow along as every cook happens live in the backyard.</p>
          <a class="btn primary" href="https://instagram.com/bt.cooks" target="_blank" rel="noopener">Follow @bt.cooks</a>
        </section>
        <nav class="recipe-nav-row">${nav}</nav>
      </div>`;
  }

  function render() {
    const hash = decodeURIComponent(location.hash || "");
    const match = hash.match(/^#\/r\/(.+)$/);
    if (match) {
      const recipe = RECIPES.find((r) => r.id === match[1]);
      if (recipe) {
        document.title = `${recipe.title} - bt.cooks`;
        app.innerHTML = detailView(recipe);
        window.scrollTo(0, 0);
        return;
      }
    }
    document.title = "bt.cooks - The Recipe Feed";
    app.innerHTML = feedView();
  }

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    if (location.hash && location.hash !== "#/") {
      location.hash = "#/";
    } else {
      render();
    }
  });

  app.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) {
      state.category = chip.dataset.cat;
      render();
      return;
    }
    const scrollBtn = e.target.closest("[data-scroll]");
    if (scrollBtn) {
      const target = document.querySelector(scrollBtn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const shareBtn = e.target.closest("[data-share='copy']");
    if (shareBtn) {
      navigator.clipboard.writeText(location.href).then(() => {
        shareBtn.textContent = "Link copied!";
        setTimeout(() => { shareBtn.textContent = "Copy link"; }, 2000);
      });
    }
  });

  window.addEventListener("hashchange", () => {
    if (location.hash !== "#/" && searchInput.value) {
      searchInput.value = "";
      state.query = "";
    }
    render();
  });

  render();
})();
