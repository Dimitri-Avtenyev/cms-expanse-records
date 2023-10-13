import Link from "next/link";

const Seasons = () => {
  const seasons:string[] = ["s1", "s2", "s3", "s4", "s5", "s6"];
  return (
    <div>
      <ul>
        {
          seasons.map((season:string, index) => {
            return (
              <li key={season}><Link href={{pathname: "/the-expanse/[season]", query: {season: season}}}>Season {index+1}</Link></li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default Seasons;