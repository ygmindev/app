import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import toNumber from 'lodash/toNumber';
import { type ForwardedRef, type ReactElement } from 'react';
import {
  createElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import {
  type RSFCPropsModel,
  type SFCModel,
  type SFCPropsModel,
} from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { ErrorProvider } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import { Form } from '#lib-frontend/form/components/Form/Form';
import { SelectField } from '#lib-frontend/form/components/SelectField/SelectField';
import { type SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { type TextFieldPropsModel } from '#lib-frontend/form/components/TextField/TextField.models';
import { FORM_FIELD_TYPE } from '#lib-frontend/form/containers/FormContainer/FormContainer.constants';
import {
  type FormContainerFieldModel,
  type FormContainerPropsModel,
} from '#lib-frontend/form/containers/FormContainer/FormContainer.models';
import { type FormRefModel, type StringFieldPropsModel } from '#lib-frontend/form/form.models';
import { useForm } from '#lib-frontend/form/hooks/useForm/useForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { BORDER_RADIUS_DIRECTION } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { type CallableModel } from '#lib-shared/core/core.models';
import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

export const FormContainer = forwardRef(
  <TType = void, TResult = void>(
    { errorContextGet, ...props }: SFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel>,
  ): ReactElement<RSFCPropsModel<FormRefModel, FormContainerPropsModel<TType, TResult>>> => (
    <ErrorProvider value={{ errorContextGet, mode: ERROR_MODE.NOTIFICATION }}>
      <FormContainerF
        {...props}
        ref={ref}
      />
    </ErrorProvider>
  ),
);

const FormContainerF = forwardRef(
  <TType = void, TResult = void>(
    {
      autoFocus = true,
      beforeSubmit,
      bottomElement,
      cancelLabel,
      elementState,
      initialValues,
      isBlocking,
      isButton = true,
      isFullWidth,
      isGrouped,
      leftElement,
      onCancel,
      onComplete,
      onError,
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
    ref: ForwardedRef<FormRefModel>,
  ): ReactElement<RSFCPropsModel<FormRefModel, FormContainerPropsModel<TType, TResult>>> => {
    const { styles } = useStyles({ props });
    const { t } = useTranslation();
    const { error, success } = useNotification();
    const [focused, focusedSet] = useState<string>();

    useImperativeHandle(ref, () => ({ reset: handleReset, submit: handleSubmit }));

    const fieldsF = useMemo(() => rows?.map(({ fields }) => fields).flat(), [rows]);
    const getValues = (data: TType): TType =>
      fieldsF
        ? fieldsF.reduce((result, field) => {
            if (field?.id) {
              let value = (data as Record<string, unknown>)[field.id];
              switch (field?.type) {
                case FIELD_TYPE.NUMBER: {
                  value = toNumber(value);
                  break;
                }
              }
              return { ...result, [field.id]: value };
            }
            return result;
          }, {} as TType)
        : data;

    const handleSubmitF = async (data: TType): Promise<TResult | null> => {
      const initialValuesF = initialValues && getValues(initialValues);
      const dataF = getValues(data);
      if (isEqual(initialValuesF, dataF)) {
        error({ message: t('core:validateChanged') });
        return null;
      } else {
        return (onSubmit && (await onSubmit(dataF))) || null;
      }
    };

    const { errors, handleChange, handleReset, handleSubmit, isLoading, values } = useForm<
      TType,
      TResult
    >({
      beforeSubmit,
      initialValues,
      isBlocking,
      onComplete,
      onError,
      onSubmit: handleSubmitF,
      onSuccess: async (data, result) => {
        onSuccess && (await onSuccess(data, result));
        return successMessage ? success({ message: t(successMessage) }) : undefined;
      },
      validators,
    });

    const elementStateF = isLoading ? ELEMENT_STATE.LOADING : elementState;
    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;
    const onSubmitF: CallableModel = () => handleSubmit();
    const getField = useCallback(
      (
        { Component, field, fieldProps, id }: FormContainerFieldModel,
        isFirstRow = false,
        isFirstField = false,
        isLastRow = false,
        isLastField = false,
      ) => {
        const fieldPropsF: StringFieldPropsModel = {
          ...fieldProps,
          defaultValue: initialValues
            ? (initialValues as Record<string, undefined>)[id]
            : undefined,
          elementState: isDisabled
            ? ELEMENT_STATE.DISABLED
            : elementStateF || fieldProps?.elementState,
          error: errors ? (errors as Record<string, undefined>)[id] : undefined,
          isAutoFocus:
            autoFocus === id ||
            (!isFirstRow && !isFirstField && autoFocus === true) ||
            fieldProps?.isAutoFocus,
          label: fieldProps?.label ? t(fieldProps.label) : undefined,
          onBlur: () => focusedSet(undefined),
          onChange: handleChange(id),
          onFocus: () => focusedSet(id),
          round: isGrouped
            ? {
                [BORDER_RADIUS_DIRECTION.TOP_LEFT]: (isFirstRow && isFirstField) || 0,
                [BORDER_RADIUS_DIRECTION.TOP_RIGHT]: (isFirstRow && isLastField) || 0,
                [BORDER_RADIUS_DIRECTION.BOTTOM_LEFT]: (isLastRow && isFirstField) || 0,
                [BORDER_RADIUS_DIRECTION.BOTTOM_RIGHT]: (isLastRow && isLastField) || 0,
              }
            : 0,
          value: values ? (values as Record<string, undefined>)[id] : undefined,
          zIndex: focused && focused === id ? 1 : 0,
        };

        switch (field) {
          case FORM_FIELD_TYPE.TEXT_FIELD: {
            return (
              <TextField
                {...(fieldPropsF as TextFieldPropsModel)}
                key={id}
                onSubmit={() => onSubmitF()}
                testID={id}
              />
            );
          }
          case FORM_FIELD_TYPE.SELECT_FIELD: {
            return (
              <SelectField
                {...(fieldPropsF as SelectFieldPropsModel)}
                key={id}
                onSubmit={onSubmitF}
                testID={id}
              />
            );
          }
          default: {
            return createElement(Component as SFCModel<TextFieldPropsModel>, {
              ...fieldPropsF,
              key: id,
              onSubmit: onSubmitF,
              testID: id,
            });
          }
        }
      },
      [values, errors, handleChange, initialValues, onSubmitF, elementStateF],
    );

    const rowsF = map(rows, ({ fields, id }, i) => (
      <Wrapper
        isRowAlign
        key={id}
        spacing={isGrouped ? -1 : true}
        zIndex={
          focused ? (findIndex(fields, (field) => field.id === focused) >= 0 ? 1 : 0) : undefined
        }>
        {map(fields, (field, j) =>
          getField(
            field,
            i === 0,
            j === 0,
            i === (rows?.length || 0) - 1,
            j === (fields?.length || 0) - 1,
          ),
        )}
      </Wrapper>
    ));

    return (
      <MainLayout
        isCenter
        isFullWidth={isFullWidth}
        style={styles}
        testID={testID}>
        <Form onSubmit={isDisabled ? undefined : async () => handleSubmit()}>
          <Wrapper spacing={isGrouped ? -1 : true}>
            {topElement && topElement({ elementState: elementStateF, handleReset, handleSubmit })}

            {rowsF}
          </Wrapper>
        </Form>

        {isButton && (
          <Wrapper
            isDistribute
            isFullWidth
            isRowAlign>
            {leftElement && leftElement({ elementState: elementStateF, handleReset, handleSubmit })}

            {onCancel && (
              <Button
                elementState={elementStateF}
                icon="chevronLeft"
                onPress={onCancel}
                type={BUTTON_TYPE.TRANSPARENT}>
                {cancelLabel || t('core:cancel')}
              </Button>
            )}

            <Button
              elementState={elementStateF}
              icon="chevronRight"
              onPress={handleSubmit}>
              {submitLabel || t('core:continue')}
            </Button>
          </Wrapper>
        )}

        {bottomElement && bottomElement({ elementState: elementStateF, handleReset, handleSubmit })}
      </MainLayout>
    );
  },
);
