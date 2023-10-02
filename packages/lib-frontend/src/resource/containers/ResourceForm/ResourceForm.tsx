import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type ResourceFormPropsModel } from '#lib-frontend/resource/containers/ResourceForm/ResourceForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const ResourceForm = <TType, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
  fields,
  service,
  ...props
}: SFCPropsModel<ResourceFormPropsModel<TType, TForm, TRoot>>): ReactElement<
  SFCPropsModel<ResourceFormPropsModel<TType, TForm, TRoot>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { create, update } = service;

  const handleSubmit = async (data: TForm): Promise<void> => {
    console.warn(data);
    return;
  };

  return (
    <FormContainer
      {...wrapperProps}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
};
