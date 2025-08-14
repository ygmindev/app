import { type LFCModel } from '@lib/frontend/core/core.models';
import { type SecurityTablePropsModel } from '@lib/frontend/quant/containers/SecurityTable/SecurityTable.models';
import { useSecurityResource } from '@lib/frontend/quant/hooks/useSecurityResource/useSecurityResource';
import { SECURITY_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/Security/Security.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export const SecurityTable: LFCModel<SecurityTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useSecurityResource();
  return (
    <ResourceTable<SecurityModel>
      {...wrapperProps}
      {...SECURITY_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
