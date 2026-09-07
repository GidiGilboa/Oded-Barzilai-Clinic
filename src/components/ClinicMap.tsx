"use client";

import { useEffect, useRef, useState } from "react";
import { getGoogleMapsApiKey } from "@/lib/maps-config";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const apiKey = getGoogleMapsApiKey();

let scriptLoadingPromise: Promise<void> | null = null;

function loadGoogleMapsScript(): Promise<void> {
  if (window.google?.maps) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

/**
 * A custom-styled Google Map showing only the clinic's own marker — the
 * default embed (`/maps?...&output=embed`) always shows every nearby
 * business's POI icon, which the Maps JavaScript API's `styles` option
 * lets us turn off. Requires `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to be set;
 * callers should fall back to the plain iframe embed when
 * `hasGoogleMapsApiKey` is false.
 */
export function ClinicMap({
  latitude,
  longitude,
  title,
}: {
  latitude: number;
  longitude: number;
  title: string;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!apiKey) return;
    let cancelled = false;
    loadGoogleMapsScript()
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch(() => {
        // Falls back to nothing rendered; ContactDetails still shows the map link.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready || !mapRef.current || !window.google) return;

    const position = { lat: latitude, lng: longitude };
    const map = new window.google.maps.Map(mapRef.current, {
      center: position,
      zoom: 16,
      disableDefaultUI: false,
      zoomControl: true,
      fullscreenControl: false,
      streetViewControl: false,
      styles: [
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
      ],
    });

    new window.google.maps.Marker({ position, map, title });
  }, [ready, latitude, longitude, title]);

  return <div ref={mapRef} className="h-full w-full" />;
}
