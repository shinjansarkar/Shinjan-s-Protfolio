"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LuPlay, LuPause, LuMaximize2, LuX } from "react-icons/lu";

export default function PIPVideo({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [size, setSize] = useState({ width: 420, height: 236 }); // 16:9
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const togglePlay = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: isPlaying ? "pauseVideo" : "playVideo" }),
        "*"
      );
      setIsPlaying(!isPlaying);
    }
  };

  const handleResize = (e: React.PointerEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = size.width;

    const onPointerMove = (moveEvent: PointerEvent) => {
      const newWidth = Math.max(280, Math.min(800, startWidth + (moveEvent.clientX - startX)));
      const newHeight = newWidth * (9 / 16);
      setSize({ width: newWidth, height: newHeight });
    };

    const onPointerUp = () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  };

  if (isClosed || !isMounted) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed bottom-6 right-6 z-50 flex flex-col bg-zinc-950/90 backdrop-blur-2xl border border-zinc-800/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
      style={{ width: size.width, height: size.height + 40 }}
    >
      {/* Top Bar for dragging */}
      <div className="h-10 w-full bg-zinc-900/80 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing border-b border-zinc-800/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-[10px] font-mono font-medium text-zinc-500 ml-2 uppercase tracking-widest">Antigravity PiP</span>
        </div>
        <button onClick={() => setIsClosed(true)} className="text-zinc-500 hover:text-rose-400 transition-colors">
          <LuX size={14} />
        </button>
      </div>

      {/* Video Container */}
      <div className="relative flex-1 bg-black w-full h-full cursor-pointer" onClick={togglePlay}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="pointer-events-none w-full h-full object-cover" 
        ></iframe>

        {/* Play/Pause Overlay indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-white border border-zinc-700/50 shadow-xl transform group-hover:scale-100 scale-90 transition-transform duration-300">
            {isPlaying ? <LuPause size={24} /> : <LuPlay size={24} className="ml-1" />}
          </div>
        </div>

        {/* Resize Handle */}
        <div 
          onPointerDown={handleResize}
          onClick={(e) => e.stopPropagation()} 
          className="absolute bottom-0 right-0 w-8 h-8 cursor-se-resize flex items-end justify-end p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500">
            <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
