export type ExportModulesParamsModel = {
  globs: Array<string>;
  outPathname: string;
  outVariables?(filename: string): Array<string>;
};

export type ExportModulesModel = void;
