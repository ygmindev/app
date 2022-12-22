import type { ActivatePropsModel } from '@lib/frontend/core/components/Activate/Activate.models';
import { Hover } from '@lib/frontend/core/components/Hover/Hover';
import type { FCModel } from '@lib/frontend/core/core.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { cloneElement, useState } from 'react';

export const Activate: FCModel<ActivatePropsModel> = ({
  children,
  isHoverable = true,
  isPressable = true,
  onActive,
  onInactive,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const _setIsActive = debounce({ callback: setIsActive });

  const _children = children && children(isActive);
  const _element =
    _children && isPressable
      ? cloneElement(_children, {
          onPressIn: async () => {
            const { onPressIn } = _children.props;
            onPressIn && onPressIn();
            onActive && onActive();
            _setIsActive(true);
          },
          onPressOut: async () => {
            const { onPressOut } = _children.props;
            onPressOut && onPressOut();
            onInactive && onInactive();
            _setIsActive(false);
          },
        })
      : children;

  return isHoverable ? (
    <Hover
      onHoverIn={async () => {
        onActive && onActive();
        _setIsActive(true);
      }}
      onHoverOut={async () => {
        onInactive && onInactive();
        _setIsActive(false);
      }}>
      {_element}
    </Hover>
  ) : (
    <>{_element}</>
  );
};
