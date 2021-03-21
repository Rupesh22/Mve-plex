import { useRouter } from "next/router";
import { useState } from "react";

const Movie = ({ properties }) => {
  return (
    <div className="bg-yellow-300">
      <h1 className="text-center font-bold p-2">Movie's</h1>
      <ul className="flex flex-row flex-wrap justify-center p-2">
        {properties.map((property) => {
          const [more, setMore] = useState(false);
          return (
            <li
              className="group relative bg-gray-100 w-68 rounded-lg p-2 m-2 duration-500 hover:bg-gray-500 hover:text-white"
              key={property.id}
            >
              <h3 className="p-2 text-elip text-center font-bold">
                {property.title}
              </h3>
              <div className="h-64 overflow-hidden">
                <img
                  src={property.poster}
                  className="h-full mx-auto overflow-hidden duration-500 transform group-hover:scale-105"
                />
              </div>
              <p
                className={
                  more
                    ? "pt-2 pl-3 pr-4 text-xs font-medium block max-h-full duration-1000"
                    : "pt-2 pl-3 pr-4 text-xs font-medium text-elip-2 max-h-11"
                }
              >
                {property.plot}
              </p>
              <span
                className="ml-3 bg-gray-300 pb-1 px-2 rounded-lg ring-2 ring-inset ring-gray-500 font-bold text-xs cursor-pointer"
                onClick={() => {
                  setMore(!more);
                }}
              >
                {more ? "less" : "more"}
              </span>
              <div className="flex justify-start pl-2 p-0.5 m-0.5 mt-1">
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
