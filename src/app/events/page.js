import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const { events_categories } = await import("../../data/data.json");
  // console.log("Check my Data", events_categories);
  return events_categories;
}

const EventsPage = async (props) => {
  const data = await getData();

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((events) => {
        return (
          <Link
            key={events.id}
            href={`/events/${events.id}`}
            className="flex w-[400px] m-[15px] border-4  p-[10px] items-center flex-col  "
          >
            <h2 className="font-bold">{events.title}</h2>
            <Image
              className="h-[300px]"
              src={events.image}
              alt={events.title}
              width={300}
              height={300}
            />

            {/* <p>{events.description}</p> */}
          </Link>
        );
      })}
    </div>
  );
};

export default EventsPage;
