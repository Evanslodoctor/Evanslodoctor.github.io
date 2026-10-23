# Implementation Plan — Update Evans Chaun portfolio to new passport photo + CV content

> ⚠️ **REVISED BY USER (follow-up).** The `#portfolio` spec in Decision #8 and Step 4 below is **SUPERSEDED**. Apply `/usr/local/var/www/prodevevans/.agents/tasks/portfolio-revision.md` exactly for the index.html `#portfolio` section. In short: the 3 software projects must be **TEXT-ONLY cards with NO images** (the screenshots are not from those projects — do NOT use `goovatech.png`, `timetabling.PNG`, or `SCHOOL OF HOSPITALITY AND LANGUAGES .png` for them); add 6 Design cards using real images from `img/events/Graphics/`; remove the `Data_science` filter button. All other sections on both pages are already correct — do not change them.

## Scope & ground rules
- CONTENT-UPDATE task only. Preserve the existing design, CSS classes, layout, nav anchors (`#home, #about, #contributions, #qualification, #skill, #service, #portfolio, #testimonial, #contact`), JS behavior (typed.js, isotope filters, owl-carousel, lightbox, contact form, print/PDF buttons, WhatsApp float, back-to-top).
- Do NOT introduce new libraries or rebuild the template. Only change text content, image `src` references, and links. Minimal structural tweaks allowed only where the CV changes the number of entries (e.g. 5→3 portfolio items, 6→5 skill bars, 4→8 certs, 2→3 references).
- Files to change: `/usr/local/var/www/prodevevans/index.html` and `/usr/local/var/www/prodevevans/cv-evans-chaun.html`. Do not touch CSS/JS/lib files.
- No build system exists (static Bootstrap site; no package.json). Verification = content string assertions + image-file existence checks + HTML well-formedness via `python3` + visual browser check. "Open in browser" is the real visual verification; the shell commands below are the automated sanity layer.

## Decisions (resolved — coder must follow these, not re-decide)

1. **Profile photo** = `img/Passport-photo-evans.png` (confirmed exists, 1.5 MB). Use in 3 places: `index.html` hero `<img>` (already done — verify), `index.html` about `<img>` (already done — verify), and `cv-evans-chaun.html` header `.profile-img` (currently a `ui-avatars.com` placeholder — REPLACE). Keep existing classes and `alt` text. No `Chaun1.png`/`chaun.png` references may remain in either file.

2. **GitHub URL** = `https://github.com/Evanslodoctor`. RATIONALE: the repo is hosted at `github.com/Evanslodoctor/Evanslodoctor.github.io` (git remote) and all social handles are `evanslodoctor`. The CV text "github.com/Evanslodctor" is a typo (missing an `o`). Using the real, working account link. FLAGGED: if the user truly owns a separate `Evanslodctor` account, they can override.

3. **LinkedIn URL** = `https://www.linkedin.com/in/lodoctor/`. RATIONALE: `index.html` footer already links to this (matches `evanslodoctor` socials). `cv-evans-chaun.html` shows `linkedin.com/in/odoctor` (a typo, missing the leading `l`). Standardize both pages to `lodoctor`. Linkify the CV page's LinkedIn + GitHub contact pills (keep the pill design via inline `color:inherit;text-decoration:none`).

4. **Skills on index.html** = reduce from 6 progress bars to **5**, one per CV skill group (Front-End / Back-End / Databases / AI-ML & Data / Tools & Practices). 3 bars in the left column, 2 in the right (remove the existing "Graphic & UX Design" bar). Keep the `.skill`/`.progress`/`.progress-bar` markup and `bg-*` colors; relabel the heading text + small-tech list per group. Do not invent skill items beyond the CV list.

5. **Testimonials on index.html** = the `#testimonial` carousel is the index page's home for the CV's formal references (the page has no separate references section). Reattribute the 3 existing slides to the 3 CV references (keep the existing generic quote text and the carousel design — the user supplied no new quotes). Best thematic mapping:
   - `Mr. Martin Njuki` — Director, Excelle Insights → quote about systems/efficiency (current slide 1 quote).
   - `Dr. Mary Mwadulo` — Dean, School of Computing and Informatics, Meru University → quote about teaching/student performance (current slide 3 quote).
   - `Mr. Emmanuel Nzeka` — Director, Digiview Training Institute → quote about ICT support/uptime (current slide 2 quote).
   Note in the plan: quote TEXT is retained from the existing template (not sourced from the CV) and may be replaced later.

