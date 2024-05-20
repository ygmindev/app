// COMPLETE
export type FileConfigModel = {
  backupDir: string;

  buildPath: string;

  cachePath: string;

  cleanPatterns: Array<string>;

  distPath: string;

  excludePatterns: Array<string>;

  packagePrefixes: Array<string>;

  prunePatterns: Array<string>;

  publicPath: string;
};
