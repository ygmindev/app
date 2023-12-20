import { type ReactElement } from 'react';

import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type RootStateModel } from '#lib-frontend/root/stores/rootStore.models';
import { type DeepKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type SettingsFieldPropsModel<TType = string> = WithIdModel<DeepKeyModel<RootStateModel>> & {
  element: ReactElement<FieldPropsModel<TType>>;
  title: TranslatableTextModel;
};
