import React from 'react';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedGrid from './components/FeaturedGrid';
import CreatorCTA from './components/CreatorCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-zinc-900/50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300" />
            <span className="font-semibold tracking-tight">Crustal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#featured" className="hover:text-white">Trending</a>
            <a href="#create" className="hover:text-white">Create</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-3 py-2 text-sm rounded-md border border-zinc-700 hover:border-zinc-600">Sign in</button>
            <button className="px-4 py-2 text-sm rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-200">Connect Wallet</button>
          </div>
        </div>
      </header>

      <main className="relative">
        <section id="explore" className="pt-24 md:pt-28">
          <Hero />
        </section>

        <section id="categories" className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <CategoryGrid />
        </section>

        <section id="featured" className="relative z-10 max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <FeaturedGrid />
        </section>

        <section id="create" className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
          <CreatorCTA />
        </section>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Crustal — A marketplace for images, 3D assets, and digital products.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
