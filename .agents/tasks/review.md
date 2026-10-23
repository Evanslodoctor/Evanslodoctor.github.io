# Portfolio section rebuilt to text-only project cards plus a six-item design gallery

This iteration resolves the one blocking finding from the prior pass: the `#portfolio` section of `index.html` has been rebuilt to the user's revised spec (`portfolio-revision.md`), which supersedes the original plan's Decision #8. The three software projects are now text-only panels — a FontAwesome icon, project name, one-line description, and tech-tag badges on a dark flex-centered panel — with no `<img>` and no lightbox, so the misattributed screenshots (`goovatech.png`, `timetabling.PNG`, `SCHOOL OF HOSPITALITY AND LANGUAGES .png`) no longer appear. Six `Design` cards were added using real files from `img/events/Graphics/`, the `Data_science` filter button was removed, and Isotope filtering now splits three text cards from six image cards across `All`/`Design`/`Development`. The non-blocking GitHub/LinkedIn handle question from the prior pass is settled by the user's recorded decision to keep the working accounts rather than the CV's literal typos, so no edits were needed there. Watch for: nothing blocking remains; the one judgment call to be aware of is the deliberate use of the working GitHub/LinkedIn handles instead of the CV's literal (broken) strings.

**Verdict**: APPROVED

## High-level view

Portfolio rebuild matches the revised spec exactly. The filter bar is down to three buttons (`All`, `Design`, `Development`); the three `Development` cards carry the prescribed icons, names, descriptions, and tag sets with zero `<img>` tags; the six `Design` cards each point at a real file in `img/events/Graphics/` — all six paths resolve on disk, preserving filename case and the space in `Church- 28-feb-2024.jpeg`. The Isotope class hooks (`portfolio-item Development` / `portfolio-item Design`) are retained so the filters still function.

The handle decision is settled, not outstanding. GitHub and LinkedIn both use the working accounts (`github.com/Evanslodoctor`, `linkedin.com/in/lodoctor`) on both pages — the user's documented choice after the prior pass flagged the CV's `Evanslodctor` / `odoctor` as typos. This is a deliberate, approved departure from the verbatim CV text, so it carries no action item.

Nothing else regressed in this iteration. The CV page was left untouched and still contains exactly one `<img>` (the headshot), confirming its projects stayed text-only; HTML parses, nav anchors and footer resolve, the `Expericence` heading typo is fixed, no stale tokens remain, and no new libraries were introduced. CV content on both pages re-checks accurate against the supplied CV (name, role, summary, experience, education, eight certifications, five skill groups, three projects, three references), and the passport photo is the only headshot on either page.

<details>
<summary>Issues (0)</summary>

No blocking or actionable issues remain. The prior pass's two findings are both resolved: the portfolio section is rebuilt to spec (verified), and the GitHub/LinkedIn handles are confirmed by user decision.

</details>

<details><summary>Details</summary>

### Portfolio section rebuilt to the revised spec

The prior blocker was that the three software-project cards still rendered `<img>` tags pointing at screenshots that weren't from those projects, with zero `Design` cards and a leftover `Data_science` filter. This iteration fixes all three without touching any other section.

Filter bar is now three buttons:
```
All | Design | Development      (Data_science / "Data Analysis & Models" removed)
```

The three `Development` cards are flex-centered text panels (`min-height:230px; background:#1a1a1a`), each holding a FontAwesome icon, an `<h6>` name, a one-line `<p>`, and three `badge-pill badge-light` tag spans — no `<img>`, no lightbox `<a>`:
- `fab fa-whatsapp` — AI-Powered WhatsApp Messaging Application — WhatsApp Business API, NLP, Conversational AI
- `fas fa-wrench` — Workshop & Garage Management Application — AI Diagnostics, Job Scheduling, Real-time Tracking
- `fas fa-qrcode` — QR-Powered Hotel Management System (HMS) — QR Menu, POS, Reservations

Six `Design` cards keep the original `.position-relative` / `<img>` / `.portfolio-btn` markup (no lightbox), each pointing at a real file (all `ls`-confirmed, case and spaces preserved):
```
img/events/Graphics/1 Digiview Training Institute.png  -> "Digiview Training Institute - Advert"
img/events/Graphics/Topmaxs-School-of-engineering.png  -> "Topmax School of Engineering"
img/events/Graphics/Happy labor day.png                -> "Labour Day Graphic"
img/events/Graphics/Church- 28-feb-2024.jpeg           -> "Church Event Flyer"   (space after dash preserved)
img/events/Graphics/Birthday-20-march-2024.jpeg        -> "Birthday Poster"
img/events/Graphics/Unison-28-may-2023.jpg             -> "Unison Event"
```

Verified counts: `portfolio-item Development` = 3, `portfolio-item Design` = 6, and none of `goovatech.png`, `timetabling.PNG`, `SCHOOL OF HOSPITALITY` appear anywhere in `index.html`. The CV page's `Key Projects` were left untouched (still text-only; the file contains exactly one `<img>`, the headshot), honoring the scope guardrail.

### Deliberate handle deviation (context only)

GitHub and LinkedIn both link to the working accounts — `https://github.com/Evanslodoctor` and `https://www.linkedin.com/in/lodoctor/` — on both pages, rather than the CV's literal `github.com/Evanslodctor` (missing an `o`) and `linkedin.com/in/odoctor` (missing a leading `l`). The repo is hosted at `Evanslodoctor/Evanslodoctor.github.io`, and the prior pass flagged these as typos for user override. The user's recorded decision was to keep the working handles, so no edits were made this iteration and no action is required. This is the only place the live content departs from the verbatim CV text, and it is the correct call — the literal strings would 404.

### No-regression re-confirmation

The pass-1 content re-checks accurate on both pages (full CV content — name, role, summary, three experience entries, education, eight certifications, five skill groups, three projects, three references — and the passport photo as the only headshot on either page). The verification points worth recording: `Chaun1.png` and `ui-avatars` are gone, the `Expericence` heading typo is fixed to "Experience", `python3` HTMLParser feeds both files cleanly, nav anchors (`#home`, `#about`, `#portfolio`, `#contact`, and the rest) and the footer resolve, and no new `<link>`/script libraries were added. One cosmetic note that is out of scope (pre-existing, not introduced by this diff): the CV page's header phone pill renders `+254-743-645-826` with dashes where the CV text reads `+254 743645826` — same digits, and the plan left that pill untouched.

</details>

<details><summary>File map</summary>

- `index.html` — `#portfolio` rebuilt to spec (3 text-only `Development` cards + 6 image `Design` cards, `Data_science` filter removed). All pass-1 CV-content edits remain intact.
- `cv-evans-chaun.html` — unchanged this iteration (full CV rewrite from pass 1 stays; projects already text-only, one headshot `<img>` only).
- `img/Passport-photo-evans.png` — new passport photo (untracked), drives both pages' headshots.
- `CV-Evans-Chaun.pdf` — deleted (replaced by `Evans_Chaun_Resume.pdf`, untracked).
- `img/events/Graphics/` — six real design files now referenced by the `Design` portfolio cards.

Full diff: `git diff` (unstaged working-tree changes against HEAD) in the repo root.

</details>
