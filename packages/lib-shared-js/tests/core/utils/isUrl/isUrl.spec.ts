import { isUrl } from '@lib/shared/core/utils/isUrl/isUrl';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isUrl });

describe(displayName, () => {
  test('works', async () => {
    const VALID_URLS = [
      'https://example.com',
      'http://example.com',
      'https://example.com/path?query=1#fragment',
      'http://localhost:3000',
      'https://sub.domain.example.com',
      'ftp://ftp.example.com',
      'https://example.com:8080',
      'https://user:pass@example.com',
      'https://192.168.0.1',
      'https://example.com/index.html',
    ];

    const INVALID_URLS = [
      'example.com',
      'www.example.com',
      'http:/example.com',
      '://example.com',
      'https//example.com',
      'https:example.com',
      'just text',
      '',
      'http://',
      'http://?',
      'https://exa mple.com',
      'ftp:/example.com',
    ];

    VALID_URLS.forEach((v) => {
      const result = isUrl(v);
      expect(result).toStrictEqual(true);
    });

    INVALID_URLS.forEach((v) => {
      const result = isUrl(v);
      expect(result).toStrictEqual(false);
    });
  });
});
