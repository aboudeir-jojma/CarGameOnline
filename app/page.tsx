"use client";

import Navigation from "./components/Navigation";
import HeaderSEO from "./components/HeaderSEO";
import FullScreenButton from "./components/FullScreenButton";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Home() {
  const { t, i18n } = useTranslation();
  const activeLocale = i18n.language;

  return (
    <>
      {/* Hidden SEO Header Section for Search Engines */}
      <HeaderSEO />

      {/* min-h-screen → permet d’occuper tout l’écran
          mais la page peut s’agrandir si le contenu est plus grand */}
      <main className="flex flex-col min-h-screen w-full bg-gray-100 overflow-x-hidden">

        {/* Navigation avec bouton hamburger */}
        <Navigation />

        {/* Zone principale avec le jeu */}
        <div className="flex flex-1 justify-center items-center gap-4 mt-6 relative mt-25">
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

        <section className="flex flex-1 justify-center items-center gap-4 mt-6 relative mt-18">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              {t("home.title") || "Popular Games"}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { id: "uno", image: "/uno.jpg", link: "https://www.tmdisplay.com/en/game/Uno" },
                { id: "spider", image: "/spider.jpg", link: "https://www.tmdisplay.com/en/game/spider-solitaire" },
                { id: "ludo-king", image: "/ludo-king.png", link: "https://www.tmdisplay.com/en/game/ludo-king" },
              ].map((game) => (
                <div
                  key={game.id}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                >
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <img
                      src={game.image}
                      alt={t(`games.${game.id}.title`)}
                      className="w-full h-full rounded-full border-4 border-yellow-500 shadow-md object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {t(`games.${game.id}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`games.${game.id}.description`)}
                  </p>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-yellow-600 shadow-md transition-all duration-300"
                  >
                    {t("common.playNow")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-1 justify-center items-center gap-4 mt-6 relative mt-18 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
              {t("home.section2.title")}
            </h2>
            <p
              className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12"
              dangerouslySetInnerHTML={{ __html: t("home.section2.description") }}
            ></p>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src="/car.png"
                  alt="Spider Solitaire"
                  className="w-80 h-80 object-cover rounded-xl shadow-lg border border-gray-200"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {t("home.section2.whyTitle")}
                </h3>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  {Object.values(
                    t("home.section2.whyList", { returnObjects: true })
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8 flex ">
                  <Link
                    href="https://www.tmdisplay.com/game/street-car-racing"
                    className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
                  >
                    {t("home.section2.playNow")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

        <Footer />
    </>
  );
}
