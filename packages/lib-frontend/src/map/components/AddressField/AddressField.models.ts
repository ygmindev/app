import { type FieldPropsModel, type FieldRefModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type CoordinateModel } from '#lib-shared/map/map.models';

export type AddressFieldPropsModel = FieldPropsModel<CoordinateModel>;

export type AddressFieldRefModel = FieldRefModel<CoordinateModel>;

export type AddressOptionModel = WithIdModel & CoordinateModel;
