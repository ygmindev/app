export type PackageManagerConfigModel = {
  fixedVersions: Record<string, string>;

  installCommand(
    names?: string,
    packages?: Array<string>,
    options?: PackageManagerInstallOptionsModel,
  ): string;

  name: string;

  removeCommand(names?: string): string;

  toJsx: Array<string>;
};

export type PackageManagerInstallOptionsModel = {
  isDev?: boolean;
};
