import { type LFCModel } from '@lib/frontend/core/core.models';
import { type {{NAME}}(pascalCase)TablePropsModel } from '@lib/frontend/{{MODULE}}(camelCase)/containers/{{NAME}}(pascalCase)Table/{{NAME}}(pascalCase)Table.models';
import { use{{NAME}}(pascalCase)Resource } from '@lib/frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource';
import { {{NAME}}(constantCase)_RESOURCE_PARAMS } from '@lib/frontend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export const {{NAME}}(pascalCase)Table: LFCModel<{{NAME}}(pascalCase)TablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = use{{NAME}}(pascalCase)Resource();
  return (
    <ResourceTable<{{NAME}}(pascalCase)Model, {{NAME_ROOT}}(pascalCase)Model>
      {...wrapperProps}
      {...{{NAME}}(constantCase)_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