6. **References on cv-evans-chaun.html** = populate the existing References section with the 3 CV references (full name, position, phone, email). The index testimonials use only name+role (no contact details, matching the testimonial design).

7. **Index "Contributions" / "Services" / typed-text / contact form** = leave UNCHANGED. They are not CV content (Contributions = existing publications list; Services = marketing copy; typed-text = rotating-role animation; contact form = functional). Preserving them keeps nav anchors working and avoids inventing content. (Optional: fix the visible typo "Expericence"→"Experience" in the Qualification headings since it is user-visible copy.)

8. **Project image mapping** (all files verified to exist; use EXACT strings including case/space):
   - AI-Powered WhatsApp Messaging Application → `img/events/web/goovatech.png` (no WhatsApp-specific image exists; a web-app screenshot is the closest real file in `img/events/web/`).
   - Workshop & Garage Management Application → `img/events/web/timetabling.PNG` (job-scheduling theme; note uppercase `.PNG`; no garage image exists).
   - QR-Powered Hotel Management System (HMS) → `img/events/Graphics/SCHOOL OF HOSPITALITY AND LANGUAGES .png` (the only hospitality-themed real image; previously used for the old HMS item; note the SPACE before `.png` and uppercase `SCHOOL`).
   All three portfolio items tagged class `Development` (honest — all are software systems). The filter buttons (All/Design/Development/Data_science) stay as-is.

## Per-page CV content → element mapping

### index.html
| CV content | Target element in index.html |
|---|---|
| Profile photo | hero `<img ... id="home">` + about `<img>` (already `img/Passport-photo-evans.png`) |
| Name "Evans Loktari Chaun" | hero `<h1>` (already correct) + About info grid "Name:" span |
| Title "Software Developer" | hero typed-text first item (already) + About `<h3>` (already) |
| Professional Summary | About section `<p>` (the bio paragraph) |
| Phone / Email / Address | About info grid + footer (already correct: +254 743 645 826 / evanschaun2@gmail.com / Embakasi, Nairobi, Kenya) — verify |
| Experience "3+ Years" | About info grid "Experience:" span (currently "2 Years") |
| Work Experience (3) | `#qualification` → "My Expericence" column's 3 dot-circle entries |
| Education (BSc) | `#qualification` → "My Education" column, 1st dot-circle entry |
| Certifications (8) | `#qualification` → "My Education" column, 3rd dot-circle entry (the "Certifications" `<ul>`) |
| Skills (5 groups) | `#skill` progress bars (5 bars) |
| Projects (3) | `#portfolio` → `.portfolio-container` items (replace 5 with 3) |
| References (3) | `#testimonial` carousel slides (name + role only) |
| GitHub link | footer social row (add a GitHub `.btn-social`; LinkedIn already present) |

### cv-evans-chaun.html
| CV content | Target element in cv-evans-chaun.html |
|---|---|
| Profile photo | header `<img class="profile-img">` (replace ui-avatars placeholder) |
| Name | header `<h1 class="name">` (already correct) |
| Title | header `<h2 class="title">` ("Full Stack Web Developer" → "Full-stack Software Developer") + `<title>` tag |
| Phone / Email / Location | header `.contact-info` pills (already correct — verify format) |
| LinkedIn / GitHub | header `.contact-info` pills → linkify to lodoctor / Evanslodoctor |
| Professional Summary | first `.section` `<p class="summary-text">` |
| Technical Skills (5 groups) | "Technical Skills" `.section` `.skills-container` (replace 4 `.skill-category` with 5) |
| Work Experience (3) | "Work Experience" `.section` (replace 3 `.experience-item`) |
| Education (BSc) | "Education" `.section` (replace 2 `.education-item` with 1 BSc entry; ALX moves to Certifications) |
| Certifications (8) | "Certifications" `.section` `.row` (replace 4 `.certification-item` with 8) |
| Key Projects (3) | "Key Projects" `.section` (replace 5 `.project-item` with 3) |
| References (3) | "References" `.section` `.row` (replace 2 `.reference-item` with 3) |

