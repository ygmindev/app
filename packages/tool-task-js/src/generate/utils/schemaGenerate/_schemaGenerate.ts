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
import { type EditResult, modify, type Node, parse, parseTree } from 'jsonc-parser';
import snakeCase from 'lodash/snakeCase';
import { createGenerator } from 'ts-json-schema-generator';

export const _schemaGenerate = async ({
  fromDirname = fromWorking(),
  isSilent = false,
  sources,
  toDirname,
}: _SchemaGenerateParamsModel): Promise<_SchemaGenerateModel> => {
  const paths = fromGlobs(sources, { isAbsolute: true, root: fromDirname });

  const refs: Record<string, { basePathname: string; jsonPathname: string; schema: JSONSchema7 }> =
    {};

  for (const basePathname of paths) {
    const { dirname, main } = fileInfo(basePathname);
    const outDirname = toDirname ? dirname.replace(fromDirname, toDirname) : dirname;
    const index = outDirname.lastIndexOf('/');
    const jsonPathname = joinPaths(
      [outDirname.slice(0, index), snakeCase(outDirname.slice(index + 1)), snakeCase(main)],
      { extension: 'json' },
    );
    const type = `${main}Model`;
    const schema = createGenerator({
      encodeRefs: false,
      expose: 'export',
      path: basePathname,
      skipTypeCheck: true,
      topRef: true,
      tsconfig: fromRoot('tsconfig.json'),
      type,
    }).createSchema(type);

    if (schema.definitions) {
      const keys = Object.keys(schema.definitions).filter((v) => v !== type);
      console.warn(`@@@ ${type}: ${keys.join(',')}\n\n`);
    }

    refs[`${main}Model`] = {
      basePathname,
      jsonPathname,
      schema,
    };
  }

  for (const [type, value] of Object.entries(refs)) {
    const { basePathname, jsonPathname, schema } = value;
    let result = stringify(schema);
    const edits = [] as EditResult;
    const definitions = [] as Array<string>;
    const walk = (node: Node | undefined, path: Array<string | number> = []): void => {
      if (!node || typeof node !== 'object') {
        return;
      }
      if (node.type === 'object' && node.children) {
        for (const child of node.children) {
          if (child.type === 'property') {
            const [k, v] = (child as unknown as { children: [Node, Node] }).children;
            if (
              k.value === '$ref' &&
              typeof v.value === 'string' &&
              v.value.startsWith('#/definitions/')
            ) {
              const ref = v.value.split('/').pop();
              if (ref && type !== ref && !!refs[ref]) {
                edits.push(
                  ...modify(
                    result,
                    [...path, k.value as string],
                    `${toRelative({ from: joinPaths([jsonPathname, '..']), to: refs[ref].jsonPathname })}#/definitions/${ref}`,
                    { formattingOptions: { insertSpaces: true, tabSize: 2 } },
                  ),
                );
                definitions.push(ref);
              }
            } else {
              walk(v, [...path, k.value as string]);
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
      definitions?.forEach((k) =>
        edits.push(
          ...modify(result, ['definitions', k], undefined, {
            formattingOptions: { insertSpaces: true, tabSize: 2 },
          }),
        ),
      );

      edits.sort((a, b) => b.offset - a.offset);
      for (const edit of edits) {
        result =
          result.slice(0, edit.offset) +
          (edit.content || '') +
          result.slice(edit.offset + edit.length);
      }
    }

    result = stringify(parse(result, [], { allowTrailingComma: true }));

    !isSilent && logger.debug(`schema generated for: ${basePathname}`);
    writeFile({ filename: jsonPathname, value: result });
  }

  const schemas = Object.values(refs)
    .map(({ jsonPathname }) => jsonPathname)
    .join(',');

  const scriptPathname = fromPackages(
    'lib-model-py/src/lib_model/generate/utils/schemaGenerate/schemaGenerate.py',
  );

  await execute({
    command: `poetry run python ${scriptPathname} --source ${schemas}`,
    root: fromPackages('lib-model-py'),
  });
};
