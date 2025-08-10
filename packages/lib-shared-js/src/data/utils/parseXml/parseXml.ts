import { type StringKeyModel } from '@lib/shared/core/core.models';
import {
  type ParseXmlModel,
  type ParseXmlParamsModel,
  type XmlNodeModel,
} from '@lib/shared/data/utils/parseXml/parseXml.models';
import { XMLParser } from 'fast-xml-parser';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

export const parseXml = async (params: ParseXmlParamsModel): Promise<ParseXmlModel> => {
  const parser = new XMLParser({
    attributeNamePrefix: '@_',
    ignoreAttributes: false,
    parseAttributeValue: false,
    preserveOrder: true,
    textNodeName: '#text',
    trimValues: true,
  });
  const parsed = parser.parse(params) as unknown;
  return getNode(parsed, params);
};

const getNode = (data: unknown, xml?: string): XmlNodeModel => ({
  find: (selector, ns) => {
    const found = find(data, selector, ns, false);
    return found ? getNode(found, xml) : null;
  },

  findAll: (selector, ns) => {
    const found = find(data, selector, ns, true);
    return Array.isArray(found) ? found.map((item) => getNode(item, xml)) : [];
  },

  text: () => {
    return getText(data);
  },
});

const find = (data: unknown, selector: string, ns?: string, findAll: boolean = false): unknown => {
  const target = ns ? `${ns}:${selector}` : selector;
  const results: Array<unknown> = [];
  const search = (value: unknown): void => {
    if (Array.isArray(value)) {
      value.forEach((item) => search(item));
    } else if (!!value && isPlainObject(value)) {
      Object.keys(value).forEach((key) => {
        const v = value[key as StringKeyModel<typeof value>];
        if (
          key === target ||
          (!ns && key.includes(':') && key.split(':')[1] === selector) ||
          key === selector
        ) {
          if (findAll) {
            if (Array.isArray(v)) {
              results.push(...(v as Array<unknown>));
            } else {
              results.push(v);
            }
          } else {
            results.push(Array.isArray(v) ? v[0] : v);
            return;
          }
        }
        if (isPlainObject(v)) {
          search(v);
        }
      });
    }
  };
  search(data);
  if (findAll) {
    return results;
  }
  return results.length > 0 ? results[0] : null;
};

const getText = (data: unknown): string | null => {
  if (isString(data)) {
    return data;
  }
  if (isNumber(data)) {
    return data.toString();
  }
  if (Array.isArray(data)) {
    const texts = data.map(getText).filter(Boolean);
    return texts.length > 0 ? texts.join('') : null;
  }

  if (!!data && isPlainObject(data)) {
    const value = (data as { '#text': string })['#text'];
    if (value) {
      return value;
    }
    const texts: Array<string> = [];
    Object.keys(data).forEach((key) => {
      if (!key.startsWith('@_')) {
        const text = getText(data[key as StringKeyModel<typeof data>]);
        if (text) {
          texts.push(text);
        }
      }
    });
    return texts.length > 0 ? texts.join('') : null;
  }
  return null;
};
