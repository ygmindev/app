import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
import {
  type FileInputPropsModel,
  type FileInputRefModel,
} from '@lib/frontend/data/components/FileInput/FileInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { BORDER_STYLE } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';

export const FileInput: RLFCModel<FileInputRefModel, FileInputPropsModel> = ({
  defaultValue,
  isMultiple,
  label,
  onChange,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  return (
    <Wrapper
      {...wrapperProps}
      border
      p
      round
      s>
      <_FileInput
        isMultiple={isMultiple}
        onChange={valueControlledSet}
        value={valueControlled}>
        <Wrapper
          border
          borderStyle={BORDER_STYLE.DASHED}
          borderWidth
          isAlign
          isCenter
          isRow
          p
          round
          s>
          <Icon
            color={THEME_COLOR.PRIMARY}
            fontSize={THEME_SIZE_MORE.XLARGE}
            icon="upload"
          />

          <Text casing={TEXT_CASING.CAPITALIZE}>{`${t('core:dragAndDrop')} ${t('core:or')}`}</Text>

          <Button
            icon="folder"
            isHidden>
            {label ?? t('core:browse')}
          </Button>
        </Wrapper>
      </_FileInput>

      <ItemList
        items={valueControlled?.map(({ id, name, size }) => ({
          description: `${numberFormat(size, { multiplier: 1 / 1e3, precision: 0 })}KB`,
          icon: 'image',
          id,
          title: name,
        }))}
        rightElement={({ isActive, item }) => (
          <Button
            color={THEME_COLOR.ERROR}
            icon="trash"
            onPress={() =>
              valueControlledSet(valueControlled?.filter((file) => file.id !== item.id))
            }
            size={THEME_SIZE.SMALL}
          />
        )}
      />
    </Wrapper>
  );
};

// <Wrapper
//   border
//   isVerticalScrollable
//   p
//   round
//   s={THEME_SIZE.SMALL}>
//   {valueControlled?.length ? (
//     valueControlled.map(({ name, size }) => (
//       <Title
//         description={`${numberFormat(size, { multiplier: 1 / 1e3, precision: 0 })}KB`}
//         icon="image"
//         key={name}
//         rightElement={
//           <Button
//             color={THEME_COLOR.ERROR}
//             icon="trash"
//             onPress={() =>
//               valueControlledSet(valueControlled.filter((file) => file.name !== name))
//             }
//             size={THEME_SIZE.SMALL}
//           />
//         }
//         title={name}
//       />
//     ))
//   ) : (
//     <Wrapper
//       flex
//       isCenter
//       s={THEME_SIZE.SMALL}>
//       <Icon
//         colorRole={THEME_ROLE.MUTED}
//         fontSize={THEME_SIZE_MORE.XLARGE}
//         icon="empty"
//       />

//       <Text colorRole={THEME_ROLE.MUTED}>{t('core:nothingToShow')}</Text>
//     </Wrapper>
//   )}
// </Wrapper>

// import { Button } from '@lib/frontend/core/components/Button/Button';
// import { Icon } from '@lib/frontend/core/components/Icon/Icon';
// import { Text } from '@lib/frontend/core/components/Text/Text';
// import { Title } from '@lib/frontend/core/components/Title/Title';
// import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
// import { type RLFCModel } from '@lib/frontend/core/core.models';
// import { _FileInput } from '@lib/frontend/data/components/FileInput/_FileInput';
// import {
//   type FileInputPropsModel,
//   type FileInputRefModel,
// } from '@lib/frontend/data/components/FileInput/FileInput.models';
// import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
// import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import {
//   THEME_COLOR,
//   THEME_ROLE,
//   THEME_SIZE,
//   THEME_SIZE_MORE,
// } from '@lib/frontend/style/style.constants';
// import { variableName } from '@lib/shared/core/utils/variableName/variableName';
// import { numberFormat } from '@lib/shared/data/utils/numberFormat/numberFormat';

// export const FileInput: RLFCModel<FileInputRefModel, FileInputPropsModel> = ({
//   defaultValue,
//   isMultiple,
//   label,
//   onChange,
//   value,
//   ...props
// }) => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   const { t } = useTranslation();
//   const { valueControlled, valueControlledSet } = useValueControlled({
//     defaultValue,
//     onChange,
//     value,
//   });
//   return (
//     <_FileInput
//       isMultiple={isMultiple}
//       onChange={valueControlledSet}
//       value={valueControlled}>
//       <Wrapper
//         {...wrapperProps}
//         border
//         isRow
//         p
//         round
//         s>
//         <Wrapper
//           flex
//           isCenter
//           s>
//           <Icon
//             color={THEME_COLOR.PRIMARY}
//             fontSize={THEME_SIZE_MORE.XLARGE}
//             icon="upload"
//           />

//           <Text>{`${t('core:dragAndDrop')} ${t('core:or')}`}</Text>

//           <Button
//             icon="folder"
//             isHidden>
//             {label ?? t('core:browse')}
//           </Button>
//         </Wrapper>

//         <Wrapper
//           border
//           isVerticalScrollable
//           p
//           round
//           s={THEME_SIZE.SMALL}>
//           {valueControlled?.length ? (
//             valueControlled.map(({ name, size }) => (
//               <Title
//                 icon="image"
//                 key={name}
//                 leftElement={
//                   <Button
//                     color={THEME_COLOR.ERROR}
//                     icon="trash"
//                     onPress={() =>
//                       valueControlledSet(valueControlled.filter((file) => file.name !== name))
//                     }
//                     size={THEME_SIZE.SMALL}
//                   />
//                 }
//                 title={
//                   <Wrapper>
//                     <Text>{name}</Text>

//                     {size && (
//                       <Text
//                         colorRole={
//                           THEME_ROLE.MUTED
//                         }>{`${numberFormat(size, { multiplier: 1 / 1e3, precision: 0 })}KB`}</Text>
//                     )}
//                   </Wrapper>
//                 }
//               />
//             ))
//           ) : (
//             <Wrapper
//               flex
//               isCenter
//               s>
//               <Icon
//                 colorRole={THEME_ROLE.MUTED}
//                 fontSize={THEME_SIZE_MORE.XLARGE}
//                 icon="empty"
//               />

//               <Text colorRole={THEME_ROLE.MUTED}>{t('core:nothingToShow')}</Text>
//             </Wrapper>
//           )}
//         </Wrapper>
//       </Wrapper>
//     </_FileInput>
//   );
// };

// process.env.APP_IS_DEBUG && (FileInput.displayName = variableName({ FileInput }));
