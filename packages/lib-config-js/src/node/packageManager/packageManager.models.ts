import { type PACAKGE_INSTALL_MODE } from '@lib/config/node/packageManager/packageManager.constants';

export type PackageManagerConfigModel = {
  fixedVersions?: Record<string, string>;

  installCommand(
    names?: string,
    packages?: Array<string>,
    options?: PackageManagerInstallOptionsModel,
  ): string;

  modulesDir: string;

  name: string;

  removeCommand(names?: string, packages?: Array<string>): string;
};

export type PackageManagerInstallOptionsModel = {
  mode?: PackageInstallMode;
};

export type PackageInstallMode = `${PACAKGE_INSTALL_MODE}`;
