const MovieDetails = ({ property }) => {
  return (
    <section className="bg-gray-200">
      <div className="flex flex-col items-center">
        <img
          src={property.poster}
          className="p-[10px] h-[350px] rounded-3xl sm:h-[400px] md:self-start"
        ></img>
        <div className="text-glass text-black ml-[10px]">
          <h2 className="font-extrabold text-lg tracking-wide">
            {property.title}
          </h2>
          <div className="font-bold">{property.year}</div>
          <p className="py-[15px] m-1 font-medium">{property.fullplot}</p>
          <div className="small-tag fit-content tomato-meter">
            tomato meter: {property?.tomatoes?.viewer?.meter} %
          </div>
          <div className="small-tag fit-content imdb">
            Imdb Rating: {property?.imdb?.rating}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
