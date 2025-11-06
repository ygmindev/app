import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { watchFile } from '@lib/backend/file/utils/watchFile/watchFile';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { type FIELD_TYPE } from '@lib/backend/resource/utils/withField/withField.constants';
import { DIST_DIR } from '@lib/config/file/file.constants';
import { type FieldSchemaModel } from '@lib/config/schema/schema.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import {
  type _SchemaGenerateModel,
  type _SchemaGenerateParamsModel,
} from '@tool/task/generate/utils/schemaGenerate/_schemaGenerate.models';
import { Node, Project, type SourceFile, type Symbol, type Type } from 'ts-morph';

const PRIMITIVE_MAP: Record<string, FIELD_TYPE> = {
  Boolean: DATA_TYPE.BOOLEAN,
  Date: DATA_TYPE.DATE,
  Number: DATA_TYPE.NUMBER,
  String: DATA_TYPE.STRING,
};

const _resolveSchema = (props: Array<Symbol>): Record<string, FieldSchemaModel> | null => {
  if (!props.length) {
    return null;
  }
  const result: Record<string, FieldSchemaModel> = {};
  for (const prop of props) {
    const name = prop.getName();
    const declaration = prop.getValueDeclaration();
    if (!declaration) continue;
    let type = _resolveType(prop.getTypeAtLocation(declaration));
    if (!type) continue;
    let schema: FieldSchemaModel;
    if (isArray(type)) {
      schema = { isArray: true };
      [type] = type;
      type && (schema.type = type);
    } else {
      schema = { type };
    }
    prop.isOptional() && (schema.isOptional = true);
    result[name] = schema;
  }
  return result;
};

const _resolveType = (type: Type): FIELD_TYPE | null | Array<FIELD_TYPE | null> => {
  let t = type.getApparentType();
  if (t.isUnion()) {
    let types = t.getUnionTypes().map((v) => v.getApparentType());
    types = Array.from(new Set(types));
    types = types.filter((v) => !v.isUndefined());
    types.length === 1 && ([t] = types);
  }
  const s = t.getSymbol();
  const name = s?.getName();
  if (name && PRIMITIVE_MAP[name]) return PRIMITIVE_MAP[name];
  if (t.isStringLiteral()) return DATA_TYPE.STRING;
  if (t.isNumberLiteral()) return DATA_TYPE.NUMBER;
  if (t.isBooleanLiteral()) return DATA_TYPE.BOOLEAN;
  const declarations = s?.getDeclarations();
  if (t.isArray() || name?.includes('Array')) {
    const element = t.getArrayElementType();
    const elementType = (element && _resolveType(element)) ?? null;
    return isArray(elementType) ? elementType : [elementType];
  }
  if (declarations?.some(Node.isEnumDeclaration)) return DATA_TYPE.STRING;
  return null;
};

export const _schemaGenerate = async ({
  modelExtension,
  root,
  schemaFilename,
  tsconfigPathname,
}: _SchemaGenerateParamsModel): Promise<_SchemaGenerateModel> => {
  const project = new Project({ tsConfigFilePath: tsconfigPathname });
  const glob = joinPaths([root, 'src/*/*/*'], { extension: modelExtension });

  const schemaFilepath = joinPaths([root, DIST_DIR, schemaFilename]);
  let schemas = (await import(schemaFilepath)) as Record<string, Record<string, FieldSchemaModel>>;

  const schemaGenerateFile = async (
    source: SourceFile,
  ): Promise<Record<string, Record<string, FieldSchemaModel>> | null> => {
    const pathname = source.getFilePath();
    const { main } = fileInfo(pathname);
    const exports = source.getExportedDeclarations();
    for (const [name, declarations] of exports) {
      for (const declaration of declarations) {
        if (name === `${main}Model`) {
          const t = checker.getTypeAtLocation(declaration);
          const props = t.getProperties();
          const schema = _resolveSchema(props);
          if (schema) {
            return { [main]: schema };
          }
        }
      }
    }
    return null;
  };

  const updateSchemas = async (source: SourceFile, isDelete?: boolean): Promise<void> => {
    if (isDelete) {
      const pathname = source.getFilePath();
      const { main } = fileInfo(pathname);
      delete schemas[main];
    } else {
      const schema = await schemaGenerateFile(source);
      schema && (schemas = { ...schemas, ...schema });
    }
  };

  if (process.env.NODE_ENV === 'development') {
    watchFile([root], {
      onAdd: async (v) => {
        await updateSchemas(project.getSourceFiles([v])[0]);
        writeFile({ filename: schemaFilepath, value: stringify(schemas) });
      },
      onChange: async (v) => {
        await updateSchemas(project.getSourceFiles([v])[0]);
        writeFile({ filename: schemaFilepath, value: stringify(schemas) });
      },
      onDelete: async (v) => {
        await updateSchemas(project.getSourceFiles([v])[0], true);
        writeFile({ filename: schemaFilepath, value: stringify(schemas) });
      },
      patterns: [glob],
    });
  }

  const paths = project.getSourceFiles([glob]);
  const checker = project.getTypeChecker();
  await Promise.all(paths.map(async (path) => updateSchemas(path)));
  writeFile({ filename: schemaFilepath, value: stringify(schemas) });
};

