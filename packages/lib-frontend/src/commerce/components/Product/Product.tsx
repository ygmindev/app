import { type ProductPropsModel } from '@lib/frontend/commerce/components/Product/Product.models';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
// import { Image } from '@lib/frontend/core/components/Image/Image';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const Product: LFCModel<ProductPropsModel> = ({ images, subTitle, title, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      round
      s={THEME_SIZE.SMALL}>
      <Wrapper
        isOverflowHidden
        round>
        {/* <Image
          src={images[0]}
          width={200}
        /> */}
      </Wrapper>

      <AsyncText isBold>{title}</AsyncText>
    </Wrapper>
  );
};
