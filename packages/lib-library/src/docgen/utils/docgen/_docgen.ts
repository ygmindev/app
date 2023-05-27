import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type {
  _DocgenModel,
  _DocgenParamsModel,
} from '@lib/library/docgen/utils/docgen/_docgen.models';
import { existsSync, readFileSync } from 'fs';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import { dirname } from 'path';
import { withCustomConfig } from 'react-docgen-typescript';
import type { LanguageService, Program } from 'typescript';
import {
  createDocumentRegistry,
  createLanguageService,
  getDefaultLibFilePath,
  parseJsonConfigFileContent,
  readConfigFile,
  ScriptSnapshot,
  sys,
} from 'typescript';

const _fileCache = new Map();

export const _docgen = (params: _DocgenParamsModel): _DocgenModel => {
  const _tsconfigFile = fromConfig('node/typescript/configs/tsconfig.json');
  const _parser = withCustomConfig(_tsconfigFile, {
    savePropValueAsString: true,
    shouldRemoveUndefinedFromOptional: true,
  });

  const _service: LanguageService = createLanguageService(
    {
      fileExists: sys.fileExists,
      getCompilationSettings: () =>
        parseJsonConfigFileContent(
          readConfigFile(_tsconfigFile, (filename) => readFileSync(filename, 'utf8')).config,
          sys,
          dirname(_tsconfigFile),
          {},
          _tsconfigFile,
        ).options,
      getCurrentDirectory: fromWorking,
      getDefaultLibFileName: getDefaultLibFilePath,
      getScriptFileNames: () => [..._fileCache.keys()],
      getScriptSnapshot: (key) => {
        if (existsSync(key)) {
          let _file = _fileCache.get(key);
          if (_file === undefined) {
            _file = { text: readFileSync(key, 'utf-8'), version: 0 };
            _fileCache.set(key, _file);
          }
          return ScriptSnapshot.fromString(_file.text);
        }
        return undefined;
      },
      getScriptVersion: (key) => {
        const _file = _fileCache.get(key);
        return (_file && _file.version.toString()) || '';
      },
      readDirectory: sys.readDirectory,
      readFile: sys.readFile,
    },
    createDocumentRegistry(),
  );

  _fileCache.set(params, { text: readFileSync(params, 'utf-8'), version: 0 });
  const _parsed = _parser.parseWithProgramProvider(params, () => _service.getProgram() as Program);
  if (_parsed && _parsed[0]) {
    return {
      name: _parsed[0].displayName,
      propTypes: sortBy(
        map(_parsed[0].props, (v, k) => ({
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
