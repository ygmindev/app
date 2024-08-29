import {
  type UseStylesModel,
  type UseStylesParamsModel,
} from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import isFunction from 'lodash/isFunction';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = <TType, TStyle extends StyleModel = ViewStyleModel>({
  props,
  stylers,
}: UseStylesParamsModel<TType, TStyle>): UseStylesModel<TStyle> => {
  const theme = useTheme();
  const inheritedStyles = StyleSheet.flatten(props.style);
  const computedStyles = StyleSheet.flatten(
    stylers?.map((styler) => (isFunction(styler) ? styler(props, theme) : styler)),
  );
  const styles = useMemo(
    () => StyleSheet.flatten([inheritedStyles, computedStyles]),
    [computedStyles, inheritedStyles],
  );

  return {
    computedStyles: computedStyles as TStyle,
    inheritedStyles: inheritedStyles as TStyle,
    styles: styles as TStyle,
  };
};
