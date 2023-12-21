import isNil from 'lodash/isNil';
import map from 'lodash/map';
import { cloneElement, type ForwardedRef, type ReactElement, type ReactNode, useRef } from 'react';
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
  type FormContainerRefModel,
  type FormFieldModel,
  type FormFieldsModel,
  type FormFieldsRefModel,
  type FormRowModel,
  type FormTileModel,
} from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { SubmittableButtons } from '#lib-frontend/data/components/SubmittableButtons/SubmittableButtons';
import { type FieldPropsModel, type FieldRefModel } from '#lib-frontend/data/data.models';
import { useForm } from '#lib-frontend/data/hooks/useForm/useForm';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StringKeyModel } from '#lib-shared/core/core.models';

export const FormContainer = forwardRef(
  <TType, TResult = void>(
    { errorContextGet, ...props }: LFCPropsModel<FormContainerPropsModel<TType, TResult>>,
    ref: ForwardedRef<FormContainerRefModel<TType>>,
  ): ReactElement<
    RLFCPropsModel<FormContainerRefModel<TType>, FormContainerPropsModel<TType, TResult>>
  > => {
    const Component = FormContainerF as RLFCModel<
      FormContainerRefModel<TType>,
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
  props: RLFCPropsModel<FormContainerRefModel<TType>, FormContainerPropsModel<TType, TResult>>,
) => ReactElement<
  RLFCPropsModel<FormContainerRefModel<TType>, FormContainerPropsModel<TType, TResult>>
>;

const FormContainerF = forwardRef(
  <TType, TResult = void>(
    {
      bottomElement,
      cancelLabel,
      elementState,
      fields,
      initialValues,
      isAutoFocus = true,
      isBlocking,
      isButton = true,
      isFullHeight,
      isFullWidth,
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
    ref: ForwardedRef<FormContainerRefModel<TType>>,
  ): ReactElement<
    RLFCPropsModel<FormContainerRefModel<TType>, FormContainerPropsModel<TType, TResult>>
  > => {
    const [isAppLoading] = useStore('app.isLoading');
    const { wrapperProps } = useLayoutStyles({ props });

    const fieldRefs = useRef<FormFieldsRefModel<TType>>({});

    useImperativeHandle(ref, () => ({
      fieldRefs,
      reset: handleReset,
      submit: async () => handleSubmitF(),
      valuesSet,
    }));

    const getValues = (data: TType, fields?: Array<FormFieldsModel<TType>>): TType =>
      fields
        ? fields.reduce((result, field) => {
            const fieldsF = (field as FormTileModel<TType> | FormRowModel<TType>).fields;
            if (fieldsF) {
              return { ...result, ...getValues(data, fieldsF) };
            }
            const value = data[field.id as StringKeyModel<TType>];
            const beforeSubmit = fieldRefs.current[field.id]?.beforeSubmit;
            return isNil(value)
              ? result
              : {
                  ...result,
                  ...{ [field.id]: beforeSubmit ? beforeSubmit(value, field.id) : value },
                };
          }, {} as TType)
        : data;

    const onSubmitF = async (data: TType): Promise<TResult | null> => {
      const dataF = getValues(data, fields);
      return (onSubmit && (await onSubmit(dataF))) ?? null;
    };

    const handleSubmitF = (): void => {
      !isAppLoading && handleSubmit();
    };

    const { errors, handleChange, handleReset, handleSubmit, isLoading, values, valuesSet } =
      useForm<TType, TResult>({
        initialValues,
        isBlocking,
        isValidateChanged,
        onComplete,
        onError,
        onSubmit: onSubmitF,
        onSuccess,
        validators,
      });

    const elementStateF = isAppLoading || isLoading ? ELEMENT_STATE.LOADING : elementState;

    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;

    const getField = <TKey extends StringKeyModel<TType>>(
      { element, id }: FormFieldModel<TType, TKey>,
      isFirst?: boolean,
    ): FormFieldModel<TType, TKey> => ({
      element: cloneElement(element, {
        defaultValue: initialValues ? initialValues[id] : undefined,
        elementState: elementStateF ?? element.props.elementState,
        error: errors ? errors[id] : undefined,
        isAutoFocus: isAutoFocus && isFirst,
        key: id,
        onChange: (v) => handleChange(id)(v),
        onSubmit: handleSubmitF,
        ref: (elementF: FieldRefModel<TType, TKey>) =>
          fieldRefs.current && (fieldRefs.current[id] = elementF),
        value: values[id],
      } as FieldPropsModel<TType[TKey]>),
      id,
    });

    const getRow = (row: FormRowModel<TType>, isFirst?: boolean): ReactElement => {
      const fieldsF = map(row.fields, (field, j) => getField(field, isFirst && j === 0));
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

    const getTile = (tile: FormTileModel<TType>, isFirst?: boolean): ReactElement => (
      <Accordion
        border
        defaultValue={ELEMENT_STATE.ACTIVE}
        key={tile.id}
        round
        title={tile.title}>
        <Wrapper
          p
          s>
          {map(tile.fields, (field, j) => {
            const isFirstF = isFirst && j === 0;
            return (field as FormRowModel<TType>).fields
              ? getRow(field as FormRowModel<TType>, isFirstF)
              : getField(field as FormFieldModel<TType>, isFirstF).element;
          })}
        </Wrapper>
      </Accordion>
    );

    const getFields = (): ReactNode =>
      fields?.map((field, i) => {
        const isFirst = i === 0;
        const tile = field as FormTileModel<TType>;
        if (tile.fields && tile.title) {
          return getTile(tile, isFirst);
        }
        const row = field as FormRowModel<TType>;
        if (row.fields) {
          return getRow(row, isFirst);
        }
        return getField(field as FormFieldModel<TType>, isFirst).element;
      });

    return (
      <Form onSubmit={isDisabled ? undefined : async () => handleSubmitF()}>
        <MainLayout
          {...wrapperProps}
          bottomElement={
            isButton ? (
              <SubmittableButtons
                cancelLabel={cancelLabel}
                elementState={elementStateF}
                onCancel={onCancel}
                onSubmit={async () => handleSubmitF()}
                submitLabel={submitLabel}
              />
            ) : undefined
          }
          isFullHeight={isFullHeight}
          isFullWidth={isFullWidth}
          s>
          {topElement && topElement({ elementState: elementStateF })}

          {getFields()}

          {bottomElement && bottomElement({ elementState: elementStateF })}
        </MainLayout>
      </Form>
    );
  },
);
