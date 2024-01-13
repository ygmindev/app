import { type ReactElement } from 'react';

import { type FieldPropsModel } from '@lib-frontend/data/data.models';
import { type ResourceParamsModel } from '@lib-frontend/resource/resource.models';
import { type EntityResourceDataModel } from '@lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceServiceModel } from '@lib-shared/resource/utils/ResourceService/ResourceService.models';

export type ResourceTablePropsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceParamsModel<TType, TRoot> & {
  service: ResourceServiceModel<TType, TForm, TRoot>;
};

export type ResourceTableFieldModel<TType> = { element: ReactElement<FieldPropsModel<TType>> };
