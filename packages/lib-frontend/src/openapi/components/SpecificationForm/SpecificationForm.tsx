import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { MultipleInput } from '@lib/frontend/data/components/MultipleInput/MultipleInput';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { type SpecificationFormPropsModel } from '@lib/frontend/openapi/components/SpecificationForm/SpecificationForm.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type ReactElement } from 'react';

export const SpecificationForm = <TType,>({
  specification,
  ...props
}: LFCPropsModel<SpecificationFormPropsModel<TType>>): ReactElement<
  LFCPropsModel<SpecificationFormPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });

  const steps = specification.fields.map(({ id, isArray, isOptional, type }) => {
    const element = (() => {
      switch (type) {
        case FIELD_TYPE.ADDRESS:
          return <AddressInput label={id} />;
        case FIELD_TYPE.PHONE:
          return <PhoneInput label={id} />;
        case FIELD_TYPE.STRING:
          return <TextInput label={id} />;
        default:
          return <></>;
      }
    })();
    return {
      element: (
        <FormContainer
          fields={[{ element: isArray ? <MultipleInput element={element} /> : element, id }]}
          flex
          isCenter
          // validators={{ [id]: isOptional ? undefined : validateNotEmpty }}
        />
      ),
      id,
    };
  });

  return (
    <StepForm
      {...wrapperProps}
      flex
      onSubmit={async () => null}
      steps={steps}
    />
  );
};
