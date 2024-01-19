import { type ReactElement, useState } from 'react';

import { SelectField } from '@lib/frontend/core/components/SelectField/SelectField';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { DropdownField } from '@lib/frontend/data/components/DropdownField/DropdownField';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { TextField } from '@lib/frontend/data/components/TextField/TextField';
import { type ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { DATA_TYPE_MORE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const ResourceForm = <TType, TForm = EntityResourceDataModel<TType>, TRoot = undefined>({
  fields,
  onSubmit,
  rootName,
  ...props
}: LFCPropsModel<ResourceFormPropsModel<TType, TForm, TRoot>>): ReactElement<
  LFCPropsModel<ResourceFormPropsModel<TType, TForm, TRoot>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [rootValue, rootValueSet] = useState<
    (TRoot extends undefined ? never : string) | undefined
  >();
  return (
    <FormContainer
      {...wrapperProps}
      fields={fields?.map(({ id, label, options, type }) => {
        const element = (() => {
          const labelF = label ?? id;
          switch (type) {
            case DATA_TYPE_MORE.STRING_LIST:
              return (
                <SelectField
                  isHorizontal
                  isMultiple
                  label={labelF}
                  options={options ?? []}
                />
              );
            case PROPERTY_TYPE.RESOURCE: {
              return (
                <TextField
                  beforeSubmit={async (v) => ({ _id: v })}
                  label={labelF}
                />
              );
            }
            default:
              return options ? (
                <DropdownField
                  label={labelF}
                  options={options}
                />
              ) : (
                <TextField label={labelF} />
              );
          }
        })();
        return { element, id };
      })}
      onSubmit={
        onSubmit
          ? async (form) => onSubmit({ form: form as unknown as TForm, root: rootValue })
          : undefined
      }
      p
      topElement={
        rootName
          ? () => (
              <TextField
                label={rootName}
                onChange={(v: TRoot extends undefined ? never : string) => rootValueSet(v)}
                value={rootValue}
              />
            )
          : undefined
      }
    />
  );
};
