import { type SpecificationInputFormPropsModel } from '@lib/frontend/api/components/SpecificationInputForm/SpecificationInputForm.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';
import { type SpecificationFieldModel } from '@lib/shared/api/utils/Specification/Specification.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import startCase from 'lodash/startCase';
import { type ReactElement } from 'react';

export const SpecificationInputForm = <TType extends unknown>({
  specification,
  validators,
  ...props
}: LFCPropsModel<SpecificationInputFormPropsModel<TType>>): ReactElement<
  LFCPropsModel<SpecificationInputFormPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });

  const getElement = (field: SpecificationFieldModel<TType>): ReactElement => {
    switch (field.type) {
      case FIELD_TYPE.ADDRESS:
        return (
          <AddressInput
            key={field.id}
            label={field.id}
          />
        );
      case FIELD_TYPE.DATE:
        return (
          <DateInput
            key={field.id}
            label={field.id}
          />
        );
      case FIELD_TYPE.NUMBER:
        return (
          <NumberInput
            key={field.id}
            label={field.id}
          />
        );
      case FIELD_TYPE.PHONE:
        return (
          <PhoneInput
            key={field.id}
            label={field.id}
          />
        );
      case FIELD_TYPE.STRING:
        return (
          <TextInput
            key={field.id}
            label={field.id}
          />
        );
      case FIELD_TYPE.PROPERTY: {
        // switch (field.specification.widget) {
        //   case WIDGET_TYPE.ADDRESS:
        //     return <AddressInput label={field.id} />;
        //   default:
        //     return (
        //       <Wrapper
        //         key={field.id}
        //         s={THEME_SIZE.SMALL}>
        //         {field.specification.fields.map(getElement)}
        //       </Wrapper>
        //     );
        // }
        return <></>;
      }
      default:
        return <></>;
    }
  };

  const handleSubmit = async (data: unknown): Promise<void> => {
    console.warn(data);
  };

  return (
    <Wrapper
      {...wrapperProps}
      border
      flex
      isOverflowHidden
      p
      round>
      <StepForm
        isProgress
        onSubmit={handleSubmit}
        steps={specification.fields.map((field) => ({
          fields: [{ element: getElement(field), id: field.id }],
          id: field.id,
          title: startCase(field.id),
          validators: {
            [field.id]: filterNil([
              validators?.[field.id as StringKeyModel<TType>],
              !field.isOptional && validateNotEmpty,
            ]),
          },
        }))}
      />
    </Wrapper>
  );
};
