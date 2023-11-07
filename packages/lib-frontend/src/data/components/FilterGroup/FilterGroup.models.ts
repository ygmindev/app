import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type FormFieldModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FilterGroupPropsModel<TType> = WithIdModel &
  WithIconPropsModel & {
    fields?: Array<FormFieldModel<TType>>;
    label?: TranslatableTextModel;
  };