---

# Implementation steps (execute in order)

- [ ] 1. **index.html — About section: profile images + bio + info grid.**
      Verify hero (`#home`) `<img>` and the About `<img>` both use `src="img/Passport-photo-evans.png"` with `alt="Evans Chaun Passport Photo"` and the existing classes (`img-fluid w-100 rounded-circle shadow-sm` for hero; `img-fluid rounded w-100` for about) — they already do; change nothing if correct. Update About info grid: `Name:` span → "Evans Loktari Chaun"; `Experience:` span → "3+ Years". Replace the About `<p>` bio with the CV Professional Summary verbatim:
      "Full-stack Software Developer with 3+ years of experience building web applications, payment integrations, and business intelligence solutions across frontend, backend, and AI-enabled systems. First Class Honours graduate in Computer Science with hands-on experience developing business systems, integrating third-party APIs, and streamlining operational workflows. Skilled in React, Next.js, Python (Django, FastAPI), Node.js, and cloud deployment, with practical experience in LLMs and Retrieval-Augmented Generation (RAG). Combines strong software engineering skills with a background in technical training, IT support, and business process automation."
      Files: index.html
      Verify: `grep -c "Passport-photo-evans.png" index.html` ≥ 2; `grep -c "Chaun1.png" index.html` = 0; `grep -c "3+ Years" index.html` ≥ 1; `grep -c "Retrieval-Augmented Generation" index.html` ≥ 1; `ls img/Passport-photo-evans.png` succeeds.

- [ ] 2. **index.html — Qualification section: Education + Experience + Certifications.**
      Education column (left): keep 1st entry — "Bachelor of Science, Computer Science", `<strong>Meru University of Science and Technology</strong>`, `<small>Jan 2019 - Jan 2023</small>`, and replace its `<p>` with: "Graduated with First Class Honours. Ranked 1st in the Department of Computer Science and 2nd in the School of Computing and Informatics." Remove the 2nd "Software Engineering Program / ALX Africa" entry (it is now a certification). Update the 3rd "Certifications" `<ul>` to all 8 (use `<strong>` name + `<small>` date): ALX Software Engineering Programme — 2023 (ALX Africa / Holberton School); HIKVISION CCTV Training — Sep 2024; Machine Learning — AWS Training, May 2024; React — Simplilearn, Jan 2024; Python — Simplilearn, Jan 2024; Back-End Development and APIs — freeCodeCamp, Sep 2022; Java — Simplilearn, Mar 2022; Data Science — WorldQuant University.
      Experience column (right): replace all 3 dot-circle entries with: (1) "Software Developer" / `<strong>Excelle Insights</strong>` / `<small>May 2025 - Present</small>` + the 3 CV bullets (vehicle service tracking; M-Pesa/Co-op Bank/WhatsApp integrations; QR-code guest ordering platform); (2) "Developer" / `<strong>Digiview Training Institute</strong>` / `<small>Feb 2024 - Feb 2025</small>` + the 3 CV bullets (Power BI dashboards; website optimisation; trained 100+ students); (3) "IT Intern" / `<strong>National Hospital Insurance Fund (NHIF)</strong>` / `<small>Apr 2022 - Jul 2023</small>` + the 3 CV bullets (first-line IT support; system setup/maintenance/installation; daily IT operations support). Delete the "ICT Officer / Capital Highway Training College" entry entirely (not in the CV). Fix the visible typo "Expericence"→"Experience" in both the column heading and the section heading. Keep all dot-circle / `<i class="far fa-dot-circle ...">` markup and border-left styling.
      Files: index.html
      Verify: `grep -c "Excelle Insights" index.html` ≥ 1; `grep -c "Capital Highway" index.html` = 0; `grep -c "WorldQuant" index.html` ≥ 1; `grep -c "Expericence" index.html` = 0; open index.html in a browser and confirm the Qualification timeline renders with 1 education entry + certs list on the left and 3 experience entries on the right.

