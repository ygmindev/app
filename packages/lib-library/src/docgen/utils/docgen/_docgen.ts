import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import {
  type _DocgenModel,
  type _DocgenParamsModel,
} from '@lib/library/docgen/utils/docgen/_docgen.models';
import { existsSync, readFileSync } from 'fs';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import { dirname } from 'path';
import { withCustomConfig } from 'react-docgen-typescript';
import { type LanguageImplementation, type Program } from 'typescript';
import {
  createDocumentRegistry,
  createLanguageImplementation,
  getDefaultLibFilePath,
  parseJsonConfigFileContent,
  readConfigFile,
  ScriptSnapshot,
  sys,
} from 'typescript';

const fileCache = new Map<string, { text: string; version: number }>();

export const _docgen = (params: _DocgenParamsModel): _DocgenModel => {
  const tsconfigFile = fromWorking('tsconfig.json');
  const parser = withCustomConfig(tsconfigFile, {
    savePropValueAsString: true,
    shouldRemoveUndefinedFromOptional: true,
  });

  const implementation: LanguageImplementation = createLanguageImplementation(
    {
      fileExists: sys.fileExists,
      getCompilationSettings: () =>
        parseJsonConfigFileContent(
          readConfigFile(tsconfigFile, (filename) => readFileSync(filename, 'utf8')).config,
          sys,
          dirname(tsconfigFile),
          {},
          tsconfigFile,
        ).options,
      getCurrentDirectory: fromWorking,
      getDefaultLibFileName: getDefaultLibFilePath,
      getScriptFileNames: () => [...fileCache.keys()],
      getScriptSnapshot: (key) => {
        if (existsSync(key)) {
          let file = fileCache.get(key);
          if (file === undefined) {
            file = { text: readFileSync(key, 'utf-8'), version: 0 };
            fileCache.set(key, file);
          }
          return ScriptSnapshot.fromString(file.text);
        }
        return undefined;
      },
      getScriptVersion: (key) => {
        const file = fileCache.get(key);
        return (file && file.version.toString()) || '';
      },
      readDirectory: sys.readDirectory,
      readFile: sys.readFile,
    },
    createDocumentRegistry(),
  );

  fileCache.set(params, { text: readFileSync(params, 'utf-8'), version: 0 });
  const parsed = parser.parseWithProgramProvider(
    params,
    () => implementation.getProgram() as Program,
  );
  if (parsed && parsed[0]) {
    return {
      name: parsed[0].displayName,
      propTypes: sortBy(
        map(parsed[0].props, (v, k) => ({
          isOptional: v.required ? false : true,
          name: k,
          type: v.type.name,
        })),
        'name',
      ),
    };
  }
  return null;
};
