"use client";

import { useState } from "react";
import { Maximize, Minimize } from "lucide-react";

export default function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    try {
      const iframe = document.querySelector('iframe[src="https://games-gules-nu.vercel.app/car-game/index.html"]') as HTMLIFrameElement;

      if (!isFullscreen) {
        // Entrer en mode plein écran pour l'iframe seulement
        if (iframe && iframe.requestFullscreen) {
          await iframe.requestFullscreen();
          setIsFullscreen(true);
        }
      } else {
        // Sortir du mode plein écran
        if (document.fullscreenElement) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch (error) {
      console.error("Erreur lors du basculement plein écran:", error);
    }
  };

  // Écouter les changements de mode plein écran
  if (typeof document !== 'undefined') {
    document.addEventListener('fullscreenchange', () => {
      setIsFullscreen(!!document.fullscreenElement);
    });
  }

  return (
    <button
      onClick={toggleFullscreen}
      className="absolute top-6 right-6 z-50 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white p-3 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border-2 border-gray-600/50 hover:border-yellow-400/50"
      aria-label={isFullscreen ? "Quitter le mode plein écran du jeu" : "Passer le jeu en mode plein écran"}
      title={isFullscreen ? "Quitter le mode plein écran du jeu" : "Passer le jeu en mode plein écran"}
    >
      {isFullscreen ? (
        <Minimize className="w-5 h-5" />
      ) : (
        <Maximize className="w-5 h-5" />
      )}
    </button>
  );
}
