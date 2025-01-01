import { Screen } from '@lib/shared/crawling/utils/Screen/Screen';

export class TestScreen extends Screen {
  async snapshot({
    dirname,
    filename,
  }: { dirname?: string; filename?: string | number } = {}): Promise<Uint8Array | null> {
    const img = await super.snapshot({ dirname, filename });
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
