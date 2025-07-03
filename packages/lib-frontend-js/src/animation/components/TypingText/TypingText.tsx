import { _TypingText } from '@lib/frontend/animation/components/TypingText/_TypingText';
import { type TypingTextPropsModel } from '@lib/frontend/animation/components/TypingText/TypingText.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTextStyles } from '@lib/frontend/style/hooks/useTextStyles/useTextStyles';
import { useState } from 'react';

export const TypingText: FCModel<TypingTextPropsModel> = ({
  children,
  delay = 1000,
  isLoop,
  ...props
}) => {
  const { styles } = useTextStyles({ props });
  const { t } = useTranslation();
  const [count, countSet] = useState<number>(0);
  const isMounted = useIsMounted();
  const countSetF = (): void => {
    setTimeout(() => isMounted() && countSet(count + 1), delay);
  };
  return (
    <_TypingText
      {...props}
      key={count}
      onFinish={isLoop ? countSetF : undefined}
      style={styles}>
      {t(children ?? '')}
    </_TypingText>
  );
};
