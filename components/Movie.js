import { useRouter } from "next/router";

const Movie = ({ properties }) => {
  return (
    <div className="bg-yellow-300">
      <h1 className="text-center font-bold p-2">Movie's</h1>
      <ul className="flex flex-row flex-wrap justify-center p-2">
        {properties.map((property) => {
          return (
            <li
              className="group relative bg-gray-100 w-68 rounded-lg p-2 m-2 duration-700 hover:bg-gray-500 hover:text-white"
              key={property.id}
            >
              <h3 className="p-2 text-elip text-center font-bold">
                {property.title}
              </h3>
              <div className="h-64 overflow-hidden">
                <img
                  src={property.poster}
                  className="h-full mx-auto overflow-hidden duration-700 transform group-hover:scale-105"
                />
              </div>
              <p className="py-2 pl-3 pr-4 text-elip-2 text-xs font-medium max-h-11">
                {property.plot}
              </p>
              <div className="flex justify-start pl-2 p-0.5 m-0.5">
                <a
                  className="text-black font-semibold uppercase p-1.5 bg-white rounded-lg border-2 border-black duration-500 hover:tracking-widest"
                  href={"/movie/" + property.id}
                >
                  Details
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movie;
