import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';

export const OTP_FIELDS = ['_id'] satisfies GraphQlQueryParamsFieldsModel<OtpModel>;
