import { useRouter } from "next/router";
import { Episode as EpisodeProps } from "@/types";

const getStaticPaths = async () => {

  return {
    paths: {
      
      fallback:false
    }
  }
}

const getStaticProps = async () => {
  return {
    props: {
      season: "",
      episode: ""
    }
  }
}
const Episode = ({season, episode}:{season:string, episode:EpisodeProps}) => {
  const router = useRouter(); 
  return (
    <div>
      <h1>Season {router.query.season?.slice(1)}</h1>
      <h2>Episode {router.query.episode}</h2>
    </div>
  );
};

export default Episode;