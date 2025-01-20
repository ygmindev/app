import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { type AsyncTextPropsModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type TFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

export const AsyncText: TFCModel<AsyncTextPropsModel> = ({ children, ns, ...props }) => {
  const translation = useTranslation(ns);
  // const store = useStore();
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
