import type { FunctionalComponent } from 'vue'
import { ref, computed } from 'vue'
import { BulletTitle } from './_shared'
import Footer from '@/components/Footer'
import BgImage from '@/static/images/culture/bg.webp?url'
import SenceImg01 from '@/static/images/culture/sence-img05.webp?url'
import SenceImg02 from '@/static/images/culture/sence-img06.webp?url'
import SenceImg03 from '@/static/images/culture/sence-img07.webp?url'
import SenceImg04 from '@/static/images/culture/sence-img08.webp?url'
import SenceImg05 from '@/static/images/culture/sence-img09.webp?url'
import ArrowRightImage from '@/static/images/culture/arrow-right.webp?url'
import ArrowLeftImage from '@/static/images/culture/arrow-left.webp?url'

const CultureCard: FunctionalComponent<{ title: string; image: string }> = (props) => (
  <div class="rounded-[34px] md:rounded-[34px] rounded-[20px] bg-white/5 border border-white/10 p-0 text-white overflow-hidden">
    <img src={props.image} alt={props.title} class="h-[200px] md:h-[400px] w-full object-cover" />
    <div class="p-4 md:p-6">
      <div class="text-[20px] md:text-[32px] font-semibold">{props.title}</div>
    </div>
  </div>
)

// 在组件外部定义状态，这样状态会在整个应用生命周期中保持
const items = [
  { title: 'Innovation through collaboration', image: SenceImg01 },
  { title: 'User–centric design thinking', image: SenceImg02 },
  { title: 'Social responsibility', image: SenceImg03 },
  { title: 'Diversity and inclusion', image: SenceImg04 },
  { title: 'Continuous learning and growth', image: SenceImg05 },
]

const currentPage = ref(0)
const itemsPerPage = 4

const totalPages = computed(() => Math.ceil(items.length / itemsPerPage))
const displayedItems = computed(() => {
  const start = currentPage.value * itemsPerPage
  const end = start + itemsPerPage
  const pageItems: Array<{ title: string; image: string } | null> = items.slice(start, end)
  // 用 null 填充空位，确保每页始终占据 4 个网格位置，保持 2x2 布局
  while (pageItems.length < itemsPerPage) {
    pageItems.push(null)
  }
  return pageItems
})

const goToNextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const goToPrevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const Culture: FunctionalComponent = () => {
  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="max-w-6xl max-w-[1180px] mx-auto py-6 md:py-10 px-4 md:px-0">
        <BulletTitle class="mt-[80px] md:mt-[180px] justify-center text-[36px] md:text-[60px] mb-[6px]" text="OUR CULTURE" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 mt-6 md:mt-8 relative">
          {displayedItems.value.map((item, index) => 
            item ? (
              <CultureCard key={item.title} title={item.title} image={item.image} />
            ) : (
              <div key={`placeholder-page${currentPage.value}-slot${index}`} class="rounded-[34px] h-[496px] hidden md:block" />
            )
          )}
          
          {currentPage.value > 0 && (
            <button 
              type="button" 
              class="hidden md:block absolute top-1/2 -left-[50px] translate-y-[-50%] -translate-x-[100%] transition-opacity hover:opacity-80"
              onClick={goToPrevPage}
            >
              <img src={ArrowLeftImage} alt="Previous page" width={93} />
            </button>
          )}
          
          {currentPage.value < totalPages.value - 1 && (
            <button 
              type="button" 
              class="hidden md:block absolute top-1/2 -right-[50px] translate-y-[-50%] translate-x-[100%] transition-opacity hover:opacity-80"
              onClick={goToNextPage}
            >
              <img src={ArrowRightImage} alt="Next page" width={93} />
            </button>
          )}
        </div>
        
        {/* 移动端翻页按钮 */}
        <div class="flex md:hidden justify-center gap-4 mb-8">
          <button 
            type="button" 
            class="transition-opacity hover:opacity-80 disabled:opacity-30"
            onClick={goToPrevPage}
            disabled={currentPage.value === 0}
          >
            <img src={ArrowLeftImage} alt="Previous page" width={60} />
          </button>
          
          <button 
            type="button" 
            class="transition-opacity hover:opacity-80 disabled:opacity-30"
            onClick={goToNextPage}
            disabled={currentPage.value >= totalPages.value - 1}
          >
            <img src={ArrowRightImage} alt="Next page" width={60} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Culture.displayName = 'Culture'

export default Culture
