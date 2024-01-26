import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type CoordinateModel } from '@lib/shared/map/map.models';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type AddressSpecificationModel = SpecificationModel<AddressModel>;

export type AddressModel = WithIdModel & CoordinateModel;
