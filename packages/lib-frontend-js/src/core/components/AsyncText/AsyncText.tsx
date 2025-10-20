import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { type AsyncTextPropsModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type TFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

export const AsyncText: TFCModel<AsyncTextPropsModel> = ({ casing, children, ns, ...props }) => {
  const translation = useTranslation(ns);
  const currentUser = useCurrentUser({ isProtected: false });
  return children ? (
    <AnimatableText
      {...props}
      casing={casing ?? (props.fontStyle ? TEXT_CASING.CAPITALIZE : undefined)}>
      {isString(children)
        ? translation.t(children)
        : isFunction(children)
          ? children({ currentUser: currentUser ?? undefined, t: translation.t })
          : ((children as unknown as string) ?? '')}
    </AnimatableText>
  ) : null;
};
