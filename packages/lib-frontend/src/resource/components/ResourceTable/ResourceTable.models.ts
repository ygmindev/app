import { type ReactElement } from 'react';

import { type TablePropsModel } from '#lib-frontend/data/components/Table/Table.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type ResourceFilterFormPropsModel } from '#lib-frontend/resource/components/ResourceFilterForm/ResourceFilterForm.models';
import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type ResourceTablePropsModel<TType, TForm = undefined, TRoot = undefined> = Pick<
  ResourceFilterFormPropsModel<TType, TForm, TRoot>,
  'filters'
> &
  Pick<TablePropsModel<TType>, 'columns'> & {
    service: ResourceServiceModel<TType, TForm, TRoot>;
    title?: TranslatableTextModel;
  };

export type ResourceTableFieldModel<TType> = { element: ReactElement<FieldPropsModel<TType>> };
