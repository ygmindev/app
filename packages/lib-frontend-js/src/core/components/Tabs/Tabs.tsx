import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { type TabModel, type TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { SCROLL_TYPE } from '@lib/frontend/core/components/View/View.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { useMemo, useRef } from 'react';

export const Tabs: LFCModel<TabsPropsModel> = ({
  defaultValue,
  isStickyCategory,
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

  const categoryRefs = useRef([]);

  const handlePress = (tab: TabModel): void => {
    valueControlledSet(tab.id);
    void tab.onPress?.();
  };

  const tabsSorted = useMemo(() => sort(tabs ?? [], [(v) => v.category?.id ?? 'z']), [tabs]);

  return (
    <Wrapper
      {...wrapperProps}
      align={FLEX_ALIGN.END}
      alignSelf={FLEX_ALIGN.CENTER}
      border={isContained ? true : isUnderline ? DIRECTION.BOTTOM : undefined}
      isFullWidth
      isHorizontalScrollable
      isOverflowHidden
      isRow
      justifySelf={FLEX_JUSTIFY.CENTER}
      p={isContained ? THEME_SIZE.SMALL : undefined}
      round={isContained}
      s={THEME_SIZE.SMALL}
      scrollType={SCROLL_TYPE.BUTTON}>
      {tabsSorted?.map((tab, i) => {
        const isActiveF = valueControlled === tab.id;
        const isCategory = i === 0 || tabsSorted[i - 1].category?.id !== tab.category?.id;
        return (
          <Wrapper
            isRow
            key={tab.id}>
            {i && isCategory && (
              <Divider
                isVertical
                mRight={THEME_SIZE.SMALL}
              />
            )}

            <Wrapper>
              {isCategory && (
                <Title
                  fontSize={THEME_SIZE.SMALL}
                  icon={tab.category?.icon}
                  title={tab.category?.label ?? tab.category?.id ?? ' '}
                />
              )}

              {isUnderline ? (
                <Activatable>
                  {(isActive) => {
                    const isActiveFF = isActiveF || isActive;
                    return (
                      <Wrapper
                        height={theme.shape.size[THEME_SIZE.MEDIUM]}
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
                  height={
                    theme.shape.size[THEME_SIZE.MEDIUM] - theme.shape.spacing[THEME_SIZE.MEDIUM]
                  }
                  icon={tab.icon}
                  key={tab.id}
                  onPress={() => handlePress(tab)}
                  type={
                    isActiveF
                      ? undefined
                      : isContained
                        ? BUTTON_TYPE.INVISIBLE
                        : BUTTON_TYPE.TRANSPARENT
                  }>
                  {tab.label ? t(tab.label) : tab.id}
                </Button>
              )}
            </Wrapper>
          </Wrapper>
        );
      })}
    </Wrapper>
  );
};
