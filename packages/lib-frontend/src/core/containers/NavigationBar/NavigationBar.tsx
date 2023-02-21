import { Accordion } from '@lib/frontend/core/components/Accordion/Accordion';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { NAVIGATION_BAR_WIDTH } from '@lib/frontend/core/containers/NavigationBar/NavigationBar.constants';
import type { NavigationBarPropsModel } from '@lib/frontend/core/containers/NavigationBar/NavigationBar.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import map from 'lodash/map';
import toString from 'lodash/toString';
import type { ReactElement } from 'react';
import { useMemo } from 'react';

export const NavigationBar = ({
  children,
  onChange,
  options,
  testID,
  value,
  ...props
}: SFCPropsModel<NavigationBarPropsModel>): ReactElement<
  SFCPropsModel<NavigationBarPropsModel>
> => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();

  const _categories = useMemo(
    () => groupBy({ by: ({ category }) => toString(category), value: options }),
    [options],
  );

  return (
    <Activatable
      isPressable={false}
      // onActive={() => console.warn('active')}
      // onInactive={() => console.warn('inactive')}
    >
      <Wrapper
        align={FLEX_ALIGN.CENTER}
        border={BORDER_DIRECTION.RIGHT}
        isFullWidth={isMobile}
        isHorizontalScrollable={isMobile}
        isRow={isMobile}
        isVerticalScrollable={!isMobile}
        p
        spacing
        style={styles}
        testID={testID}
        width={isMobile ? undefined : NAVIGATION_BAR_WIDTH}>
        {children}

        {map(_categories, (v, k) => {
          const _options = (
            <Wrapper
              isFullWidth
              key={toString(k)}
              spacing={THEME_BASIC_SIZE.SMALL}>
              {v.map(({ icon, id, label, onPress }) => (
                <Button
                  elementState={value && id === value ? ELEMENT_STATE.ACTIVE : undefined}
                  icon={icon}
                  key={id}
                  onPress={async () => {
                    onPress && (await onPress());
                    onChange && onChange(id);
                  }}
                  testID={id}
                  type={BUTTON_TYPE.TRANSPARENT}>
                  {label}
                </Button>
              ))}
            </Wrapper>
          );
          return k ? (
            <Accordion
              defaultValue={ELEMENT_STATE.ACTIVE}
              key={toString(k)}
              label={k}>
              {_options}
            </Accordion>
          ) : (
            _options
          );
        })}
      </Wrapper>
    </Activatable>
  );
};
