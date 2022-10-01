import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import type {
  UseStylesModel,
  UseStylesParamsModel,
} from '@lib/frontend/styling/hooks/useStyles/useStyles.models';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import type { StyleModel } from '@lib/frontend/styling/styling.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { isFunction, map } from 'lodash';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = <TProps>({
  props,
  stylers,
}: UseStylesParamsModel<TProps>): UseStylesModel<TProps> => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const inheritedStyles = useMemo<StyleModel>(() => StyleSheet.flatten(props.style), [props.style]);
  const computedStyles = useMemo<StyleModel>(
    () =>
      StyleSheet.flatten(
        map(stylers, (styler) =>
          isFunction(styler)
            ? (styler as StylerModel<unknown>)(props, { isMobile, theme })
            : styler,
        ),
      ),
    [props, stylers, theme, isMobile],
  );
  const styles = useMemo<StyleModel>(
    () => StyleSheet.flatten([computedStyles, inheritedStyles]),
    [computedStyles, inheritedStyles],
  );

  return {
    computedStyles,
    inheritedStyles,
    propsWithOutStyle: (({ style: _, ...rest }) => rest)(props),
    styles,
  };
};