- [ ] 3. **index.html — Skills section: 5 progress bars for the 5 CV groups.**
      In `#skill`, keep the `.skill`/`.progress`/`.progress-bar` markup. End with 5 bars (remove the existing "Graphic & UX Design" bar). Set heading `<h6 class="font-weight-bold">` + `<small>` tech list and `aria-valuenow`/`bg-*` as: (1) Front-End: React, Next.js, JavaScript, HTML, CSS, Bootstrap, GraphQL — `bg-primary`, 95; (2) Back-End: Python, Django, FastAPI, Node.js, PHP, REST, MVC — `bg-warning`, 90; (3) Databases: MySQL, PostgreSQL, SQL Server, Vector Databases — `bg-dark`, 95; (4) AI/ML & Data: LangChain, OpenAI API, RAG, Prompt Engineering, Machine Learning Fundamentals, Power BI — `bg-info`, 90; (5) Tools & Practices: AWS, CI/CD, Git/GitHub, Socket.io, Netlify, VPS — `bg-danger`, 88. Put bars 1–3 in the left `col-md-6` and bars 4–5 in the right `col-md-6`.
      Files: index.html
      Verify: `grep -c "Vector Databases" index.html` ≥ 1; `grep -c "Prompt Engineering" index.html` ≥ 1; the `#skill` block has exactly 5 occurrences of `class="skill mb-4"` — confirm with `grep -c 'class="skill mb-4"' index.html` = 5; open in browser and confirm 5 bars render with the progress-bar styling intact.

- [ ] 4. **index.html — Portfolio section: replace 5 items with the 3 CV projects (real images).**
      In `#portfolio` `.portfolio-container`, replace all 5 `.portfolio-item` blocks with 3. Each uses `class="col-lg-4 col-md-6 mb-4 portfolio-item Development"`, the same `.position-relative overflow-hidden mb-2` wrapper, an `<img class="img-fluid rounded w-100" src="..." alt="...">` with a REAL src, and a `.portfolio-btn` overlay whose `<a>` contains the project name (keep the existing no-href `<a>` pattern; do not add lightbox). Use these exact image paths and names:
      (1) "AI-Powered WhatsApp Messaging Application" — `src="img/events/web/goovatech.png"`.
      (2) "Workshop & Garage Management Application" — `src="img/events/web/timetabling.PNG"`.
      (3) "QR-Powered Hotel Management System (HMS)" — `src="img/events/Graphics/SCHOOL OF HOSPITALITY AND LANGUAGES .png"` (note the space before `.png`).
      Files: index.html
      Verify: `ls "img/events/web/goovatech.png" "img/events/web/timetabling.PNG" "img/events/Graphics/SCHOOL OF HOSPITALITY AND LANGUAGES .png"` all succeed; `grep -c "portfolio-item Development" index.html` = 3; `grep -c "UnifyWorks\|Biometric Voting\|Financial Management System" index.html` = 0; open in browser and confirm 3 thumbnails load (no broken-image icons) and the All/Development filters show all 3.

- [ ] 5. **index.html — Testimonials (reattribute to CV references) + footer GitHub link.**
      In `#testimonial`, keep the 3 carousel slides' quote `<h4>` text unchanged; update each slide's `<h5>` name and `<span>` role to: slide1 → "Mr. Martin Njuki" / "Director - Excelle Insights"; slide2 → "Mr. Emmanuel Nzeka" / "Director - Digiview Training Institute"; slide3 → "Dr. Mary Mwadulo" / "Dean, School of Computing and Informatics, Meru University". (Quote text retained from template; not from CV.) In the footer social row, confirm the LinkedIn `<a href="https://www.linkedin.com/in/lodoctor/">` is present (it is — leave it), and add a GitHub icon after the instagram one: `<a class="btn btn-light btn-social" href="https://github.com/Evanslodoctor" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>`. Leave twitter/facebook/instagram links as-is.
      Files: index.html
      Verify: `grep -c "Martin Njuki" index.html` ≥ 1; `grep -c "Mary Mwadulo" index.html` ≥ 1; `grep -c "Emmanuel Nzeka" index.html` ≥ 1; `grep -c "Caroline Nguki\|Vincent Rono" index.html` = 0; `grep -c 'github.com/Evanslodoctor' index.html` ≥ 1; `grep -c "linkedin.com/in/lodoctor" index.html` ≥ 1; open in browser and confirm the testimonial carousel and footer social row render normally.

