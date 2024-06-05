import { type ProductPropsModel } from '@lib/frontend/commerce/components/Product/Product.models';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
// import { Image } from '@lib/frontend/core/components/Image/Image';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';

export const Product: LFCModel<ProductPropsModel> = ({ images, subTitle, title, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([COMMERCE]);
  return (
    <Wrapper
      {...wrapperProps}
      s={THEME_SIZE.SMALL}>
      <Wrapper
        isOverflowHidden
        round>
        <Wrapper
          border
          height={randomInt(200, 400)}
          round
          width={200}
        />

        {/* <Image
          src={images[0]}
          width={200}
        /> */}
      </Wrapper>

      <AsyncText isBold>{title}</AsyncText>

      <Button size={THEME_SIZE.SMALL}>{t('commerce:addToCart')}</Button>
    </Wrapper>
  );
};
