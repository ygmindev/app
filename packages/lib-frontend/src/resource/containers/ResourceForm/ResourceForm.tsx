import { type ReactElement } from 'react';

import { SelectField } from '#lib-frontend/core/components/SelectField/SelectField';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type ResourceFormPropsModel } from '#lib-frontend/resource/containers/ResourceForm/ResourceForm.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { DATA_TYPE_MORE } from '#lib-shared/data/data.constants';

export const ResourceForm = <TType,>({
  columns,
  onSubmit,
  ...props
}: LFCPropsModel<ResourceFormPropsModel<TType>>): ReactElement<
  LFCPropsModel<ResourceFormPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer
      {...wrapperProps}
      fields={columns?.map(({ id, label, options, type }) => {
        const element = (() => {
          switch (type) {
            case DATA_TYPE_MORE.STRING_LIST:
              return (
                <SelectField
                  isHorizontal
                  isMultiple
                  options={options ?? []}
                />
              );
            default:
              return <TextField label={label ?? id} />;
          }
        })();
        return { element, id };
      })}
      onSubmit={onSubmit}
    />
  );
};
