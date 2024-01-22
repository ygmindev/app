import { type MenuInputPropsModel } from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { type InputRefModel } from '@lib/frontend/data/data.models';

export type CountryInputPropsModel = Omit<MenuInputPropsModel, 'options'>;

export type CountryInputRefModel = InputRefModel;
