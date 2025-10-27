import type { FunctionalComponent } from 'vue'
import BgImage from '@/static/images/team-building/bg.webp?url'
import TeamImg01 from '@/static/images/team-building/sence01.webp?url'
import TeamImg02 from '@/static/images/team-building/sence02.webp?url'
import TeamImg03 from '@/static/images/team-building/sence03.webp?url'
import TeamImg04 from '@/static/images/team-building/sence04.webp?url'
import TeamImg05 from '@/static/images/team-building/sence05.webp?url'
import Footer from '@/components/Footer'
import { BulletTitle } from './_shared'

interface TeamBuildingCardProps {
  image: string
  title: string
}

const TeamBuildingCard: FunctionalComponent<TeamBuildingCardProps> = ({ image, title }) => {
  return (
    <div class="relative h-full overflow-hidden w-full lg:w-[560px]">
      <img 
        src={image} 
        alt={title}
        class="w-full h-full object-contain"
      />
      <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-[47px] lg:left-[41px] lg:right-auto">
        <h3 class="text-white text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal leading-tight sm:leading-relaxed lg:leading-[45px]">
          {title}
        </h3>
      </div>
    </div>
  )
}

const TeamBuilding: FunctionalComponent = () => {
  const activities = [
    { image: TeamImg01, title: 'Regular team retreats and workshops' },
    { image: TeamImg02, title: 'Cross-functional project teams' },
    { image: TeamImg03, title: 'Professional development opportunities' },
    { image: TeamImg04, title: 'Community service initiatives' },
    { image: TeamImg05, title: 'Mentorship programs' },
  ]

  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="px-4 2xl:px-0 mx-auto max-w-[1200px] 2xl:px-10 py-6 sm:py-8 lg:py-10">
        <BulletTitle class="justify-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mt-20 sm:mt-32 md:mt-40 lg:mt-[180px] mb-12 sm:mb-16 md:mb-20 lg:mb-[80px]" text="TEAM BUILDING" />

        <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-8 sm:gap-12 md:gap-16 lg:gap-[81px] mb-16 sm:mb-20 md:mb-24 lg:mb-[120px]">
          <div class="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-[99px] w-fit mx-auto">
            <div class="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[651px] w-full lg:w-fit">
              <TeamBuildingCard 
                image={activities[0].image}
                title={activities[0].title}
              />
            </div>
            <div class="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[651px] w-full lg:w-fit">
              <TeamBuildingCard 
                image={activities[2].image}
                title={activities[2].title}
              />
            </div>
            <div class="relative h-[330px] sm:h-[430px] md:h-[530px] lg:h-[619px] w-full lg:w-fit">
              <TeamBuildingCard 
                image={activities[4].image}
                title={activities[4].title}
              />
            </div>
          </div>

          <div class="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-[99px] lg:pt-[170px] w-fit mx-auto">
            <div class="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[651px] w-full lg:w-fit">
              <TeamBuildingCard 
                image={activities[1].image}
                title={activities[1].title}
              />
            </div>
            <div class="relative h-[330px] sm:h-[430px] md:h-[530px] lg:h-[619px] w-full lg:w-fit">
              <TeamBuildingCard 
                image={activities[3].image}
                title={activities[3].title}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

TeamBuilding.displayName = 'TeamBuilding'

export default TeamBuilding
