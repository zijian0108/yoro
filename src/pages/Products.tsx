import { BulletTitle } from "./_shared";
import type { FunctionalComponent } from "vue";
import YoroImage from "@/static/images/products/yoro.webp?url";
import VideoChatImage from "@/static/images/products/video-chat.webp?url";
import ShortVideoImage from "@/static/images/products/short-video.webp?url";
import RandomMatchingImage from "@/static/images/products/random-matching.webp?url";
import BgImage from "@/static/images/products/bg.webp?url";
import YoroLogo from "@/static/images/logo-yoro.webp?url";
import ArrowRightImage from "@/static/images/arrow-right.webp?url";

const Products: FunctionalComponent = () => {
  const sections = [
    {
      title: "Yoro",
      logo: YoroImage,
      logoWidth: 643,
      logoHeight: 748,
      logoPosition: "right",
      desc: "Yoro is an integrated platform combining diverse connection scenarios—It not only provides users with a social network to build meaningful relationships through shared interests and activities, but also offers organizations an all-in-one management solution to create and operate vibrant online communities, as well as helps professionals achieve career growth via efficient connection and collaboration, fully meeting the connection needs of different groups.",
      links: [
        { text: "Privacy agreement", href: "https://pastoral.yoro.info/Terms&Conditions.html" },
        { text: "Terms of service", href: "https://pastoral.yoro.info/PrivacyPolicy.html" },
      ],
      customHeader: (
        <div class="flex flex-col gap-[14px]">
          <img src={YoroLogo} alt="" width={103} />
          <span class="text-[46px]">Yoro</span>
        </div>
      ),
    },
    {
      title: "Video chat",
      logo: VideoChatImage,
      logoHeight: 907,
      logoPosition: "right",
      leftAttr: {
        paddingLeft: '82px'
      },
      desc: "ETERNALENAMEL, LLC reshapes social experiences with cutting-edge technology. This segment focuses on **Interest matching for relationships** and **Activity initiation & participation**. The platform empowers users to launch diverse social activities effortlessly, and precise interest matching helps you find like-minded partners in the community, driving **Community creation & management**—making every interaction a key step in building strongly connected communities.",
    },
    {
      title: "Short Video",
      logo: ShortVideoImage,
      logoHeight: 926,
      logoPosition: "left",
      desc: "ETERNALENAMEL, LLC reshapes social experiences with cutting-edge technology. This segment focuses on **Interest matching for relationships** and **Activity initiation & participation**. The platform empowers users to launch diverse social activities effortlessly, and precise interest matching helps you find like-minded partners in the community, driving **Community creation & management**—making every interaction a key step in building strongly connected communities.",
    },
    {
      title: "Random Matching",
      logo: RandomMatchingImage,
      logoHeight: 841,
      logoPosition: "right",
      desc: "ETERNALENAMEL, LLC specializes in creating an inclusive social ecosystem through technology. Here, you can experience the flexibility of **Community permission customization**, broaden your career prospects via **Professional skill display**, and engage deeply in **Community creation & management**. Whether you’re initiating cross-cultural interactions or joining interest circles, our platform creates a space that balances professionalism and social warmth, fully delivering on our commitment to “foster meaningful social connections”.",
    },
  ];

  return (
    <div
      class="min-h-screen text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div class="max-w-[1580px] mx-auto px-4 md:px-8 py-10">
        <BulletTitle class="mt-[180px] justify-center mb-[6px]" text="OUR PRODUCTS" />
        <div class="space-y-24 flex flex-col">
          {sections.map((s) => (
            <div
              key={s.title}
              class={`flex items-center justify-center ${s.logoPosition === "right" ? "flex-row" : "flex-row-reverse"}`}
            >
              <div class="max-w-[640px] flex flex-col gap-5" style={s.leftAttr}>
                {s.customHeader ?? <BulletTitle class="" text={s.title} />}
                <p class="text-white/80 text-[20px] leading-[30px] max-w-[567px] font-semibold">
                  {s.desc}
                </p>
                {s.links && (
                  <div class="4 flex flex-wrap gap-6 text-pink-300 text-sm">
                    {s.links.map((l) => (
                      <a key={l.text} href={l.href} class="text-[#FB6BFF] flex items-center gap-x-[5px] text-lg">
                        <span>{l.text}</span>
                        <img
                          src={ArrowRightImage}
                          alt=""
                          width={18}
                          class="align-top"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                class="flex justify-center md:justify-end"
              >
                <img
                  src={s.logo}
                  alt={s.title}
                  class="select-none"
                  style={{
                    height: `${s.logoHeight}px`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Products.displayName = 'Products'

export default Products;
