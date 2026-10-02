# TypeScript + Fastify starter

A minimal, runnable [Fastify](https://fastify.dev/) service in TypeScript. It is the shared
starting point for the DayZer0 TypeScript + Fastify catalog briefs — your board builds its
first feature on top of this skeleton rather than scaffolding a new project.

## What's here

- `src/app.ts` — `buildApp()` creates the Fastify instance and registers routes. Import it in
  tests and call `app.inject(...)` to exercise routes without opening a socket.
- `src/server.ts` — starts the server (reads `PORT`, default 3000).
- A `GET /healthz` route that answers `{ "status": "ok" }`.
- `tsconfig.json` with `strict` on, and the dependencies pinned in `package.json`.

## Requirements

- Node.js 20 or newer, and npm.

## Run it

```bash
npm install        # pull the pinned dependencies
npm run dev        # start on http://localhost:3000 with reload
curl localhost:3000/healthz   # -> {"status":"ok"}
```

## Other commands

```bash
npm run typecheck  # tsc --noEmit, strict
npm run build      # compile to dist/
npm start          # run the compiled server
npm test           # node --test
```
