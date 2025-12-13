import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ PubSub });

describe(displayName, () => {
  const TOPIC = 'topic';
  const DATA = { data: 'data' };

  test('works', async () => {
    const pubsub = new PubSub();
    pubsub.subscribeTopic(TOPIC, (data) => {
      expect(data).toStrictEqual(DATA);
    });
    pubsub.publish(TOPIC, DATA);
    await sleep(1000);
    pubsub.close();
    expect(1).toStrictEqual(1);
  });
});
