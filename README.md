# AIZE Tech Assignment - Raphaël Ferrand

## Assumptions

- Use techs as close as possible to the ones discussed about the DS.
  - React of course.
  - Accessibility is not even a question.
  - Responsive is also a no-brainer.
  - From what I remember people use a wide variety of devices (e.g. from laptops to iPads, etc). Not sure the exact browser support though. This would be great. I would go with a classic "modern" browser support (see my opinion on it [here](https://raphaelferrand.com/posts/browsers-list-for-design-systems/) ):

```
"browserslist": [
  "last 3 versions",
  "last 2 major versions",
  "> 0.5%",
  "Firefox ESR",
  "not dead"
]
```

- Styling
  - I went with pure CSS. Because that's what I prefer. The DS might be using Tailwind, or something else. I went pure CSS. Actually CSS modules for the components, to ensure a tight scoping. From what I can see the marketing website is also NOT using Tailwind or Tailwind-like utility-class approach.
  - The assignment presents a "dark-mode" UI. Yet, when looking at the demos showcased on the marketing website I'm seeing it with light mode. I therefore will implement a dark mode as a priority, but letting it open for a possible light-theme when I have to make choices. I understand this is not a priority. But seeing the light mode is the one showcased in the demos make me believe it is not a dark-mode only product.

- State management
  - I did not know what is the state management system used in Aize products, and since the scope of the assignment is limited + we're focusing on the design system, I decided to keep this part as limited and mocked-up as possible.

## Approach & Timeline

### Discovery phase

- Browse Aize marketing website to get a feel of the company and its products, its brand identity, its fonts, etc
  - Brand feeling is, I'd say, a modern tech vibe.
  - Background is made of subtle gradients
  - Fonts
    - Brand font is sans serif, but sharp techy angles, reminding me a bit of the fonts of JetBrains or WeAreMartians.
    - e.g. Headline font = Karelia ("pay to use" font) ; body font = "Noto Sans" (Google font)
      - I took the liberty of putting "Noto Sans" without importing it. So if the user already has it then it's used. I made sure to double-check what was actually used on the screenshot-reference. And it actually is Noto Sans and NOT Arial (see [here](http://www.identifont.com/differences?first=Arial&second=Noto+Sans&q=Go))
  - Round border-radius, without being exagerated.
  - Transitions are not very dynamic. They exist, but I'd say like some "ease-in-out", I don't think there any linear-timing-functions used to make it more "real world springy".
  - is There a light/dark theme ? on the marketing website the answer is "no". But in the assignment it's clearly a dark mode. I'm unsure if it's a toggable theme or if it's a dark mode only product. Anyway time is too limited for this assignment.
  - Browsing the marketing website to get a feel of the "interaction feeling", how is it on hover, on clicked, etc. How are inputs "responding" in terms of UI when clicked and interacted with. I tried to replicate that as much as possible in the assignment. And even go beyond to give this little extra-lively touch.

### Implementation phase

#### Personal view of a React Design System basics:

- favor composability in the way to build React components
- clear tokens system (colors, typography, spacing, etc) with a 3 layers aliasing system (raw tokens, design tokens, component tokens)
- pure CSS
  - CSS modules for scoping
  - I would add some global CSS, maybe a layout as CSS module too, and some home-made utilities
- TS
- E2E testing = Playwright
- Storybook
- DX sugar:
  - add prettier (not done)
  - add stylelint (not done)
  - add editorconfig (not done)
  - probably add recommended VSCode extensions if work with more people (not done)

### Phase 1: basic implementation

- basic implementation of the components (buttons, inputs, etc) with a focus on the dark mode
- write Storybook stories to build the variants and document the components
  - add variants for the different states (hover, disabled, etc)
  - add component styling
  - add global styling
- refactor for a good component library system architecture, with a clear tokens system and composable components
- deploy

### Phase 2: polish and extra features

- create a Button component and refactor the ListItem consuming it.
- make List potentially an "ordered list" (`<ol>`)
- then, once the basic components are implemented, I would focus on the "interaction feeling" and the "liveliness" of the components, by adding some transitions and animations to make them more "real world" and less static.
- review A11y (accessibility) even though it's thought through from the start
  - make sure no-motion
  - review keyboard navigation
  - review screen-reader support
  - use A11y linters to have full scan
- increase testing
- Review and improve documentation
  - in an actual production work I'd discuss with designers etc to decide the documentation for guidelines, etc to add to the documentation

### Phase 3: next steps

- use CSS layers before release v1
- review performance
- increase surface a tests (more use-cases to cover, add some visual-comparison/regression testing (Playwright or Chromatic), etc)

### Christmas wishlist

- dark/light theme toggling
- add High-contrast mode for A11y
- add error logging and monitoring, with tool such as Sentry
- automate the deploy pipeline with CI/CD tools such as GitHub Actions
- deploy the component library to npm to be usable in different projects
