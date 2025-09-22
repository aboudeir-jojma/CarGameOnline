// app/components/OtherGames.tsx
import Image from "next/image";
import Link from "next/link";

export default function OtherGames() {
  const games = [
    {
      name: "GeoGuesser",
      desc: "Play GeoGuessr for free and unlimited",
      image: "/game/geoguessr.png", // ✅ ajoute cette image dans /public/game/
      link: "/game/geoguessr",
    },
    {
      name: "Globle",
      desc: "Guess the hidden country",
      image: "/game/globe.svg", // déjà présent
      link: "/game/globle",
    },
    {
      name: "Flagle",
      desc: "Guess the country flag",
      image: "/game/file.svg", // déjà présent
      link: "/game/flagle",
    },
  ];

  return (
    <section className="py-16 bg-[#f1faf1] text-center">
      <h2 className="text-3xl font-bold mb-10">Other Games</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {games.map((game) => (
          <div
            key={game.name}
            className="bg-white rounded-xl p-6 shadow-md w-[250px] hover:scale-105 transition"
          >
            <Image
              src={game.image}
              alt={game.name}
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{game.name}</h3>
            <p className="text-gray-600 text-sm mt-1 mb-4">{game.desc}</p>
            <Link href={game.link}>
              <button className="px-6 py-2 bg-white border border-gray-300 rounded-full font-medium hover:bg-gray-100">
                Play
              </button>
            </Link>
          </div>
        ))}
      </div>
      
    </section>
  );
}
