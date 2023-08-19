import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { type TabsPropsModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

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
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });
  return (
    <Wrapper
      isHorizontalScrollable={!isVertical}
      isRow={!isVertical}
      isVerticalScrollable={isVertical}
      s={THEME_SIZE.SMALL}
      style={styles}
      testID={testID}>
      {tabs?.map((tab) => {
        const isActive = valueControlled === tab.id;
        return (
          <Button
            icon={tab.icon}
            key={tab.id}
            onPress={() => valueControlledSet(tab.id)}
            testID={tab.id}
            type={isActive ? undefined : BUTTON_TYPE.TRANSPARENT}>
            {tab.label ? t(tab.label) : tab.id}
          </Button>
        );
      })}
    </Wrapper>
  );
};
