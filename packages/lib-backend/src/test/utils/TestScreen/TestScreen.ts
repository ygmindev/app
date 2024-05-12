import { Screen } from '@lib/shared/crawling/utils/Screen/Screen';

export class TestScreen extends Screen {
  async snapshot({ filename }: { filename?: string } = {}): Promise<Buffer | null> {
    const img = await super.snapshot({ filename: undefined });
    // expect(img).toMatchImageSnapshot({
    //   customDiffDir: fromWorking(outputPath, 'diffs'),
    //   customReceivedDir: fromWorking(outputPath, 'received'),
    //   customSnapshotIdentifier: ({ counter, currentTestName }) =>
    //     joinPaths([slug(currentTestName), counter.toString(), params?.filename]),
    //   customSnapshotsDir: fromWorking(screenConfig.snapshotPath),
    // });
    return img;
  }
}
