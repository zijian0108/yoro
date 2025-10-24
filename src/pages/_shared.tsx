import type { FunctionalComponent } from "vue";
import circleLeftImage from "@/static/images/circle-left.webp?url";
import circleRightImage from "@/static/images/circle-right.webp?url";

export const BulletTitle: FunctionalComponent<{
  text: string;
  class?: string;
}> = (props) => (
  <h2
    class={`font-extrabold tracking-tight text-white flex items-center text-5xl md:text-6xl ${props.class}`}
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

export const PlaceholderImg: FunctionalComponent<{ class?: string }> = (
  props,
) => (
  <div
    class={`bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-2xl ${props.class ?? "h-40"}`}
  />
);

export const PhoneMock: FunctionalComponent<{ class?: string }> = (props) => (
  <div
    class={`rounded-[2.25rem] border border-white/15 bg-black/50 p-4 shadow-lg ${props.class ?? "h-96"}`}
  >
    <div class="rounded-2xl bg-gradient-to-br from-purple-400/30 to-pink-400/25 border border-white/15 w-full h-full" />
  </div>
);
