import type { FunctionalComponent } from 'vue'
import { BulletTitle, ProductSection } from './_shared'
import Footer from '@/components/Footer'
import BgImage from '@/static/images/home/bg.webp?url'
import SenceImg01 from '@/static/images/home/sence-img01.webp?url'
import SenceImg02 from '@/static/images/home/sence-img02.webp?url'
import SenceImg03 from '@/static/images/home/sence-img03.webp?url'
import YoroLogo from '@/static/images/logo-yoro.webp?url'
import YoroImage from '@/static/images/products/yoro.webp?url'
import HeroVideo from '@/static/screen.mp4?url'

const Home: FunctionalComponent = () => {
  const sections = [
    {
      title: 'About Us',
      desc: 'Our Mission At ETERNALENAMEL LLC, we`re dedicated to creating meaningful social connections through innovative technology. Our mission is to develop social applications that enhance human interaction and build stronger communities.',
      logo: SenceImg02,
      logoWidth: 569,
      logoPosition: 'right',
      hasButtons: false,
      id: 'about'
    },
    {
      title: 'Our Vision',
      desc: 'We envision a world where technology brings people closer together, fostering genuine connections and creating positive social impact through our carefully crafted applications.',
      logo: SenceImg03,
      logoWidth: 569,
      logoPosition: 'right',
      hasButtons: false
    }
  ] as const

  const teamMembers = [
    {
      name: 'Jeminnah Ruth Sumbl Bimay',
      title: 'Founder & CEO',
      bio: 'With over 5 years of experience in social technology and community building, Jeminnah leads our operations with a vision to create meaningful digital connections. Her background in human-centered design and digital communities has shaped our approach to social networking.',
      avatar: SenceImg01 // 占位符，实际需要添加头像图片
    },
    {
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      bio: 'Michael brings extensive experience in software architecture and AI development. His innovative approach to technology has been instrumental in developing our cutting-edge social matching algorithms and community management tools.',
      avatar: SenceImg01 // 占位符，实际需要添加头像图片
    },
    {
      name: 'Sarah Johnson',
      title: 'Chief Marketing Officer',
      bio: 'Sarah is a marketing strategist with a passion for building authentic brand connections. Her campaigns have helped our products reach millions of users worldwide, focusing on community engagement and user experience.',
      avatar: SenceImg01 // 占位符，实际需要添加头像图片
    }
  ]

  return (
    <div
      class="min-h-screen text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <video class="w-full" src={HeroVideo} muted loop autoplay />
      <div class="max-w-[1580px] mx-auto px-4 md:px-0 md:mx-[360px]">
        <section class="py-[140px] flex justify-between items-center">
          <div class="flex flex-col gap-5">
            <h3 class="text-[60px] leading-[85px]">
              Building Social Connections
            </h3>
            <p class="text-[20px] leading-[30px] font-semibold text-white max-w-[567px]">
              We create innovative social apps that bring people together,
              fostering meaningful relationships in the digital age.
            </p>
            <div class="flex gap-[16px]">
              <a
                href="#about"
                class="bg-white/10 rounded-[8px] py-[17px] px-[31px]"
              >
                Get Started
              </a>
              <a
                href="#about"
                class="py-[17px] px-[31px] rounded-[8px] bg-gradient-to-r from-[#5734FB] via-[#FC2BA0] to-[#FF1257]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div class="flex justify-center md:justify-end">
            <img src={SenceImg01} alt="" width={634} />
          </div>
        </section>
        <section class="space-y-24 flex flex-col py-[140px]">
          {sections.map((section) => (
            <ProductSection key={section.title} {...section} />
          ))}
        </section>

        {/* OUR PRODUCTS */}
        <section class="py-[140px] flex flex-col items-center">
          <BulletTitle text="OUR PRODUCTS" />
          <ProductSection
            title="Yoro"
            logo={YoroImage}
            desc="Yoro is an integrated platform combining diverse connection scenarios—It not only provides users with a social network to build meaningful relationships through shared interests and activities, but also offers organizations an all-in-one management solution to create and operate vibrant online communities, as well as helps professionals achieve career growth via efficient connection and collaboration, fully meeting the connection needs of different groups."
            links={[
              {
                text: 'Privacy agreement',
                href: 'https://pastoral.yoro.info/Terms&Conditions.html'
              },
              {
                text: 'Terms of service',
                href: 'https://pastoral.yoro.info/PrivacyPolicy.html'
              }
            ]}
            customHeader={
              <div class="flex flex-col gap-[14px]">
                <img src={YoroLogo} alt="" width={103} />
                <span class="text-[46px]">Yoro</span>
              </div>
            }
            logoWidth={520}
            logoPosition="right"
            class="w-full"
          />
        </section>

        {/* Core Team Member */}
        <section class="flex flex-col py-[140px]">
          <BulletTitle
            class="mb-[143px] justify-center"
            text={'CORE TEAM MEMBER'}
          />
          <div class="grid md:grid-cols-2 gap-x-[34px] gap-y-[83px]">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                class="relative bg-black/40 border border-white/20 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div class="absolute top-[-43px] right-[30px]  w-[139px] h-[139px] rounded-full bg-gradient-to-br from-[#FB6BFF] to-[#8B5CF6] mb-4 flex items-center justify-center">
                  {/* 用户头像图片 */}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    class="absolute w-full h-full rounded-full object-cover z-10 border-[6px] border-white/20 box-content"
                  />
                </div>
                <div class="text-white font-bold text-[26px] mb-3">
                  {member.name}
                </div>
                <div class="text-[#FFFFFF] text-[18px] mb-5 font-normal">
                  {member.title}
                </div>
                <div class="text-white/80 text-sm leading-relaxed">
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

Home.displayName = 'Home'

export default Home
