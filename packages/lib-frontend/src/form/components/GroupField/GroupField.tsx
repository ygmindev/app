import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type GroupFieldPropsModel } from '#lib-frontend/form/components/GroupField/GroupField.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const GroupField: SFCModel<GroupFieldPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}></Wrapper>
  );
};
