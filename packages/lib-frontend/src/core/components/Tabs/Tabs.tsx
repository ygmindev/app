import { Button } from '@lib/frontend/core/components/Button/Button';
import type { TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useField } from '@lib/frontend/form/hooks/useField/useField';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';

export const Tabs: SFCModel<TabsPropsModel> = ({
  defaultValue,
  isVertical,
  onChange,
  tabs,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { fieldValue, setFieldValue } = useField({
    defaultValue: defaultValue || (tabs && tabs.length ? tabs[0].id : ''),
    onChange,
    value,
  });
  return (
    <Wrapper
      grow={0}
      isHorizontalScrollable
      isRow={!isVertical}
      spacing={THEME_SIZE.SMALL}
      style={styles}
      testID={testID}>
      {tabs.map((tab) => {
        const isActive = fieldValue === tab.id;
        return (
          <Button
            icon={tab.icon}
            isTransparent={!isActive}
            key={tab.id}
            onPress={() => setFieldValue(tab.id)}>
            {tab.label || tab.id}
          </Button>
        );
      })}
    </Wrapper>
  );
};
