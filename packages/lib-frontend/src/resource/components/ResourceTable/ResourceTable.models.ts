import { type ReactElement } from 'react';

import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type ResourceTablePropsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceParamsModel<TType, TRoot> & {
  service: ResourceImplementationModel<TType, TForm, TRoot>;
};

export type ResourceTableFieldModel<TType> = { element: ReactElement<InputPropsModel<TType>> };
