import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';

export type {{NAME}}(pascalCase)Model = EntityResourceModel & {
  _{{NAME_ROOT}}(camelCase)?: RefFieldModel<{{NAME_ROOT}}(pascalCase)Model>;

  name?: string;
};
