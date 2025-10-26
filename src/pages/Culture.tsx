import type { FunctionalComponent } from 'vue'
import { BulletTitle } from './_shared'
import BgImage from '@/static/images/culture/bg.webp?url'
import SenceImg01 from '@/static/images/culture/sence-img05.webp?url'
import SenceImg02 from '@/static/images/culture/sence-img06.webp?url'
import SenceImg03 from '@/static/images/culture/sence-img07.webp?url'
import SenceImg04 from '@/static/images/culture/sence-img08.webp?url'

const CultureCard: FunctionalComponent<{ title: string; image: string }> = (props) => (
  <div class="rounded-2xl bg-white/5 border border-white/10 p-0 text-white overflow-hidden">
    <img src={props.image} alt={props.title} class="h-[400px] w-[581px] object-cover" />
    <div class="p-6">
      <div class="text-[32px] font-semibold">{props.title}</div>
    </div>
  </div>
)

const Culture: FunctionalComponent = () => {
  const items = [
    { title: 'Innovation through collaboration', image: SenceImg01 },
    { title: 'User–centric design thinking', image: SenceImg02 },
    { title: 'Social responsibility', image: SenceImg03 },
    { title: 'Diversity and inclusion', image: SenceImg04 },
  ]

  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="max-w-6xl  max-w-[1180px] mx-auto py-10">
        <BulletTitle class="mt-[180px] justify-center mb-[6px]" text="OUR CULTURE" />

        <div class="grid md:grid-cols-2 gap-8 mb-16 mt-8">
          {items.map((item) => (
            <CultureCard key={item.title} title={item.title} image={item.image} />
          ))}
        </div>

        <div class="fixed right-6 md:right-12 bottom-24 md:bottom-32">
          <button
            type="button"
            class="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

Culture.displayName = 'Culture'

export default Culture
