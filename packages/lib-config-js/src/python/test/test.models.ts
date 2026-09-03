export type TestConfigModel = {
  include?: string;

  outDir: string;

  testDir: string;

  command(params: Omit<TestConfigModel, 'command'>): string;
};
