import type { GraphQlQueryParamsFieldsModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import type { ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const OTP_FIELDS: GraphQlQueryParamsFieldsModel<OtpModel> = ['_id'];

export const OTP_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  OtpModel
> = [{ result: OTP_FIELDS }];
