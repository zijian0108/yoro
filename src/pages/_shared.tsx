import type { FunctionalComponent, VNode } from "vue";
import circleLeftImage from "@/static/images/circle-left.webp?url";
import circleRightImage from "@/static/images/circle-right.webp?url";
import ArrowRightImage from "@/static/images/arrow-right.webp?url";

export const BulletTitle: FunctionalComponent<{
  text: string;
  class?: string;
}> = (props) => (
  <h2
    class={`
      font-extrabold tracking-tight text-white flex items-center text-5xl md:text-6xl font-['Arial_Black'] ${props.class}`}
  >
    <div class="flex items-center mr-[14px]">
      <img src={circleLeftImage} alt="" width={29} height={29} />
      <img
        class="-translate-x-1/2"
        src={circleRightImage}
        alt=""
        width={29}
        height={29}
      />
    </div>
    {props.text}
  </h2>
);

BulletTitle.displayName = 'BulletTitle'

export const PlaceholderImg: FunctionalComponent<{ class?: string }> = (
  props,
) => (
  <div
    class={`bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-2xl ${props.class ?? "h-40"}`}
  />
);

PlaceholderImg.displayName = 'PlaceholderImg'

export const PhoneMock: FunctionalComponent<{ class?: string }> = (props) => (
  <div
    class={`rounded-[2.25rem] border border-white/15 bg-black/50 p-4 shadow-lg ${props.class ?? "h-96"}`}
  >
    <div class="rounded-2xl bg-gradient-to-br from-purple-400/30 to-pink-400/25 border border-white/15 w-full h-full" />
  </div>
);

PhoneMock.displayName = 'PhoneMock'

export interface ProductSectionProps {
  title: string;
  logo: string;
  logoPosition?: "left" | "right";
  desc: string;
  links?: Array<{ text: string; href: string }>;
  customHeader?: VNode;
  leftAttr?: Record<string, string | number>;
  logoWidth?: number;
  id?: string;
  class?: string;
}

export const ProductSection: FunctionalComponent<ProductSectionProps> = (props) => {
  const {
    title,
    logo,
    logoWidth,
    logoPosition = "right",
    desc,
    links,
    customHeader,
    leftAttr,
    id,
    class: className
  } = props;

  return (
    <div
      id={id}
      class={`flex items-center justify-between flex-wrap ${className}`}
    >
      <div class={`flex flex-col gap-5 ${logoPosition === "left" ? "order-1" : "-order-1"}`} style={leftAttr}>
        {customHeader ?? <BulletTitle class="" text={title} />}
        <p class="text-white/80 text-[20px] leading-[30px] max-w-[567px] font-semibold">
          {desc}
        </p>
        {links && (
          <div class="flex flex-wrap gap-6 text-pink-300 text-sm">
            {links.map((l) => (
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

      <div class="flex justify-center md:justify-end">
        <img
          src={logo}
          alt={title}
          class="select-none"
          style={{
            width:  `${logoWidth}px`
          }}
        />
      </div>
    </div>
  );
};

ProductSection.displayName = 'ProductSection'