- [ ] 6. **cv-evans-chaun.html — Header: profile photo, title, contact links.**
      Replace the `<img class="profile-img" src="https://ui-avatars.com/...">` with `src="img/Passport-photo-evans.png"` (keep `alt="Evans Loktari Chaun"` and the class). Change `<h2 class="title">` from "Full Stack Web Developer" to "Full-stack Software Developer" and `<title>` from "Evans Loktari Chaun - Full Stack Developer" to "Evans Loktari Chaun - Software Developer". In `.contact-info`: change the LinkedIn pill text from "linkedin.com/in/odoctor" to "linkedin.com/in/lodoctor" and wrap it in `<a href="https://www.linkedin.com/in/lodoctor/" target="_blank" rel="noopener" style="color:#fff;text-decoration:none;">…</a>`; wrap the GitHub pill text "github.com/Evanslodoctor" in `<a href="https://github.com/Evanslodoctor" target="_blank" rel="noopener" style="color:#fff;text-decoration:none;">…</a>` (the existing text already says Evanslodctor — change it to "Evanslodoctor"). Leave phone/email/location/globe pills as-is.
      Files: cv-evans-chaun.html
      Verify: `grep -c "ui-avatars" cv-evans-chaun.html` = 0; `grep -c "Passport-photo-evans.png" cv-evans-chaun.html` ≥ 1; `grep -c "lodoctor" cv-evans-chaun.html` ≥ 1; `grep -c "odoctor[^/]" cv-evans-chaun.html` = 0 (no standalone "odoctor" typo remains); `grep -c "Full-stack Software Developer" cv-evans-chaun.html` ≥ 1; open in browser and confirm the round profile photo loads and the header pills render.

- [ ] 7. **cv-evans-chaun.html — Professional Summary.**
      Replace the first `.section` `<p class="summary-text">` with the CV summary verbatim (same text as the index About paragraph in step 1).
      Files: cv-evans-chaun.html
      Verify: `grep -c "Retrieval-Augmented Generation" cv-evans-chaun.html` ≥ 1; `grep -c "high-performance web applications" cv-evans-chaun.html` = 0 (old summary gone); open in browser and confirm the summary paragraph renders.

- [ ] 8. **cv-evans-chaun.html — Technical Skills: 5 categories matching the CV.**
      In the "Technical Skills" `.section`, replace the 4 `.skill-category` blocks with 5, each a `<div class="skill-category">` with an `<h4><i ...></i> Group</h4>` and a `<ul class="skill-list">` of `<li><i ...></i> Name</li>`. Use these groups/items/icons (use `fab` for brand icons, `fas` for the rest):
      - Front-End (`fas fa-laptop-code`): React `fab fa-react`, Next.js `fas fa-code`, JavaScript `fab fa-js`, HTML `fab fa-html5`, CSS `fab fa-css3-alt`, Bootstrap `fab fa-bootstrap`, GraphQL `fas fa-project-diagram`.
      - Back-End (`fas fa-server`): Python `fab fa-python`, Django `fas fa-code`, FastAPI `fas fa-bolt`, Node.js `fab fa-node-js`, PHP `fab fa-php`, REST `fas fa-project-diagram`, MVC `fas fa-sitemap`.
      - Databases (`fas fa-database`): MySQL `fas fa-database`, PostgreSQL `fas fa-database`, SQL Server `fas fa-database`, Vector Databases `fas fa-database`.
      - AI/ML & Data (`fas fa-brain`): LangChain `fas fa-link`, OpenAI API `fas fa-robot`, RAG `fas fa-database`, Prompt Engineering `fas fa-comment-dots`, Machine Learning Fundamentals `fas fa-brain`, Power BI `fas fa-chart-bar`.
      - Tools & Practices (`fas fa-toolbox`): AWS `fab fa-aws`, CI/CD `fas fa-infinity`, Git/GitHub `fab fa-git-alt`, Socket.io `fas fa-plug`, Netlify `fas fa-cloud`, VPS `fas fa-server`.
      Files: cv-evans-chaun.html
      Verify: `grep -c "skill-category" cv-evans-chaun.html` = 5; `grep -c "Next.js" cv-evans-chaun.html` ≥ 1; `grep -c "Vector Databases" cv-evans-chaun.html` ≥ 1; `grep -c "MongoDB" cv-evans-chaun.html` = 0; open in browser and confirm 5 skill category cards render in the flex layout.

