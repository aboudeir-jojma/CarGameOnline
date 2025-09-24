"use client";

import Navigation from "./components/Navigation";
import HeaderSEO from "./components/HeaderSEO";
import FullScreenButton from "./components/FullScreenButton";

export default function Home() {
  return (
    <>
      {/* Hidden SEO Header Section for Search  */}
      <HeaderSEO />

      {/* Bouton plein écran */}
      <FullScreenButton />

      {/* min-h-screen → permet d’occuper tout l’écran
          mais la page peut s’agrandir si le contenu est plus grand */}
      <main className="flex flex-col min-h-screen w-full bg-gray-100 overflow-x-hidden">

        {/* Navigation avec bouton hamburger */}
        <Navigation />

        {/* Zone principale avec le jeu */}
        <div className="flex flex-1 justify-center items-center gap-4 mt-6 relative">
          <div className="flex-1 flex justify-center items-center relative">
            <iframe
              src="https://games-gules-nu.vercel.app/car-game/index.html"
              className="w-full max-w-5xl h-[85vh] border-0 shadow-lg rounded-lg"
              title="Car Game Online"
              allowFullScreen
            ></iframe>
            {/* Bouton plein écran positionné à côté du jeu */}
            <FullScreenButton />
          </div>
        </div>

      </main>
    </>
  );
}
