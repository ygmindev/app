import type { GraphQlFieldModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';

export const OTP_FIELDS: Array<GraphQlFieldModel<OtpModel>> = ['_id'];
