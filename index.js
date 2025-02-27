require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

const runAction = require('./src/run-action');

Toolkit.run(
  async (tools) => {
    tools.log.info('Running the action...');
    await runAction(tools);

    tools.log.success('Label successfully applied!');
  },
  {
    event: [
      'pull_request.opened',
      'pull_request.synchronize',
      'pull_request.reopened',
    ],
    secrets: ['GITHUB_TOKEN'],
  },
);
