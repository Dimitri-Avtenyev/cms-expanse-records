import { MDXRemoteSerializeResult } from "next-mdx-remote";
interface Author {
  id: number;
  attributes: {
    firstname: string;
    lastname: string;
    email: string;
    shortbio: string;
    image: Image
  }
  
}
interface Season {
  id: number;
  attributes: {
    title: string;
    createdA: Date;
    updatedAt: Date;
    publishedAt: Date;
    synopsis: string;
    metacriticRating: string
    image: Image
  }
  episodes: {
    data: Episode[]
  }
}

interface Episode {
  id: number;
  attributes: {
    title: string;
    air_date: Date;
    synopsis: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: string;
    episodeNum: number;
    episodeId: string;
    image: Image;
  };
}

interface Post {
  id: number;
  author:Author;
  attributes: {
    title: string;
    publishedAt: string;
    content: MDXRemoteSerializeResult;
    image: Image
  }
}
interface PostShort {
  id: number;
  author:Author;
  attributes: {
    title: string;
    publishedAt: string;
    image: Image
  }
}
interface Image {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          ext: string;
          url: string;
          hash: string;
          mime: string;
          name: string;
          path: string | null;
          size: number;
          width: number;
          height: number;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

export type {
  Author,
  Season,
  Episode,
  Post,
  PostShort
}
