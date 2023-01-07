import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { RouteLink } from '@lib/frontend/route/components/RouteLink/RouteLink';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type { RouteModel } from '@lib/frontend/route/route.models';

export const routes: Array<RouteModel> = [
  {
    pathname: '/p',
    routes: [
      {
        element: (
          <Wrapper isCenter>
            <RouteLink pathname={'/p/testb'}>TEST A</RouteLink>
          </Wrapper>
        ),
        pathname: '/testa',
      },
      {
        element: (
          <Wrapper isCenter>
            <RouteLink pathname={'/p/testa'}>TEST B</RouteLink>
          </Wrapper>
        ),
        pathname: '/testb',
      },
    ],
  },

  {
    element: (
      <Wrapper isCenter>
        <RouteLink pathname={'/testb'}>TEST A</RouteLink>
      </Wrapper>
    ),
    pathname: '/testa',
  },
  {
    element: (
      <Wrapper isCenter>
        <RouteLink pathname={'/testa'}>TEST B</RouteLink>
      </Wrapper>
    ),
    pathname: '/testb',
  },

  {
    element: <NotFound />,
    pathname: '*',
  },
];
