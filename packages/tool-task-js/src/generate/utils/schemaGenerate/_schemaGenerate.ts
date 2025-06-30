import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
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
  fromDirname = fromWorking(),
  isSilent = false,
  sources,
  toDirname,
}: _SchemaGenerateParamsModel): Promise<_SchemaGenerateModel> => {
  const paths = fromGlobs(sources, { isAbsolute: true, root: fromDirname });

  const refs: Record<
    string,
    {
      basePathname: string;
      definitions: Array<string>;
      jsonPathname: string;
      pyPathname: string;
      schema: JSONSchema7;
    }
  > = {};

  for (const basePathname of paths) {
    const { dirname, main } = fileInfo(basePathname);
    const outDirname = toDirname ? dirname.replace(fromDirname, toDirname) : dirname;
    const jsonPathname = joinPaths([outDirname, main], { extension: 'json' });
    const pyPathname = joinPaths([outDirname, snakeCase(main)], { extension: 'py' });
    const type = `${main}Model`;
    const schema = createGenerator({
      // expose: 'all',
      encodeRefs: false,
      path: basePathname,
      skipTypeCheck: true,
      topRef: true,
      tsconfig: fromRoot('tsconfig.json'),
      type,
    }).createSchema(type);
    refs[`${main}Model`] = {
      basePathname,
      definitions: schema.definitions ? Object.keys(schema.definitions) : [],
      jsonPathname,
      pyPathname,
      schema,
    };
  }

  for (const [type, value] of Object.entries(refs)) {
    const { basePathname, jsonPathname, schema } = value;

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
                    `${toRelative({ from: joinPaths([jsonPathname, '..']), to: refs[ref].jsonPathname })}#/definitions/${ref}`,
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
    tree && walk(tree);

    if (edits.length && tree) {
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

      edits.sort((a, b) => b.offset - a.offset);
      for (const edit of edits) {
        result =
          result.slice(0, edit.offset) +
          (edit.content || '') +
          result.slice(edit.offset + edit.length);
      }
    }

    !isSilent && logger.debug(`schema generated for: ${basePathname}`);
    writeFile({ filename: jsonPathname, value: result });
  }

  const schemas = Object.values(refs)
    .map(({ jsonPathname }) => jsonPathname)
    .join(',');

  const scriptPathname = fromPackages(
    'tool-task-py/src/tool_task/generate/utils/schemaGenerate/schemaGenerate.py',
  );
  await execute({
    command: `poetry run python ${scriptPathname} --source ${schemas}`,
    root: fromPackages('lib-model-py'),
  });
};
