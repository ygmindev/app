#!/usr/bin/env -S npx tsx

import { Cli } from '@tool/task/core/utils/Cli/Cli';

const cli = new Cli();
await cli.initialize();
await cli.run(process.argv[2]);
// process.exit(0);
