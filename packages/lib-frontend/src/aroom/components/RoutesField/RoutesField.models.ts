import { type FieldPropsModel, type FieldRefModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type RoutesFieldPropsModel = FieldPropsModel<Array<WithIdModel>>;

export type RoutesFieldRefModel = FieldRefModel<Array<WithIdModel>>;
