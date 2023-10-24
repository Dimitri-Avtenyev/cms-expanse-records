import { useRouter } from "next/router";


const Archive = () => {
  const router = useRouter()


  return (
    <div>
      {router.query.year}
    </div>
  );
};

export default Archive;