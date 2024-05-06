import { type InputRefModel, type InputPropsModel } from '@lib/frontend/data/data.models';
import { type AddressOptionModel } from '@lib/frontend/map/components/AddressInput/AddressInput.models';

export type RoutesInputPropsModel = InputPropsModel<Array<AddressOptionModel>>;

export type RoutesInputRefModel = InputRefModel<Array<AddressOptionModel>>;
