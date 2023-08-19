import {
  type UnderwriterFormModel,
  type UnderwriterModel,
} from '#lib-shared/capital/resources/Underwriter/Underwriter.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';

export type UnderwriterServiceModel = EntityResourceServiceModel<
  UnderwriterModel,
  UnderwriterFormModel
>;
