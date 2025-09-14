import { type PACAKGE_INSTALL_MODE } from '@lib/config/node/packageManager/packageManager.constants';

export type PackageManagerConfigModel = {
  fixedVersions?: Record<string, string>;

  modulesDir: string;

  name: string;

  installCommand(
    names?: string,
    packages?: Array<string>,
    options?: PackageManagerInstallOptionsModel,
  ): string;

  listCommand(pkg: string): string;

  patchCommand(pkg: string, dirname: string): string;

  patchCommitCommand(dirname: string): string;

  patchDir(pkg: string): string;

  removeCommand(names?: string, packages?: Array<string>): string;
};

export type PackageManagerInstallOptionsModel = {
  mode?: PACAKGE_INSTALL_MODE;
};
