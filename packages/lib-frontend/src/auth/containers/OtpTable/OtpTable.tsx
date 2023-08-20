import { OTP_TABLE_PROPS } from '#lib-frontend/auth/containers/OtpTable/OtpTable.constants';
import { type OtpTablePropsModel } from '#lib-frontend/auth/containers/OtpTable/OtpTable.models';
import { useOtpResource } from '#lib-frontend/auth/hooks/useOtpResource/useOtpResource';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';

export const OtpTable: SFCModel<OtpTablePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const service = useOtpResource();
  return (
    <ResourceTable<OtpModel, OtpFormModel>
      {...OTP_TABLE_PROPS}
      service={service}
      style={styles}
      testID={testID}
    />
  );
};
