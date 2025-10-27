import type { FunctionalComponent } from 'vue'
import BgImage from '@/static/images/team-building/bg.webp?url'
import TeamImg01 from '@/static/images/team-building/sence01.webp?url'
import TeamImg02 from '@/static/images/team-building/sence02.webp?url'
import TeamImg03 from '@/static/images/team-building/sence03.webp?url'
import TeamImg04 from '@/static/images/team-building/sence04.webp?url'
import TeamImg05 from '@/static/images/team-building/sence05.webp?url'
import LocationImage from '@/static/images/location.webp?url'
import PhoneImage from '@/static/images/phone.webp?url'
import EmailImage from '@/static/images/email.webp?url'
import { BulletTitle } from './_shared'

interface TeamBuildingCardProps {
  image: string
  title: string
}

const TeamBuildingCard: FunctionalComponent<TeamBuildingCardProps> = ({ image, title }) => {
  return (
    <div class="relative w-full h-full overflow-hidden rounded-[8px] md:w-[560px]">
      <img 
        src={image} 
        alt={title}
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-[20px] left-[20px] md:bottom-[47px] md:left-[41px]">
        <h3 class="text-white text-[18px] md:text-[32px] font-normal leading-[28px] md:leading-[45px]">
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
      <div class="px-[20px] md:mx-[360px] pt-[60px] md:pt-[120px] pb-[60px] md:pb-[100px]">
        <BulletTitle class="justify-center text-[32px] md:text-[56px] mb-[40px] md:mb-[80px]" text="TEAM BUILDING" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[81px] mb-[60px] md:mb-[120px]">
          <div class="space-y-[30px] md:space-y-[99px]">
            <div class="relative h-[300px] md:h-[651px]">
              <TeamBuildingCard 
                image={activities[0].image}
                title={activities[0].title}
              />
            </div>
            <div class="relative h-[300px] md:h-[651px]">
              <TeamBuildingCard 
                image={activities[2].image}
                title={activities[2].title}
              />
            </div>
            <div class="relative h-[300px] md:h-[619px]">
              <TeamBuildingCard 
                image={activities[4].image}
                title={activities[4].title}
              />
            </div>
          </div>

          <div class="space-y-[30px] md:space-y-[99px] md:pt-[170px]">
            <div class="relative h-[300px] md:h-[651px]">
              <TeamBuildingCard 
                image={activities[1].image}
                title={activities[1].title}
              />
            </div>
            <div class="relative h-[300px] md:h-[619px]">
              <TeamBuildingCard 
                image={activities[3].image}
                title={activities[3].title}
              />
            </div>
          </div>
        </div>

        <div class="mb-[60px] md:mb-[80px]">
          <h2 class="text-[28px] md:text-[40px] font-bold mb-[25px] md:mb-[35px]">Contact Us</h2>
          
          <div class="space-y-[15px] md:space-y-[18px]">
            <div class="flex items-start gap-[12px] md:gap-[15px]">
              <img src={LocationImage} alt="Location" width={18} class="md:w-[22px] mt-[2px] md:mt-[3px]" />
              <div class="text-white/85 text-[14px] md:text-[18px] leading-relaxed">
                718 Whitehaver Ave, Rifle, CO 81650, United States
              </div>
            </div>
            
            <div class="flex items-center gap-[12px] md:gap-[15px]">
              <img src={PhoneImage} alt="Phone" width={18} class="md:w-[22px]" />
              <div class="text-white/85 text-[14px] md:text-[18px]">
                +1702 3251463
              </div>
            </div>
            
            <div class="flex items-center gap-[12px] md:gap-[15px]">
              <img src={EmailImage} alt="Email" width={18} class="md:w-[22px]" />
              <div class="text-white/85 text-[14px] md:text-[18px]">
                Email: eternalenamelllc@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TeamBuilding.displayName = 'TeamBuilding'

export default TeamBuilding
