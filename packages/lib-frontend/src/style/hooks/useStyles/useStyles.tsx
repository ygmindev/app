import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import type {
  UseStylesModel,
  UseStylesParamsModel,
} from '#lib-frontend/style/hooks/useStyles/useStyles.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import type { StyleModel, ViewStyleModel } from '#lib-frontend/style/style.models';
import isFunction from 'lodash/isFunction';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = <TProps, TStyle extends StyleModel = ViewStyleModel>({
  props,
  stylers,
}: UseStylesParamsModel<TProps, TStyle>): UseStylesModel<TProps, TStyle> => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const inheritedStyles = useMemo(() => StyleSheet.flatten(props.style), [props.style]);
  const computedStyles = useMemo(
    () =>
      StyleSheet.flatten(
        stylers?.map((styler) => (isFunction(styler) ? styler(props, theme) : styler)),
      ),
    [props, stylers, theme, isMobile],
  );
  const styles = useMemo(
    () => StyleSheet.flatten([computedStyles, inheritedStyles]),
    [computedStyles, inheritedStyles],
  );

  return {
    computedStyles: computedStyles as TStyle,
    inheritedStyles: inheritedStyles as TStyle,
    propsWithOutStyle: (({ style: _, ...rest }) => rest)(props),
    styles: styles as TStyle,
  };
};
