import React from "react";
import Image from "next/image";
import Link from "next/link";
const HomePage = ({ data }) => (
  <main className="flex flex-wrap justify-center">
    {data.map((events) => {
      return (
        <Link
          key={events.id}
          href={`/events/${events.id}`}
          className="flex w-[400px] m-[15px] border-4 border-black p-[10px] items-center flex-col hover:scale-[1.1] "
        >
          <h2>{events.title}</h2>
          <Image
            className="h-[200px]"
            src={events.image}
            alt={events.title}
            width={"200"}
            height={"200"}
          />

          <p>{events.description}</p>
        </Link>
      );
    })}
  </main>
);

export default HomePage;
