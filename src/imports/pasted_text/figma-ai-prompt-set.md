# Figma AI Prompt Set — Vero_SPL2 (for First Draft)

Figma's First Draft works differently from Stitch: it generates **one screen per prompt** (no multi-screen flows in a single shot), it builds from **Figma's own UI libraries** rather than a custom design system, and — important — **once you manually edit a generated screen, you can no longer refine it with further prompts.** So each prompt below is written to be as complete and self-contained as possible on the first pass, using Figma's recommended **Task → Context → Elements → Behavior → Constraints (TC-EBC)** structure, which its underlying model responds to best.

## How to use this set
1. Open **Actions → First Draft**.
2. Choose the **"Basic Web App"** library (not the lo-fi wireframe library — we want high-fidelity).
3. Paste **Screen 1's prompt** first. This locks in your palette, type, and component style.
4. For every screen after that, paste the screen's prompt **and** append this line at the end:
   `Match the exact same color palette, spacing, corner radius, and component style as the previous Vero screens — do not introduce new colors or a different visual style.`
   (First Draft doesn't retain cross-prompt memory, so this re-anchoring line matters — consistency across screens is its known weak spot.)
5. Do **not** manually edit a screen until you're done prompt-refining it — manual edits lock out further AI iteration on that frame.
6. Theme: **Light mode is the default/primary design.** Only generate a Dark mode pass (Screen 9 below) after all Light screens are finalized.

---

## SCREEN 1 — Sign In / Auth

```
TASK: Design a sign-in screen for a web app called "Vero."

CONTEXT: Vero is a premium, modern productivity workspace (think a calmer,
more spacious hybrid of Linear and Notion) combining projects, chat, notes,
and video meetings. This is the first screen a new visitor sees, so it sets
the entire visual tone for the product: light theme, soft, airy, trustworthy,
high-craft SaaS — not a generic enterprise login form.

ELEMENTS:
- Centered auth card (~420px wide) on a soft off-white/warm-gray background
  with two large, softly blurred pastel accent shapes (indigo and light blue)
  positioned behind the card for depth.
- "Vero" wordmark/logo at the top of the card, with tagline text: "Your
  team's unified workspace."
- Email input field and password input field, both filled-style (light gray
  fill, no heavy border), rounded corners.
- Primary "Sign In" button, full width, pill-rounded, solid indigo/violet
  accent fill, white text.
- "Continue with Google" and "Continue with GitHub" secondary buttons below,
  outlined/subtle fill, each with its respective icon.
- Small footer link: "Don't have an account? Sign up".

BEHAVIOR: This is a static high-fidelity screen (no interactive prototype
needed yet).

CONSTRAINTS:
- Light theme only, default state.
- No hard/dark borders anywhere — use subtle background tone shifts and soft
  drop shadows instead.
- Border radius across all elements: 0.5rem–0.75rem, consistently.
- Typography: clean modern sans-serif (Inter-style), tight heading tracking,
  clear hierarchy between logo, tagline, labels, and button text.
- Accent color: one confident indigo/violet, used only for the primary
  action and the background accent shapes — do not scatter it elsewhere.
- Generous padding inside the card (48px+), don't crowd the elements.
```

---

## SCREEN 2 — Home / Bento Dashboard

```
TASK: Design the home dashboard screen for Vero, the productivity app —
this is a "morning briefing" view showing a personal workspace overview.

CONTEXT: Matches the visual system established by the Vero sign-in screen:
light theme, soft off-white background, indigo/violet accent, rounded
soft-shadow cards, no hard borders. This is the main landing screen after
login, viewed on desktop web.

ELEMENTS:
- Left-side navigation: a narrow, collapsed icon-only dock (floating,
  slightly inset from the screen edge, rounded pill shape, subtle shadow)
  with icons for Home, Projects, Chat, Notes, Meet, and Settings.
- Top bar: workspace switcher dropdown (e.g., "Personal Workspace"), a
  pill-shaped search input, notification bell icon with a small unread
  count badge, and user avatar — all right-aligned except the switcher.
- Main content: an asymmetric Bento-style grid of cards on the light
  background:
  - Large card "Today's Meetings": 2–3 rows, each with time, meeting title,
    small avatar stack of attendees, and a "Join" button on the nearest one.
  - Medium card "Recent Chats": 3 rows of channel name, last message
    preview, and an unread badge.
  - Medium card "Due Tasks": checklist rows with a project tag chip, due
    date text, and a small priority color dot.
  - Small card "Recent Notes": 2 note previews with title and "edited
    Xh ago" text.
  - Small stat card: a single large number (e.g., "12 tasks completed this
    week") with a small trend indicator.

BEHAVIOR: Static high-fidelity screen. If First Draft's data population
tool is available, populate with realistic project/task names relevant to
a marketing or product team (not Lorem Ipsum).

CONSTRAINTS:
- Light theme, same palette/typography/radius/shadow system as Screen 1.
- Cards: white/very-light-gray fill on the slightly deeper off-white page
  background, soft shadow, 0.75rem radius, 24px+ gutter between cards.
- No visible grid lines, dividers, or hard borders — hierarchy from
  background tone + shadow only.
```

---

## SCREEN 3 — Workspace / Project View (Module Hub)

```
TASK: Design a project workspace screen for Vero, for a project called
"Marketing Q3."

CONTEXT: Same visual system as prior Vero screens (light theme). This is
where a user manages one project and sees/launches its tools ("modules").

ELEMENTS:
- Same collapsed icon dock on the left as Screen 2.
- Project header: project name "Marketing Q3" in large type, member avatar
  stack, and an "Invite" pill button (outlined style).
- A horizontal row of 4 Module tiles below the header: "Board" (kanban
  icon), "Chat" (message bubble icon), "Notes" (document icon), "Meet"
  (video camera icon) — each a soft rounded card with icon + label. Include
  a 5th dashed-border tile labeled "+ Add Module."
- Below the module row: a simple vertical activity timeline — rows with a
  small avatar, one line of activity text (e.g., "Sara moved 'Draft ad
  copy' to In Review"), and a relative timestamp.

BEHAVIOR: Static screen. The "Board" module tile should read as visually
"active/selected" — soft accent-colored glow ring and slight elevation
compared to the other three.

CONSTRAINTS:
- Light theme, identical palette/typography/radius/shadow system as
  Screens 1–2.
- Keep spacing airy — this should not feel like a dense admin panel.
```

---

## SCREEN 4 — Kanban Board Module

```
TASK: Design the Kanban board screen for the "Marketing Q3" project inside
Vero.

CONTEXT: Same visual system as prior Vero screens. This is a full-screen
"module canvas" — the left icon dock is present but the board should feel
like the primary focus of the screen.

ELEMENTS:
- Breadcrumb top strip: "Marketing Q3 / Board", a couple of filter chips,
  and a "+ New Task" pill button (solid indigo accent) top-right.
- Four columns: "Backlog," "In Progress," "In Review," "Done" — each column
  is a soft light-gray rounded container with a header showing the column
  name and a task-count badge.
- Task cards inside columns: rounded white cards with a colored priority
  tag chip (e.g., "High" in a soft red chip, "Medium" in amber), a task
  title, one line of description preview, small assignee avatar(s)
  bottom-right, and a due-date pill bottom-left.
- Show one card in "In Progress" in an elevated "being dragged" state:
  slightly larger, subtle rotation, stronger shadow, with a faint dashed
  outline showing its drop target in the "In Review" column.

BEHAVIOR: Static screen illustrating the drag interaction as a single
frozen moment (not an actual prototype interaction).

CONSTRAINTS:
- Light theme, same design system as previous screens.
- Columns: no hard vertical divider lines between them — separation comes
  from the column background tone + generous gutter spacing only.
```

---

## SCREEN 5 — Chat Module

```
TASK: Design the real-time chat screen for Vero.

CONTEXT: Same visual system as prior Vero screens. Module canvas view for
the "Marketing Q3" project's chat.

ELEMENTS:
- Left icon dock (as before) plus a secondary narrow channel-list panel:
  channels "# general," "# design," "# marketing-q3" (currently selected,
  shown with a soft rounded accent-tinted background), a "Direct Messages"
  section below with 2–3 names and small avatars.
- Main chat pane: a vertical message stream — grouped messages with avatar,
  sender name, timestamp, and message text in soft rounded bubbles
  (alternating very subtle background tint for readability, not hard
  outlines). Include small rounded reaction-emoji pill chips under one
  message, and a "Sara is typing…" indicator near the bottom.
- Message composer bar at the bottom: rounded pill-shaped input with
  attachment and emoji icons on the left, and a circular solid-accent send
  button on the right.

BEHAVIOR: Static screen.

CONSTRAINTS:
- Light theme, same palette/typography/radius/shadow system as prior
  screens.
- Keep the message bubbles low-contrast and calm — avoid harsh outlines or
  saturated bubble colors.
```

---

## SCREEN 6 — Collaborative Notes Module

```
TASK: Design a distraction-free collaborative notes/document editor screen
for Vero.

CONTEXT: Same visual system as prior Vero screens. This screen should feel
noticeably calmer and more minimal than the others — writing-focused.

ELEMENTS:
- Left icon dock collapsed to a thin, mostly-hidden sliver (writing space
  takes priority).
- Centered content column (~720px max width) on the page background, large
  top/side margins.
- A minimal floating toolbar near the top: rounded pill container with
  formatting icons (bold, italic, heading, bullet list, checkbox, image).
- Document title in large clean type, followed by body content: one
  heading, a bullet list, and a checklist item.
- Two live-collaborator text cursors shown inline in the body text, each
  with a small colored name-tag pill above the cursor (use two distinct
  accent colors, e.g., pink and teal, to differentiate from the primary
  indigo accent).
- Small avatar stack top-right showing who's currently viewing the doc.

BEHAVIOR: Static screen illustrating live co-editing presence.

CONSTRAINTS:
- Light theme, same design system as prior screens.
- No visible page border/card outline around the document — it should feel
  like writing directly on the canvas.
```

---

## SCREEN 7 — Live Meeting (Video Grid)

```
TASK: Design a full-screen video meeting (WebRTC call) screen for Vero.

CONTEXT: Same visual system as prior Vero screens, adapted for a full-bleed
video interface — background here can be a dark neutral (video calls are
conventionally dark even within a light-theme product) but all UI chrome
(buttons, control bar) should still use Vero's light-theme accent and
component style.

ELEMENTS:
- A grid of 5 participant video tiles, soft-rounded corners (0.75rem),
  each with the participant's name label in a small pill at the bottom-left
  of their tile. The active speaker's tile has a soft accent-colored glow
  ring.
- A floating pill-shaped control bar centered at the bottom: mic toggle,
  camera toggle, screen-share icon, all circular icon buttons on a
  frosted/glassmorphic light panel — plus a red "Leave call" button, and a
  distinct accent-colored "Take Notes" button that stands out from the rest.

BEHAVIOR: Static screen.

CONSTRAINTS:
- Video tile backgrounds: dark neutral (standard for camera-off/placeholder
  tiles). Control bar and buttons: light, glassmorphic, matching Vero's
  established accent color and rounded style.
```

---

## SCREEN 8 — Meeting-to-Notes Picture-in-Picture Transition

```
TASK: Design a screen showing Vero's signature interaction: a video call
that has shrunk into a floating Picture-in-Picture window while a
collaborative Notes document takes over the full screen.

CONTEXT: This is the direct "after" state of Screen 7 — the user clicked
"Take Notes" during the call, and the video grid morphed into a small
draggable window. Same overall visual system as prior Vero screens (light
theme for the notes canvas).

ELEMENTS:
- Full-screen Notes canvas identical in style to Screen 6 (centered content
  column, minimal floating toolbar, live collaborator cursor with name-tag
  pill, user actively typing mid-sentence).
- A small floating video window, bottom-right corner of the screen: rounded
  0.75rem corners, soft shadow, thin glass-like border, showing 2–3 shrunk
  participant video tiles stacked/tiled inside it, with a small drag-handle
  icon in its top-left corner to signal it's draggable.

BEHAVIOR: Static screen — should clearly read as "the video call is still
live but minimized, and the user's full attention/canvas is now on the
notes document."

CONSTRAINTS:
- Light theme for the notes canvas and all UI chrome; the PiP video tiles
  themselves stay dark-neutral, matching Screen 7's video treatment.
- The PiP window must look clearly like a floating overlay (visible shadow
  separating it from the canvas beneath), not embedded in the page layout.
```

---

## SCREEN 9 (OPTIONAL) — Dark Mode Variant

```
Generate a Dark Mode variant of [paste screen name, e.g., "the Home / Bento
Dashboard screen"], keeping the exact same layout, spacing, component
structure, and accent color as the Light Mode version. Invert the surface
colors only: deep charcoal/near-black background (not pure black), slightly
lighter card surfaces for the Bento grid, and keep the same indigo/violet
accent color for buttons and highlights so the brand identity stays
consistent between themes.
```

Only run Screen 9 per-screen, after each Light screen is finalized — and remember that once you've manually adjusted a Light screen, First Draft can't be re-prompted on that frame, so regenerate Dark mode as a **new, separate frame** rather than expecting it to sync automatically.

---

### Notes on Figma AI's current limitations (worth knowing before you start)
- First Draft generates **individual screens, not connected multi-screen flows** — you'll need to use **Add Interactions** (from the Actions menu) afterward to wire up prototype links between these screens.
- It draws from **Figma's own built-in UI libraries**, not a custom design system — expect to do manual cleanup pass to fully match Vero's bespoke aesthetic (e.g., glassmorphism and Framer-Motion-style drag states won't render literally, since these are static outputs).
- **Once you manually edit a generated frame, prompt-based refinement is disabled for that frame** — do all your prompt iteration first, then switch to manual polish.
- Figma announced its **agent** (rolling out from May 20, 2026) as the evolution of First Draft, with deeper iterative re-prompting and bulk edits — if it's available on your account, these same prompts work there too, and you'll get the added benefit of being able to keep refining after edits.