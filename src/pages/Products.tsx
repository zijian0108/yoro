import { BulletTitle, ProductSection, type ProductSectionProps } from "./_shared";
import type { FunctionalComponent } from "vue";
import Footer from '@/components/Footer'
import YoroImage from "@/static/images/products/yoro.webp?url";
import VideoChatImage from "@/static/images/products/video-chat.webp?url";
import ShortVideoImage from "@/static/images/products/short-video.webp?url";
import RandomMatchingImage from "@/static/images/products/random-matching.webp?url";
import BgImage from "@/static/images/products/bg.webp?url";
import YoroLogo from "@/static/images/logo-yoro.webp?url";

const Products: FunctionalComponent = () => {
  const sections: ProductSectionProps[] = [
    {
      title: "Yoro",
      logo: YoroImage,
      logoWidth: 520,
      logoPosition: "right",
      desc: "Yoro is an integrated platform combining diverse connection scenarios—It not only provides users with a social network to build meaningful relationships through shared interests and activities, but also offers organizations an all-in-one management solution to create and operate vibrant online communities, as well as helps professionals achieve career growth via efficient connection and collaboration, fully meeting the connection needs of different groups.",
      links: [
        { text: "Privacy agreement", href: "https://pastoral.yoro.info/Terms&Conditions.html" },
        { text: "Terms of service", href: "https://pastoral.yoro.info/PrivacyPolicy.html" },
      ],
      customHeader: (
        <div class="flex flex-col gap-[14px]">
          <img src={YoroLogo} alt="" width={103} />
          <span class="text-[46px] font-['Arial_Black']">Yoro</span>
        </div>
      ),
    },
    {
      title: "Video chat",
      logo: VideoChatImage,
      logoWidth: 520,
      logoPosition: "right",
      desc: "At ETERNALENAMEL, LLC, we’re committed to forging meaningful social connections via innovative technology. This section emphasizes **Professional connection for collaboration** and interpersonal depth. Our social applications build efficient collaborative bridges for professionals, while the **Interest matching for relationships** mechanism enables you to precisely expand your network even in professional exchanges, fully embodying our mission to “enhance human interaction and build stronger communities”.",
    },
    {
      title: "Short Video",
      logo: ShortVideoImage,
      logoWidth: 520,
      logoPosition: "left",
      desc: "ETERNALENAMEL, LLC reshapes social experiences with cutting-edge technology. This segment focuses on **Interest matching for relationships** and **Activity initiation & participation**. The platform empowers users to launch diverse social activities effortlessly, and precise interest matching helps you find like-minded partners in the community, driving **Community creation & management**—making every interaction a key step in building strongly connected communities.",
    },
    {
      title: "Random Matching",
      logo: RandomMatchingImage,
      logoWidth: 520,
      logoPosition: "right",
      desc: "ETERNALENAMEL, LLC specializes in creating an inclusive social ecosystem through technology. Here, you can experience the flexibility of **Community permission customization**, broaden your career prospects via **Professional skill display**, and engage deeply in **Community creation & management**. Whether you’re initiating cross-cultural interactions or joining interest circles, our platform creates a space that balances professionalism and social warmth, fully delivering on our commitment to “foster meaningful social connections”.",
    },
  ];

  return (
    <div
      class="min-h-screen text-white bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div class="py-10 px-4 2xl:px-0">
        <BulletTitle class="mt-[180px] justify-center text-[60px] mb-[6px]" text="OUR PRODUCTS" />
        <div class="space-y-24 flex flex-col mx-auto max-w-[1200px] 2xl:px-10">
          {sections.map((s) => (
            <ProductSection key={s.title} {...s} class="2xl:gap-10" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

Products.displayName = 'Products'

export default Products;
