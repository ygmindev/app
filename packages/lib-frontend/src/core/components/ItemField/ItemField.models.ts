import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ItemFieldPropsModel = FieldPropsModel &
  WithIdModel & {
    options: Array<TranslatableOptionModel> | (() => Promise<Array<TranslatableOptionModel>>);
  };
