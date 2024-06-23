import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const { allEvents } = await import("../../../data/data.json");
  return allEvents;
}

const EventsPerCat = async ({ params }) => {
  const allEventData = await getData();
  const data = await allEventData.filter((ev) => ev.city === params.cat);

  return (
    <div className="flex flex-col items-center flex-wrap justify-center m-[10px]">
      <h2 className="font-bold text-lg">Event in {params.cat}</h2>
      <div className="flex  items-center flex-wrap justify-center">
        {data.map((event) => {
          return (
            <Link
              key={event.id}
              href={`/events/${event.city}/${event.id}`}
              className="flex w-[400px] m-[15px] border-4  p-[10px] items-center flex-col  "
            >
              <h2>{event.title}</h2>
              <Image
                src={event.image}
                alt={event.title}
                width={300}
                height={300}
              />
              <p className="text-center ">{event.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPerCat;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = await events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
