// COMPLETE
export type FileConfigModel = {
  backupDir: string;

  buildDir: string;

  cleanPatterns: Array<string>;

  distDir: string;

  excludePatterns: Array<string>;

  packagePrefixes: Array<string>;
};
