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
      className="absolute top-4 right-8 translate-x-[-20px] z-50 bg-black/80 hover:bg-black/90 text-white p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-gray-700"
      aria-label={isFullscreen ? "Quitter le mode plein écran du jeu" : "Passer le jeu en mode plein écran"}
      title={isFullscreen ? "Quitter le mode plein écran du jeu" : "Passer le jeu en mode plein écran"}
    >
      {isFullscreen ? (
        <Minimize className="w-4 h-4" />
      ) : (
        <Maximize className="w-4 h-4" />
      )}
    </button>
  );
}
