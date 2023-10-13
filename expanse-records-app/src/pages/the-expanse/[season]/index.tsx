import Link from "next/link";
import { useRouter } from "next/router";


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