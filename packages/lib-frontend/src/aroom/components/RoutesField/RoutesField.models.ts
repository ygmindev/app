import { type FieldPropsModel, type FieldRefModel } from '@lib/frontend/data/data.models';
import { type AddressOptionModel } from '@lib/frontend/map/components/AddressField/AddressField.models';

export type RoutesFieldPropsModel = FieldPropsModel<Array<AddressOptionModel>>;

export type RoutesFieldRefModel = FieldRefModel<Array<AddressOptionModel>>;
