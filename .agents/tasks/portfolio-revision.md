# Portfolio Revision (user follow-up) — OVERRIDES plan.md Step 4 & Decision #8

Context: The user reviewed the in-progress portfolio update and said: in "My Portfolio", do NOT use images for the software projects, because the available screenshots are not from those projects. Only genuine graphics-DESIGN work may keep its images.

Goal: Revise ONLY the `#portfolio` section of `/usr/local/var/www/prodevevans/index.html`. Everything else on BOTH pages is already correct — do NOT touch any other section.

## A) The 3 software projects = TEXT-ONLY cards (NO images)

The three CV software projects must be shown WITHOUT any `<img>`. These image paths MUST NOT be used for them (they are not from these projects): `img/events/web/goovatech.png`, `img/events/web/timetabling.PNG`, `img/events/Graphics/SCHOOL OF HOSPITALITY AND LANGUAGES .png`.

Each of the 3 cards:
- Wrapper: `class="col-lg-4 col-md-6 mb-4 portfolio-item Development"` (keep the `.portfolio-item` / Isotope class so filters still work).
- Inside, instead of an `<img>`, render a text panel: a `<div>` with inline styles, e.g.
  `style="min-height:230px; background:#1a1a1a; color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:1.25rem; border-radius:.3rem;"`
  containing: a relevant FontAwesome icon (`<i class="fas ...">`), the project name in an `<h6>`, a one-line `<p>` description, and a small row of tech-tag spans/badges.
- Do NOT add lightbox or any `<a>` image link for these three.

Projects & content:
1. **AI-Powered WhatsApp Messaging Application** — icon `fab fa-whatsapp` — desc: "NLP-powered WhatsApp Business API messaging app with conversational routing and human handoff." — tags: WhatsApp Business API, NLP, Conversational AI.
2. **Workshop & Garage Management Application** — icon `fas fa-wrench` — desc: "Workshop platform for garage operations, job scheduling and AI repair diagnostics." — tags: AI Diagnostics, Job Scheduling, Real-time Tracking.
3. **QR-Powered Hotel Management System (HMS)** — icon `fas fa-qrcode` — desc: "Multi-department hospitality platform with reservations, POS and a scan-to-order QR menu." — tags: QR Menu, POS, Reservations.

## B) Add 6 Design cards WITH real images

List `/usr/local/var/www/prodevevans/img/events/Graphics/` and pick 6 DISTINCT real files (verify each path EXACTLY, preserving case and any spaces in the filename). Each card:
- Wrapper: `class="col-lg-4 col-md-6 mb-4 portfolio-item Design"`.
- `.position-relative overflow-hidden mb-2` wrapper + `<img class="img-fluid rounded w-100" src="..." alt="...">` + the existing `.portfolio-btn` overlay whose `<a>` holds the design title (keep the existing no-href `<a>` pattern; do NOT add lightbox).
- Caption = a cleaned-up version of the filename (e.g. "Digiview Training Institute - Advert", "Topmax School of Engineering", "Labour Day Graphic", "Church Event Flyer", "Birthday Poster", "Unison Event").
- Do NOT invent filenames. If fewer than 6 suitable design images exist, use as many real ones as exist and report the count.

## C) Filter buttons

Keep `All`, `Design`, `Development`. REMOVE the `Data_science` filter button (no data-science items remain). Ensure Isotope filtering still works: `Design` shows the 6 image cards, `Development` shows the 3 text cards, `All` shows all 9.

## Constraints
- Do NOT touch style.css / js / lib. Use inline styles only for the text-panel cards.
- Preserve the existing `.portfolio-item` grid layout so cards align (the text panel's min-height should roughly match the image cards' height).
- Do NOT change any other section of index.html, and do NOT change anything in cv-evans-chaun.html (the CV page's "Key Projects" are already text-only and correct).

## Verification
- The 3 `Development` items contain NO `<img>` tag.
- `grep -c "portfolio-item Development" index.html` = 3; `grep -c "portfolio-item Design" index.html` = 6 (or the count of real design images available).
- None of `goovatech.png`, `timetabling.PNG`, `SCHOOL OF HOSPITALITY AND LANGUAGES` appear in index.html.
- Every `Design` card `<img src>` resolves (`ls` each path).
- The `Data_science` filter button is gone.
- Open index.html in a browser: `Design` filter = 6 image cards (no broken images), `Development` filter = 3 text cards, `All` = 9; layout is clean and aligned.
