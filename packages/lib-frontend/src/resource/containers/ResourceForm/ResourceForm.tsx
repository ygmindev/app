import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type ResourceFormPropsModel } from '@lib/frontend/resource/containers/ResourceForm/ResourceForm.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { cloneElement, type ReactElement, useState } from 'react';

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
      fields={filterNil(
        // TODO: render embeddedFields
        fields?.map(({ field, fields: embeddedFields, id, isArray, label, options, type }) => {
          if (id === '_id') {
            return null;
          }
          const element = (() => {
            const labelF = label ?? id;
            if (field) {
              return cloneElement(field(), { label: labelF });
            }
            switch (type) {
              case PROPERTY_TYPE.RESOURCE:
                return (
                  <TextInput
                    beforeSubmit={async (v) => ({ _id: v })}
                    label={labelF}
                  />
                );
              case DATA_TYPE.NUMBER:
                return <NumberInput label={labelF} />;
              default:
                return options ? (
                  isArray ? (
                    <SelectInput
                      isMultiple
                      label={labelF}
                      options={options}
                    />
                  ) : (
                    <MenuInput
                      label={labelF}
                      options={options}
                    />
                  )
                ) : (
                  <TextInput label={labelF} />
                );
            }
          })();
          return { element, id };
        }),
      )}
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
