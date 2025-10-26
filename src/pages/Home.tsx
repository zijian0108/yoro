import type { FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { BulletTitle, PlaceholderImg, PhoneMock } from './_shared'
import BgImage from '@/static/images/home/bg.webp?url'
import SenceImg01 from '@/static/images/home/sence-img01.webp?url'
import SenceImg02 from '@/static/images/home/sence-img02.webp?url'
import SenceImg03 from '@/static/images/home/sence-img03.webp?url'
import SenceImg04 from '@/static/images/home/sence-img04.webp?url'
import YoroLogo from '@/static/images/logo-yoro.webp?url'

const Home: FunctionalComponent = () => {
  return (
    <div
      class="min-h-screen text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div class="max-w-[1580px] mx-auto px-4 md:px-8 py-8">
        {/* Hero */}
        <section class="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 mb-12">
          <div class="flex flex-col md:flex-row gap-10 items-center">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-4">
                <img src={YoroLogo} alt="" width={40} class="rounded-lg" />
                <span class="text-lg font-semibold">Yoro</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-extrabold mb-3">Welcome!</h1>
              <p class="text-white/80 mb-6">
                Let’s start the exciting chat time now!
              </p>
              <div class="flex gap-3 mb-6">
                <div class="h-10 w-32 rounded-xl bg-white/15 border border-white/20" />
                <div class="h-10 w-32 rounded-xl bg-white/15 border border-white/20" />
              </div>
              <div class="flex gap-3">
                <RouterLink
                  to="/products"
                  class="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold"
                >
                  Our Products
                </RouterLink>
                <RouterLink
                  to="/culture"
                  class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold"
                >
                  Learn More
                </RouterLink>
              </div>
            </div>
            <div class="flex-1 grid grid-cols-3 gap-3 opacity-90 w-full">
              {[SenceImg01, SenceImg02, SenceImg03, SenceImg04].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  class="aspect-square rounded-xl object-cover border border-white/20"
                />
              ))}
              {[SenceImg02, SenceImg03, SenceImg04, SenceImg01, SenceImg03].map((src, idx) => (
                <img
                  key={`rep-${idx}`}
                  src={src}
                  alt=""
                  class="aspect-square rounded-xl object-cover border border-white/20"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Building Social Connections */}
        <section class="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <BulletTitle text="Building Social Connections" />
            <p class="mt-4 text-white/80 leading-relaxed">
              We build warm connections via chat, short video, and random
              matching. Explore delightful interactions and friendly
              communities.
            </p>
            <div class="mt-6 flex gap-3">
              <button
                type="button"
                class="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-sm font-semibold"
              >
                Get Started
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="flex justify-center md:justify-end">
            <img src={SenceImg01} alt="" class="rounded-2xl border border-white/10 w-full max-w-[380px]" />
          </div>
        </section>

        {/* About Us */}
        <section class="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div class="flex justify-start order-2 md:order-1">
            <img src={SenceImg02} alt="" class="rounded-2xl border border-white/10 w-full max-w-[340px]" />
          </div>
          <div class="order-1 md:order-2">
            <BulletTitle text="About Us" />
            <p class="mt-4 text-white/80 leading-relaxed">
              ETERNALENAMEL LLC focuses on user–centric design and responsible
              innovation, creating inclusive communities and delightful
              products.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section class="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <BulletTitle text="Our Vision" />
            <p class="mt-4 text-white/80 leading-relaxed">
              We envision vibrant social experiences that respect privacy and
              enable meaningful connections.
            </p>
          </div>
          <div class="flex justify-center md:justify-end">
            <img src={SenceImg03} alt="" class="rounded-2xl border border-white/10 w-full max-w-[360px]" />
          </div>
        </section>

        {/* OUR PRODUCTS */}
        <section class="mb-16">
          <BulletTitle text="OUR PRODUCTS" />
          <div class="mt-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <PhoneMock class="h-[28rem]" />
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 class="text-2xl font-semibold mb-2">Yoro</h3>
              <p class="text-white/80 text-sm leading-relaxed">
                Yoro is an integrated platform combining diverse social scenes
                with real-time interactions. It supports multi-space
                communication and warm connections.
              </p>
              <div class="mt-4 flex flex-wrap gap-4 text-pink-300 text-sm">
                <a href="#/privacy" class="hover:text-pink-200">Privacy statement</a>
                <a href="#/terms" class="hover:text-pink-200">Terms of use</a>
                <a href="#/tenant-service" class="hover:text-pink-200">Tenant service</a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Member */}
        <section class="mb-20">
          <BulletTitle text="CORE TEAM MEMBER" />
          <div class="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Johnnish Aun Semb Umew', bio: 'Leads product strategy and UX craft.' },
              { name: 'Michael Chen', bio: 'Heads engineering and platform reliability.' },
              { name: 'Sarah Johnson', bio: 'Drives community operations and safety.' }
            ].map((m) => (
              <div key={m.name} class="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div class="w-12 h-12 rounded-full bg-white/10 mb-3" />
                <div class="font-semibold">{m.name}</div>
                <div class="text-sm text-white/80">{m.bio}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer class="border-t border-white/10 pt-8 pb-12">
          <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
          <ul class="text-white/80 space-y-2 text-sm">
            <li>7th Whiteriver Ave, Rifle, CO 81650, US</li>
            <li>+702 3325463</li>
            <li>Email: eternalenameillc@gmail.com</li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

Home.displayName = 'Home'

export default Home
