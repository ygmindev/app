import { type ReactElement } from 'react';

import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type ResourceFormPropsModel } from '#lib-frontend/resource/containers/ResourceForm/ResourceForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ResourceForm = <TType, TForm = undefined, TRoot = undefined>({
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
