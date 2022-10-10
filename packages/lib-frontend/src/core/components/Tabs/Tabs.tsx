import { Button } from '@lib/frontend/core/components/Button/Button';
import type { TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useField } from '@lib/frontend/form/hooks/useField/useField';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

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
      isHorizontalScrollable
      isRow={!isVertical}
      spacing="s"
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
            {tab.label}
          </Button>
        );
      })}
    </Wrapper>
  );
};
