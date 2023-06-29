import map from 'lodash/map';
import toString from 'lodash/toString';
import { type ReactElement } from 'react';
import { useMemo } from 'react';

import { Accordion } from '#lib-frontend/core/components/Accordion/Accordion';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { NAVIGATION_BAR_WIDTH } from '#lib-frontend/core/containers/NavigationBar/NavigationBar.constants';
import { type NavigationBarPropsModel } from '#lib-frontend/core/containers/NavigationBar/NavigationBar.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { BORDER_DIRECTION } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { groupBy } from '#lib-shared/core/utils/groupBy/groupBy';

export const NavigationBar = ({
  isHorizontal,
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

  const categories = useMemo(
    () => groupBy(options, ({ category }) => toString(category)),
    [options],
  );
  const valueF = value && trimPathname(value);

  const isHorizontalF = isHorizontal || isMobile;
  return (
    <Activatable
      isPressable={false}
      style={styles}
      // onActive={() => console.warn('active')}
      // onInactive={() => console.warn('inactive')}
    >
      <Wrapper
        border={BORDER_DIRECTION.RIGHT}
        isFullWidth={isHorizontalF}
        isHorizontalScrollable={isHorizontalF}
        isRowAlign={isHorizontalF}
        isVerticalScrollable={!isHorizontalF}
        p={isHorizontalF ? THEME_SIZE.SMALL : true}
        spacing
        testID={testID}
        width={isHorizontalF ? undefined : NAVIGATION_BAR_WIDTH}>
        {map(categories, (v, k) => {
          const optionsF = (
            <Wrapper
              isRowAlign={isHorizontalF}
              key={toString(k)}
              spacing={THEME_SIZE.SMALL}>
              {v.map(({ icon, id, label, onPress }) => (
                <Button
                  elementState={trimPathname(id) === valueF ? ELEMENT_STATE.ACTIVE : undefined}
                  icon={icon}
                  key={id}
                  onPress={async () => {
                    onPress && (await onPress());
                    onChange && onChange(id);
                  }}
                  testID={id}
                  type={BUTTON_TYPE.INVISIBLE}>
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
              {optionsF}
            </Accordion>
          ) : (
            optionsF
          );
        })}
      </Wrapper>
    </Activatable>
  );
};
