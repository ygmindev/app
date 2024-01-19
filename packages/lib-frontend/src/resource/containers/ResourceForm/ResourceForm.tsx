import { type ReactElement, useState } from 'react';

import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
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
                <SelectInput
                  isHorizontal
                  isMultiple
                  label={labelF}
                  options={options ?? []}
                />
              );
            case PROPERTY_TYPE.RESOURCE: {
              return (
                <TextInput
                  beforeSubmit={async (v) => ({ _id: v })}
                  label={labelF}
                />
              );
            }
            default:
              return options ? (
                <DropdownInput
                  label={labelF}
                  options={options}
                />
              ) : (
                <TextInput label={labelF} />
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
              <TextInput
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
