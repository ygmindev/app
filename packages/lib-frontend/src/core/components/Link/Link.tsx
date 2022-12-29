import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { _Link } from '@lib/frontend/core/components/Link/_Link';
import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { View } from '@lib/frontend/core/components/View/View';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const Link = composeComponent<LinkPropsModel, _LinkPropsModel>({
  getComponent: () => _Link,

  getProps: ({ children, style, testID }, theme) => ({
    children: (
      <Activatable>
        {(isActive) => (
          <View>
            <_Link
              style={{
                ...style,
                color: isActive
                  ? palette({
                      color: theme.colors.tone.primary.main,
                      lightness: theme.colors.activeLightness,
                    })
                  : theme.colors.tone.primary.main,
              }}
              testID={testID}>
              {children}
            </_Link>
          </View>
        )}
      </Activatable>
    ),
  }),

  stylers: [textStyler],
});
