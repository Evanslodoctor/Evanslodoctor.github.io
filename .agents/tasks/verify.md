# Verification — iteration after CHANGES_REQUESTED

Review verdict was `CHANGES_REQUESTED` with 2 findings. Status below.

## Finding #1 (BLOCKING) — Portfolio section — FIXED

Scope: only the `#portfolio` section of `index.html`. Per `portfolio-revision.md`:

- Removed the `Data_science` filter button (kept `All`, `Design`, `Development`).
- Converted the 3 `portfolio-item Development` cards to **text-only** panels (FontAwesome icon + `<h6>` name + one-line `<p>` + tech-tag badges, inline `min-height:230px` dark panel). No `<img>`, no lightbox `<a>` on these three.
- Added 6 `portfolio-item Design` cards using real files from `img/events/Graphics/` (kept the existing `.position-relative`/`<img>`/`.portfolio-btn` markup, no lightbox).

Automated checks (run from repo root):
```
grep -c 'portfolio-item Development' index.html   -> 3   (want 3)
grep -c 'portfolio-item Design' index.html         -> 6   (want 6)
grep -c 'goovatech.png' index.html                  -> 0   (want 0)
grep -c 'timetabling.PNG' index.html                -> 0   (want 0)
grep -c 'SCHOOL OF HOSPITALITY' index.html          -> 0   (want 0)
grep -c 'Data_science' index.html                   -> 0   (want 0)
imgs inside Development cards (python count)        -> 0   (want 0)
```
Design card image paths (all `ls`-confirmed to exist):
- img/events/Graphics/1 Digiview Training Institute.png   -> "Digiview Training Institute - Advert"
- img/events/Graphics/Topmaxs-School-of-engineering.png   -> "Topmax School of Engineering"
- img/events/Graphics/Happy labor day.png                -> "Labour Day Graphic"
- img/events/Graphics/Church- 28-feb-2024.jpeg           -> "Church Event Flyer"   (note: space after the dash)
- img/events/Graphics/Birthday-20-march-2024.jpeg         -> "Birthday Poster"
- img/events/Graphics/Unison-28-may-2023.jpg             -> "Unison Event"

## Finding #2 (NON-BLOCKING) — GitHub/LinkedIn handles — RESOLVED (user chose option A)

User decision: keep the working handles on BOTH pages. No swap to the literal CV strings (Evanslodctor / odoctor confirmed to be typos).

Final hrefs in place (confirmed):
- index.html   -> href="https://github.com/Evanslodoctor"
- cv-evans-chaun.html -> href="https://github.com/Evanslodoctor"
- index.html   -> href="https://www.linkedin.com/in/lodoctor/"
- cv-evans-chaun.html -> href="https://www.linkedin.com/in/lodoctor/"

No file edits were needed for this finding — the prior-pass state already matched option A.

## Cross-page sanity (run)

```
python3 HTMLParser feed on index.html + cv-evans-chaun.html   -> HTML parse OK
stale tokens (Chaun1.png, ui-avatars, Capital Highway, Kelzane, UnifyWorks,
              Biometric Voting, John Doe, Jane Smith) per file -> all 0
grep -c 'Excelle Insights' index.html            -> 2
grep -c 'Excelle Insights' cv-evans-chaun.html    -> 4
grep -c 'Passport-photo-evans.png' index.html     -> 2
grep -c 'Passport-photo-evans.png' cv-evans-chaun.html -> 1
grep -c 'github.com/Evanslodoctor'  (both files)  -> 1 / 1   (current)
grep -c 'linkedin.com/in/lodoctor'  (both files)  -> 1 / 1   (current)
```

## img/events subfolders present (for reviewer reference)
- img/events/Graphics/  — 30+ real design pieces (6 used above)
- img/events/web/        — bcskenya.png, chtc 2022.PNG, Digiview.jpg, goovatech.png,
                           kelzane2024.PNG, Online Eaxam-15-Aprial-2024.PNG, timetabling.PNG
- img/ root              — chaun.png, Chaun1.png, chaun2.png, Passport-photo-evans.png
  (Chaun1.png no longer referenced by either page; left on disk untouched.)

## Not changed (per plan guardrails)
- cv-evans-chaun.html untouched in this iteration (its Key Projects are already text-only; review confirmed the CV page is correct as-is).
- No CSS / JS / lib files modified. Only `index.html` `#portfolio` section edited (plus the one filter `<li>` removal).
