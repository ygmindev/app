import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { type OrchestratorPagePropsModel } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage.models';

export const props: LibraryPropsModel<OrchestratorPagePropsModel> = {
  defaultProps: {},
  Component: OrchestratorPage,
  variants: [],
};
