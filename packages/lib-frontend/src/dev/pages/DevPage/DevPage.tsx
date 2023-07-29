import { motify } from 'moti';
import { type ComponentType, useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { animatable } from '#lib-frontend/animation/utils/animatable/animatable';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type ElementStateModel, type FCModel } from '#lib-frontend/core/core.models';
import { toComponentClass } from '#lib-frontend/core/utils/toComponentClass/toComponentClass';
import { type ToComponentClassParamsModel } from '#lib-frontend/core/utils/toComponentClass/toComponentClass.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

const AnimatableIcon = animatable({
  Component: toComponentClass(
    Icon as unknown as ToComponentClassParamsModel<any>,
  ) as ComponentType<any>,
});

const AnimatableIcon2 = motify(Icon)();

const AnimatableImage = animatable({ Component: Image });

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const [x, setX] = useState<ElementStateModel>('inactive');
  useEffect(() => {
    setTimeout(() => {
      setX('active');
    }, 1000);
  }, []);
  console.warn(x);
  return (
    <Wrapper
      p
      s>
      <AnimatableIcon2
        animate={
          x === 'active'
            ? { backgroundColor: 'red', height: 50, width: 50 }
            : { backgroundColor: 'green', height: 100, width: 100 }
        }
        name="music"
        transition={{ duration: 3000 }}
      />

      <AnimatableIcon
        animation={{
          states: {
            active: { color: 'red', height: 50, width: 50 },
            inactive: { color: 'green', height: 100, width: 100 },
          },
        }}
        elementState={x}
        name="music"
      />

      <AnimatableImage
        animation={{
          duration: 3000,
          states: {
            active: { backgroundColor: 'red', height: 50, width: 50 },
            inactive: { backgroundColor: 'green', height: 100, width: 100 },
          },
        }}
        elementState={x}
        source={{ uri: '/images/logos/logo.png' }}
      />
    </Wrapper>
  );
};

// import { Text } from '#lib-frontend/core/components/Text/Text';
// import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
// import { type FCModel } from '#lib-frontend/core/core.models';
// import { useQuery } from '#lib-frontend/data/hooks/useQuery/useQuery';
// import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
// import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
// import { USER_FIELDS } from '#lib-frontend/user/hooks/useUserResource/useUserResource.constants';
// import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
// import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

// export const DevPage: FCModel<DevPagePropsModel> = () => {
//   const { query: get } = useResourceMethod({
//     fields: [{ result: USER_FIELDS }],
//     method: RESOURCE_METHOD_TYPE.GET,
//     name: USER_RESOURCE_NAME,
//   });

//   const { data, error, isError, isLoading } = useQuery('a2', async () => {
//     return get({ filter: { _id: '6448881dd34cb0fcb6734acf' } });
//   });

//   const quotesAll = [
//     {
//       name: '우리은행',
//       quotes: [
//         { spread: 30, tenor: 2 },
//         { spread: 40, tenor: 3 },
//         { spread: 55, tenor: 5 },
//         { spread: 60, tenor: 7 },
//         { spread: 75, tenor: 10 },
//         { spread: 100, tenor: 20 },
//         { spread: 150, tenor: 30 },
//       ],
//     },
//     {
//       name: 'KTB',
//       quotes: [
//         { spread: 30, tenor: 2 },
//         { spread: 40, tenor: 3 },
//         { spread: 55, tenor: 5 },
//         { spread: 60, tenor: 7 },
//         { spread: 75, tenor: 10 },
//         { spread: 100, tenor: 20 },
//         { spread: 150, tenor: 30 },
//       ],
//     },
//     {
//       name: '하나은행',
//       quotes: [
//         { spread: 30, tenor: 2 },
//         { spread: 35, tenor: 3 },
//         { spread: 75, tenor: 5 },
//         { spread: 95, tenor: 7 },
//         { spread: 100, tenor: 10 },
//         { spread: 110, tenor: 20 },
//         { spread: 160, tenor: 30 },
//       ],
//     },
//     {
//       name: '산업은행',
//       quotes: [
//         { spread: 25, tenor: 2 },
//         { spread: 40, tenor: 3 },
//         { spread: 80, tenor: 5 },
//         { spread: 100, tenor: 7 },
//         { spread: 105, tenor: 10 },
//         { spread: 110, tenor: 20 },
//         { spread: 145, tenor: 30 },
//       ],
//     },
//   ];

//   const height = 30;
//   const tenors = [2, 3, 5, 7, 10, 20, 30];

//   return (
//     <Wrapper
//       p
//       s>
//       <Wrapper isRow>
//         <Wrapper pVertical>
//           <Wrapper
//             border="bottom"
//             height={height}>
//             <Text
//               align="center"
//               fontSize="l"
//               isBold>
//               만기
//             </Text>
//           </Wrapper>

//           {tenors.map((tenor) => (
//             <Wrapper
//               height={height}
//               key={tenor}
//               pHorizontal>
//               <Text
//                 align="right"
//                 fontSize="l"
//                 isBold>{`${tenor} 년`}</Text>
//             </Wrapper>
//           ))}
//         </Wrapper>

//         <Wrapper
//           grow
//           isHorizontalScrollable
//           isRow
//           pVertical>
//           {quotesAll.map(({ name, quotes }) => (
//             <Wrapper key={name}>
//               <Wrapper
//                 border="bottom"
//                 height={height}
//                 pHorizontal>
//                 <Text
//                   fontSize="l"
//                   isBold>
//                   {name}
//                 </Text>
//               </Wrapper>

//               {tenors.map((tenor) => {
//                 const spread = quotes.find((q) => q.tenor == tenor)?.spread;
//                 return (
//                   <Wrapper
//                     height={height}
//                     isRowAlign
//                     key={tenor}
//                     pHorizontal>
//                     <Text
//                       color="blue"
//                       fontSize="l"
//                       isBold>
//                       {`${((300 + (spread ?? 0)) / 100.0).toFixed(3)}%`}
//                     </Text>

//                     <Text fontSize="l">{`KR${`${tenor}`}YT + ${spread} bps`}</Text>
//                   </Wrapper>
//                 );
//               })}
//             </Wrapper>
//           ))}
//         </Wrapper>
//       </Wrapper>
//     </Wrapper>
//   );
// };
