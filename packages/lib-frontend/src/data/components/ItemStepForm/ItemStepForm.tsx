import { type ReactElement } from 'react';

import { ItemField } from '#lib-frontend/core/components/ItemField/ItemField';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type ItemStepFormPropsModel } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  FONT_ALIGN,
  FONT_TYPE,
} from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type PartialModel } from '#lib-shared/core/core.models';

export const ItemStepForm = <TType,>({
  data,
  id,
  message,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  options,
  ...props
}: LFCPropsModel<ItemStepFormPropsModel<TType>>): ReactElement<
  LFCPropsModel<ItemStepFormPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer<PartialModel<TType>>
      {...wrapperProps}
      fields={[{ element: <ItemField options={options} />, id }]}
      initialValues={data}
      isButton={false}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() =>
        message && (
          <TranslatableText
            align={FONT_ALIGN.CENTER}
            type={FONT_TYPE.HEADLINE}>
            {message}
          </TranslatableText>
        )
      }
    />
  );
};
