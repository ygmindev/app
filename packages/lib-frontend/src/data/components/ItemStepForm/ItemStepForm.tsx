import { type ReactElement } from 'react';

import { ItemField } from '#lib-frontend/core/components/ItemField/ItemField';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type ItemStepFormPropsModel } from '#lib-frontend/data/components/ItemStepForm/ItemStepForm.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type PartialModel } from '#lib-shared/core/core.models';

export const ItemStepForm = <TType,>({
  _id,
  data,
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
      fields={[{ _id, element: <ItemField options={options} /> }]}
      initialValues={data}
      isButton={false}
      isVerticalCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      topElement={() =>
        message && <TranslatableText type={FONT_TYPE.HEADLINE}>{message}</TranslatableText>
      }
    />
  );
};
