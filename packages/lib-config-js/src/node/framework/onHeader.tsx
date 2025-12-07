import { frameworkConfig } from '@lib/config/node/framework/framework';
import { type onHeaderModel } from '@lib/config/node/framework/framework.models';

export const onHeader: onHeaderModel = () => {
  const { faviconDir } = frameworkConfig.params();
  return (
    <>
      <title>My Awesome Website - Homepage</title>

      {/* <link
        href={faviconDir}
        rel="icon"
        type="image/svg+xml"
      /> */}

      {/* <link rel="apple-touch-icon" href={iconMobile} type="image/svg+xml" /> */}

      {/* <script type="text/javascript" src="https://example.com/some-script.js"></script> */}

      {/* <meta property="og:image" content={previewImage} /> */}
      {/* <meta property="og:type" content="website" /> */}
    </>
  );
};
