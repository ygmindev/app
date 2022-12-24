import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { portIsOpen } from '@tool/task/core/utils/portIsOpen/portIsOpen';
import type { Server } from 'net';
import { createServer } from 'net';

const { displayName } = withTest({ target: () => portIsOpen });

describe(displayName, () => {
  const PORT = '9999';
  let server: Server;

  test('works with closed', async () => {
    const result = await portIsOpen(PORT);
    expect(result).toStrictEqual(true);
  });

  test('works with open', async () => {
    await new Promise((resolve) => {
      server = createServer();
      server.listen(PORT);
      server.on('listening', resolve);
    });

    const result = await portIsOpen(PORT);
    expect(result).toStrictEqual(false);
  });

  afterAll(async () => {
    server && server.close();
  });
});
