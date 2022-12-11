import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import type { DropPropsModel } from '@lib/frontend/core/components/Drop/Drop.models';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { isFunction } from 'lodash';

export const Drop: SFCModel<DropPropsModel> = ({
  children,
  maxWidth,
  render,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Activate>
      {(isActive) => (
        <Wrapper style={styles} testID={testID}>
          <Dropdown
            anchor={isFunction(children) ? children(isActive) : children}
            isOpen={isActive}
            maxWidth={maxWidth}
          >
            {render && render(isActive)}
          </Dropdown>
        </Wrapper>
      )}
    </Activate>
  );
};
