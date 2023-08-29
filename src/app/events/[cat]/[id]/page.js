import React from "react";
import Image from "next/image";
import Input from "./input";
async function getData() {
  const { allEvents } = await import("../../../../data/data.json");
  // console.log("Check my Data", events_categories);
  return allEvents;
}

const EventsPerCityPage = async ({ params }) => {
  const allEventData = await getData();
  const data = await allEventData.find((ev) => ev.id === params.id);
  // console.log("data", data);
  return (
    <div className="flex flex-col items-center flex-wrap justify-center">
      <h2 className="font-bold text-lg">{data.title}</h2>
      <div className="flex flex-row items-center flex-wrap  justify-between m-[20px]">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={400}
          className="h-[410px] w-auto"
        />
        <div className="flex flex-col items-start ml-[30px] justify-between m-[10px] min-h-[200px]">
          <span className="w-[400px]">
            <b>Event:-</b>
            <p className="">{data.description}</p>
          </span>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default EventsPerCityPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../../data/data.json");
  const allPaths = await allEvents.map((ev) => {
    return {
      params: {
        cat: ev.city.toString(),
        id: ev.id.toString(),
      },
    };
  });
  // console.log("allPaths", allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}
