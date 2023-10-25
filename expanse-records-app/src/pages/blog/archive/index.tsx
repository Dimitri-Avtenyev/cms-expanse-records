import createApolloClient from "@/apollo-client";
import { graphql } from "@/gql/index";
import Link from "next/link";

const GetAllPostsYear = graphql(`
query GetAllPostsYear {
  posts(sort: "publishedAt:DESC") {
    data {
      id
      attributes {
        publishedAt
       
      }
    }
  }
}`);

export const getStaticProps = async ({params}:{params:{year:string}}) => {
  const client = createApolloClient();
  const {data} = await client.query({query: GetAllPostsYear, variables: { } });
  
  const years:string[] = data.posts!.data.map(post => {
    let year:string = post.attributes?.publishedAt.substring(0,4);
    return year;
  });
  const uniqueYears:string[] = years.filter((year, index) => years.indexOf(year) === index);

  return {
    props: {
      years: uniqueYears
    }
  }
}
const ArchivePage = ({years}:{years:string[]}) => {
  return (
    <div>
      <ul>
      {
        years.map((year, index) => {
          return (
            <li key={index}>
              <Link href={{ pathname: "archive/[year]", query: { year: year } }}>
                {year}
              </Link>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
};

export default ArchivePage;