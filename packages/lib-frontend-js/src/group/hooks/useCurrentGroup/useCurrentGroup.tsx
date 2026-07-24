import { type UseCurrentGroupModel } from '@lib/frontend/group/hooks/useCurrentGroup/useCurrentGroup.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useEffect } from 'react';

export const useCurrentGroup = (): UseCurrentGroupModel => {
  const [currentGroup] = useStore('group.currentGroup');
  const { replace } = useRouter();

  useEffect(() => {
    if (currentGroup === null) {
      void replace({ pathname: '' });
    }
  }, [currentGroup]);

  return currentGroup;
};
