import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { StorageInput } from '@lib/frontend/data/components/StorageInput/StorageInput';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useEventResource } from '@lib/frontend/kfn/hooks/useEventResource/useEventResource';
import { type KfnEventsPagePropsModel } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { sort } from '@lib/shared/core/utils/sort/sort';

export const KfnEventsPage: LFCModel<KfnEventsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { create, getMany } = useEventResource();
  const { t } = useTranslation();

  const handleSubmit = async (form: Partial<EventModel>): Promise<void> => {
    console.warn(form);
    await create({ form });
  };

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p={THEME_SIZE.LARGE}
      s={THEME_SIZE.LARGE}>
      <Text
        align={FONT_ALIGN.CENTER}
        color={THEME_COLOR.SECONDARY}
        fontStyle={FONT_STYLE.HEADLINE}>
        {t('kfn:events')}
      </Text>
      <DataBoundary
        flex
        id="events"
        isVerticalScrollable
        query={getMany}>
        {({ data }) =>
          data?.result ? (
            <Wrapper s={THEME_SIZE.LARGE}>
              <FormContainer<EventModel>
                fields={[
                  { element: <TextInput />, id: 'name' },
                  { element: <DateInput />, id: 'start' },
                  { element: <DateInput />, id: 'end' },
                  { element: <StorageInput />, id: 'images' },
                ]}
                onSubmit={handleSubmit}
              />

              {sort(data.result.items, [['created', false]]).map((v) => {
                return (
                  <Wrapper
                    key={v._id}
                    s>
                    <Text
                      align={FONT_ALIGN.CENTER}
                      fontStyle={FONT_STYLE.HEADLINE}>
                      {v.name}
                    </Text>
                  </Wrapper>
                );
              })}
            </Wrapper>
          ) : (
            <></>
          )
        }
      </DataBoundary>
    </Wrapper>
  );
};
