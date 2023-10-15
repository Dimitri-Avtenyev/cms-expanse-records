import Link from "next/link";
import { useRouter } from "next/router";

// export const getStaticPaths = async () => {
//   const response:Response = await fetch(`${process.env.CMS_URL}/api/seasons`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${process.env.CMS_TOKEN}`
//     }
//   });
//   const json = await response.json();
//   const seasons:Season[] = json.data;

//   const paths = seasons.map((season) => {
//     return {
//       params: {
//         id: `s${season.id}`
//       }
//     }
//   })
//   console.log(paths);
//   return {
//     paths: paths,
//     fallback: false
//   }
// }
// export const getStaticProps = async ({params}: {params:{id:string}}) => {
//   const response:Response = await fetch(`${process.env.CMS_URL}/api/season/${params.id}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${process.env.CMS_TOKEN}`
//     }
//   });
//   const json = await response.json();
//   const seasons:Season[] = json.data;

//   return {
//     props: {
//       seasons: seasons
//     }
//   }
// }

const Episodes = () => {
  // demo
  const seasons:string[] = ["s1", "s2", "s3", "s4", "s5", "s6"];
  const episodes:number[] = [1, 2, 3, 4];
  const router = useRouter();
  return (
    <div>
      <ul>
      {
        episodes.map((episode) => {
          return (
            <li><Link href={{pathname:`/the-expanse/[season]/${episode}`, query:{season: router.query.season}}}>Episode {episode}</Link></li>
          )
        })
      }
       </ul>
    </div>
  );
}

export default Episodes;