import { useAnimationProps } from '@lib/frontend/animation/hooks/useAnimationProps/useAnimationProps';
import {
  type _AnimatableModel,
  type _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { motion, type Target } from 'framer-motion';
import { createElement } from 'react';

export const _animatable = <TProps, TStyle extends StyleModel = ViewStyleModel>({
  Component,
  stylers,
}: _AnimatableParamsModel<TProps, TStyle>): _AnimatableModel<TProps, TStyle> => {
  const ComponentF = motion.create(Component);

  const Animatable: _AnimatableModel<TProps, TStyle> = (props) => {
    const { styles } = useStyles<TProps, TStyle>({ props, stylers });
    const { exit, from, to, transition } = useAnimationProps({
      animation: props.animation,
      defaultState: props.defaultState,
      elementState: props.elementState,
    });
    return createElement(ComponentF, {
      ...props,
      animate: to as Target,
      exit: exit as Target,
      initial: from as Target,
      style: styles,
      testID: process.env.NODE_ENV === 'production' ? undefined : props.testID,
      transition: {
        delay: transition?.delay,
        duration: transition?.duration,
        repeat: transition?.repeat,
      },
    } as unknown as PropsModel<typeof ComponentF>);
  };

  return Animatable;
};
