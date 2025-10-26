import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { CategoryInput } from '@lib/frontend/core/components/CategoryInput/CategoryInput';
import { type LFCPropsModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { FORM_SUBMIT_TYPE } from '@lib/frontend/data/components/FormContainer/FormContainer.constants';
import { type ItemStepFormPropsModel } from '@lib/frontend/data/components/ItemStepForm/ItemStepForm.models';
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
            <CategoryInput
              emptyLabel={emptyLabel}
              options={options}
            />
          ),
          id,
        },
      ]}
      initialValues={initialValues}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      submitType={FORM_SUBMIT_TYPE.NONE}
      topElement={() => message && <AsyncText fontStyle={FONT_STYLE.HEADLINE}>{message}</AsyncText>}
    />
  );
};
