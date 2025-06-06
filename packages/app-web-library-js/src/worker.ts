try {
  if (process.env.NODE_ENV === 'production') {
    await import('../__build__/server/entry.mjs');
  }
} catch (_) {}

import { ssrHandler } from '@lib/backend/web/utils/ssrHandler/ssrHandler';

ssrHandler();
