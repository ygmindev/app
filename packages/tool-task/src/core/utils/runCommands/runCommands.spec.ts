import { runCommands } from '#tool-task/core/utils/runCommands/runCommands';

import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ runCommands });

describe(displayName, () => {
  test('works', async () => {
    const COMPLETE_MESSAGE = 'COMPLETE_MESSAGE';
    const result = await runCommands({
      commands: [{ command: `read -p "${COMPLETE_MESSAGE}"`, completeMessage: COMPLETE_MESSAGE }],
    });
    expect(result).toStrictEqual(true);
  });
});
