export type ScrollBarPropsModel = {
  contentSize?: number;
  isHorizontal?: boolean;
  onScrollDown?(): void;
  onScrollUp?(): void;
  size?: number;
  value?: number;
};
