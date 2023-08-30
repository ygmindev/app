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
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';

export const FormContainer = forwardRef(
  <TType, TResult = void>(
    { errorContextGet, ...props }: LFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormRefModel>,
  ): ReactElement<RLFCPropsModel<FormRefModel, FormContainerPropsModel<TType, TResult>>> => {
    const Component = FormContainerF as RLFCModel<
      FormRefModel,
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
);

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
    ref: ForwardedRef<FormRefModel>,
  ): ReactElement<RLFCPropsModel<FormRefModel, FormContainerPropsModel<TType, TResult>>> => {
    const { t } = useTranslation();
    const { error } = useNotification();
    const { wrapperProps } = useLayoutStyles({ props });

    useImperativeHandle(ref, () => ({ reset: handleReset, submit: handleSubmit }));

    const getValues = useCallback(
      (data: TType) =>
        fields?.reduce((result, field) => {
          const fieldsF = (field as FormRowModel<TType>).fields ?? [field];
          return {
            ...result,
            ...fieldsF.reduce(
              (resultRow, { id }) => ({
                ...resultRow,
                [id]: (data as Record<string, unknown>)[id],
              }),
              {},
            ),
          };
        }, {} as TType),
      [fields],
    );

    const handleSubmitF = async (data: TType): Promise<TResult | null> => {
      const initialValuesF = initialValues && getValues(initialValues);
      const dataF = getValues(data);
      if (dataF) {
        if (isEqual(initialValuesF, dataF)) {
          error({ message: t('core:validateChanged') });
          return null;
        } else {
          return (onSubmit && (await onSubmit(dataF))) ?? null;
        }
      }
      return null;
    };

    const { errors, handleChange, handleReset, handleSubmit, isLoading, values } = useForm<
      TType,
      TResult
    >({
      initialValues,
      isBlocking,
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
      element,
      id,
    }: FormFieldModel<TType, TKey>): FormFieldModel<TType, TKey> => {
      const fieldProps = {
        defaultValue: initialValues ? (initialValues as Record<string, unknown>)[id] : undefined,
        elementState: elementStateF ?? element.props.elementState,
        error: (errors as Record<string, unknown>)[id],
        key: id,
        onChange: handleChange(id),
        onSubmit: handleSubmit,
        value: (values as Record<string, unknown>)[id],
      } as FieldPropsModel<TType[TKey]>;
      return { element: cloneElement(element, fieldProps), id };
    };

    const rows = map(fields, (field) => {
      const fieldRow = field as FormRowModel<TType>;
      if (fieldRow.fields) {
        const fieldsF = map(fieldRow.fields, getField);
        return {
          element: fieldRow.isGrouped ? (
            <FieldGroup
              fields={fieldsF}
              key={field.id}
            />
          ) : (
            <Wrapper
              isDistribute
              isRowAlign
              key={field.id}>
              {fieldsF.map(({ element }) => element)}
            </Wrapper>
          ),
          id: fieldRow.id,
        };
      }
      return field as FormFieldModel<TType, StringKeyModel<TType>>;
    });

    return (
      <MainLayout
        {...wrapperProps}
        s>
        <Form onSubmit={isDisabled ? undefined : async () => handleSubmit()}>
          <Wrapper s>
            {topElement && topElement({ elementState: elementStateF })}

            {isGrouped ? <FieldGroup fields={rows} /> : rows.map(({ element }) => element)}
          </Wrapper>
        </Form>

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
    );
  },
);
