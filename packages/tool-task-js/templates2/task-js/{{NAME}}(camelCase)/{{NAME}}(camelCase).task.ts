import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type {{NAME}}(pascalCase)ParamsModel } from '@{{PATH}}(pathCase)/{{NAME}}/{{NAME}}.models';

const {{NAME}}(camelCase): TaskParamsModel<{{NAME}}(pascalCase)ParamsModel> = {
  name: '{{NAME}}(kebabCase)',

  options: () => [{ isOptional: true, key: 'key' }],

  task: [({ options }) => options?.key && ''],
};

export default {{NAME}}(camelCase);
