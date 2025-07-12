import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type AddressModel } from '@lib/shared/map/map.models';

export type AddressInputPropsModel = InputPropsModel<AddressModel>;

export type AddressInputRefModel = InputRefModel<AddressModel>;

export type AddressOptionModel = AddressModel & WithIdModel;
