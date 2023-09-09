import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { type TabsPropsModel } from '#lib-frontend/core/components/Tabs/Tabs.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Tabs: LFCModel<TabsPropsModel> = ({
  defaultValue,
  onChange,
  tabs,
  type = TABS_TYPE.BUTTON,
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
  const isContained = type === TABS_TYPE.CONTAINED;
  const isUnderline = type === TABS_TYPE.UNDERLINE;
  return (
    <Wrapper
      {...wrapperProps}
      alignSelf={isContained ? FLEX_ALIGN.CENTER : undefined}
      border={isContained ? true : isUnderline ? DIRECTION.BOTTOM : undefined}
      isHorizontalScrollable
      isRow={isUnderline}
      isRowAlign={!isUnderline}
      m={isContained ? THEME_SIZE.SMALL : undefined}
      p={isContained ? THEME_SIZE.SMALL : undefined}
      round={isContained}>
      {tabs?.map((tab) => {
        const isActiveF = valueControlled === tab._id;
        return isUnderline ? (
          <Activatable key={tab._id}>
            {(isActive) => {
              const isActiveFF = isActiveF || isActive;
              return (
                <Wrapper
                  onPress={() => valueControlledSet(tab._id)}
                  position={SHAPE_POSITION.RELATIVE}>
                  <Wrapper
                    isRowAlign
                    p>
                    {tab.icon && (
                      <Icon
                        color={isActiveFF ? THEME_COLOR.PRIMARY : undefined}
                        icon={tab.icon}
                      />
                    )}

                    <Text color={isActiveFF ? THEME_COLOR.PRIMARY : undefined}>
                      {tab.label ? t(tab.label) : tab._id}
                    </Text>
                  </Wrapper>

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
              );
            }}
          </Activatable>
        ) : (
          <Button
            icon={tab.icon}
            key={tab._id}
            onPress={() => valueControlledSet(tab._id)}
            size={THEME_SIZE.SMALL}
            type={
              isActiveF ? undefined : isContained ? BUTTON_TYPE.INVISIBLE : BUTTON_TYPE.TRANSPARENT
            }>
            {tab.label ? t(tab.label) : tab._id}
          </Button>
        );
      })}
    </Wrapper>
  );
};
