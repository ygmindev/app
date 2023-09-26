import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';

export type MultiSelectFieldPropsModel = FieldPropsModel<Array<string>> & {
  options: Array<TranslatableOptionModel>;
};
