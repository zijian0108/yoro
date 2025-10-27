import type { FunctionalComponent } from 'vue'
import { BulletTitle, PlaceholderImg } from './_shared'
import Footer from '@/components/Footer'

const Item: FunctionalComponent<{ title: string }> = (props) => (
  <div class="rounded-2xl bg-white/5 border border-white/10 p-0 text-white overflow-hidden">
    <PlaceholderImg class="h-64" />
    <div class="p-6">
      <div class="text-lg font-semibold">{props.title}</div>
    </div>
  </div>
)

const TeamBuilding: FunctionalComponent = () => {
  const items = [
    'Regular team retreats and workshops',
    'Cross–functional project teams',
    'Professional development opportunities',
    'Community service initiatives',
    'Mentorship programs'
  ]

  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <BulletTitle class='mt-[180px] justify-center text-[60px] mb-[6px]' text="TEAM BUILDING" />

        <div class="grid md:grid-cols-2 gap-8 mb-16 mt-8">
          {items.map((t) => (
            <Item key={t} title={t} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}

TeamBuilding.displayName = 'TeamBuilding'

export default TeamBuilding
