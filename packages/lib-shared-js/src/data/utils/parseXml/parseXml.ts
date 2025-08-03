import {
  type ParseXmlModel,
  type ParseXmlParamsModel,
  type XmlNodeModel,
} from '@lib/shared/data/utils/parseXml/parseXml.models';
import { JSDOM } from 'jsdom';

export const parseXml = async (params: ParseXmlParamsModel): Promise<ParseXmlModel> => {
  const doc = new JSDOM(params, { contentType: 'application/xml' });
  return getNode(doc.window.document);
};

const getNode = (el: Element | Document): XmlNodeModel => ({
  find: (selector, ns) => {
    const result = el.querySelector(ns ? `${ns}\\:${selector}` : selector);
    return result ? getNode(result) : null;
  },
  findAll: (selector, ns) => {
    const result = el.querySelectorAll(ns ? `${ns}\\:${selector}` : selector);
    return result ? [...result].map(getNode) : [];
  },
  text: () => el.textContent,
});
