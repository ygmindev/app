import type { AdminHomePropsModel } from '@lib/frontend/admin/containers/AdminHome/AdminHome.models';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { View } from '@lib/frontend/core/components/View/View';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const AdminHome: SFCModel<AdminHomePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      p
      style={styles}
      testID={testID}>
      <Droppable
        anchor={(isActive) => (
          <View>
            <Text>{`${isActive}`}</Text>
          </View>
        )}>
        <Text>dropdown</Text>
      </Droppable>
    </Wrapper>
  );
};
