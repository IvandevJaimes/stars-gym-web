"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Play, X } from "lucide-react";

const ITEMS = [
  {
    type: "image" as const,
    src: "/galery/525391994_17858936967461114_4270641268172088711_n.jpg",
    alt: "Sala de musculación Stars Gym",
    height: "aspect-[3/4]",
  },
  {
    type: "video" as const,
    src: "/galery/instagramvideo.mp4",
    alt: "Rutina de entrenamiento",
    height: "aspect-square",
  },
  {
    type: "video" as const,
    src: "/galery/AQOtFjgq3gOwa3PU-McZtb7qOInA2wzhGfykzjWWG4TCGhBK8i9BmTxljjOLCpNEtvxEbHKInyTw1q8eXWL_32QNW_PyC-SVVE2bEok.mp4",
    alt: "Clase grupal en Stars Gym",
    height: "aspect-[4/5]",
  },
  {
    type: "video" as const,
    src: "/galery/AQMWkkT6bosAuy27dDJid_BLUqXrIv5IEHxvUaGQYO3Ifc41o43zDyAmYEwDdlB31I88_KmvHE_ZAuYnFlTG1PjwqJbW6jVf0ULkaAs.mp4",
    alt: "Día de entrenamiento Stars Gym",
    height: "aspect-[3/4]",
  },
  {
    type: "video" as const,
    src: "/galery/AQN-QE-j6KzELufBFNnJuYvTk5pGl12Z8YvmaGQwz6IIw7jg4A-CZ4suHEH1J8P1dhBDLodkSd3bGWsKtJO1_caiDoDknMoskte9BXU.mp4",
    alt: "Entrenamiento funcional Stars Gym",
    height: "aspect-[4/5]",
  },
  {
    type: "video" as const,
    src: "/galery/AQMKmvQjzm1rY9-G6EXll3lgfAI0y4HFqT9epG1AvJpSe6JKOpmMZBvLQCGBzBYqSrwxHIWADRO7Pqd1X8VBEghCpPJ5QMeGnxSjFIg.mp4",
    alt: "Entrenamiento en sala Stars Gym",
    height: "aspect-[4/5]",
  },
  {
    type: "video" as const,
    src: "/galery/AQMXk2SzT57B9dhYHxio8sGOhaevFgsI1FOQL4Sp_qpKbqyMKfpm5H59SGhgWcEHtCoh5e-y_it6FuSIREQgEjnWU_dp0siTJOl0H-E.mp4",
    alt: "Rutina de fuerza Stars Gym",
    height: "aspect-square",
  },
  {
    type: "image" as const,
    src: "/galery/764457308_18080818166668041_1284569169907137889_n.jpg",
    alt: "Sala de musculación Stars Gym",
    height: "aspect-[3/4]",
  },
] as const;

/* ─── Lightbox ─── */

function Lightbox({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const item = ITEMS[index];
  const backdropRef = useRef<HTMLDivElement>(null);

  /* cerrar con Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* trap scroll del body */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* click en backdrop cierra */
  const onBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) onClose();
    },
    [onClose],
  );

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      {/* Botón cerrar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-3 top-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-neutral-800/80 text-white transition-colors hover:bg-neutral-700 sm:right-5 sm:top-5"
      >
        <X className="size-5" />
      </button>

      {/* Contenido */}
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />
        )}
      </div>
    </div>
  );
}

/* ─── Video card (grid) ─── */

function VideoCard({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <video
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        {...(playing ? { autoPlay: true } : {})}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Botón play — solo cuando NO está reproduciendo */}
      {!playing && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 cursor-pointer"
          aria-label="Reproducir video"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg shadow-primary/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="size-5 ml-0.5" fill="currentColor" />
          </span>
        </button>
      )}

      {/* Overlay hover — solo cuando SÍ está reproduciendo, abre lightbox */}
      {playing && (
        <div
          role="button"
          tabIndex={0}
          onClick={onClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClick();
          }}
          className="absolute inset-0 z-10 cursor-pointer bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-label={`Ampliar: ${alt}`}
        />
      )}
    </>
  );
}

/* ─── Galería ─── */

export default function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 md:columns-3">
        {ITEMS.map((item, i) => (
          <div
            key={item.src}
            className={`group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition-all duration-300 hover:border-primary/40 sm:mb-4 ${item.height}`}
          >
            {item.type === "video" ? (
              <VideoCard
                src={item.src}
                alt={item.alt}
                onClick={() => setLightbox(i)}
              />
            ) : (
              <>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={800}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay click para imágenes */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setLightbox(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightbox(i);
                  }}
                  className="absolute inset-0 z-10 cursor-pointer bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-label={`Ampliar: ${item.alt}`}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {lightbox !== null &&
        createPortal(
          <Lightbox index={lightbox} onClose={() => setLightbox(null)} />,
          document.body,
        )}
    </>
  );
}
