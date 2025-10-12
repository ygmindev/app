import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type SitemapPagePropsModel } from '@lib/frontend/route/pages/SitemapPage/SitemapPage.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ReactElement } from 'react';

export const SitemapPage: LFCModel<SitemapPagePropsModel> = ({ routes, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const getRoute = (route: RouteModel): ReactElement => {
    const title = route.title ?? route.fullpath;

    return route.routes ? (
      <Accordion
        defaultValue={ELEMENT_STATE.ACTIVE}
        key={route.pathname}
        title={
          <AsyncText
            isBold
            key={route.pathname}>
            {title}
          </AsyncText>
        }>
        <Wrapper s>{route.routes.map(getRoute)}</Wrapper>
      </Accordion>
    ) : (
      // <RouteLink
      //   key={route.pathname}
      //   pathname={route.fullpath ?? route.pathname}>
      //   {title}
      // </RouteLink>
      <Link
        key={route.pathname}
        pathname={route.fullpath ?? route.pathname}>
        {title}
      </Link>
    );
  };

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p
      s>
      {routes.map(getRoute)}
    </Wrapper>
  );
};
