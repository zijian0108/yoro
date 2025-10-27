import type { FunctionalComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { BulletTitle } from './_shared'
import Footer from '@/components/Footer'
import BgImage from '@/static/images/home/bg.webp?url'
import SenceImg01 from '@/static/images/home/sence-img01.webp?url'
import SenceImg02 from '@/static/images/home/sence-img02.webp?url'
import SenceImg03 from '@/static/images/home/sence-img03.webp?url'
import SenceImg04 from '@/static/images/home/sence-img04.webp?url'
import YoroLogo from '@/static/images/logo-yoro.webp?url'
import YoroImage from "@/static/images/products/yoro.webp?url";

const Home: FunctionalComponent = () => {
  const sections = [
    {
      id: 'building-social-connections',
      title: 'Building Social Connections',
      description: 'We build warm connections via chat, short video, and random matching. Explore delightful interactions and friendly communities.',
      image: SenceImg01,
      imagePosition: 'right',
      maxWidth: '540px',
      hasButtons: true,
      buttons: [
        { text: 'Get Started', type: 'secondary' },
        { text: 'Learn More', type: 'primary' }
      ],
      customHeader: (
        <div class="flex flex-col gap-[14px]">
          {/* <img src={YoroLogo} alt="" width={103} /> */}
          <span class="text-[60px] line-height-[85px]">Building Social Connections</span>
        </div>
      )
    },
    {
      id: 'about-us',
      title: 'About Us',
      description: 'Our Mission At ETERNALENAMEL LLC, we`re dedicated to creating meaningful social connections through innovative technology. Our mission is to develop social applications that enhance human interaction and build stronger communities.',
      image: SenceImg02,
      imagePosition: 'left',
      maxWidth: '568px',
      hasButtons: false
    },
    {
      id: 'our-vision',
      title: 'Our Vision',
      description: 'We envision a world where technology brings people closer together, fostering genuine connections and creating positive social impact through our carefully crafted applications.',
      image: SenceImg03,
      imagePosition: 'right',
      maxWidth: '567px',
      hasButtons: false
    }
  ];

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
  ];

  return (
    <div
      class="min-h-screen text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div class="max-w-[1580px] mx-auto px-4 md:px-8 py-8">
        {/* Hero */}
        <section class="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 mb-12">
          <div class="flex flex-col md:flex-row gap-10 items-center">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-4">
                <img src={YoroLogo} alt="" width={40} class="rounded-lg" />
                <span class="text-lg font-semibold">Yoro</span>
              </div>
              <h1 class="text-4xl md:text-5xl font-extrabold mb-3">Welcome!</h1>
              <p class="text-white/80 mb-6">
                Let's start the exciting chat time now!
              </p>
              <div class="flex gap-3 mb-6">
                <div class="h-10 w-32 rounded-xl bg-white/15 border border-white/20" />
                <div class="h-10 w-32 rounded-xl bg-white/15 border border-white/20" />
              </div>
              <div class="flex gap-3">
                <RouterLink
                  to="/products"
                  class="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold"
                >
                  Our Products
                </RouterLink>
                <RouterLink
                  to="/culture"
                  class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold"
                >
                  Learn More
                </RouterLink>
              </div>
            </div>
            <div class="flex-1 grid grid-cols-3 gap-3 opacity-90 w-full">
              {[SenceImg01, SenceImg02, SenceImg03, SenceImg04].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  class="aspect-square rounded-xl object-cover border border-white/20"
                />
              ))}
              {[SenceImg02, SenceImg03, SenceImg04, SenceImg01, SenceImg03].map((src, idx) => (
                <img
                  key={`rep-${idx}`}
                  src={src}
                  alt=""
                  class="aspect-square rounded-xl object-cover border border-white/20"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Configurable Sections */}
        <div class="space-y-24 flex flex-col">
          {sections.map((section) => (
            <div
              key={section.id}
              class={`flex items-center justify-center gap-10 ${section.imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div class="max-w-[640px] flex flex-col gap-5">
                {section.customHeader ?? <BulletTitle class="text-[60px]" text={section.title} />}
                <p class="text-white/80 text-[20px] leading-[30px] max-w-[567px] font-semibold">
                  {section.description}
                </p>
                {section.hasButtons && (
                  <div class="flex flex-wrap gap-6">
                    {section.buttons?.map((button, idx) => (
                      <button
                        key={idx}
                        type="button"
                        class={`px-4 py-2 w-[224px] h-[70px] rounded-[8px] text-[25.6px] font-semibold ${
                          button.type === 'primary'
                            ? 'bg-pink-500 hover:bg-pink-600'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div class="flex justify-center md:justify-end">
                 <img
                   src={section.image}
                   alt={section.title}
                  //  class="select-none rounded-2xl border border-white/10"
                   class="rounded-2xl border border-white/10 w-full" 
                   style={{ maxWidth: section.maxWidth }}
                 />
               </div>
            </div>
          ))}
        </div>

        {/* OUR PRODUCTS */}
        <section class="space-y-24 flex flex-col">
          <div class="flex items-center justify-center flex-row gap-10">
            <div class="max-w-[1180px] flex flex-col gap-5">
              <BulletTitle class="mt-[90px] justify-center mb-[49px]" text={'OUR PRODUCTS'} />
              <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="flex-1 flex flex-col gap-5">
                  <div class="flex flex-col pl-10 gap-[14px]">
                    <img src={YoroLogo} alt="" width={103} />
                    <span class="text-[46px]">Yoro</span>
                  </div>
                  <p class="text-[20px] leading-[30px] font-semibold text-white max-w-[567px]">
                    Yoro is an integrated platform combining diverse community experiences. It not only provides users with a comprehensive social experience, but also offers diverse browsing and activities. Our app offers comprehensive social management solutions for users, helping professionals achieve stable growth with efficient and intelligent social management tools.
                  </p>
                  <div class="flex items-center gap-6 flex-wrap">
                    <a href="#" class="text-[#FB6BFF] text-lg font-semibold hover:underline flex items-center gap-x-[5px]">
                      Privacy statement
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="#" class="text-[#FB6BFF] text-lg font-semibold hover:underline flex items-center gap-x-[5px]">
                      Terms of service
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="flex justify-center md:justify-end select-none">
                  <div
                    class="flex justify-center md:justify-end"
                  >
                    <img
                      src={YoroImage}
                      class="select-none"
                      style={{
                        width: '634px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Member */}
        <section class="space-y-24 flex flex-col">
          <div class="flex items-center justify-center">
            <div class="max-w-[1180px] flex flex-col gap-5">
              <BulletTitle class="mt-[90px] justify-center mb-[90px]" text={'CORE TEAM MEMBER'} />
              <div class="grid md:grid-cols-2 gap-6">
                {teamMembers.map((member) => (
                  <div key={member.name} class="relative bg-black/40 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div class="absolute top-[-43px] right-[30px]  w-[139px] h-[139px] rounded-full bg-gradient-to-br from-[#FB6BFF] to-[#8B5CF6] mb-4 flex items-center justify-center">
                      {/* 默认头像背景 */}
                      <div class="inset-0  rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                        {member.name.charAt(0)}
                      </div>
                      {/* 用户头像图片 */}
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        class="absolute w-full h-full rounded-full object-cover z-10"
                      />
                    </div>
                    <div class="text-white font-bold text-[26px] mb-3">{member.name}</div>
                    <div class="text-[#FFFFFF] text-[18px] mb-5">{member.title}</div>
                    <div class="text-white/80 text-sm leading-relaxed">{member.bio}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

Home.displayName = 'Home'

export default Home
