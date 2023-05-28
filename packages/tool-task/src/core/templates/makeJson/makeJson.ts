import { command } from '@tool/task/core/utils/command/command';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { MakeJsonParamsModel } from '@tool/task/core/templates/makeJson/makeJson.models';
import { config } from '@lib/config/core/file/file';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

const makeJson: TaskParamsModel<MakeJsonParamsModel> = {
  name: 'makeJson',

  task: async ({ options }) => {
    let _filename = options?.filename;
    if (_filename) {
      _filename = resolve(options?.outDir || config.buildDir, _filename);
      _filename = `${_filename.replaceAll('.json', '')}.json`;
      const _value = options?.value && await options?.value();
      if (_value && options.filename) {
        writeFileSync(_filename, JSON.stringify(_value, null, '  '), 'utf8');
      }
      throw new InvalidArgumentError('value');
    }
    throw new InvalidArgumentError('filename');
  },
};

export default makeJson; 
