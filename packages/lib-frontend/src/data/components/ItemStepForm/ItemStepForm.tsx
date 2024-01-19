import { ItemField } from '@lib/frontend/core/components/ItemField/ItemField';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type ItemStepFormPropsModel } from '@lib/frontend/data/components/ItemStepForm/ItemStepForm.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type ReactElement } from 'react';

export const ItemStepForm = <TType, TStep extends PartialModel<TType>>({
  emptyLabel,
  id,
  initialValues,
  message,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  options,
  ...props
}: LFCPropsModel<ItemStepFormPropsModel<TType, TStep>>): ReactElement<
  LFCPropsModel<ItemStepFormPropsModel<TType, TStep>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer<TStep>
      {...wrapperProps}
      fields={[
        {
          element: (
            <ItemField
              emptyLabel={emptyLabel}
              id={id}
              options={options}
            />
          ),
          id,
        },
      ]}
      initialValues={initialValues}
      isButton={false}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() =>
        message && <TranslatableText fontStyle={FONT_STYLE.HEADLINE}>{message}</TranslatableText>
      }
    />
  );
};
