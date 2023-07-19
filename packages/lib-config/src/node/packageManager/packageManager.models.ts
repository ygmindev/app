export type PackageManagerConfigModel = {
  fixedVersions: Record<string, string>;

  toJsx: Array<string>;
};
