export type TestConfigModel = {
  command(params: Omit<TestConfigModel, 'command'>): string;

  outDir: string;

  testDir: string;
};
