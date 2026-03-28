import { HOTEL_DETAILS } from "@/constants/hotel-info";

export default function Home() {
  return (
    <main className="min-h-[100vh] flex items-center justify-center bg-hotel-primary">
      <h1 className="text-white text-4xl font-bold">
        {HOTEL_DETAILS.name}
      </h1>
    </main>
  );
}
