import type {CodegenConfig} from '@graphql-codegen/cli';
import fs from 'fs';
import dotenv from 'dotenv';

let env;

try {
  env = dotenv.parse(fs.readFileSync('.env', {encoding: 'utf8'}));
} catch (e) {
  throw new Error('Create .env file first');
}

if (!env.SOFIE_URL) {
  throw new Error('SOFIE_URL is missing in .env file');
}

const config: CodegenConfig = {
  schema: env.SOFIE_URL + '/graphql',
  documents: 'graphql/**/*.gql',
  generates: {
    'graphql/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo',
        {
          add: {
            content: 'import type {File, Image} from \'~/types/sofie\'',
          },
        },
      ],
    },
  },
  config: {
    scalars: {
      Date: 'string',
      DateTime: 'string',
      Email: 'string',
      File: 'File',
      ID: 'number | string',
      Iban: 'string',
      Image: 'Image',
      Null: 'null',
      Uuid: 'string',
    },
  },
};

export default config;
