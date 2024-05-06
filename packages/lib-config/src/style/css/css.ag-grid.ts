import { type CssConfigModel } from '@lib/config/style/css/css.models';

export const AG_GRID_THEME = 'ag-theme-material';

import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  config: {
    stylesheet: (theme) => `
    .${AG_GRID_THEME} {
      --ag-background-color: transparent;
      --ag-border-color: ${theme.color.border};
      --ag-checkbox-border-radius: ${theme.shape.borderRadius}px;
      --ag-checkbox-checked-color: ${theme.color.palette.primary.main};
      --ag-checkbox-indeterminate-color: ${theme.color.palette.secondary.main};
      --ag-foreground-color: ${theme.color.palette.surface.contrast};
      --ag-header-background-color: transparent;
      --ag-header-foreground-color: ${theme.color.palette.surface.contrast};
      --ag-selected-row-background-color: transparent;
  
      .ag-cell, .ag-header-cell {
        align-items: center;
        display: flex;
        font-size: ${theme?.font.size.m}px;
        padding: 0 ${theme?.shape.spacing.m}px;
      }
  
      .ag-pinned-right-header, .ag-cell-first-right-pinned {
        border-left: none;
      }
    }
  `,
  } satisfies CssConfigModel,
});

export { _config, config };
