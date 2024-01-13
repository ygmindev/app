import { type LFCModel } from '@lib-frontend/core/core.models';
import { {{NAME}}(constantCase)_TABLE_PROPS } from '@lib-frontend/{{MODULE}}(camelCase)/containers/{{NAME}}(pascalCase)Table/{{NAME}}(pascalCase)Table.constants';
import { type {{NAME}}(pascalCase)TablePropsModel } from '@lib-frontend/{{MODULE}}(camelCase)/containers/{{NAME}}(pascalCase)Table/{{NAME}}(pascalCase)Table.models';
import { use{{NAME}}(pascalCase)Resource } from '@lib-frontend/{{MODULE}}(camelCase)/hooks/use{{NAME}}(pascalCase)Resource/use{{NAME}}(pascalCase)Resource';
import { ResourceTable } from '@lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '@lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const {{NAME}}(pascalCase)Table: LFCModel<{{NAME}}(pascalCase)TablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const service = use{{NAME}}(pascalCase)Resource();
  return (
    <ResourceTable<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel>
      {...wrapperProps}
      {...{{NAME}}(constantCase)_TABLE_PROPS}
      service={service}
    />
  );
};
