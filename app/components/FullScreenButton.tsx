"use client";

import { useState, useEffect } from "react";
import { Maximize, Minimize } from "lucide-react";

export default function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Enhanced iOS detection
  const isIOS = () => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return false;
    }
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isWebKit = /WebKit/.test(userAgent);
    const isNotMSStream = !(window as any).MSStream;

    return isIOS && isWebKit && isNotMSStream;
  };

  // Check if device supports fullscreen
  const supportsFullscreen = () => {
    if (typeof document === 'undefined') return false;

    const element = document.documentElement;
    return !!(
      element.requestFullscreen ||
      (element as any).webkitRequestFullscreen ||
      (element as any).mozRequestFullScreen ||
      (element as any).msRequestFullscreen
    );
  };

  const toggleFullscreen = async () => {
    try {
      setError(null);
      const iframe = document.querySelector('iframe[src="https://games-gules-nu.vercel.app/car-game/index.html"]') as HTMLIFrameElement;

      if (!iframe) {
        setError("Jeu non trouvé. Veuillez recharger la page.");
        return;
      }

      if (!isFullscreen) {
        // Enter fullscreen mode
        if (isIOS()) {
          // iOS specific fullscreen implementation
          try {
            if ((iframe as any).webkitEnterFullscreen) {
              (iframe as any).webkitEnterFullscreen();
              setIsFullscreen(true);
            } else {
              setError("Fullscreen non supporté sur ce navigateur iOS.");
            }
          } catch (webkitError) {
            console.error("Webkit fullscreen error:", webkitError);
            setError("Erreur iOS: Essayez de toucher l'écran et utiliser le bouton fullscreen du navigateur.");
          }
        } else {
          // Standard fullscreen implementation
          try {
            if (iframe.requestFullscreen) {
              await iframe.requestFullscreen();
              setIsFullscreen(true);
            } else if ((iframe as any).webkitRequestFullscreen) {
              (iframe as any).webkitRequestFullscreen();
              setIsFullscreen(true);
            } else {
              setError("Fullscreen non supporté sur ce navigateur.");
            }
          } catch (standardError) {
            console.error("Standard fullscreen error:", standardError);
            setError("Erreur lors de l'activation du mode plein écran.");
          }
        }
      } else {
        // Exit fullscreen mode
        try {
          if (isIOS()) {
            if ((document as any).webkitExitFullscreen) {
              (document as any).webkitExitFullscreen();
              setIsFullscreen(false);
            }
          } else {
            if (document.exitFullscreen) {
              await document.exitFullscreen();
              setIsFullscreen(false);
            } else if ((document as any).webkitExitFullscreen) {
              (document as any).webkitExitFullscreen();
              setIsFullscreen(false);
            }
          }
        } catch (exitError) {
          console.error("Exit fullscreen error:", exitError);
          setError("Erreur lors de la sortie du mode plein écran.");
        }
      }
    } catch (error) {
      console.error("Erreur lors du basculement plein écran:", error);
      setError("Une erreur inattendue s'est produite.");
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement || (document as any).webkitFullscreenElement;
      setIsFullscreen(!!fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <button
      onClick={toggleFullscreen}
     className="absolute top-2 right-10 lg:right-[260px] z-50 bg-black/80 hover:bg-black/90 text-white p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-gray-700"

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
