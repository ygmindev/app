import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import type {
  UseStylesModel,
  UseStylesParamsModel,
} from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { isFunction, map } from 'lodash';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = <TProps,>({
  props,
  stylers,
}: UseStylesParamsModel<TProps>): UseStylesModel<TProps> => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const inheritedStyles = useMemo(() => StyleSheet.flatten(props.style), [props.style]);
  const computedStyles = useMemo(
    () =>
      StyleSheet.flatten(
        map(stylers, (styler) =>
          isFunction(styler) ? styler(props, { isMobile, theme }) : styler,
        ),
      ),
    [props, stylers, theme, isMobile],
  );
  const styles = useMemo(
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
