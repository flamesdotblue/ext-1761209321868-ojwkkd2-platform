import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    id: '1',
    title: 'Aurora Glass — Voxel Shard',
    creator: 'by NovaStudio',
    price: '0.42 ETH',
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop',
    tag: '3D Asset',
  },
  {
    id: '2',
    title: 'Neon Alley Texture Pack',
    creator: 'by PixelDust',
    price: '0.18 ETH',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop',
    tag: 'Digital Product',
  },
  {
    id: '3',
    title: 'Synthwave Skyline Poster',
    creator: 'by Aria K',
    price: '0.09 ETH',
    thumbnail: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1400&auto=format&fit=crop',
    tag: 'Image',
  },
  {
    id: '4',
    title: 'Chromatic Orbit — 4K HDRI',
    creator: 'by LuminaLab',
    price: '0.25 ETH',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop',
    tag: '3D Asset',
  },
];

function Card({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.06, duration: 0.5 }}
      className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-200">
          {item.tag}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium leading-tight">{item.title}</h3>
            <p className="text-xs text-zinc-400 mt-1">{item.creator}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold">{item.price}</div>
            <div className="text-[11px] text-zinc-400">Buy Now</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button className="px-3 py-1.5 text-sm rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-200">Collect</button>
          <button className="px-3 py-1.5 text-sm rounded-md border border-zinc-700 hover:border-zinc-600">View</button>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedGrid() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Trending now</h2>
          <p className="text-zinc-400 mt-1">Curated drops across images, 3D assets, and digital products.</p>
        </div>
        <a href="#create" className="hidden md:inline-flex text-sm text-zinc-300 hover:text-white">List your asset →</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <Card key={item.id} item={item} i={i} />
        ))}
      </div>
    </div>
  );
}
