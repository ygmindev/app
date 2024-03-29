import {
  type UseLayoutStylesModel,
  type UseLayoutStylesParamsModel,
} from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { viewStyler } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler';

export const useLayoutStyles = <TType,>({
  props,
}: UseLayoutStylesParamsModel<TType>): UseLayoutStylesModel => {
  const { isRow } = props;
  const wrapperProps = {
    ...props,
    align:
      props.isCenter ||
      props.isAlign ||
      (props.isVerticalCenter && isRow) ||
      (props.isHorizontalCenter && !isRow)
        ? FLEX_ALIGN.CENTER
        : props.align,
    isRow,
    justify:
      props.isCenter || (props.isVerticalCenter && !isRow) || (props.isHorizontalCenter && isRow)
        ? FLEX_ALIGN.CENTER
        : props.justify,
    s: props.isAlign ? THEME_SIZE.SMALL : props.s,
  };
  const styles = useStyles({ props: wrapperProps, stylers: [viewStyler] });
  return {
    ...styles,
    wrapperProps: { ...wrapperProps, style: styles.styles },
  };
};
