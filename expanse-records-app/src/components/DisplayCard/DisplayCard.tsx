import { Season as SeasonProps } from "@/types";
import { Episode as EpisodeProps } from "@/types";
import { Post as PostProps } from "@/types";
import { Character as CharacterProps } from "@/types";
import { Author as AuthorProps } from "@/types";
import styles from "./DisplayCard.module.css"
import { protomoleculeFont } from "@/pages";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

//DisplayCard
const DisplayCard = ({ season, episode, post, character, author }: { season?: SeasonProps, episode?: EpisodeProps, post?: PostProps, character?: CharacterProps, author?:AuthorProps }) => {

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
          <p>{episode.attributes.air_date.toString()}</p><br />
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
        <div className={styles.cardMetaData}>
          <div className={styles.avatarContainer}>
            <img src={post.attributes.author.attributes.image.data.attributes.formats.thumbnail.url}></img>
          </div>
          <Link href={`/profile/${post.attributes.author.id}`}>
            <p>{post.attributes.author.attributes.firstname} {post.attributes.author.attributes.lastname.substring(0, 1)}. </p>
          </Link>| {post.attributes.publishedAt.split("T")[0]}
        </div>
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
  } else if (character) {
    return (
      <div className={styles.card}>
        <h1 className={`${styles.cardtitle} ${protomoleculeFont.className}`}>
          {character.attributes.name}
        </h1>
        <img
          src={character.attributes.image.data.attributes.url}
          alt={character.attributes.image.data.attributes.name}
        />
        <div className={styles.cardcontent}>
          {character.attributes.bio}
        </div>
      </div>
    );
  } else if (author) {
    return (
      <div className={styles.card}>
        <h1 className={`${styles.cardtitle} ${protomoleculeFont.className}`}>
          {author.attributes.firstname} {author.attributes.lastname.substring(0, 1)}
        </h1>
        <img
          src={author.attributes.image.data.attributes.url}
          alt={author.attributes.image.data.attributes.name}
        />
        <div className={styles.cardcontent}>
          {author.attributes.shortbio}
        </div>
      </div>
    );
  }

};

export default DisplayCard;