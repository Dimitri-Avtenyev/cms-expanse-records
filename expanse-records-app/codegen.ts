import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   //http://host.docker.internal
   schema: `https://cms-expanse.onrender.com/graphql`,
   documents: ['src/**/*.tsx'],
   generates: {
      './src/gql/': {
        preset: 'client',
      }
   }
}
export default config