import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
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
  data,
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
        fields?.map(({ field, fields: embeddedFields, id, isArray, label, options, type }) => {
          const element = (() => {
            const labelF = label ?? id;
            const elementState =
              id.startsWith('_') || (embeddedFields && !field) ? ELEMENT_STATE.DISABLED : undefined;
            if (field) {
              return cloneElement(field({}), { elementState, label: labelF });
            }
            switch (type) {
              case PROPERTY_TYPE.RESOURCE:
                return (
                  <TextInput
                    beforeSubmit={async (v) => ({ _id: v })}
                    elementState={elementState}
                    label={labelF}
                  />
                );
              case DATA_TYPE.NUMBER:
                return (
                  <NumberInput
                    elementState={elementState}
                    label={labelF}
                  />
                );
              default:
                return options ? (
                  isArray ? (
                    <SelectInput
                      elementState={elementState}
                      isMultiple
                      label={labelF}
                      options={options}
                    />
                  ) : (
                    <MenuInput
                      elementState={elementState}
                      label={labelF}
                      options={options}
                    />
                  )
                ) : (
                  <TextInput
                    elementState={elementState}
                    label={labelF}
                  />
                );
            }
          })();
          return { element, id };
        }),
      )}
      initialValues={data}
      isFullHeight
      onSubmit={onSubmit ? async (v) => onSubmit(v, rootValue) : undefined}
      p
      topElement={
        rootName
          ? () => (
              <TextInput
                elementState={ELEMENT_STATE.DISABLED}
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
