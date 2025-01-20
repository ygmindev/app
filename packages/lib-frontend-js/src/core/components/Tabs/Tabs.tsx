import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { type TabModel, type TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { SCROLL_TYPE } from '@lib/frontend/core/components/View/View.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Tabs: LFCModel<TabsPropsModel> = ({
  defaultValue,
  onChange,
  tabs,
  type = TABS_TYPE.CONTAINED,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const theme = useTheme();
  const isContained = type === TABS_TYPE.CONTAINED;
  const isUnderline = type === TABS_TYPE.UNDERLINE;

  const handlePress = (tab: TabModel): void => {
    valueControlledSet(tab.id);
    void tab.onPress?.();
  };

  return (
    <Wrapper
      {...wrapperProps}
      alignSelf={FLEX_ALIGN.CENTER}
      border={isContained ? true : isUnderline ? DIRECTION.BOTTOM : undefined}
      height={theme.shape.size[THEME_SIZE.MEDIUM]}
      isAlign
      isHorizontalScrollable
      isRow
      justifySelf={FLEX_ALIGN.CENTER}
      p={isContained ? THEME_SIZE.SMALL : undefined}
      round={isContained}
      s={THEME_SIZE.SMALL}
      scrollType={SCROLL_TYPE.BUTTON}>
      {tabs?.map((tab) => {
        const isActiveF = valueControlled === tab.id;
        return isUnderline ? (
          <Activatable key={tab.id}>
            {(isActive) => {
              const isActiveFF = isActiveF || isActive;
              return (
                <Wrapper
                  onPress={() => handlePress(tab)}
                  position={SHAPE_POSITION.RELATIVE}>
                  <Wrapper
                    isAlign
                    isRow
                    pHorizontal
                    pVertical={THEME_SIZE.SMALL}>
                    {tab.icon && (
                      <Icon
                        color={isActiveFF ? THEME_COLOR.PRIMARY : undefined}
                        icon={tab.icon}
                      />
                    )}

                    <AsyncText color={isActiveFF ? THEME_COLOR.PRIMARY : undefined}>
                      {tab.label ?? tab.id}
                    </AsyncText>
                  </Wrapper>

                  <Appearable
                    backgroundColor={THEME_COLOR.PRIMARY}
                    bottom={0}
                    height={3}
                    isActive={isActiveFF}
                    left={0}
                    position={SHAPE_POSITION.ABSOLUTE}
                    right={0}
                    zIndex
                  />
                </Wrapper>
              );
            }}
          </Activatable>
        ) : (
          <Button
            height={theme.shape.size[THEME_SIZE.MEDIUM] - theme.shape.spacing[THEME_SIZE.MEDIUM]}
            icon={tab.icon}
            key={tab.id}
            onPress={() => handlePress(tab)}
            type={
              isActiveF ? undefined : isContained ? BUTTON_TYPE.INVISIBLE : BUTTON_TYPE.TRANSPARENT
            }>
            {tab.label ? t(tab.label) : tab.id}
          </Button>
        );
      })}
    </Wrapper>
  );
};
