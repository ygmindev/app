import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useWorkflowResource } from '@lib/frontend/orchestrator/hooks/useWorkflowResource/useWorkflowResource';
import { type OrchestratorPagePropsModel } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useEffect } from 'react';

export const OrchestratorPage: LFCModel<OrchestratorPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { getMany } = useWorkflowResource();
  useEffect(() => {
    void getMany().then(console.warn);
  }, []);
  return (
    <Wrapper>
      <Text>orchestrator</Text>
    </Wrapper>
  );
};

// import { Text } from '@lib/frontend/core/components/Text/Text';
// import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
// import { type LFCModel } from '@lib/frontend/core/core.models';
// import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
// import { useWorkflowResource } from '@lib/frontend/orchestrator/hooks/useWorkflowResource/useWorkflowResource';
// import { type OrchestratorPagePropsModel } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage.models';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

// export const OrchestratorPage: LFCModel<OrchestratorPagePropsModel> = ({ ...props }) => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   const { getConnection } = useWorkflowResource();
//   return (
//     <DataBoundary
//       id="tasks"
//       query={getConnection}
//       {...wrapperProps}>
//       {(x) => {
//         return (
//           <Wrapper s>
//             {x.data?.result?.edges?.map((v) => (
//               <Wrapper key={v.node._id}>
//                 <Text>{v.node.name}</Text>
//               </Wrapper>
//             ))}
//           </Wrapper>
//         );
//       }}
//     </DataBoundary>
//   );
// };
