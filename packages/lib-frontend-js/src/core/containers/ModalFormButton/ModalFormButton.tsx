import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import {
  type ModalFormButtonPropsModel,
  type ModalFormButtonRefModel,
} from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton.models';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { type ComponentType, type ReactElement } from 'react';

export const ModalFormButton = <TType, TResult = void>({
  bottomElement,
  cancelLabel,
  errorContextGet,
  fields,
  initialValues,
  isFullHeight,
  isValidateChanged,
  onCancel,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  onValidate,
  redirect,
  ref,
  submitLabel,
  successMessage,
  topElement,
  validators,
  ...props
}: RLFCPropsModel<
  ModalFormButtonRefModel<TType>,
  ModalFormButtonPropsModel<TType, TResult>
>): ReactElement<
  RLFCPropsModel<ModalFormButtonRefModel<TType>, ModalFormButtonPropsModel<TType, TResult>>
> => (
  <ModalButton
    {...props}
    element={({ onClose }) => (
      <FormContainer
        bottomElement={bottomElement}
        cancelLabel={cancelLabel}
        errorContextGet={errorContextGet}
        fields={fields}
        initialValues={initialValues}
        isFullHeight={isFullHeight}
        isValidateChanged={isValidateChanged}
        onCancel={() => {
          onCancel?.();
          onClose();
        }}
        onComplete={onComplete}
        onError={onError}
        onSubmit={onSubmit}
        onSuccess={async () => {
          await onSuccess?.();
          onClose();
        }}
        onValidate={onValidate}
        p
        redirect={redirect}
        ref={ref}
        submitLabel={submitLabel}
        successMessage={successMessage}
        testID={props.testID ? `${props.testID}-form` : undefined}
        topElement={topElement}
        validators={validators}
      />
    )}
  />
);

process.env.APP_IS_DEBUG &&
  ((ModalFormButton as ComponentType).displayName = variableName({ ModalFormButton }));
