import { type AccessTablePropsModel } from '@lib/frontend/auth/containers/AccessTable/AccessTable.models';
import { useAccessResource } from '@lib/frontend/auth/hooks/useAccessResource/useAccessResource';
import { ACCESS_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Access/Access.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type AccessFormModel,
  type AccessModel,
} from '@lib/shared/auth/resources/Access/Access.models';

export const AccessTable: LFCModel<AccessTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useAccessResource();
  return (
    <ResourceTable<AccessModel, AccessFormModel>
      {...wrapperProps}
      {...ACCESS_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
