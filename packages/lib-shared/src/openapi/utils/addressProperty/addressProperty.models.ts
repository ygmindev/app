import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type CoordinateModel } from '@lib/shared/map/map.models';
import { type PropertyModel } from '@lib/shared/openapi/utils/PropertyField/PropertyField.models';

export type AddressPropertyModel = PropertyModel<AddressModel>;

export type AddressModel = WithIdModel & CoordinateModel;
