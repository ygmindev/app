import map from 'lodash/map';
import { cloneElement, type ForwardedRef, type ReactElement, type ReactNode } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

import { Accordion } from '#lib-frontend/animation/components/Accordion/Accordion';
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
  type FormFieldsModel,
  type FormRowModel,
  type FormTileModel,
} from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { SubmittableButtons } from '#lib-frontend/data/components/SubmittableButtons/SubmittableButtons';
import {
  type FieldPropsModel,
  type FormInputModel,
  type FormRefModel,
} from '#lib-frontend/data/data.models';
import { useForm } from '#lib-frontend/data/hooks/useForm/useForm';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StringKeyModel } from '#lib-shared/core/core.models';

const getValues = <TType, TInput extends FormInputModel<TType> = TType>(
  data: TType,
  fields?: Array<FormFieldsModel<TType, TInput>>,
): TType =>
  fields
    ? fields.reduce((result, field) => {
        const fieldsF = (field as FormTileModel<TType, TInput> | FormRowModel<TType, TInput>)
          .fields;
        return {
          ...result,
          ...(fieldsF ? getValues(data, fieldsF) : { [field.id]: data[field.id] }),
        };
      }, {} as TType)
    : data;

export const FormContainer = forwardRef(
  <TType, TResult = void, TInput extends FormInputModel<TType> = TType>(
    { errorContextGet, ...props }: LFCPropsModel<FormContainerPropsModel<TType, TResult, TInput>>,
    ref: ForwardedRef<FormRefModel<TInput>>,
  ): ReactElement<
    RLFCPropsModel<FormRefModel<TInput>, FormContainerPropsModel<TType, TResult, TInput>>
  > => {
    const Component = FormContainerF as RLFCModel<
      FormRefModel<TInput>,
      FormContainerPropsModel<TType, TResult, TInput>
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
) as <TType, TResult = void, TInput extends FormInputModel<TType> = TType>(
  props: RLFCPropsModel<FormRefModel<TInput>, FormContainerPropsModel<TType, TResult>>,
) => ReactElement<RLFCPropsModel<FormRefModel<TInput>, FormContainerPropsModel<TType, TResult>>>;

const FormContainerF = forwardRef(
  <TType, TResult = void, TInput extends FormInputModel<TType> = TType>(
    {
      bottomElement,
      cancelLabel,
      elementState,
      fields,
      initialValues,
      isBlocking,
      isButton = true,
      isValidateChanged,
      onCancel,
      onComplete,
      onError,
      onSubmit,
      onSuccess,
      onTransform,
      submitLabel,
      topElement,
      validators,
      ...props
    }: LFCPropsModel<FormContainerPropsModel<TType, TResult, TInput>>,
    ref: ForwardedRef<FormRefModel<TInput>>,
  ): ReactElement<
    RLFCPropsModel<FormRefModel<TInput>, FormContainerPropsModel<TType, TResult, TInput>>
  > => {
    const isAppLoading = useStore((state) => state.app.isLoading);
    const { wrapperProps } = useLayoutStyles({ props });

    useImperativeHandle(ref, () => ({
      reset: handleReset,
      submit: async () => handleSubmitF(),
      valuesSet,
    }));

    const onSubmitF = async (data: TType): Promise<TResult | null> => {
      const dataF = getValues(data, fields);
      return (onSubmit && (await onSubmit(dataF))) ?? null;
    };

    const handleSubmitF = (): void => {
      !isAppLoading && handleSubmit();
    };

    const { errors, handleChange, handleReset, handleSubmit, isLoading, values, valuesSet } =
      useForm<TType, TResult, TInput>({
        initialValues,
        isBlocking,
        isValidateChanged,
        onComplete,
        onError,
        onSubmit: onSubmitF,
        onSuccess,
        onTransform,
        validators,
      });

    const elementStateF = isAppLoading || isLoading ? ELEMENT_STATE.LOADING : elementState;

    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;

    const getField = <TKey extends StringKeyModel<TType>>({
      element,
      id,
    }: FormFieldModel<TType, TInput, TKey>): FormFieldModel<TType, TInput, TKey> => ({
      element: cloneElement(element, {
        defaultValue: initialValues ? initialValues[id] : undefined,
        elementState: elementStateF ?? element.props.elementState,
        error: errors ? errors[id] : undefined,
        key: id,
        onChange: (v) => handleChange(id)(v),
        onSubmit: handleSubmitF,
        value: values[id],
      } as FieldPropsModel<TInput[TKey]>),
      id,
    });

    const getRow = (row: FormRowModel<TType, TInput>): ReactElement => {
      const fieldsF = map(row.fields, getField);
      return row.isGrouped ? (
        <FieldGroup
          fields={fieldsF}
          key={row.id}
        />
      ) : (
        <Wrapper
          isDistribute
          isRowAlign
          key={row.id}>
          {fieldsF.map(({ element }) => element)}
        </Wrapper>
      );
    };

    const getTile = (tile: FormTileModel<TType, TInput>): ReactElement => (
      <Accordion
        border
        defaultValue={ELEMENT_STATE.ACTIVE}
        key={tile.id}
        label={tile.label}
        round>
        <Wrapper
          p
          s>
          {map(tile.fields, (field) =>
            (field as FormRowModel<TType, TInput>).fields
              ? getRow(field as FormRowModel<TType, TInput>)
              : getField(field as FormFieldModel<TType, TInput>).element,
          )}
        </Wrapper>
      </Accordion>
    );

    const getFields = (): ReactNode =>
      fields?.map((field) => {
        const tile = field as FormTileModel<TType, TInput>;
        if (tile.fields && tile.label) {
          return getTile(tile);
        }
        const row = field as FormRowModel<TType, TInput>;
        if (row.fields) {
          return getRow(row);
        }
        return getField(field as FormFieldModel<TType, TInput>).element;
      });

    return (
      <Form onSubmit={isDisabled ? undefined : async () => handleSubmitF()}>
        <MainLayout
          {...wrapperProps}
          bottomElement={
            isButton ? (
              <SubmittableButtons
                cancelLabel={cancelLabel}
                onCancel={onCancel}
                onSubmit={async () => handleSubmitF()}
                submitLabel={submitLabel}
              />
            ) : undefined
          }
          flex
          s>
          {topElement && topElement({ elementState: elementStateF })}

          {getFields()}

          {bottomElement && bottomElement({ elementState: elementStateF })}
        </MainLayout>
      </Form>
    );
  },
);
