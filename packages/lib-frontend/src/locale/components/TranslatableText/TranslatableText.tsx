import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextPropsModel } from '@lib/frontend/locale/components/TranslatableText/TranslatableText.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { isFunction, isString } from 'lodash';

export const TranslatableText: SFCModel<TranslatableTextPropsModel> = ({
  children,
  ns,
  ...props
}) => {
  const translation = useTranslation(ns);
  return children ? (
    <Text {...props}>
      {isString(children)
        ? translation.t(children)
        : isFunction(children)
        ? children(translation)
        : (children as unknown as string)}
    </Text>
  ) : null;
};
