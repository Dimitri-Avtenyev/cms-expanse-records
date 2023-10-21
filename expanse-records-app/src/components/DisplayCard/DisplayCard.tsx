import { Season as SeasonProps} from "@/types";
import { Episode as EpisodeProps} from "@/types";
import styles from "./DisplayCard.module.css"
import { protomoleculeFont } from "@/pages";

//DisplayCard
const DisplayCard = ({season, episode}:{season?: SeasonProps, episode?:EpisodeProps}) => {

  if (season) {
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
  } else if (episode) {
    return (
      <div className={styles.card}>
        <h1 className={`${styles.cardtitle} ${protomoleculeFont.className}`}>
          {episode.attributes.title}
          </h1>
        <img 
          src={episode.attributes.image.data.attributes.url}
          alt={episode.attributes.image.data.attributes.name}
          />
        <div className={styles.cardcontent}>
          <p>{episode.attributes.synopsis}</p>
        </div>
      </div>
    );
  }
  
};

export default DisplayCard;