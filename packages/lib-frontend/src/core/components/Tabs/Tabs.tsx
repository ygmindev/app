import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { type TabsPropsModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Tabs: SFCModel<TabsPropsModel> = ({
  defaultValue,
  onChange,
  tabs,
  testID,
  type = TABS_TYPE.BUTTON,
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
  const isUnderline = type === TABS_TYPE.UNDERLINE;
  return (
    <Wrapper
      border={isUnderline ? DIRECTION.BOTTOM : undefined}
      isHorizontalScrollable
      isRow
      s={THEME_SIZE.SMALL}
      style={styles}
      testID={testID}>
      {tabs?.map((tab) => {
        const isActiveF = valueControlled === tab.id;
        return isUnderline ? (
          <Activatable key={tab.id}>
            {(isActive) => (
              <Wrapper position={SHAPE_POSITION.RELATIVE}>
                <Text
                  color={isActive ? THEME_COLOR.PRIMARY : undefined}
                  onPress={() => valueControlledSet(tab.id)}
                  p>
                  {tab.label ? t(tab.label) : tab.id}
                </Text>

                {isActiveF && (
                  <Wrapper
                    backgroundColor={THEME_COLOR.PRIMARY}
                    bottom={0}
                    height={5}
                    left={0}
                    position={SHAPE_POSITION.ABSOLUTE}
                    right={0}
                    zIndex
                  />
                )}
              </Wrapper>
            )}
          </Activatable>
        ) : (
          <Button
            icon={tab.icon}
            key={tab.id}
            onPress={() => valueControlledSet(tab.id)}
            type={
              isUnderline ? BUTTON_TYPE.INVISIBLE : isActiveF ? undefined : BUTTON_TYPE.TRANSPARENT
            }>
            {tab.label ? t(tab.label) : tab.id}
          </Button>
        );
      })}
    </Wrapper>
  );
};
