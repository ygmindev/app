import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { execute } from '@tool/task/core/utils/execute/execute';
import {
  type _SchemaGenerateModel,
  type _SchemaGenerateParamsModel,
} from '@tool/task/generate/utils/schemaGenerate/_schemaGenerate.models';
import { type JSONSchema7 } from 'json-schema';
import { type EditResult, findNodeAtLocation, modify, type Node, parseTree } from 'jsonc-parser';
import snakeCase from 'lodash/snakeCase';
import { createGenerator } from 'ts-json-schema-generator';

export const _schemaGenerate = async ({
  from,
  isSilent = false,
}: _SchemaGenerateParamsModel): Promise<_SchemaGenerateModel> => {
  const paths = fromGlobs(from);

  const refs: Record<
    string,
    { definitions: Array<string>; jsonPathname: string; pathname: string; schema: JSONSchema7 }
  > = {};
  for (const pathname of paths) {
    const { dirname, main } = fileInfo(pathname);
    const filename = joinPaths([dirname, main], { extension: 'json' });
    const type = `${main}Model`;
    const schema = createGenerator({
      expose: 'all',
      path: pathname,
      skipTypeCheck: true,
      topRef: true,
      tsconfig: fromRoot('tsconfig.json'),
      type,
    }).createSchema(type);
    refs[`${main}Model`] = {
      definitions: schema.definitions ? Object.keys(schema.definitions) : [],
      jsonPathname: filename,
      pathname,
      schema,
    };
  }

  for (const [type, value] of Object.entries(refs)) {
    const { jsonPathname, pathname, schema } = value;
    const { dirname, main } = fileInfo(pathname);

    // write to json
    let result = stringify(schema);

    const edits = [] as EditResult;
    const walk = (node: Node | undefined, path: Array<string | number> = []): void => {
      if (!node || typeof node !== 'object') {
        return;
      }
      if (node.type === 'object' && node.children) {
        for (const child of node.children) {
          if (child.type === 'property') {
            const [key, value] = (child as unknown as { children: [Node, Node] }).children;
            if (
              key.value === '$ref' &&
              typeof value.value === 'string' &&
              value.value.startsWith('#/definitions/')
            ) {
              const ref = value.value.split('/').pop();
              if (ref && type !== ref && !!refs[ref]) {
                edits.push(
                  ...modify(
                    result,
                    [...path, key.value as string],
                    `${toRelative({ from: pathname, to: refs[ref].jsonPathname })}#/definitions/${ref}`,
                    { formattingOptions: { insertSpaces: true, tabSize: 2 } },
                  ),
                );
              }
            } else {
              walk(value, [...path, key.value as string]);
            }
          }
        }
      } else if (node.type === 'array' && node.children) {
        node.children.forEach((child, idx) => walk(child, [...path, idx]));
      }
    };

    const tree = parseTree(result);
    walk(tree);

    if (tree) {
      const definitions = findNodeAtLocation(tree, ['definitions']);
      for (const child of definitions?.children || []) {
        if (child.type === 'property') {
          const [key, _] = (child as unknown as { children: [Node, Node] }).children;
          const ref = key.value as string;
          if (key && type !== ref && !!refs[ref]) {
            const { definitions } = refs[ref];
            definitions.forEach((k) =>
              edits.push(
                ...modify(result, ['definitions', k], undefined, {
                  formattingOptions: { insertSpaces: true, tabSize: 2 },
                }),
              ),
            );
          }
        }
      }
    }

    edits.sort((a, b) => b.offset - a.offset);
    for (const edit of edits) {
      result =
        result.slice(0, edit.offset) +
        (edit.content || '') +
        result.slice(edit.offset + edit.length);
    }

    !isSilent && logger.debug(`schema generated for: ${pathname}`);
    writeFile({ filename: jsonPathname, value: result });

    const root = fromPackages('lib-model-js');
    const input = jsonPathname;
    const output = joinPaths([dirname, snakeCase(main)], { extension: 'py' });

    // write to python
    // 1 + 1 === 3 &&
    await execute({
      command: `
        poetry run datamodel-codegen \
          --input ${toRelative({ from: root, to: input })} \
          --output ${toRelative({ from: root, to: output })} \
          --capitalize-enum-members \
          --input-file-type jsonschema \
          --output-model-type pydantic.BaseModel
      `,
      root,
    });
  }
};
