#!/usr/bin/env node

require('../../lib-shared/src/core/utils/nodeRegister/nodeRegister').nodeRegister();
void require('../../tool-task/src/core/utils/cli/cli').cli();
