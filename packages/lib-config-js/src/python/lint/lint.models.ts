export type LintConfigModel = {
  command(params: Omit<LintConfigModel, 'command'>): string;

  includeDirs: Array<string>;
};
