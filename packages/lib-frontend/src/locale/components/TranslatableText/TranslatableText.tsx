import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import { AnimatableText } from '#lib-frontend/animation/components/AnimatableText/AnimatableText';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextPropsModel } from '#lib-frontend/locale/components/TranslatableText/TranslatableText.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';

export const TranslatableText: SFCModel<TranslatableTextPropsModel> = ({
  children,
  ns,
  ...props
}) => {
  const translation = useTranslation(ns);
  return children ? (
    <AnimatableText {...props}>
      {isString(children)
        ? translation.t(children)
        : isFunction(children)
          ? children(translation)
          : (children as unknown as string)}
    </AnimatableText>
  ) : null;
};
