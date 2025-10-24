import type { FunctionalComponent } from 'vue'
import { BulletTitle, PlaceholderImg } from './_shared'

const CultureCard: FunctionalComponent<{ title: string }> = (props) => (
  <div class="rounded-2xl bg-white/5 border border-white/10 p-0 text-white overflow-hidden">
    <PlaceholderImg class="h-48" />
    <div class="p-6">
      <div class="text-lg font-semibold">{props.title}</div>
    </div>
  </div>
)

const Culture: FunctionalComponent = () => {
  const items = [
    'Innovation through collaboration',
    'User–centric design thinking',
    'Social responsibility',
    'Diversity and inclusion'
  ]

  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <BulletTitle text="OUR CULTURE" />

        <div class="grid md:grid-cols-2 gap-8 mb-16 mt-8">
          {items.map((t) => (
            <CultureCard key={t} title={t} />
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

        <footer class="border-t border-white/10 pt-8">
          <h3 class="text-2xl font-bold mb-3">Contact Us</h3>
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

export default Culture
