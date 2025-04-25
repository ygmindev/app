import {
  type UseStylesModel,
  type UseStylesParamsModel,
} from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { merge } from '@lib/shared/core/utils/merge/merge';
import isFunction from 'lodash/isFunction';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = <TType, TStyle extends StyleModel = ViewStyleModel>({
  props,
  stylers,
}: UseStylesParamsModel<TType, TStyle>): UseStylesModel<TStyle> => {
  const theme = useTheme();
  const inheritedStyles = StyleSheet.flatten(props.style) as TStyle;
  const computedStyles = StyleSheet.flatten(
    stylers?.map((styler) => cleanObject(isFunction(styler) ? styler(props, theme) : styler)),
  ) as TStyle;
  const styles = useMemo(
    () => merge([inheritedStyles, computedStyles]),
    [computedStyles, inheritedStyles],
  );

  return {
    computedStyles,
    inheritedStyles,
    styles,
  };
};
