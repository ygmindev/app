export type FileConfigModel = {
  assetsDir: string;

  backupPath: string;

  buildDir: string;

  cacheDir: string;

  cleanPatterns: Array<string>;

  distDir: string;

  excludePatterns: Array<string>;

  extensions: Array<string>;

  packageDirs: Array<string>;

  packagePrefixes: Array<string>;

  prunePatterns: Array<string>;

  publicDir: string;
};
