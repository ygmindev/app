export type FileConfigModel = {
  backupDir: string;

  buildDir: string;

  cleanPatterns: Array<string>;

  excludePatterns: Array<string>;

  packagePrefixes: Array<string>;
};
