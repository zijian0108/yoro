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
  <div class="rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-white/5 border border-white/10 p-0 text-white overflow-hidden">
    <img src={props.image} alt={props.title} class="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover" />
    <div class="p-4 sm:p-5 md:p-6">
      <div class="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-semibold leading-tight">{props.title}</div>
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
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black 2xl:px-4"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="max-w-[1180px] mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 2xl:px-0">
        <BulletTitle class="mt-[80px] sm:mt-[120px] md:mt-[150px] lg:mt-[180px] justify-center text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] mb-[40px] sm:mb-[60px] md:mb-[80px]" text="OUR CULTURE" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 mt-6 sm:mt-8 relative">
          {displayedItems.value.map((item, index) => 
            item ? (
              <CultureCard key={item.title} title={item.title} image={item.image} />
            ) : (
              <div key={`placeholder-page${currentPage.value}-slot${index}`} class="rounded-[20px] md:rounded-[28px] lg:rounded-[34px] h-[320px] sm:h-[380px] md:h-[440px] lg:h-[496px] hidden md:block" />
            )
          )}
          
          {/* 桌面端箭头按钮 */}
          {currentPage.value > 0 && (
            <button 
              type="button" 
              class="hidden lg:block absolute top-1/2 -left-[50px] translate-y-[-50%] -translate-x-[100%] transition-opacity hover:opacity-80"
              onClick={goToPrevPage}
            >
              <img src={ArrowLeftImage} alt="Previous page" width={93} class="w-[60px] lg:w-[80px] xl:w-[93px]" />
            </button>
          )}
          
          {currentPage.value < totalPages.value - 1 && (
            <button 
              type="button" 
              class="hidden lg:block absolute top-1/2 -right-[50px] translate-y-[-50%] translate-x-[100%] transition-opacity hover:opacity-80"
              onClick={goToNextPage}
            >
              <img src={ArrowRightImage} alt="Next page" width={93} class="w-[60px] lg:w-[80px] xl:w-[93px]" />
            </button>
          )}
        </div>

        {/* 移动端/平板端分页按钮 */}
        {totalPages.value > 1 && (
          <div class="flex justify-center items-center gap-6 mb-8 lg:hidden">
            <button 
              type="button" 
              class={`transition-opacity ${currentPage.value > 0 ? 'opacity-100 hover:opacity-80' : 'opacity-30 cursor-not-allowed'}`}
              onClick={goToPrevPage}
              disabled={currentPage.value === 0}
            >
              <img src={ArrowLeftImage} alt="Previous page" class="w-[50px] sm:w-[60px]" />
            </button>
            
            <div class="flex gap-2">
              {[...Array(totalPages.value)].map((_, pageNum) => {
                const pageIndex = pageNum
                return (
                  <button
                    key={`pagination-dot-${pageIndex}`}
                    type="button"
                    class={`w-2 h-2 rounded-full transition-all ${
                      pageIndex === currentPage.value 
                        ? 'bg-white w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    onClick={() => { currentPage.value = pageIndex }}
                  />
                )
              })}
            </div>
            
            <button 
              type="button" 
              class={`transition-opacity ${currentPage.value < totalPages.value - 1 ? 'opacity-100 hover:opacity-80' : 'opacity-30 cursor-not-allowed'}`}
              onClick={goToNextPage}
              disabled={currentPage.value === totalPages.value - 1}
            >
              <img src={ArrowRightImage} alt="Next page" class="w-[50px] sm:w-[60px]" />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

Culture.displayName = 'Culture'

export default Culture
