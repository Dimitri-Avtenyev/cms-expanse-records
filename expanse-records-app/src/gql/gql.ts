/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GetAllSeasonIds {\n  seasons (sort:\"id\"){data{id}} \n}\n\n": types.GetAllSeasonIdsDocument,
    "\nquery GetAllEpisodes {\n  episodes(sort: \"id\") {\n    data {\n      id\n      attributes {\n        title\n        synopsis\n        image {\n          data {\n            id\n            attributes {\n              url\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n": types.GetAllEpisodesDocument,
    "\nquery GetEpisodesForSeasonID($id: ID) {\n  season(id: $id) {\n    data {\n      attributes {\n        episodes {\n          data {\n            attributes {\n              title\n              air_date\n              synopsis\n              episodeNum\n              episodeId\n              image {\n                data {\n                  id\n                  attributes {\n                    url\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n": types.GetEpisodesForSeasonIdDocument,
    "\nquery GetAllSeasons {\n  seasons(sort:\"id\") {\n    data {\n      attributes {\n        title\n        createdAt\n        updatedAt\n        publishedAt\n        synopsis\n        metacriticRating\n        image {\n          data {\n            id\n            attributes {\n              url\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n  episodes {\n    data {\n      id\n      attributes {\n        title\n        air_date\n        synopsis\n        createdAt\n        updatedAt\n        publishedAt\n        episodeNum\n        episodeId\n      }\n    }\n  }\n}\n\n": types.GetAllSeasonsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllSeasonIds {\n  seasons (sort:\"id\"){data{id}} \n}\n\n"): (typeof documents)["\nquery GetAllSeasonIds {\n  seasons (sort:\"id\"){data{id}} \n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllEpisodes {\n  episodes(sort: \"id\") {\n    data {\n      id\n      attributes {\n        title\n        synopsis\n        image {\n          data {\n            id\n            attributes {\n              url\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetAllEpisodes {\n  episodes(sort: \"id\") {\n    data {\n      id\n      attributes {\n        title\n        synopsis\n        image {\n          data {\n            id\n            attributes {\n              url\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetEpisodesForSeasonID($id: ID) {\n  season(id: $id) {\n    data {\n      attributes {\n        episodes {\n          data {\n            attributes {\n              title\n              air_date\n              synopsis\n              episodeNum\n              episodeId\n              image {\n                data {\n                  id\n                  attributes {\n                    url\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n"): (typeof documents)["\nquery GetEpisodesForSeasonID($id: ID) {\n  season(id: $id) {\n    data {\n      attributes {\n        episodes {\n          data {\n            attributes {\n              title\n              air_date\n              synopsis\n              episodeNum\n              episodeId\n              image {\n                data {\n                  id\n                  attributes {\n                    url\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllSeasons {\n  seasons(sort:\"id\") {\n    data {\n      attributes {\n        title\n        createdAt\n        updatedAt\n        publishedAt\n        synopsis\n        metacriticRating\n        image {\n          data {\n            id\n            attributes {\n              url\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n  episodes {\n    data {\n      id\n      attributes {\n        title\n        air_date\n        synopsis\n        createdAt\n        updatedAt\n        publishedAt\n        episodeNum\n        episodeId\n      }\n    }\n  }\n}\n\n"): (typeof documents)["\nquery GetAllSeasons {\n  seasons(sort:\"id\") {\n    data {\n      attributes {\n        title\n        createdAt\n        updatedAt\n        publishedAt\n        synopsis\n        metacriticRating\n        image {\n          data {\n            id\n            attributes {\n              url\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n  episodes {\n    data {\n      id\n      attributes {\n        title\n        air_date\n        synopsis\n        createdAt\n        updatedAt\n        publishedAt\n        episodeNum\n        episodeId\n      }\n    }\n  }\n}\n\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;