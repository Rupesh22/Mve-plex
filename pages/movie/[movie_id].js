import { ObjectID } from "mongodb";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../util/mongodb";

import MovieDetails from "../../components/MovieDetails";

const MovieID = ({ property }) => {
  const router = useRouter();
  const { movie_id } = router.query;
  return (
    <div className="movie-page">
      {property && <MovieDetails property={property} />}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id = new ObjectID(params.movie_id);

  const { db } = await connectToDatabase();
  const data = await db.collection("movies").findOne(
    {
      _id: id,
    },
    {
      projection: {
        title: 1,
        plot: 1,
        poster: 1,
        awards: 1,
        imdb: 1,
        tomatoes: 1,
        cast: 1,
        fullplot: 1,
        genres: 1,
        year: 1,
      },
    }
  );

  return {
    props: { property: JSON.parse(JSON.stringify(data)) },
    revalidate: 1,
  };
}

export default MovieID;
