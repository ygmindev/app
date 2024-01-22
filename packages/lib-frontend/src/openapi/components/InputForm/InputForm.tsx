import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { type InputFormPropsModel } from '@lib/frontend/openapi/components/InputForm/InputForm.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';

export const InputForm: LFCModel<InputFormPropsModel> = ({ specification, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const steps = specification.fields.map(({ id, isOptional, type }) => {
    const element = (() => {
      switch (type) {
        case FIELD_TYPE.STRING:
          return <TextInput label={id} />;
        case FIELD_TYPE.ADDRESS:
          return <AddressInput label={id} />;
        default:
          return <></>;
      }
    })();
    return {
      element: (
        <FormContainer
          fields={[{ element, id }]}
          flex
          isCenter
          validators={{ [id]: isOptional ? undefined : validateNotEmpty }}
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