// import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
// import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
// import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
// import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
// import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
// import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
// import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
// import { stringify } from '@lib/shared/core/utils/stringify/stringify';
// import { logger } from '@lib/shared/logging/utils/Logger/Logger';
// import {
//   type _SchemaGenerateModel,
//   type _SchemaGenerateParamsModel,
// } from '@tool/task/generate/utils/schemaGenerate/_schemaGenerate.models';
// import { type JSONSchema7 } from 'json-schema';
// import { type EditResult, modify, type Node, parse, parseTree } from 'jsonc-parser';
// import snakeCase from 'lodash/snakeCase';
// import { createGenerator } from 'ts-json-schema-generator';

// export const _schemaGenerate = async ({
//   fromDirname = fromWorking(),
//   isSilent = false,
//   sources,
//   // toDirname,
// }: _SchemaGenerateParamsModel): Promise<_SchemaGenerateModel> => {
//   const paths = fromGlobs(sources, { isAbsolute: true, root: fromDirname });

//   const refs: Record<string, { basePathname: string; jsonPathname: string; schema: JSONSchema7 }> =
//     {};

//   for (const basePathname of paths) {
//     const { dirname, main } = fileInfo(basePathname);
//     const outDirname = toDirname ? dirname.replace(fromDirname, toDirname) : dirname;
//     const index = outDirname.lastIndexOf('/');
//     const jsonPathname = joinPaths(
//       [outDirname.slice(0, index), snakeCase(outDirname.slice(index + 1)), snakeCase(main)],
//       { extension: 'json' },
//     );
//     const type = `${main}Model`;
//     const schema = createGenerator({
//       encodeRefs: false,
//       expose: 'export',
//       path: basePathname,
//       skipTypeCheck: true,
//       topRef: true,
//       tsconfig: fromRoot('tsconfig.json'),
//       type,
//     }).createSchema(type);

//     if (schema.definitions) {
//       const keys = Object.keys(schema.definitions).filter((v) => v !== type);
//       console.warn(`@@@ ${type}: ${keys.join(',')}\n\n`);
//     }

//     refs[`${main}Model`] = {
//       basePathname,
//       jsonPathname,
//       schema,
//     };
//   }

//   for (const [type, value] of Object.entries(refs)) {
//     const { basePathname, jsonPathname, schema } = value;
//     let result = stringify(schema);
//     const edits = [] as EditResult;
//     const definitions = [] as Array<string>;
//     const walk = (node: Node | undefined, path: Array<string | number> = []): void => {
//       if (!node || typeof node !== 'object') {
//         return;
//       }
//       if (node.type === 'object' && node.children) {
//         for (const child of node.children) {
//           if (child.type === 'property') {
//             const [k, v] = (child as unknown as { children: [Node, Node] }).children;
//             if (
//               k.value === '$ref' &&
//               typeof v.value === 'string' &&
//               v.value.startsWith('#/definitions/')
//             ) {
//               const ref = v.value.split('/').pop();
//               if (ref && type !== ref && !!refs[ref]) {
//                 edits.push(
//                   ...modify(
//                     result,
//                     [...path, k.value as string],
//                     `${toRelative({ from: joinPaths([jsonPathname, '..']), to: refs[ref].jsonPathname })}#/definitions/${ref}`,
//                     { formattingOptions: { insertSpaces: true, tabSize: 2 } },
//                   ),
//                 );
//                 definitions.push(ref);
//               }
//             } else {
//               walk(v, [...path, k.value as string]);
//             }
//           }
//         }
//       } else if (node.type === 'array' && node.children) {
//         node.children.forEach((child, idx) => walk(child, [...path, idx]));
//       }
//     };

//     const tree = parseTree(result);
//     tree && walk(tree);

//     if (edits.length && tree) {
//       definitions?.forEach((k) =>
//         edits.push(
//           ...modify(result, ['definitions', k], undefined, {
//             formattingOptions: { insertSpaces: true, tabSize: 2 },
//           }),
//         ),
//       );

//       edits.sort((a, b) => b.offset - a.offset);
//       for (const edit of edits) {
//         result =
//           result.slice(0, edit.offset) +
//           (edit.content || '') +
//           result.slice(edit.offset + edit.length);
//       }
//     }

//     result = stringify(parse(result, [], { allowTrailingComma: true }));

//     !isSilent && logger.debug(`schema generated for: ${basePathname}`);
//     writeFile({ filename: jsonPathname, value: result });
//   }

//   // const schemas = Object.values(refs)
//   //   .map(({ jsonPathname }) => jsonPathname)
//   //   .join(',');

//   // const scriptPathname = fromPackages(
//   //   'lib-model-py/src/lib_model/generate/utils/schemaGenerate/schemaGenerate.py',
//   // );

//   // await execute({
//   //   command: `poetry run python ${scriptPathname} --source ${schemas}`,
//   //   root: fromPackages('lib-model-py'),
//   // });
// };
