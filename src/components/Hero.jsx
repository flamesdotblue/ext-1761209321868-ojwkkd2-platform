import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] md:h-[82vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/40 to-zinc-950" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-300 mb-4 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Live • Explore interactive 3D and digital art
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Create, collect and sell next‑gen digital assets
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-300">
            A futuristic marketplace for images, 3D assets, and digital products. Mint your creations, set your price, and reach collectors worldwide.
          </p>
          <div className="pointer-events-auto mt-6 flex items-center gap-3">
            <a href="#create" className="px-5 py-2.5 rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-200">Start Creating</a>
            <a href="#featured" className="px-5 py-2.5 rounded-md border border-zinc-700 hover:border-zinc-600">Explore Trending</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
