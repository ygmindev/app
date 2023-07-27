import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '#lib-frontend/core/core.models';
import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { USER_FIELDS } from '#lib-frontend/user/hooks/useUserResource/useUserResource.constants';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const { query: get } = useResourceMethod({
    fields: [{ result: USER_FIELDS }],
    method: RESOURCE_METHOD_TYPE.GET,
    name: USER_RESOURCE_NAME,
  });

  const { data, error, isError, isLoading } = useQuery('a2', async () => {
    return get({ filter: { _id: '6448881dd34cb0fcb6734acf' } });
  });

  const quotesAll = [
    {
      name: '우리은행',
      quotes: [
        { spread: 30, tenor: 2 },
        { spread: 40, tenor: 3 },
        { spread: 55, tenor: 5 },
        { spread: 60, tenor: 7 },
        { spread: 75, tenor: 10 },
        { spread: 100, tenor: 20 },
        { spread: 150, tenor: 30 },
      ],
    },
    {
      name: 'KTB',
      quotes: [
        { spread: 30, tenor: 2 },
        { spread: 40, tenor: 3 },
        { spread: 55, tenor: 5 },
        { spread: 60, tenor: 7 },
        { spread: 75, tenor: 10 },
        { spread: 100, tenor: 20 },
        { spread: 150, tenor: 30 },
      ],
    },
    {
      name: '하나은행',
      quotes: [
        { spread: 30, tenor: 2 },
        { spread: 35, tenor: 3 },
        { spread: 75, tenor: 5 },
        { spread: 95, tenor: 7 },
        { spread: 100, tenor: 10 },
        { spread: 110, tenor: 20 },
        { spread: 160, tenor: 30 },
      ],
    },
    {
      name: '산업은행',
      quotes: [
        { spread: 25, tenor: 2 },
        { spread: 40, tenor: 3 },
        { spread: 80, tenor: 5 },
        { spread: 100, tenor: 7 },
        { spread: 105, tenor: 10 },
        { spread: 110, tenor: 20 },
        { spread: 145, tenor: 30 },
      ],
    },
  ];

  const height = 30;
  const tenors = [2, 3, 5, 7, 10, 20, 30];

  return (
    <Wrapper
      p
      s>
      <Wrapper isRow>
        <Wrapper pVertical>
          <Wrapper
            border="bottom"
            height={height}>
            <Text
              align="center"
              fontSize="l"
              isBold>
              만기
            </Text>
          </Wrapper>

          {tenors.map((tenor) => (
            <Wrapper
              height={height}
              key={tenor}
              pHorizontal>
              <Text
                align="right"
                fontSize="l"
                isBold>{`${tenor} 년`}</Text>
            </Wrapper>
          ))}
        </Wrapper>

        <Wrapper
          grow
          isHorizontalScrollable
          isRow
          pVertical>
          {quotesAll.map(({ name, quotes }) => (
            <Wrapper key={name}>
              <Wrapper
                border="bottom"
                height={height}
                pHorizontal>
                <Text
                  fontSize="l"
                  isBold>
                  {name}
                </Text>
              </Wrapper>

              {tenors.map((tenor) => {
                const spread = quotes.find((q) => q.tenor == tenor)?.spread;
                return (
                  <Wrapper
                    height={height}
                    isRowAlign
                    key={tenor}
                    pHorizontal>
                    <Text
                      color="blue"
                      fontSize="l"
                      isBold>
                      {`${((300 + (spread ?? 0)) / 100.0).toFixed(3)}%`}
                    </Text>

                    <Text fontSize="l">{`KR${`${tenor}`}YT + ${spread} bps`}</Text>
                  </Wrapper>
                );
              })}
            </Wrapper>
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
