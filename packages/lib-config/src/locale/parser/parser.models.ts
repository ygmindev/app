export interface ParserConfigModel {
  languages: Array<string>;

  missingValue: string;

  namespaceDefault: string;

  outputPath: string;
}

export type _ParserConfigModel = object;
