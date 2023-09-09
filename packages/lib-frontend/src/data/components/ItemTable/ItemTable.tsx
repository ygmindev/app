import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type ItemTablePropsModel } from '#lib-frontend/data/components/ItemTable/ItemTable.models';
import { Table } from '#lib-frontend/data/components/Table/Table';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_ROLE } from '#lib-frontend/style/style.constants';

export const ItemTable: SFCModel<ItemTablePropsModel> = ({ data, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Table
      columns={[
        {
          _id: 'icon',
          renderer: ({ value }) =>
            value && (
              <Icon
                colorRole={THEME_ROLE.MUTED}
                icon={value as IconPropsModel['icon']}
              />
            ),
          width: 20,
        },
        {
          _id: 'title',
          renderer: ({ value }) => value && <Text colorRole={THEME_ROLE.MUTED}>{value}</Text>,
          width: 100,
        },
        { _id: 'description' },
      ]}
      data={data}
      isHeadless
      style={styles}
      testID={testID}
    />
  );
};
