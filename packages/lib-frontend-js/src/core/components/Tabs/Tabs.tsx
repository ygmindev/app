import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { type TabModel, type TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { SCROLL_TYPE } from '@lib/frontend/core/components/View/View.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel, type MeasureModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
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
  const wrapperRef = useRef<WrapperRefModel>(null);
  const tabRefs = useRef<Record<string, MeasureModel>>({});

  // const [categoryPositions, categoryPositionsSet] = useState<Record<string, PositionModel>>({});

  const handlePress = (tab: TabModel): void => {
    valueControlledSet(tab.id);
    void tab.onPress?.();
  };

  useAsync(async () => {
    await sleepForTransition();
    const measure =
      valueControlled && valueControlled !== defaultValue && tabRefs.current?.[valueControlled];
    measure &&
      measure.x &&
      measure.width &&
      wrapperRef.current?.scrollTo({ x: measure.x - measure.width });
  });

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
      ref={wrapperRef}
      round={isContained}
      s={THEME_SIZE.SMALL}
      scrollType={SCROLL_TYPE.BUTTON}>
      {tabsSorted?.map((tab, i) => {
        const isActiveF = valueControlled === tab.id;
        const isCategory = i === 0 || tabsSorted[i - 1].category?.id !== tab.category?.id;
        return (
          <Wrapper
            isRow
            key={tab.id}
            onMeasure={(v) => {
              tabRefs.current[tab.id] = v;
            }}
            // onMeasure={
            //   isCategory && tab.category
            //     ? (v) =>
            //         categoryPositionsSet((previous) => ({
            //           ...previous,
            //           [tab.category?.id ?? '']: v,
            //         }))
            //     : undefined
            // }
            s={THEME_SIZE.SMALL}>
            {i && isCategory && (
              <Divider
                isVertical
                mRight={THEME_SIZE.SMALL}
              />
            )}

            {isCategory && tab.category && (
              <Chip icon={tab.category?.icon}>{tab.category?.label ?? tab.category?.id}</Chip>
            )}

            {isUnderline ? (
              <Activatable>
                {(isActive) => {
                  const isActiveFF = isActiveF || isActive;
                  return (
                    <Wrapper
                      height={theme.shape.height[THEME_SIZE.SMALL]}
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

                        <AsyncText
                          casing={TEXT_CASING.CAPITALIZE}
                          color={isActiveFF ? THEME_COLOR.PRIMARY : undefined}>
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
                elementState={isActiveF ? ELEMENT_STATE.ACTIVE : undefined}
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
        );
      })}
    </Wrapper>
  );
};
