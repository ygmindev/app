import { type ProtectedResourceServiceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResourceService/ProtectedResourceService.models';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingServiceModel = ProtectedResourceServiceModel<FundingModel, FundingFormModel>;
