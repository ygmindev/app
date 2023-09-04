import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type ItemFieldPropsModel } from '#lib-frontend/core/components/ItemField/ItemField.models';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { SearchField } from '#lib-frontend/search/components/SearchField/SearchField';
import { useSearch } from '#lib-frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ItemField: LFCModel<ItemFieldPropsModel> = ({
  defaultValue,
  onChange,
  onSubmit,
  options,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const { query, result, search } = useSearch({
    keys: ['label', 'id'],
    list: options.map(({ label, ...option }) => ({ ...option, label: t(label) })),
    // onChange: () => menuRef.current?.scrollTo({ x: 0, y: 0 }),
  });

  return (
    <Wrapper
      {...wrapperProps}
      s>
      <SearchField
        onChange={search}
        value={query}
      />

      <LineGroup>
        {result?.map(({ id, label }) => (
          <LineItem
            key={id}
            onPress={() => {
              valueControlledSet(id);
              onSubmit && onSubmit();
            }}>
            <TranslatableText>{label}</TranslatableText>

            {valueControlled === id && <Icon icon="check" />}
          </LineItem>
        ))}
      </LineGroup>
    </Wrapper>
  );
};
