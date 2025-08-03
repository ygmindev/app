export type ParseXmlParamsModel = string;

export type ParseXmlModel = XmlNodeModel;

export type XmlNodeModel = {
  find(selector: string, ns?: string): XmlNodeModel | null;
  findAll(selector: string, ns?: string): Array<XmlNodeModel>;
  text(): string | null;
};
