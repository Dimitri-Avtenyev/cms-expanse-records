import { Season as SeasonProps} from "@/types";
import styles from "./Season.module.css";
import { protomoleculeFont } from "@/pages";

const Season = ({season}:{season: SeasonProps}) => {
  console.log();
  return (
    <div className={styles.card}>
      <h1 className={`${styles.cardtitle} ${protomoleculeFont.className}`}>
        {season.attributes.title}
        </h1>
      <img 
        src={season.attributes.image.data.attributes.url}
        alt={season.attributes.image.data.attributes.name}
        />
      <div className={styles.cardcontent}>
        <p>{season.attributes.synopsis}</p>
      </div>
    </div>
  );
};

export default Season;