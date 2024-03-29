import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type LFCPropsModel,
  type RLFCModel,
  type RLFCPropsModel,
} from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { Form } from '@lib/frontend/data/components/Form/Form';
import {
  type FormContainerPropsModel,
  type FormContainerRefModel,
  type FormFieldModel,
  type FormFieldsModel,
  type FormFieldsRefModel,
  type FormRowModel,
  type FormTileModel,
} from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { InputGroup } from '@lib/frontend/data/components/InputGroup/InputGroup';
import { SubmittableButtons } from '@lib/frontend/data/components/SubmittableButtons/SubmittableButtons';
import {
  type FormValidatorsModel,
  type InputPropsModel,
  type InputRefModel,
} from '@lib/frontend/data/data.models';
import { useForm } from '@lib/frontend/data/hooks/useForm/useForm';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import flattenDeep from 'lodash/flattenDeep';
import map from 'lodash/map';
import {
  cloneElement,
  type ForwardedRef,
  type ReactElement,
  type ReactNode,
  useMemo,
  useRef,
} from 'react';
import { forwardRef, useImperativeHandle } from 'react';

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
      <AsyncBoundary errorContextGet={errorContextGet}>
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
      onValidate,
      redirectTo,
      submitLabel,
      successMessage,
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

    const inputRefs = useRef<FormFieldsRefModel<TType>>({});

    useImperativeHandle(ref, () => ({
      inputRefs,
      reset: handleReset,
      submit: async () => handleSubmitF(),
      valuesSet,
    }));

    const getFieldId = (fields?: Array<FormFieldsModel<TType>>): Array<string> =>
      fields
        ? flattenDeep(
            fields?.map((f) => {
              const ff = (f as FormTileModel<TType> | FormRowModel<TType>).fields;
              return ff ? getFieldId(ff) : f.id;
            }),
          )
        : [];
    const fieldIds = useMemo(() => getFieldId(fields), [fields]);

    const getValues = async (
      data: TType,
      fields?: Array<FormFieldsModel<TType>>,
    ): Promise<TType> => {
      if (fields) {
        return reduceSequence(
          fields,
          async (result, field) => {
            const fieldsF = (field as FormTileModel<TType> | FormRowModel<TType>).fields;
            if (fieldsF) {
              return { ...result, ...(await getValues(data, fieldsF)) };
            }
            const value = data[field.id as StringKeyModel<TType>];
            const beforeSubmit = inputRefs.current[field.id]?.beforeSubmit;
            return {
              ...result,
              ...{ [field.id]: beforeSubmit ? await beforeSubmit(value, field.id) : value },
            };
          },
          {} as TType,
        );
      }
      return data;
    };

    const onSubmitF = async (data: TType): Promise<TResult | null> => {
      const dataF = await getValues(data, fields);
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
        onValidate,
        redirectTo,
        successMessage,
        validators:
          validators && (pick(validators, fieldIds) as unknown as FormValidatorsModel<TType>),
      });

    const elementStateF = isAppLoading || isLoading ? ELEMENT_STATE.LOADING : elementState;
    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;

    const getField = <TKey extends StringKeyModel<TType>>({
      element,
      id,
    }: FormFieldModel<TType, TKey>): FormFieldModel<TType, TKey> => ({
      element: cloneElement(element, {
        defaultValue: initialValues ? initialValues[id] : undefined,
        elementState: elementStateF ?? element.props.elementState,
        error: errors ? errors[id] : undefined,
        key: id,
        onChange: (v) => {
          element.props.onChange && void element.props.onChange(v);
          return handleChange(id)(v);
        },
        onSubmit: handleSubmitF,
        ref:
          element.ref ??
          ((elementF: InputRefModel<TType, TKey>) =>
            inputRefs.current && (inputRefs.current[id] = elementF)),
        testID: id,
        value: values[id],
      } as InputPropsModel<TType[TKey]>),
      id,
    });

    const getRow = (row: FormRowModel<TType>): ReactElement => {
      const fieldsF = map(row.fields, getField);
      return row.isGrouped ? (
        <InputGroup
          fields={fieldsF}
          key={row.id}
        />
      ) : (
        <Wrapper
          isAlign
          isDistribute
          isRow
          key={row.id}>
          {fieldsF.map(({ element }) => element)}
        </Wrapper>
      );
    };

    const getTile = (tile: FormTileModel<TType>): ReactElement => (
      <Accordion
        border
        defaultValue={ELEMENT_STATE.ACTIVE}
        key={tile.id}
        round
        title={tile.title}>
        <Wrapper
          p
          s>
          {map(tile.fields, (field) =>
            (field as FormRowModel<TType>).fields
              ? getRow(field as FormRowModel<TType>)
              : getField(field as FormFieldModel<TType>).element,
          )}
        </Wrapper>
      </Accordion>
    );

    const getFields = (): ReactNode =>
      fields?.map((field) => {
        const tile = field as FormTileModel<TType>;
        if (tile.fields && tile.title) {
          return getTile(tile);
        }
        const row = field as FormRowModel<TType>;
        if (row.fields) {
          return getRow(row);
        }
        return getField(field as FormFieldModel<TType>).element;
      });

    return (
      <Form onSubmit={isDisabled ? undefined : async () => handleSubmitF()}>
        <MainLayout
          {...wrapperProps}
          bottomElement={
            <Wrapper s>
              {isButton && (
                <SubmittableButtons
                  cancelLabel={cancelLabel}
                  elementState={elementStateF}
                  onCancel={onCancel}
                  onSubmit={async () => handleSubmitF()}
                  submitLabel={submitLabel}
                />
              )}

              {bottomElement && bottomElement({ elementState: elementStateF })}
            </Wrapper>
          }
          isFullHeight={isFullHeight}
          isFullWidth={isFullWidth}
          s>
          {topElement && topElement({ elementState: elementStateF })}

          {getFields()}
        </MainLayout>
      </Form>
    );
  },
);
