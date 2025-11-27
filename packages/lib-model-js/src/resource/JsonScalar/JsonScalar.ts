import { GraphQLScalarType } from 'graphql';
import { type Maybe } from 'graphql/jsutils/Maybe';
import { type ObjMap } from 'graphql/jsutils/ObjMap';
import { Kind, type ObjectValueNode, print, type ValueNode } from 'graphql/language';

const parseObject = (
  typeName: string,
  ast: ObjectValueNode,
  variables: Maybe<ObjMap<unknown>>,
): object => {
  const value = Object.create(null);
  ast.fields.forEach((field) => {
    value[field.name.value] = parseLiteral(typeName, field.value, variables);
  });
  return value;
};

const parseLiteral = (
  typeName: string,
  ast: ValueNode,
  variables: Maybe<ObjMap<unknown>>,
): unknown => {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;
    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);
    case Kind.OBJECT:
      return parseObject(typeName, ast, variables);
    case Kind.LIST:
      return ast.values.map((n) => parseLiteral(typeName, n, variables));
    case Kind.NULL:
      return null;
    case Kind.VARIABLE:
      return variables ? variables[ast.name.value] : undefined;
    default:
      throw new TypeError(`${typeName} cannot represent value: ${print(ast)}`);
  }
};

export const JsonScalar = new GraphQLScalarType({
  description: 'JSON object',
  name: 'JsonScalar',
  parseLiteral: (ast, variables) => {
    if (ast.kind !== Kind.OBJECT)
      throw new TypeError(`JsonScalar cannot represent non-object value: ${print(ast)}`);
    return parseObject('JsonScalar', ast, variables);
  },
  parseValue: (v) => v,
  serialize: (v) => v,
});
