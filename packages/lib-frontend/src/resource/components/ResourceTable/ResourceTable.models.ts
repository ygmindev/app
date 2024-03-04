import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';
import { type ReactElement } from 'react';

export type ResourceTablePropsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceParamsModel<TType, TRoot> &
  RootInputModel<TRoot> & {
    implementation: ResourceImplementationModel<TType, TForm, TRoot>;
  };

export type ResourceTableFieldModel<TType> = { element: ReactElement<InputPropsModel<TType>> };
