import Image from "next/image";
import HomePage from "@/components/home-page";
async function getData() {
  const { events_categories } = await import("../data/data.json");
  // console.log("Check my Data", events_categories);
  return events_categories;
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <HomePage data={data} />
    </div>
  );
}
