import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type SpecificationImplementationModel = EntityResourceImplementationModel<
  SpecificationModel,
  SpecificationFormModel,
>;
