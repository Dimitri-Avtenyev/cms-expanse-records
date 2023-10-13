import { useRouter } from "next/router";


const Episode = () => {
  const router = useRouter(); 
  return (
    <div>
      <h1>Season {router.query.season}</h1>
      <h2>Episode {router.query.episode}</h2>
    </div>
  );
};

export default Episode;