- [ ] 9. **cv-evans-chaun.html — Work Experience: 3 entries.**
      Replace the 3 `.experience-item` blocks with: (1) "Software Developer" - "Excelle Insights", date "May 2025 - Present", 3 bullets (vehicle service tracking; M-Pesa/Co-op Bank/WhatsApp integrations; QR-code guest ordering platform); (2) "Developer" - "Digiview Training Institute", date "Feb 2024 - Feb 2025", 3 bullets (Power BI dashboards; website optimisation; trained 100+ students); (3) "IT Intern" - "National Hospital Insurance Fund (NHIF)", date "Apr 2022 - Jul 2023", 3 bullets (first-line IT support; system setup/maintenance/installation; daily IT operations support). Remove the "Kelzane Technologies" entry. Keep `.job-title`/`.company`/`.date`/`.experience-details` markup.
      Files: cv-evans-chaun.html
      Verify: `grep -c "Excelle Insights" cv-evans-chaun.html` ≥ 1; `grep -c "Kelzane" cv-evans-chaun.html` = 0; `grep -c "experience-item" cv-evans-chaun.html` = 3; open in browser and confirm 3 experience entries with chevron bullets render.

- [ ] 10. **cv-evans-chaun.html — Education (1) + Certifications (8).**
      Education `.section`: replace the 2 `.education-item` with 1 — degree "Bachelor of Science in Computer Science", university "Meru University of Science and Technology", keep the `<span class="badge-pill">First Class Honours</span>`, date "Jan 2019 - Jan 2023"; replace the bullets with: "Achieved First Class Honours (GPA)."; "Ranked 1st in the Department of Computer Science and 2nd in the School of Computing and Informatics." Remove the ALX education item. Certifications `.section`: replace the 4 `.certification-item` with 8 (keep `.cert-name` + `.date` + `.company` pattern, 2 per row via `col-md-6`): ALX Software Engineering Programme — 2023 — "ALX Africa / Holberton School" (add a small line under it: "Core: C, Python, JavaScript, ReactJS, SQL, Git/GitHub, Unix/Linux, DSA. Capstone: full front-end + back-end web app."); HIKVISION CCTV Training — Sep 2024; Machine Learning — May 2024 — AWS Training; React — Jan 2024 — Simplilearn; Python — Jan 2024 — Simplilearn; Back-End Development and APIs — Sep 2022 — freeCodeCamp; Java — Mar 2022 — Simplilearn; Data Science — WorldQuant University.
      Files: cv-evans-chaun.html
      Verify: `grep -c "education-item" cv-evans-chaun.html` = 1; `grep -c "certification-item" cv-evans-chaun.html` = 8; `grep -c "WorldQuant" cv-evans-chaun.html` ≥ 1; `grep -c "Holberton" cv-evans-chaun.html` ≥ 1; open in browser and confirm 1 education entry and 8 cert cards render.

- [ ] 11. **cv-evans-chaun.html — Key Projects: 3 projects.**
      Replace the 5 `.project-item` blocks with 3, keeping `.project-name`/`.project-details` (chevron `<ul>`)/`.project-tech` (spans). Content:
      (1) "AI-Powered WhatsApp Messaging Application" — company/date line "Excelle Insights · May 2026 - Sep 2026"; 3 bullets (NLP-powered messaging app automating WhatsApp customer interactions; WhatsApp Business API for high-volume outbound campaigns + inbound queries; intelligent conversational routing + automated fallback to human agents); `.project-tech` spans (terms taken from the CV bullets): WhatsApp Business API (`fab fa-whatsapp`), NLP (`fas fa-brain`), Conversational AI (`fas fa-robot`).
      (2) "Workshop & Garage Management Application" — "Excelle Insights · Aug 2025 - Apr 2026"; 2 bullets (workshop management platform for garage operations/job scheduling/mechanic workflows; AI diagnostic + repair-log system for real-time repair history/diagnostics/part replacements); `.project-tech`: AI Diagnostics (`fas fa-robot`), Job Scheduling (`fas fa-calendar-alt`), Real-time Tracking (`fas fa-clock`).
      (3) "QR-Powered Hotel Management System (HMS)" — "Sep 2026 - Present"; 2 bullets (scalable multi-department hospitality platform: room reservations, front-office check-ins, POS; dynamic QR menu for scan/browse/order without app install); `.project-tech`: QR Menu (`fas fa-qrcode`), POS (`fas fa-cash-register`), Reservations (`fas fa-calendar-check`).
      Files: cv-evans-chaun.html
      Verify: `grep -c "project-item" cv-evans-chaun.html` = 3; `grep -c "WhatsApp Messaging" cv-evans-chaun.html` ≥ 1; `grep -c "Garage Management" cv-evans-chaun.html` ≥ 1; `grep -c "Hotel Management System" cv-evans-chaun.html` ≥ 1; `grep -c "Biometric Voting\|UnifyWorks" cv-evans-chaun.html` = 0; open in browser and confirm 3 projects with chevron bullets and tech tags render.

