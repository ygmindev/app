import { type OtpTablePropsModel } from '@lib/frontend/auth/containers/OtpTable/OtpTable.models';
import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import { OTP_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Otp/Otp.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type OtpFormModel, type OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';

export const OtpTable: LFCModel<OtpTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useOtpResource();
  return (
    <ResourceTable<OtpModel, OtpFormModel>
      {...wrapperProps}
      {...OTP_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
