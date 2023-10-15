import Link from "next/link";
import styles from "../../styles/the-expanse.module.css";
import { Season as SeasonProps } from "@/types";
import Season from "@/components/Season/Season";

export const getStaticProps = async () => {
  const response: Response = await fetch(`${process.env.CMS_URL}/api/seasons?populate=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.CMS_TOKEN}`
    }
  });
  const json = await response.json();
  const seasons: SeasonProps[] = json.data;
  seasons.sort((a, b) => a.id - b.id);

  return {
    props: {
      seasons: seasons
    }
  }
}

const Seasons = ({ seasons }: { seasons: SeasonProps[]}) => {

  return (
    <div className={styles.container}>
      <ul>
        {
          seasons.map((season: SeasonProps, index: number) => {
            return (
              <li key={season.id}>
                <Link href={{ pathname: "/the-expanse/[season]", query: { season: `s${index + 1}` } }}>
                  <Season season={season} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Seasons;