import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type SettingsInputPropsModel<TType = string> = WithIdModel<DeepKeyModel<RootStateModel>> & {
  element: ReactElement<InputPropsModel<TType>>;
  title: AsyncTextModel;
};
