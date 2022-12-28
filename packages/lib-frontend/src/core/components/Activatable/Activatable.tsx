import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { Hoverable } from '@lib/frontend/core/components/Hoverable/Hoverable';
import type { FCModel } from '@lib/frontend/core/core.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { cloneElement, useState } from 'react';

export const Activatable: FCModel<ActivatablePropsModel> = ({
  children,
  isHoverable = true,
  onActive,
  onInactive,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const _setIsActive = debounce({
    callback: (value: boolean) => {
      value ? onActive && onActive() : onInactive && onInactive();
      setIsActive(value);
    },
  });

  const _children = children && children(isActive);
  const _element =
    _children &&
    cloneElement(_children, {
      onPressIn: async () => {
        const { onPressIn } = _children.props;
        onPressIn && onPressIn();
        _setIsActive(true);
      },
      onPressOut: async () => {
        const { onPressOut } = _children.props;
        onPressOut && onPressOut();
        _setIsActive(false);
      },
    });

  return isHoverable ? (
    <Hoverable
      onHoverIn={() => _setIsActive(true)}
      onHoverOut={() => _setIsActive(false)}>
      {_element}
    </Hoverable>
  ) : (
    <>{_element}</>
  );
};
