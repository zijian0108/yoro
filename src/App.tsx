import type { FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import LogoImage from '@/static/images/logo.webp?url'

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
    </div>
  )
}

export default App
