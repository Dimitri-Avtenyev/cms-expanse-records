import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   //http://host.docker.internal
   schema: `http://host.docker.internal:1337/graphql`,
   documents: ['src/**/*.tsx'],
   generates: {
      './src/gql/': {
        preset: 'client',
      }
   }
}
export default config