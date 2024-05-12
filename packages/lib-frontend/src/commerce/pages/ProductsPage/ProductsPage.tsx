import { type ProductsPagePropsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import range from 'lodash/range';

export const ProductsPage: LFCModel<ProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const { get } = useHttp();
  const { data } = useQuery('products', async () =>
    mapParallel(
      range(0, 10).map((i) => async () => ({
        id: `${i}`,
        image: await get<unknown, { message: string }>({
          url: 'https://dog.ceo/api/breeds/image/random',
        }).then((item) => item?.message ?? ''),
        title: `Item ${i}`,
      })),
    ),
  );

  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <WrappedList
        data={data ?? []}
        element={(item) => (
          <Wrapper
            border
            key={item.id}
            p
            round
            s>
            <Text fontStyle={FONT_STYLE.TITLE}>{item.title}</Text>

            <Image
              src={item.image}
              width={180}
            />
          </Wrapper>
        )}
        flex
        isVerticalScrollable
      />

      {/* <Wrapper
        isRow
        isVerticalScrollable
        isWrap
        justify={FLEX_JUSTIFY.CENTER}>
        {products.map((product) => (
          <Wrapper
            border
            height={randomInt(200, 300)}
            isWrap
            key={product.id}
            mBottom
            mRight
            p
            round
            width={180}>
            <Text fontStyle={FONT_STYLE.TITLE}>{product.title}</Text>
          </Wrapper>
        ))}
      </Wrapper> */}
    </Wrapper>
  );
};
