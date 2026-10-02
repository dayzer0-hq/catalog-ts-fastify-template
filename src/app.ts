import Fastify, { type FastifyInstance } from 'fastify';

// buildApp wires the Fastify instance. Keep it separate from server.ts so tests can
// exercise routes with app.inject() without opening a socket — the catalog briefs ask
// you to keep logic testable without HTTP, and this is where that starts.
export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.get('/healthz', async () => {
    return { status: 'ok' };
  });

  return app;
}
