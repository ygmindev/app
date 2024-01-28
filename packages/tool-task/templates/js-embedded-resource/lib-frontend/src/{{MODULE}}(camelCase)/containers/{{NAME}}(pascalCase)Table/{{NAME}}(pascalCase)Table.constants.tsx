import { NUMBER_UNIT_TYPE } from '@lib/frontend/data/data.constants';
import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const {{NAME}}(constantCase)_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
  ],
  name: {{NAME}}(constantCase)_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel>, 'implementation'>;
