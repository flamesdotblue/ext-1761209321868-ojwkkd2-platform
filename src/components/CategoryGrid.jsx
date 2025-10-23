import React from 'react';
import { Image, Box, FileText, Music } from 'lucide-react';

const categories = [
  {
    id: 'images',
    name: 'Images & Illustrations',
    icon: Image,
    gradient: 'from-fuchsia-500/20 to-cyan-400/20',
    desc: 'Photography, concept art, posters, UI kits, wallpapers.',
  },
  {
    id: '3d',
    name: '3D Assets',
    icon: Box,
    gradient: 'from-cyan-400/20 to-emerald-400/20',
    desc: 'Meshes, materials, HDRIs, rigged characters, scenes.',
  },
  {
    id: 'digital',
    name: 'Digital Products',
    icon: FileText,
    gradient: 'from-amber-400/20 to-rose-500/20',
    desc: 'E-books, templates, plugins, LUTs, brushes, presets.',
  },
  {
    id: 'audio',
    name: 'Audio & SFX',
    icon: Music,
    gradient: 'from-violet-500/20 to-sky-400/20',
    desc: 'Loops, sound effects, ambient packs, music beds.',
  },
];

export default function CategoryGrid() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Browse by category</h2>
          <p className="text-zinc-400 mt-1">Discover assets across creative disciplines.</p>
        </div>
        <a href="#featured" className="hidden md:inline-flex text-sm text-zinc-300 hover:text-white">See trending →</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 transition-colors overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
            <div className="relative p-5 flex flex-col gap-3">
              <div className="h-10 w-10 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-center">
                <cat.icon className="h-5 w-5 text-zinc-100" />
              </div>
              <div>
                <h3 className="font-medium">{cat.name}</h3>
                <p className="text-xs text-zinc-300/90 mt-1">{cat.desc}</p>
              </div>
              <div className="mt-2 text-xs text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