- [ ] 12. **cv-evans-chaun.html — References: 3 references.**
      Replace the 2 placeholder `.reference-item` blocks with 3 (keep `.reference-name`/`.reference-position`/`.reference-contact` with phone+email spans, 2 per row via `col-md-6`; the 3rd wraps to its own row): (1) "Dr. Mary Mwadulo" — "Dean, School of Computing and Informatics, Meru University" — `mmwadulo@must.ac.ke` / `+254 724 789 102`; (2) "Mr. Martin Njuki" — "Director, Excelle Insights" — `martin@excelleinsights.com` / `+254 726 848 742`; (3) "Mr. Emmanuel Nzeka" — "Director, Digiview Training Institute" — `mongarenzeka@gmail.com` / `+254 716 687 910`.
      Files: cv-evans-chaun.html
      Verify: `grep -c "reference-item" cv-evans-chaun.html` = 3; `grep -c "John Doe\|Jane Smith" cv-evans-chaun.html` = 0; `grep -c "mmwadulo@must.ac.ke" cv-evans-chaun.html` ≥ 1; open in browser and confirm 3 reference cards render.

- [ ] 13. **Final cross-page verification.**
      Run a consolidated sanity check and a visual check on both pages.
      Verify (run all):
      - `python3 -c "from html.parser import HTMLParser; HTMLParser().feed(open('index.html').read()); HTMLParser().feed(open('cv-evans-chaun.html').read()); print('HTML parse OK')"` → prints "HTML parse OK" (no malformed markup).
      - `grep -c "Chaun1.png\|ui-avatars\|Capital Highway\|Kelzane\|UnifyWorks\|Biometric Voting\|John Doe\|Jane Smith" index.html cv-evans-chaun.html` → every file shows 0 for each stale token.
      - `grep -c "Excelle Insights" index.html cv-evans-chaun.html` → both ≥ 1.
      - `grep -c "Evanslodoctor\|lodoctor" index.html cv-evans-chaun.html` → GitHub and LinkedIn links present and consistent (Evanslodoctor for GitHub, lodoctor for LinkedIn).
      - `ls img/Passport-photo-evans.png "img/events/web/goovatech.png" "img/events/web/timetabling.PNG" "img/events/Graphics/SCHOOL OF HOSPITALITY AND LANGUAGES .png"` → all four exist.
      - Open `index.html` and `cv-evans-chaun.html` in a browser: confirm passport photo loads on both; nav anchors still scroll correctly; portfolio shows 3 thumbnails (no broken images); CV page sections (Summary, 5 skill cards, 3 experience, 1 education, 8 certs, 3 projects, 3 references) all render with original styling intact; print/PDF buttons on the CV page still work.

## Notes for the implementer
- This is a static site committed to `Evanslodoctor/Evanslodoctor.github.io` on `main`. Make edits only; do not commit or push unless asked.
- `index.html` and `cv-evans-chaun.html` are already shown as modified in `git status` (a prior edit added the passport photo to index). Continue editing those files in place.
- Two source-text typos were corrected using repo evidence (git remote + social handles): GitHub `Evanslodctor`→`Evanslodoctor`, LinkedIn `odoctor`→`lodoctor`. Both are flagged in the Decisions section above.
- The testimonial quotes on index.html are retained from the existing template (the CV supplied no quote text); only the attributions change. If the user wants real quotes, that is a follow-up.
