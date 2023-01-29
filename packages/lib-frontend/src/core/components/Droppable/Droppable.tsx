import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
// import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const Droppable: SFCModel<DroppablePropsModel> = ({
  anchor,
  children,
  maxWidth,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Activatable>
      <View
        style={styles}
        testID={testID}>
        {/* <Dropdown
          anchor={anchor(isActive)}
          isOpen={isActive}
          maxWidth={maxWidth}>
          {children}
        </Dropdown> */}
      </View>
    </Activatable>
  );
};
