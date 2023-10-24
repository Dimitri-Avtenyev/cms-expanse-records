import { Season as SeasonProps } from "@/types";
import { Episode as EpisodeProps } from "@/types";
import { Post as PostProps } from "@/types";
import styles from "./DisplayCard.module.css"
import { protomoleculeFont } from "@/pages";
import { MDXRemote } from "next-mdx-remote";

//DisplayCard
const DisplayCard = ({ season, episode, post }: { season?: SeasonProps, episode?: EpisodeProps, post?:PostProps }) => {

  if (season) {
    return (
      <div className={styles.card}>
        <h1 className={`${styles.cardtitle} ${protomoleculeFont.className}`}>
          {season.attributes.title}
        </h1>
        <div>
          <img
            src={season.attributes.image.data.attributes.url}
            alt={season.attributes.image.data.attributes.name}
          />
          <div className={styles.score}>
            metacritic: <span>{season.attributes.metacriticRating}</span>
          </div>
        </div>


        <div className={styles.cardcontent}>
          <p >{season.attributes.synopsis}</p>
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
        <p>{episode.attributes.air_date.toString()}</p><br/>
        <p>{episode.attributes.synopsis}</p>
        </div>
      </div>
    );
  } else if (post) {
    return (
      <div className={styles.cardPost}>
        <h1 className={`${styles.cardtitle} ${protomoleculeFont.className}`}>
          {post.attributes.title}
        </h1>
        <p className={styles.cardMetaData}>
          {/* <img src={post.author.image.data.attributes.url}></img> */}
        {post.author.attributes.firstname} {post.author.attributes.lastname.substring(0, 1)}. | {post.attributes.publishedAt.split("T")[0]}
        </p>
        <img
          src={post.attributes.image.data.attributes.url}
          alt={post.attributes.image.data.attributes.name}
        />
        <div className={styles.cardcontentPost}>
        {/* <p>{post.attributes.content}</p> */}
        <MDXRemote {...post.attributes.content} />
        </div>
      </div>
    );
  }

};

export default DisplayCard;