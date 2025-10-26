import type { FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import LogoImage from '@/static/images/logo.webp?url'
import LocationImage from "@/static/images/location.webp?url";
import PhoneImage from "@/static/images/phone.webp?url";
import EmailImage from "@/static/images/email.webp?url";

const App: FunctionalComponent = () => {
  return (
    <div class="min-h-screen">
      <header class="fixed w-full top-0 z-30 backdrop-blur bg-black/30 border-b border-white/10">
        <div class="max-w-[1580px] px-4 mx-auto h-[80px] flex items-center justify-between text-white">
          <div class="flex items-center gap-2 font-extrabold tracking-wide">
            {/* <span class="inline-block w-[37px] h-[37px] round÷ed-md bg-purple-500" /> */}
            <img src={LogoImage} alt="" width={37} class="rounded-lg" />
            <span class="text-[26px]">ETERNALENAMEL LLC</span>
          </div>
          <nav class="flex items-center gap-[50px]">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/products">PRODUCTS</RouterLink>
            <RouterLink to="/culture">CULTURE</RouterLink>
            <RouterLink to="/team-building">TEAM BUILDING</RouterLink>
            <RouterLink to="/delete-account">DELETE ACCOUNT</RouterLink>
          </nav>
        </div>
      </header>
      <main>
        <router-view />
      </main>
      <footer class="mt-28 mx-auto max-w-[1180px] border-t border-white/10 pt-8 pb-16">
        <h3 class="text-5xl text-white/80 font-bold mb-[38px]">Contact Us</h3>
        <ul class="text-white/80 space-y-[30px] text-base">
          <li class="flex item-center gap-[14px]">
            <img src={LocationImage} alt="" width={25} class="inline-block align-top" />
            710 Whitewater Ave, Brea, CA 92860, United States
          </li>
          <li class="flex item-center gap-[14px]">
            <img src={PhoneImage} alt="" width={25} class="inline-block align-top" />
            +1 (702) 323-5463
          </li>
          <li class="flex item-center gap-[14px]">
            <img src={EmailImage} alt="" width={25} class="inline-block align-top" />
            Email: eternalenamel@gmail.com
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
