import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';

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
  const { t } = useTranslation();
  const { fieldValue, setFieldValue } = useFieldValue({
    defaultValue: defaultValue || (tabs && tabs.length ? tabs[0].id : ''),
    onChange,
    value,
  });
  return (
    <Wrapper
      grow={0}
      isHorizontalScrollable={!isVertical}
      isRow={!isVertical}
      isVerticalScrollable={isVertical}
      spacing={THEME_BASIC_SIZE.SMALL}
      style={styles}
      testID={testID}>
      {tabs.map((tab) => {
        const isActive = fieldValue === tab.id;
        return (
          <Button
            icon={tab.icon}
            key={tab.id}
            onPress={() => setFieldValue(tab.id)}
            type={isActive ? undefined : BUTTON_TYPE.TRANSPARENT}>
            {t(tab.label)}
          </Button>
        );
      })}
    </Wrapper>
  );
};
