export type PackageManagerConfigModel = {
  fixedVersions: Record<string, string>;

  installCommand(
    names?: string,
    packages?: Array<string>,
    options?: PackageManagerInstallOptionsModel,
  ): string;

  name: string;

  pythonVersionCommand(version: string, packages: Array<string>): string;

  removeCommand(names?: string, packages?: Array<string>): string;
};

export type PackageManagerInstallOptionsModel = {
  isDev?: boolean;
};
