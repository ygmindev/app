import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import toNumber from 'lodash/toNumber';
import { cloneElement, type ForwardedRef, type ReactElement } from 'react';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ERROR_MODE } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.constants';
import { CORNER, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import {
  type LFCPropsModel,
  type RLFCPropsModel,
  type RSFCPropsModel,
  type SFCPropsModel,
} from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { Form } from '#lib-frontend/form/components/Form/Form';
import { SelectField } from '#lib-frontend/form/components/SelectField/SelectField';
import { type SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { type TextFieldPropsModel } from '#lib-frontend/form/components/TextField/TextField.models';
import { FORM_FIELD_TYPE } from '#lib-frontend/form/containers/FormContainer/FormContainer.constants';
import {
  type FormContainerPropsModel,
  type FormFieldPropsModel,
} from '#lib-frontend/form/containers/FormContainer/FormContainer.models';
import { type FormRefModel, type StringFieldPropsModel } from '#lib-frontend/form/form.models';
import { useForm } from '#lib-frontend/form/hooks/useForm/useForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';

export const FormContainer = forwardRef(
  <TType = void, TResult = void>(
    { errorContextGet, ...props }: SFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel>,
  ): ReactElement<RSFCPropsModel<FormRefModel, FormContainerPropsModel<TType, TResult>>> => (
    <AsyncBoundary
      errorContextGet={errorContextGet}
      errorMode={ERROR_MODE.NOTIFICATION}>
      <FormContainerF
        {...props}
        ref={ref}
      />
    </AsyncBoundary>
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
      isHorizontal,
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
    }: LFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel>,
  ): ReactElement<RLFCPropsModel<FormRefModel, FormContainerPropsModel<TType, TResult>>> => {
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
        return (onSubmit && (await onSubmit(dataF))) ?? null;
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

    const getField = (
      { element, field, fieldProps, id }: FormFieldPropsModel,
      isFirstRow = false,
      isFirstField = false,
      isLastRow = false,
      isLastField = false,
    ): ReactElement => {
      const fieldPropsF: StringFieldPropsModel = {
        ...fieldProps,
        defaultValue: initialValues ? (initialValues as Record<string, undefined>)[id] : undefined,
        elementState: isDisabled
          ? ELEMENT_STATE.DISABLED
          : elementStateF ?? fieldProps?.elementState,
        error: errors ? (errors as Record<string, undefined>)[id] : undefined,
        isAutoFocus:
          autoFocus === id ||
          (!isFirstRow && !isFirstField && autoFocus === true) ||
          fieldProps?.isAutoFocus,
        onBlur: () => focusedSet(undefined),
        onChange: handleChange(id),
        onFocus: () => focusedSet(id),
        round: isGrouped
          ? {
              [CORNER.TOP_LEFT]: (isFirstRow && isFirstField) || 0,
              [CORNER.TOP_RIGHT]: (isFirstRow && isLastField) || 0,
              [CORNER.BOTTOM_LEFT]: (isLastRow && isFirstField) || 0,
              [CORNER.BOTTOM_RIGHT]: (isLastRow && isLastField) || 0,
            }
          : true,
        value: values ? (values as Record<string, undefined>)[id] : undefined,
        zIndex: focused && focused === id ? 1 : 0,
      };

      switch (field) {
        case FORM_FIELD_TYPE.TEXT_FIELD: {
          return (
            <TextField
              {...(fieldPropsF as TextFieldPropsModel)}
              key={id}
              onSubmit={handleSubmit}
              testID={id}
            />
          );
        }
        case FORM_FIELD_TYPE.SELECT_FIELD: {
          return (
            <SelectField
              {...(fieldPropsF as SelectFieldPropsModel)}
              key={id}
              onSubmit={handleSubmit}
              testID={id}
            />
          );
        }
        default: {
          return element ? (
            cloneElement(element, {
              ...fieldPropsF,
              key: id,
              onSubmit: handleSubmit,
              testID: id,
            })
          ) : (
            <></>
          );
        }
      }
    };

    const rowsF = map(rows, ({ fields, id }, i) => (
      <Wrapper
        isDistribute
        isRowAlign
        justify={isHorizontal ? FLEX_ALIGN.FLEX_START : undefined}
        key={id}
        s={isGrouped ? -1 : true}
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
        {...props}
        isFullWidth={isFullWidth}
        isRow={isHorizontal}
        s
        testID={testID}>
        <Form onSubmit={isDisabled ? undefined : async () => handleSubmit()}>
          <Wrapper s={isGrouped ? -1 : true}>
            {topElement && topElement({ elementState: elementStateF, handleReset, handleSubmit })}

            {rowsF}
          </Wrapper>
        </Form>

        {isButton && (
          <Wrapper
            isDistribute
            isRowAlign>
            {leftElement && leftElement({ elementState: elementStateF, handleReset, handleSubmit })}

            {onCancel && (
              <Button
                elementState={elementStateF}
                icon="chevronLeft"
                onPress={onCancel}
                type={BUTTON_TYPE.TRANSPARENT}>
                {cancelLabel ?? t('core:cancel')}
              </Button>
            )}

            {onSubmit && (
              <Button
                elementState={elementStateF}
                icon="chevronRight"
                onPress={handleSubmit}
                testID={testID ? `${testID}-submit` : undefined}>
                {submitLabel ?? t('core:continue')}
              </Button>
            )}
          </Wrapper>
        )}

        {bottomElement && bottomElement({ elementState: elementStateF, handleReset, handleSubmit })}
      </MainLayout>
    );
  },
);
