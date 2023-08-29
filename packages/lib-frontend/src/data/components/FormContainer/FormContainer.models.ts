import { type ReactElement, type ReactNode } from 'react';

import { type AsyncBoundaryContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel, type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type UseFormParamsModel } from '#lib-frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type DataTypeModel } from '#lib-shared/data/data.models';

export type FormContainerPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> &
  SubmittablePropsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    bottomElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
    cancelLabel?: TranslatableTextModel;
    fields?: Array<FormFieldModel>;
    isButton?: boolean;
    isGrouped?: boolean;
    submitLabel?: TranslatableTextModel;
    topElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
  };

export type FormRowModel = WithIdModel & {
  fields?: Array<FormFieldModel>;
  isGrouped?: boolean;
};

export type FormFieldModel = WithIdModel & {
  element: ReactElement<FieldPropsModel>;
  type?: DataTypeModel;
};
