import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type UseLayoutStylesModel,
  type UseLayoutStylesParamsModel,
} from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { viewStyler } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler';
import { type CursorValue } from 'react-native';

export const useLayoutStyles = <TType,>({
  props,
}: UseLayoutStylesParamsModel<TType>): UseLayoutStylesModel => {
  const isBlocked =
    props.elementState === ELEMENT_STATE.DISABLED || props.elementState === ELEMENT_STATE.LOADING;

  const wrapperProps = {
    ...props,

    align:
      props.isCenter ||
      props.isAlign ||
      (props.isVerticalCenter && props.isRow) ||
      (props.isHorizontalCenter && !props.isRow)
        ? (FLEX_ALIGN.CENTER as FLEX_ALIGN)
        : props.align,

    cursor: isBlocked ? ('not-allowed' as CursorValue) : undefined,

    justify:
      props.isCenter ||
      (props.isVerticalCenter && !props.isRow) ||
      (props.isHorizontalCenter && props.isRow)
        ? (FLEX_JUSTIFY.CENTER as FLEX_JUSTIFY)
        : props.justify,

    s: props.isAlign ? THEME_SIZE.SMALL : props.s,
  };

  const styles = useStyles({ props: wrapperProps, stylers: [viewStyler] });

  return {
    ...styles,
    wrapperProps: { ...wrapperProps, style: styles.styles },
  };
};
