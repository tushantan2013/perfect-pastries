'use client'

import { useState } from 'react'
import { ArrowUpRight, CakeSlice, ChevronDown, Menu, Sparkles, X } from 'lucide-react'

const cakes = [
  {
    title: 'Gulab Jamun Dream',
    type: 'Signature cakes',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lvFweluEcp3ISnnlJaCyRrhlG9bjjC.png',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Roll With It',
    type: 'Wildly custom',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8YaZYDKWa5AzeMk7swhoRWRbJdwsYD.png',
    className: 'md:col-span-1',
  },
  {
    title: 'Midnight Gold',
    type: 'Chocolate stories',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZyM4tbM9QIDWfGD09WOUodKSOe861D.png',
    className: 'md:col-span-1',
  },
  {
    title: 'The Traveller',
    type: 'Milestone moments',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lxG4MjL6N2Pb5pAzBSURLlu9s0UqTH.png',
    className: 'md:col-span-1',
  },
  {
    title: 'Lavender Love',
    type: 'Photo cakes',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Dda1cuqKVIuvHYZhRjMONJs0ZVbSQU.png',
    className: 'md:col-span-1',
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f2e9] text-[#241f1b]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#241f1b]/15 py-5">
          <a href="#top" className="flex items-center gap-2" aria-label="Crumb and Cream home">
            <span className="flex size-9 items-center justify-center rounded-full bg-[#b92f2e] text-[#f8f2e9]"><CakeSlice size={18} strokeWidth={1.8} /></span>
            <span className="font-display text-xl font-semibold tracking-tight">crumb<span className="text-[#b92f2e]">&</span>cream</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
            <a href="#story" className="transition-colors hover:text-[#b92f2e]">Our story</a>
            <a href="#cakes" className="transition-colors hover:text-[#b92f2e]">The cakes</a>
            <a href="#process" className="transition-colors hover:text-[#b92f2e]">How it works</a>
          </nav>
          <a href="#order" className="hidden rounded-full bg-[#241f1b] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f8f2e9] transition-transform hover:-translate-y-0.5 sm:block">Order a cake <ArrowUpRight className="ml-1 inline" size={14} /></a>
          <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-[#241f1b]/20 p-2 md:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </header>
        {menuOpen && <nav className="flex flex-col gap-5 border-b border-[#241f1b]/15 py-6 text-sm font-semibold uppercase tracking-[0.18em] md:hidden"><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#cakes" onClick={() => setMenuOpen(false)}>The cakes</a><a href="#order" onClick={() => setMenuOpen(false)}>Order a cake</a></nav>}

        <section id="top" className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#b92f2e]"><Sparkles size={15} /> Made for the main character moments</p>
            <h1 className="font-display max-w-3xl text-[clamp(4rem,9vw,8.9rem)] font-medium leading-[.84] tracking-[-.07em]">A little<br /><em className="text-[#b92f2e]">extra</em> never<br />hurt.</h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#655b52] sm:text-lg">Joyfully over-the-top cakes, made from scratch and designed around your favourite people, places and things.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5"><a href="#cakes" className="rounded-full bg-[#b92f2e] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1">See the gallery <ArrowUpRight className="ml-2 inline" size={15} /></a><a href="#story" className="text-xs font-bold uppercase tracking-[0.18em] underline decoration-[#b92f2e] underline-offset-8">Meet the bakers</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
            <div className="absolute -right-2 top-3 z-10 flex size-28 rotate-12 items-center justify-center rounded-full bg-[#d8e3bd] p-5 text-center font-display text-xl leading-[.9] text-[#3a4b2d] sm:right-4"><span>good<br />things<br /><em>baked</em></span></div>
            <div className="aspect-[.88] overflow-hidden rounded-[48%_48%_8%_8%/38%_38%_8%_8%] bg-[#dfd1bf] shadow-[18px_22px_0_#e6d9ca]"><img src={cakes[0].image} alt="Cream birthday cake topped with gulab jamun and pistachios" className="h-full w-full object-cover object-center" /></div>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7d7165]">Made for your sweetest celebrations</p>
          </div>
        </section>

        <section id="story" className="grid gap-10 border-t border-[#241f1b]/15 py-16 sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b92f2e]">01 / The crumb philosophy</p><div><h2 className="font-display max-w-4xl text-4xl leading-[.95] tracking-[-.045em] sm:text-6xl lg:text-7xl">We believe cake should taste <em className="text-[#b92f2e]">as good</em> as the photo.</h2><p className="mt-7 max-w-xl text-base leading-7 text-[#655b52]">No boring bakes here. Just pillowy sponge, cloud-soft cream, generous fillings and a wild imagination. Tell us your story and we&apos;ll turn it into dessert.</p></div></section>

        <section id="cakes" className="border-t border-[#241f1b]/15 py-16 sm:py-24"><div className="mb-10 flex items-end justify-between gap-4"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#b92f2e]">02 / Fresh from the gallery</p><h2 className="font-display text-5xl tracking-[-.05em] sm:text-7xl">Sweet <em>things.</em></h2></div><button onClick={() => setShowAll(!showAll)} className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] underline decoration-[#b92f2e] underline-offset-8 sm:flex">{showAll ? 'Hide cakes' : 'View all cakes'} <ChevronDown size={15} className={showAll ? 'rotate-180' : ''} /></button></div>
          <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[280px] md:grid-cols-4 md:grid-rows-[260px_260px]">{cakes.map((cake) => <article key={cake.title} className={`group relative overflow-hidden rounded-[2px] ${cake.className}`}><img src={cake.image} alt={cake.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 flex translate-y-1 items-end justify-between bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d5ad]">{cake.type}</p><h3 className="font-display text-2xl">{cake.title}</h3></div><ArrowUpRight size={20} /></div></article>)}</div>
          <button onClick={() => setShowAll(!showAll)} className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] underline decoration-[#b92f2e] underline-offset-8 sm:hidden">{showAll ? 'Hide cakes' : 'View all cakes'} <ChevronDown size={15} className={showAll ? 'rotate-180' : ''} /></button>
        </section>

        <section id="process" className="grid gap-12 border-t border-[#241f1b]/15 py-16 sm:py-24 lg:grid-cols-[.85fr_1.15fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#b92f2e]">03 / Your cake, your way</p><h2 className="font-display max-w-md text-5xl leading-[.93] tracking-[-.05em] sm:text-7xl">From wild idea to <em className="text-[#b92f2e]">wow.</em></h2></div><div className="grid gap-8 sm:grid-cols-3"><div className="border-t-2 border-[#b92f2e] pt-4"><span className="font-display text-4xl text-[#b92f2e]">01</span><h3 className="mt-5 font-semibold">Dream it up</h3><p className="mt-2 text-sm leading-6 text-[#655b52]">Share your date, your flavour cravings and your Pinterest board.</p></div><div className="border-t-2 border-[#b92f2e] pt-4"><span className="font-display text-4xl text-[#b92f2e]">02</span><h3 className="mt-5 font-semibold">We sketch it</h3><p className="mt-2 text-sm leading-6 text-[#655b52]">Our bakers turn your big idea into a delicious little blueprint.</p></div><div className="border-t-2 border-[#b92f2e] pt-4"><span className="font-display text-4xl text-[#b92f2e]">03</span><h3 className="mt-5 font-semibold">You celebrate</h3><p className="mt-2 text-sm leading-6 text-[#655b52]">We bake, box and deliver the centrepiece of your day.</p></div></div></section>

        <section id="order" className="relative mb-10 overflow-hidden rounded-sm bg-[#d8e3bd] px-7 py-14 sm:px-14 sm:py-20"><div className="relative z-10 max-w-2xl"><p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#52663e]">Ready when you are</p><h2 className="font-display text-5xl leading-[.9] tracking-[-.05em] sm:text-8xl">Let&apos;s make<br /><em>your</em> cake.</h2><p className="mt-7 max-w-md text-base leading-7 text-[#52604a]">Tell us what you&apos;re celebrating. We&apos;ll bring the buttercream.</p><p className="mt-5 text-sm font-semibold text-[#52604a]">Order directly on WhatsApp: <a href="tel:09786631620" className="underline underline-offset-4">09786631620</a></p><a href="https://wa.me/919786631620?text=Hi%20Perfect%20Pastries%2C%20I%27d%20like%20to%20place%20a%20cake%20order." target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#241f1b] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f8f2e9]">Order on WhatsApp <ArrowUpRight className="ml-2" size={15} /></a></div><div className="absolute -right-10 -top-12 hidden size-72 rounded-full border-[42px] border-[#f8f2e9]/40 sm:block" /></section>
        <section aria-labelledby="reviews-heading" className="grid gap-8 border-t border-[#241f1b]/15 py-16 sm:py-20 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#b92f2e]">04 / Kind words</p><h2 id="reviews-heading" className="font-display text-5xl leading-[.95] tracking-[-.05em] sm:text-6xl">Loved by<br /><em className="text-[#b92f2e]">sweet tooths.</em></h2></div><div className="grid gap-6"><div className="rounded-sm border border-[#241f1b]/15 p-6"><h3 className="font-display text-3xl">Perfect Pastries</h3><p className="mt-3 text-sm leading-6 text-[#655b52]">35, Rangammal Kovil St, Papanaickenpalayam, Coimbatore, Tamil Nadu 641037, India</p><p className="mt-5 font-display text-3xl text-[#b92f2e]">5.0 <span className="font-sans text-sm text-[#655b52]">· 16 reviews</span></p><p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#7d7165]">All · kids · wheat</p></div></div></section>
        <footer className="flex flex-col justify-between gap-6 border-t border-[#241f1b]/15 py-8 text-xs font-semibold uppercase tracking-[0.16em] sm:flex-row sm:items-center"><div><span className="font-display text-xl normal-case tracking-tight">crumb<span className="text-[#b92f2e]">&</span>cream</span><p className="mt-3 max-w-xs text-[10px] leading-5 tracking-[0.12em] text-[#85786a]">33, Rangammal Kovil Street, Tamil Nadu 641037<br /><a href="tel:09786631620" className="text-[#241f1b]">09786631620</a></p></div><span className="text-[#85786a]">Call or WhatsApp: <a href="https://wa.me/919786631620" target="_blank" rel="noreferrer" className="text-[#241f1b]">09786631620</a></span><a href="#top" className="flex items-center gap-2">Back to top <ArrowUpRight size={14} /></a></footer>
      </div>
    </main>
  )
}
