import map from 'lodash/map';
import { cloneElement, type ForwardedRef, type ReactElement, useCallback } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ERROR_MODE } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.constants';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import {
  type LFCPropsModel,
  type RLFCModel,
  type RLFCPropsModel,
} from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { FieldGroup } from '#lib-frontend/data/components/FieldGroup/FieldGroup';
import { Form } from '#lib-frontend/data/components/Form/Form';
import {
  type FormContainerPropsModel,
  type FormFieldModel,
  type FormRowModel,
} from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { type FieldPropsModel, type FormRefModel } from '#lib-frontend/data/data.models';
import { useForm } from '#lib-frontend/data/hooks/useForm/useForm';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StringKeyModel } from '#lib-shared/core/core.models';

export const FormContainer = forwardRef(
  <TType, TResult = void>(
    { errorContextGet, ...props }: LFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel<TType>>,
  ): ReactElement<RLFCPropsModel<FormRefModel<TType>, FormContainerPropsModel<TType, TResult>>> => {
    const Component = FormContainerF as RLFCModel<
      FormRefModel<TType>,
      FormContainerPropsModel<TType, TResult>
    >;
    return (
      <AsyncBoundary
        errorContextGet={errorContextGet}
        errorMode={ERROR_MODE.NOTIFICATION}>
        <Component
          {...props}
          ref={ref}
        />
      </AsyncBoundary>
    );
  },
) as <TType, TResult = void>(
  props: RLFCPropsModel<FormRefModel<TType>, FormContainerPropsModel<TType, TResult>>,
) => ReactElement<RLFCPropsModel<FormRefModel<TType>, FormContainerPropsModel<TType, TResult>>>;

const FormContainerF = forwardRef(
  <TType, TResult = void>(
    {
      bottomElement,
      cancelLabel,
      elementState,
      fields,
      initialValues,
      isBlocking,
      isButton = true,
      isGrouped,
      isValidateChanged,
      onCancel,
      onComplete,
      onError,
      onSubmit,
      onSuccess,
      submitLabel,
      topElement,
      validators,
      ...props
    }: LFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel<TType>>,
  ): ReactElement<RLFCPropsModel<FormRefModel<TType>, FormContainerPropsModel<TType, TResult>>> => {
    const { t } = useTranslation();
    const { wrapperProps } = useLayoutStyles({ props });

    useImperativeHandle(ref, () => ({
      reset: handleReset,
      submit: async () => handleSubmit(),
      values: () => values,
      valuesSet,
    }));

    const getValues = useCallback(
      (data: TType) =>
        fields?.reduce((result, field) => {
          const fieldsF = (field as FormRowModel<TType>).fields ?? [field];
          return {
            ...result,
            ...fieldsF.reduce(
              (resultRow, { _id }) => ({
                ...resultRow,
                [_id]: (data as Record<string, unknown>)[_id],
              }),
              {},
            ),
          };
        }, {} as TType),
      [fields],
    );

    const handleSubmitF = async (data: TType): Promise<TResult | null> => {
      const dataF = getValues(data);
      return (onSubmit && (await onSubmit(dataF))) ?? null;
    };

    const { errors, handleChange, handleReset, handleSubmit, isLoading, values, valuesSet } =
      useForm<TType, TResult>({
        initialValues,
        isBlocking,
        isValidateChanged,
        onComplete,
        onError,
        onSubmit: handleSubmitF,
        onSuccess,
        validators,
      });

    const elementStateF = isLoading ? ELEMENT_STATE.LOADING : elementState;
    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;

    const getField = <TKey extends StringKeyModel<TType>>({
      _id,
      element,
    }: FormFieldModel<TType, TKey>): FormFieldModel<TType, TKey> => {
      const fieldProps = {
        defaultValue: initialValues ? (initialValues as Record<string, unknown>)[_id] : undefined,
        elementState: elementStateF ?? element.props.elementState,
        error: (errors as Record<string, unknown>)[_id],
        key: _id,
        onChange: handleChange(_id),
        onSubmit: handleSubmit,
        value: (values as Record<string, unknown>)[_id],
      } as FieldPropsModel<TType[TKey]>;
      return { _id, element: cloneElement(element, fieldProps) };
    };

    const rows = map(fields, (field) => {
      const fieldRow = field as FormRowModel<TType>;
      if (fieldRow.fields) {
        const fieldsF = map(fieldRow.fields, getField);
        return {
          _id: fieldRow._id,
          element: fieldRow.isGrouped ? (
            <FieldGroup
              fields={fieldsF}
              key={field._id}
            />
          ) : (
            <Wrapper
              isDistribute
              isRowAlign
              key={field._id}>
              {fieldsF.map(({ _id, element }) => cloneElement(element, { key: _id }))}
            </Wrapper>
          ),
        };
      }
      return getField(field as FormFieldModel<TType>);
    });

    return (
      <Form onSubmit={isDisabled ? undefined : async () => handleSubmit()}>
        <MainLayout
          {...wrapperProps}
          s>
          {topElement && topElement({ elementState: elementStateF })}

          {isGrouped ? (
            <FieldGroup fields={rows} />
          ) : (
            rows.map(({ _id, element }) => cloneElement(element, { key: _id }))
          )}

          {isButton && (
            <Wrapper
              isDistribute
              isRowAlign>
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
                  testID={props.testID ? `${props.testID}-submit` : undefined}>
                  {submitLabel ?? t('core:continue')}
                </Button>
              )}
            </Wrapper>
          )}

          {bottomElement && bottomElement({ elementState: elementStateF })}
        </MainLayout>
      </Form>
    );
  },
);
