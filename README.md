# cv-application

A small React + Vite demo app to build and preview a CV / resume.

This repository contains a lightweight form-based CV builder with three main sections:

- General Information
- Educational Experience (with start/end dates)
- Practical Experience (with start/end dates)

The UI updates live and includes simple "Log" buttons that print the current form data to the browser console. It's based on the Vite + React template.

## Features

- Split form sections implemented as React components
- Controlled inputs with state lifted to `App` (so a parent function can access all data)
- Start / end date fields for education and employment
- Live preview of entered values

## Quick start

Prerequisites: Node.js (LTS recommended) and npm.

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the app in your browser (Vite will show the URL, usually http://localhost:5173)

Build for production

```bash
npm run build
npm run preview
```

## Project structure (important files)

- `index.html` – app entry HTML
- `src/main.jsx` – React entry file
- `src/App.jsx` – main App component (holds state for the form)
- `src/formSections.jsx` – the three form components: `GeneralInfo`, `EducationalExp`, `PracticalExp`
- `src/submitBtn.jsx` – (optional) submit or action button component
- `src/assets/` – images and static assets

## How to use the app

1. Fill the fields in the General Information section (first name, last name, email, phone).
2. Fill the Educational Experience section: school, program, start date, end date.
3. Fill the Practical Experience section: company, position, main tasks, start date, end date.
4. Use the "Log" buttons next to each section to print that section's data to the browser console for quick debugging.

Notes:
- Dates use native HTML `input type="date"` controls (browser date pickers).
- The app demonstrates lifting state to the `App` component so you can implement a single submit/save function that has access to all sections.

## Troubleshooting

- If the page is blank, open the browser DevTools console and check for runtime errors (undefined functions or variables are common after edits).
- If you commented out state in `App.jsx`, be careful to also remove or update any JSX that references the commented-out functions or variables (e.g., a button calling an undefined `handleAllData`).

## Development notes

- To add persistence, call an API from `App` or save to `localStorage`.
- To export the CV, you can serialize the combined state and pass it to a PDF generator (e.g., `html2pdf` or server-side PDF generation).

## Contributing

PRs and issues are welcome. Keep changes focused and add tests or notes for larger changes.

## License

This project is unlicensed. Add a license file if you plan to publish or reuse it commercially.
