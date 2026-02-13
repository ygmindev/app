import { Text } from '@lib/frontend/core/components/Text/Text';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ModalFormButton } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { StorageInput } from '@lib/frontend/data/components/StorageInput/StorageInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useEventResource } from '@lib/frontend/kfn/hooks/useEventResource/useEventResource';
import { type KfnEventsPagePropsModel } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { DATETIME_FORMAT } from '@lib/shared/datetime/utils/DateTime/DateTime.constants';

export const KfnEventsPage: LFCModel<KfnEventsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { create, getMany } = useEventResource();
  const { t } = useTranslation();

  const handleSubmit = async (form: Partial<EventModel>): Promise<void> => {
    await create({ form });
  };

  return (
    <MainLayout
      {...wrapperProps}
      flex
      s>
      <Wrapper
        isRow
        justify={FLEX_JUSTIFY.END}>
        <Wrapper
          left={0}
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}>
          <Text
            align={FONT_ALIGN.CENTER}
            color={THEME_COLOR.SECONDARY}
            fontStyle={FONT_STYLE.HEADLINE}>
            {t('kfn:events')}
          </Text>
        </Wrapper>

        <ModalFormButton<EventModel>
          fields={[
            { element: <TextInput />, id: 'name' },
            { element: <DateInput />, id: 'start' },
            { element: <DateInput />, id: 'end' },
            { element: <StorageInput />, id: 'images' },
          ]}
          icon="add"
          onSubmit={handleSubmit}
          p
          size={THEME_SIZE.SMALL}
          successMessage={() => ({ description: t('kfn:event') })}>
          {t('core:new', { value: t('kfn:event') })}
        </ModalFormButton>
      </Wrapper>

      <DataBoundary
        flex
        id="events"
        isVerticalScrollable
        query={getMany}>
        {({ data }) =>
          data?.result ? (
            <Wrapper s>
              {sort(data.result.items, [['created', false]]).map((v) => (
                <Tile
                  description={
                    <Wrapper
                      isAlign
                      isRow>
                      {v.start && <Text>{new DateTime(v.start).format(DATETIME_FORMAT.DATE)}</Text>}
                      <Text>-</Text>
                      {v.end && <Text>{new DateTime(v.end).format(DATETIME_FORMAT.DATE)}</Text>}
                    </Wrapper>
                  }
                  image={v.images?.[0]}
                  key={v._id}
                  s
                  title={v.name}></Tile>
              ))}
            </Wrapper>
          ) : (
            <></>
          )
        }
      </DataBoundary>
    </MainLayout>
  );
};
