import {
  type UseLayoutStylesModel,
  type UseLayoutStylesParamsModel,
} from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { viewStyler } from '#lib-frontend/style/utils/styler/viewStyler/viewStyler';

export const useLayoutStyles = <TType,>({
  props,
}: UseLayoutStylesParamsModel<TType>): UseLayoutStylesModel => {
  const wrapperProps = {
    ...props,
    align:
      props.isCenter || props.isRowAlign || (props.isHorizontalCenter && !props.isRow)
        ? FLEX_ALIGN.CENTER
        : props.align,
    isRow: props.isRow || props.isRowAlign,
    justify:
      props.isCenter || (props.isVerticalCenter && !props.isRow)
        ? FLEX_ALIGN.CENTER
        : props.justify,
  };
  const styles = useStyles({ props: wrapperProps, stylers: [viewStyler] });
  return {
    ...styles,
    wrapperProps: { ...wrapperProps, style: styles.styles },
  };
};
