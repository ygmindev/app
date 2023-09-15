import { type ReactElement, type ReactNode } from 'react';

import { type AsyncBoundaryContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel, type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type UseFormParamsModel } from '#lib-frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FormContainerPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> &
  SubmittablePropsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    bottomElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
    cancelLabel?: TranslatableTextModel;
    fields?: Array<FormFieldModel<TType> | FormRowModel<TType>>;
    isButton?: boolean;
    isGrouped?: boolean;
    onChange?<TKey extends StringKeyModel<TType>>(id: TKey, value: TType[TKey]): void;
    submitLabel?: TranslatableTextModel;
    topElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
  };

export type FormRowModel<TType> = WithIdModel & {
  fields?: Array<FormFieldModel<TType>>;
  isGrouped?: boolean;
};

export type FormFieldModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  element: ReactElement<FieldPropsModel<TType[TKey]>>;
};
