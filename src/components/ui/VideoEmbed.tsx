"use client";

import { ArrowUpRight, Play } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type VideoEmbedProps = {
  id: string;
  kind: string;
  title: string;
  guest: string;
  description: string;
  date: string;
  duration: string;
  thumbnail: StaticImageData;
  featured?: boolean;
};

// Facebook se carga solo cuando la persona pide ver el video.
export function VideoEmbed({ id, kind, title, guest, description, date, duration, thumbnail, featured = false }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const pageUrl = `https://www.facebook.com/reel/${id}`;
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    `https://www.facebook.com/watch/?v=${id}`,
  )}&show_text=false&autoplay=true&width=1280`;

  return (
    <article className={`video ${featured ? "video--featured" : ""}`}>
      <div className="video__stage">
        {playing ? (
          <iframe
            className="video__frame"
            src={embedUrl}
            title={`Video: ${title}`}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video__poster" onClick={() => setPlaying(true)} aria-label={`Reproducir: ${title} (${duration})`}>
            <Image
              src={thumbnail}
              alt=""
              placeholder="blur"
              sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"}
              className="video__thumb"
            />
            <span className="video__play" aria-hidden="true">
              <Play size={featured ? 30 : 24} strokeWidth={1.8} fill="currentColor" />
            </span>
            <span className="video__duration" aria-hidden="true">
              {duration}
            </span>
          </button>
        )}
      </div>
      <div className="video__meta">
        <p className="video__kind">{kind}</p>
        <h3>{title}</h3>
        <p className="video__guest">
          {guest}. <time>{date}</time>
        </p>
        <p className="video__description">{description}</p>
        <a className="text-link" href={pageUrl} target="_blank" rel="noreferrer">
          Abrir en Facebook
          <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
