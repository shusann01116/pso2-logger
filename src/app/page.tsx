"use client";

import { getCurrentWindow } from "@tauri-apps/api/window";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.onmousedown = async () => {
      await getCurrentWindow().startDragging();
    };
  });

  return (
    <div className="container" ref={ref}>
      <h1 className="text-5xl font-bold">PSO2 Logger</h1>
      <p className="font-light">styled w/TailwindCSS</p>
    </div>
  );
}
