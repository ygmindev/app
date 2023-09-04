import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';

export type ItemFieldPropsModel = FieldPropsModel & {
  options: Array<TranslatableOptionModel>;
};
