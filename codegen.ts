import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:16000/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql/": {
      preset: "client",
      plugins: [],
      config: {
        fragmentMasking: false,
        inlineFragmentTypes: "combine"
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
  ignoreNoDocuments: false
};

export default config;
