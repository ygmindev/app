import { type SpecificationInputFormPropsModel } from '@lib/frontend/api/components/SpecificationInputForm/SpecificationInputForm.models';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormFieldsModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { FORM_FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';
import { type SpecificationFieldModel } from '@lib/shared/api/utils/Specification/Specification.models';
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
      case FORM_FIELD_TYPE.ADDRESS:
        return (
          <AddressInput
            key={field.id}
            label={field.id}
          />
        );
      case FORM_FIELD_TYPE.DATE:
        return (
          <DateInput
            key={field.id}
            label={field.id}
          />
        );
      case FORM_FIELD_TYPE.NUMBER:
        return (
          <NumberInput
            key={field.id}
            label={field.id}
          />
        );
      case FORM_FIELD_TYPE.PHONE:
        return (
          <PhoneInput
            key={field.id}
            label={field.id}
          />
        );
      case FORM_FIELD_TYPE.STRING:
        return (
          <TextInput
            key={field.id}
            label={field.id}
          />
        );
      case FORM_FIELD_TYPE.PROPERTY: {
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

  const steps = specification.fields.map((field) => {
    const element = getElement(field);
    return {
      element: (
        <FormContainer
          fields={[{ element, id: field.id }] as Array<FormFieldsModel<unknown>>}
          isCenter
          validators={validators}
        />
      ),
      id: field.id,
      title: field.id,
    };
  });

  return (
    <StepForm
      {...wrapperProps}
      isProgress
      onSubmit={handleSubmit}
      steps={steps}
    />
  );
};
