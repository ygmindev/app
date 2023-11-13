import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const DevPage: SFCModel<DevPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <>
      <ModalButton element={<Wrapper height={400}></Wrapper>}>modal</ModalButton>
    </>
  );
};
