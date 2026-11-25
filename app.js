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
    return ["All", ...[...cats].sort()];
  }

  function filtered() {
    const q = state.query.trim().toLowerCase();
    return RECIPES.filter((r) => {
      const inCategory = state.category === "All" || r.category === state.category;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = [
        r.title, r.description, r.caption, r.category,
        ...(r.ingredients || []),
        ...(r.ingredientGroups || []).flatMap((g) => g.items || [])
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    }).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }

  function heroHtml() {
    return `
      <section class="hero">
        <img class="hero-bg" src="images/hero-braise.jpg" alt="Smoked and braised chuck roast with peppers and mushrooms" />
        <div class="hero-overlay"></div>
        <div class="shell hero-content">
          <p class="hero-kicker">Home cooking &amp; backyard grilling</p>
          <h1 class="hero-title">BT COOKS</h1>
          <p class="hero-sub">
            <span class="hero-badge">Next Level Chef S5 &middot; FOX</span>
            <span class="hero-badge">Featured 2x on Food Network</span>
          </p>
          <div class="hero-cta">
            <button class="btn primary" data-scroll="#latest">Browse the recipes</button>
            <a class="btn ghost" href="https://instagram.com/bt.cooks" target="_blank" rel="noopener">Follow @bt.cooks</a>
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
              <img src="images/about/guys-grocery-games.jpg" alt="Guy's Grocery Games" loading="lazy" />
              <figcaption><strong>Guy's Grocery Games</strong><span>Self-Contestant &middot; 2 episodes, 2022</span></figcaption>
            </figure>
            <figure class="highlight-card">
              <img src="images/about/4th-of-july-1.jpg" alt="4th of July cookout" loading="lazy" onerror="this.closest('figure').remove()" />
              <figcaption><strong>4th of July</strong><span>Backyard cookout &middot; live fire</span></figcaption>
            </figure>
          </div>
        </div>
        <div class="partners">
          <h3>Brands he cooks with</h3>
          <div class="partner-chips">
            <span>Kamado Joe</span><span>The Good Charcoal</span><span>MEATER</span>
            <span>Blazing Star BBQ</span><span>TFTI BBQ</span><span>Reserve Blends</span><span>Benchmade</span>
          </div>
        </div>
      </section>`;
  }

  function cardHtml(r) {
    const meta = [r.date, r.cookTime ? `Cook ${r.cookTime}` : null].filter(Boolean).join(" \u00B7 ");
    return `
      <a class="card" href="#/r/${encodeURIComponent(r.id)}">
        <div class="card-media">
          <img src="${esc(r.image)}" alt="${esc(r.title)}" loading="lazy" />
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
    const chips = allCategories()
      .map(
        (c) =>
          `<button class="chip ${c === state.category ? "active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`
      )
      .join("");

    return `
      ${heroHtml()}
      ${aboutHtml()}
      <div class="shell" id="latest">
        <div class="feed-head">
          <h1>Latest recipes</h1>
          <p>Straight from the Instagram feed &mdash; full recipes, not just captions.</p>
        </div>
        <div class="filters">${chips}</div>
        ${
          recipes.length
            ? `<div class="grid">${recipes.map(cardHtml).join("")}</div>`
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
            <a class="btn primary" href="mailto:bt.cooks@hotmail.com?subject=Inquiry%20for%20bt.cooks">bt.cooks@hotmail.com</a>
            <a class="btn ghost dark" href="https://instagram.com/bt.cooks" target="_blank" rel="noopener">DM on Instagram</a>
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
        <div class="recipe-columns">
          <div class="panel">
            <h3>Ingredients</h3>
            ${ingredientHtml}
          </div>
          <div class="panel">
            <h3>Instructions</h3>
            <ol class="steps">${steps}</ol>
            ${tips ? `<h3>Chef's Tips</h3><ul class="tips-list">${tips}</ul>` : ""}
            ${gear ? `<h3>Gear Used</h3><ul class="gear-list">${gear}</ul>` : ""}
            ${r.notes ? `<h3>Notes</h3><div class="note-block">${esc(r.notes)}</div>` : ""}
          </div>
        </div>
        ${
          short
            ? `<blockquote class="caption-block"><span class="caption-label">From the Instagram caption</span>${esc(short)}${r.instagramUrl ? ` <a href="${esc(r.instagramUrl)}" target="_blank" rel="noopener">Read the full post</a>` : ""}</blockquote>`
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
