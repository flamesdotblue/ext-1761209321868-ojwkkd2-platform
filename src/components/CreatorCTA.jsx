import React from 'react';
import { motion } from 'framer-motion';

export default function CreatorCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_10%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative p-8 md:p-12">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Mint your first asset today</h3>
          <p className="mt-2 text-zinc-300">
            Upload images, 3D models, or digital products. Set royalties, choose editions, and publish to the marketplace in minutes.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-200">Create a listing</button>
            <button className="px-5 py-2.5 rounded-md border border-zinc-700 hover:border-zinc-600">Learn how it works</button>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-300">
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">No code minting</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">On-chain royalties</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">Instant payouts</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
