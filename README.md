# Accessible Tabs Code Challenge

Accessible Tabs Code Challenge: Create tab groups fully compliant with the WAI ARIA specification.

Web URL: [front-end-coding-test.web.app](https://front-end-coding-test.web.app)

This application includes:

- A set of tab group components fully compliant with the WAI ARIA specification
- The tab lists are fully operational and tested in Chrome, Firefox and Edge
- Home page lists examples of tab groups:

  - Tabs with "Automatic Activation" and handle multiple tab groups rendered on a single page
  - Directly link to any given tab on a page, retain active tab state with back/forward browser navigation and refresh

- Online resources used to complete the code challenge
  - [W3 WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel)
  - [ARIA: tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)

Install

| `yarn`

##### \* Prettier is not included as part of the eslint setup. Please enable it via VS Code's plugins section and tick the "Format On Save" option.

### Available Scripts:

Run the app in the development mode ([http://localhost:3000](http://localhost:3000)):

| `yarn start`

Launch the test runner in the interactive watch mode:

| `yarn test`

Check test coverage:

| `yarn test:coverage`

Run linter:

| `yarn lint`

Build the app for production to the `build` folder:

| `yarn build`

##### \* The package will include the app config.

Deploy the `build` directory's content to Firebase:

| `yarn deploy`

##### \* Make sure you install the latest firebase-tools, sign in to Google and run `firebase use [project-id]`.

## Description

I focused on writing simple and clean front-end code to demonstrate understanding of task requirements and design patterns. By adding TypeScript and restricted linting (including no-explicit-any), I wanted to demonstrate my experience to produce clean, reliable and well-structured code in a reasonably short amount of time.

Main patterns followed in my project:

- Atomic design
- Smart containers and simple components

Here is the list of [all activities on Git branches](https://github.com/alanrad/accessible-tabs-code-challenge/branches/yours).

> I didn't squash-merge or rebase-merge PRs to make it easy to read and understand my work progress.

---

### A few things to note

1. Added and configured linter tools and pre-commit hooks to produce reliable code and well-structured git commits (I follow AngulaJS commit message convention).
2. Added Firebase deployment for quick hosting and release solution.
3. Made configuration swappable to be able to deploy the same package to different dev/test environments.

---

### Testing

- Used Jest as a test runner and primarily used function components.
- Demonstrated testing patterns for React components:
  - Setup
  - act()
  - Rendering
  - Events
  - Snapshot Testing
