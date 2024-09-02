export type TestConfigModel = {
  command(params: Omit<TestConfigModel, 'command'>): string;

  outputDir: string;

  testDir: string;
};
