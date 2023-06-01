import type { OtpServiceModel } from '@lib/shared/auth/resources/Otp/OtpService/OtpService.models';

export interface UseOtpResourceModel extends Pick<OtpServiceModel, 'create'> {}
