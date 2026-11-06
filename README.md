# AI Legal Assistant

A React-based legal-assistance interface intended to help users explore legal topics and organize legal information with an AI-assisted workflow.

> **Important:** This project is an educational software tool, not a law firm or a substitute for advice from a qualified lawyer. AI-generated legal information may be incomplete, outdated, or jurisdictionally incorrect.

## Technology
- React 19 and Vite 6
- React Router
- Tailwind CSS 4
- Lucide React and React Icons

## Requirements
- Node.js compatible with the Vite version in `Ai-Lawyer-Main/package.json`
- npm

## Run locally
```bash
git clone https://github.com/Siddharthsingh123456/ai-legal-assistant.git
cd ai-legal-assistant/Ai-Lawyer-Main
npm install
npm run dev
```
Vite prints the local development URL in the terminal.

## Production build
```bash
npm run build
npm run preview
npm run lint
```

## Project structure
The application is contained in `Ai-Lawyer-Main/`. Its package manifest, Vite configuration, and frontend source are inside that directory.

## Configuration
Review the source for any external AI or service integrations before configuring credentials. Store required credentials in local environment variables or the deployment platform's secret manager. Never expose private API keys in browser code or commit them to Git.

## Deployment
Set the deployment root directory to `Ai-Lawyer-Main`. Use `npm run build` and the `dist` output directory.

## Responsible use
Confirm jurisdiction and date for legal research. Verify statutes, regulations, and case law against authoritative sources. Do not rely on generated output as legal advice or submit confidential client information.

## License
No license file is currently specified. Contact the repository owner before reuse.
