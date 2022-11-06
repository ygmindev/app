import { isHoverable } from '@lib/frontend/core/components/Hover/_isHoverable';
import type {
  HoverChildPropsModel,
  HoverPropsModel,
} from '@lib/frontend/core/components/Hover/Hover.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import type { CallableModel } from '@lib/shared/core/core.models';
import { get, isFunction } from 'lodash';
import { Children, cloneElement, useCallback, useState } from 'react';

export const Hover: FCModel<HoverPropsModel> = ({ children, onHoverIn, onHoverOut }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showHover, setShowHover] = useState<boolean>(true);

  useMount({
    onUnmount: () => {
      setIsHovered(false);
      setShowHover(false);
    },
  });

  const handleMouseEnter = useCallback(() => {
    if (isHoverable() && !isHovered) {
      onHoverIn && onHoverIn();
      setIsHovered(true);
    }
  }, [isHovered, onHoverIn]);

  const handleMouseLeave = useCallback(() => {
    if (isHovered) {
      onHoverOut && onHoverOut();
      setIsHovered(false);
    }
  }, [isHovered, onHoverOut]);

  const child = isFunction(children) ? children(showHover && isHovered) : children;

  const handleGrant = useCallback(() => {
    const onPressIn = get(Children.only(child), 'props.onPressIn');
    onPressIn ? (onPressIn as CallableModel)() : setShowHover(false);
  }, [child]);

  const handleRelease = useCallback(() => {
    const onPressOut = get(Children.only(child), 'props.onPressOut');
    onPressOut ? (onPressOut as CallableModel)() : setShowHover(true);
  }, [child]);

  return child
    ? cloneElement<HoverChildPropsModel>(Children.only(child), {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onPressIn: handleGrant,
        onPressOut: handleRelease,
        onResponderGrant: handleGrant,
        onResponderRelease: handleRelease,
      })
    : null;
};
