import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { RSFCPropsModel, SFCModel, SFCPropsModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { ErrorProvider } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.constants';
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
import type { FormRefModel, StringFieldPropsModel } from '@lib/frontend/form/form.models';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';
import map from 'lodash/map';
import toNumber from 'lodash/toNumber';
import type { ForwardedRef, ReactElement } from 'react';
import { createElement, forwardRef, useCallback, useImperativeHandle, useMemo } from 'react';

export const FormContainer = forwardRef(
  <TType = void, TResult = void>(
    { errorContextGet, ...props }: SFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel<TType>>,
  ): ReactElement<RSFCPropsModel<FormRefModel<TType>, FormContainerPropsModel<TType, TResult>>> => (
    <ErrorProvider value={{ errorContextGet, mode: ERROR_MODE.NOTIFICATION }}>
      <_FormContainer
        {...props}
        ref={ref}
      />
    </ErrorProvider>
  ),
);

const _FormContainer = forwardRef(
  <TType = void, TResult = void>(
    {
      autoFocus = true,
      bottomElement,
      cancelLabel,
      elementState,
      initialValues,
      isBlocking,
      isButton = true,
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
    }: SFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel<TType>>,
  ): ReactElement<RSFCPropsModel<FormRefModel<TType>, FormContainerPropsModel<TType, TResult>>> => {
    const { styles } = useStyles({ props });
    const { t } = useTranslation();
    const { error, success } = useNotification();

    useImperativeHandle(ref, () => ({ reset: handleReset, submit: handleSubmit }));

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

    const { errors, handleChange, handleReset, handleSubmit, isLoading, values } = useForm<
      TType,
      TResult
    >({
      initialValues,
      isBlocking,
      onComplete,
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
    const _onSubmit = async (): Promise<void> => handleSubmit();

    const _getField = useCallback(
      ({ Component, field, fieldProps, id }: FormContainerFieldModel, isInitial?: boolean) => {
        const _fieldProps: StringFieldPropsModel = {
          ...fieldProps,
          defaultValue: initialValues
            ? (initialValues as Record<string, undefined>)[id]
            : undefined,
          elementState: _isDisabled
            ? ELEMENT_STATE.DISABLED
            : _elementState || fieldProps?.elementState,
          error: errors ? (errors as Record<string, undefined>)[id] : undefined,
          isAutoFocus:
            autoFocus === id || (isInitial && autoFocus === true) || fieldProps?.isAutoFocus,
          label: fieldProps?.label ? t(fieldProps.label) : undefined,
          onChange: handleChange(id),
          value: values ? (values as Record<string, undefined>)[id] : undefined,
        };

        switch (field) {
          case FORM_FIELD_TYPE.TEXT_FIELD: {
            return (
              <TextField
                {...(_fieldProps as TextFieldPropsModel)}
                key={id}
                onSubmit={_onSubmit}
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
            return createElement(Component as SFCModel<TextFieldPropsModel>, {
              ..._fieldProps,
              key: id,
              onSubmit: _onSubmit,
              testID: id,
            });
          }
        }
      },
      [values, errors, handleChange, initialValues, _onSubmit, _elementState],
    );

    return (
      <MainLayout
        isCenter
        isFullWidth={isFullWidth}
        style={styles}
        testID={testID}>
        <Form onSubmit={_isDisabled ? undefined : async () => handleSubmit()}>
          <Wrapper spacing>
            {topElement && topElement({ elementState: _elementState, handleReset, handleSubmit })}

            {map(rows, ({ fields, id }, i) => (
              <Wrapper
                isRowAlign
                key={id}>
                {/* {map(fields, (field, j) => _getField(field, !i && !j))} */}
                {map(fields, (field, j) => {
                  const _field = _getField(field, !i && !j);
                  return field.width ? (
                    <Wrapper
                      basis={0}
                      grow
                      key={field.id}
                      width={field.width}>
                      {_field}
                    </Wrapper>
                  ) : (
                    _field
                  );
                })}
              </Wrapper>
            ))}

            {bottomElement &&
              bottomElement({ elementState: _elementState, handleReset, handleSubmit })}
          </Wrapper>
        </Form>

        {isButton && (
          <Wrapper
            isDistribute={isFullWidth}
            isFullWidth
            isRowAlign
            justify={isFullWidth ? undefined : FLEX_JUSTIFY.FLEX_END}
            spacing={THEME_SIZE.SMALL}>
            {leftElement && leftElement({ elementState: _elementState, handleReset, handleSubmit })}

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
        )}
      </MainLayout>
    );
  },
);
