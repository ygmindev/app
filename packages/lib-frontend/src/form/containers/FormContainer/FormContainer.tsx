import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ErrorContainer } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer';
import { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { Form } from '@lib/frontend/form/components/Form/Form';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type {
  FormContainerFieldModel,
  FormContainerPropsModel,
} from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import type { FieldPropsModel } from '@lib/frontend/form/form.models';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';
import toNumber from 'lodash/toNumber';
import type { ReactElement } from 'react';
import { cloneElement, useCallback, useMemo } from 'react';

export const FormContainer = <TType = void, TResult = void>({
  getError,
  ...props
}: SFCPropsModel<FormContainerPropsModel<TType, TResult>>): ReactElement<
  SFCPropsModel<FormContainerPropsModel<TType, TResult>>
> => (
  <ErrorContainer
    getError={getError}
    mode={ERROR_CONTAINER_MODE.NOTIFICATION}>
    <_FormContainer<TType, TResult> {...props} />
  </ErrorContainer>
);

const _FormContainer = <TType = void, TResult = void>({
  cancelLabel,
  elementState,
  initialValues,
  isBlocking,
  isFullWidth,
  leftElement,
  onCancel,
  onComplete,
  onSubmit,
  onSuccess,
  rows,
  submitLabel,
  successMessage,
  testID,
  topElement,
  validators,
  ...props
}: SFCPropsModel<FormContainerPropsModel<TType, TResult>>): ReactElement<
  SFCPropsModel<FormContainerPropsModel<TType, TResult>>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { error, success } = useNotification();
  const { handleError } = useErrorBoundary();

  const _fields = useMemo(() => rows?.map(({ fields }) => fields).flat(), [rows]);
  const _getValues = (data: TType): TType =>
    _fields
      ? _fields.reduce((result, field) => {
          if (field?.id) {
            let _value = (data as Record<string, unknown>)[field.id];
            switch (field?.type) {
              case FIELD_TYPE.NUMBER: {
                _value = toNumber(_value);
                break;
              }
            }
            return { ...result, [field.id]: _value };
          }
          return result;
        }, {} as TType)
      : data;

  const _handleSubmit = async (): Promise<TResult | null> => {
    const _initialValues = initialValues && _getValues(initialValues);
    const _values = _getValues(values);
    if (isEqual(_initialValues, _values)) {
      error({ message: t('core:messages.validateChanged') });
      return null;
    } else {
      return (onSubmit && (await onSubmit(_values as TType))) || null;
    }
  };

  const { errors, handleChange, handleSubmit, isLoading, values } = useForm<TType, TResult>({
    initialValues,
    isBlocking,
    onComplete,
    onError: handleError,
    onSubmit: _handleSubmit,
    onSuccess: async (data, result) => {
      onSuccess && (await onSuccess(data, result));
      successMessage ? async () => success({ message: t(successMessage) }) : undefined;
    },
    validators,
  });

  const _elementState = isLoading ? ELEMENT_STATE.LOADING : elementState;
  const _isDisabled =
    _elementState === ELEMENT_STATE.DISABLED || _elementState === ELEMENT_STATE.LOADING;

  const _getField = useCallback(
    ({ field, fieldProps, id, render }: FormContainerFieldModel) => {
      const _fieldProps: FieldPropsModel = {
        ...fieldProps,
        defaultValue: initialValues ? (initialValues as Record<string, undefined>)[id] : undefined,
        elementState: _isDisabled
          ? ELEMENT_STATE.DISABLED
          : _elementState || fieldProps?.elementState,
        error: errors ? (errors as Record<string, undefined>)[id] : undefined,
        label: fieldProps?.label ? t(fieldProps.label) : undefined,
        onChange: handleChange(id),
        value: values ? (values as Record<string, undefined>)[id] : undefined,
      };

      const _onSubmit = async (): Promise<void> => handleSubmit();

      switch (field) {
        case FORM_FIELD_TYPE.TEXT_FIELD: {
          return (
            <TextField
              {...(_fieldProps as TextFieldPropsModel)}
              key={id}
              onSubmit={async () => handleSubmit()}
              testID={id}
            />
          );
        }
        case FORM_FIELD_TYPE.SELECT_FIELD: {
          return (
            <SelectField
              {...(_fieldProps as SelectFieldPropsModel)}
              key={id}
              onSubmit={_onSubmit}
              testID={id}
            />
          );
        }
        default: {
          return cloneElement((render as (params: FieldPropsModel) => ReactElement)(_fieldProps), {
            key: id,
            testID: id,
          });
        }
      }
    },
    [values, errors, handleChange, handleSubmit, initialValues, _elementState],
  );

  return (
    <MainLayout
      isCenter
      isFullWidth={isFullWidth}
      style={styles}
      testID={testID}>
      <Form onSubmit={_isDisabled ? undefined : async () => handleSubmit()}>
        <Wrapper spacing>
          {topElement}

          {rows?.map(({ fields, id }) => (
            <Wrapper
              isDistribute
              isRowAlign
              key={id}>
              {fields?.map(_getField)}
            </Wrapper>
          ))}
        </Wrapper>
      </Form>

      <Wrapper
        isDistribute={isFullWidth}
        isFullWidth
        isRowAlign
        justify={isFullWidth ? undefined : FLEX_JUSTIFY.FLEX_END}
        spacing={THEME_BASIC_SIZE.SMALL}>
        {leftElement}

        {onCancel && (
          <Button
            elementState={_elementState}
            icon="chevronLeft"
            onPress={onCancel}
            type={BUTTON_TYPE.TRANSPARENT}>
            {cancelLabel || t('core:labels.cancel')}
          </Button>
        )}

        <Button
          elementState={_elementState}
          icon="chevronRight"
          onPress={handleSubmit}>
          {submitLabel || t('core:labels.submit')}
        </Button>
      </Wrapper>
    </MainLayout>
  );
};
