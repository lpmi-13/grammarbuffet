# grammarbuffet

A landing page for a collection of language-learning micromaterials.

It is a single static page — plain, semantic HTML, modern CSS, and a small
amount of vanilla JavaScript. There is no framework and no build step.

## Local development

Serve the folder with any static file server:

```
npm install
npm start
```

The page will be available at `http://localhost:8080`.

## Accessibility tests

Automated accessibility checks run with Cypress and axe-core:

```
npm test              # headless run
npm run test:cypress  # interactive Cypress runner
```

## Security testing

- first, build the docker container locally using the information at
  https://github.com/lirantal/is-website-vulnerable
- then run `npm run test:security`, which will use the container you just built
