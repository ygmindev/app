import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type ItemSpecificationModel = SpecificationModel<{
  categories?: Array<string>;
}>;