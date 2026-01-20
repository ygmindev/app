import { type I18nextToolkitConfig } from 'i18next-cli';

export type ParserConfigModel = {
  distDir: string;

  languages: Array<string>;

  missingValue: string;
};

export type _ParserConfigModel = I18nextToolkitConfig;
