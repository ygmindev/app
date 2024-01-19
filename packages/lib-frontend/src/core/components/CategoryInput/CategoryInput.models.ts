import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type ItemInputPropsModel = InputPropsModel &
  WithIdModel & {
    emptyLabel?: TranslatableTextModel;
    options: Array<TranslatableOptionModel> | (() => Promise<Array<TranslatableOptionModel>>);
  };
