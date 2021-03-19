const MovieDetails = ({property}) => {
  return(
  <section>
    <img src={property?.poster} className="bg-image-blur pos-abs-top"></img>
    <div className="movie-details pos-abs-top">
      <img src={property.poster} className="image-top"></img>
      <div className="text-glass pos-rel movie-details-flex">
        <h2>{property.title}</h2>
        <div>{property.year}</div>
        <p className="movie-plot">{property.fullplot}</p>
        <div className="small-tag fit-content tomato-meter">tomato meter: {property?.tomatoes?.viewer?.meter} %</div>
        <div className="small-tag fit-content imdb">Imdb Rating: {property?.imdb?.rating}</div>
      </div>
    </div>
  </section>
  )
}

export default MovieDetails;