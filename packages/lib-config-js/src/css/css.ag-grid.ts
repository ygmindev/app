import { type CssConfigModel } from '@lib/config/css/css.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';

const AG_GRID_THEME = 'ag-theme-material';

export const config = defineConfig<CssConfigModel>({
  params: () => ({
    stylesheet: (theme) => `
    .${AG_GRID_THEME} {
      --ag-background-color: transparent;
      --ag-border-color: ${theme.color.border};
      --ag-checkbox-border-radius: ${theme.shape.borderRadius[THEME_SIZE.MEDIUM]}px;
      --ag-checkbox-checked-color: ${theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]};
      --ag-checkbox-indeterminate-color: ${theme.color.palette[THEME_COLOR.SECONDARY][THEME_ROLE.MAIN]};
      --ag-foreground-color: ${theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]};
      --ag-header-background-color: transparent;
      --ag-header-foreground-color: ${theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]};
      --ag-selected-row-background-color: transparent;
  
      .ag-cell, .ag-header-cell {
        align-items: center;
        display: flex;
        font-size: ${theme?.font.size[THEME_SIZE.MEDIUM]}px;
        padding: 0 ${theme?.shape.spacing[THEME_SIZE.MEDIUM]}px;
      }
  
      .ag-pinned-right-header, .ag-cell-first-right-pinned {
        border-left: none;
      }
    }
  `,
  }),
});

export default config;
