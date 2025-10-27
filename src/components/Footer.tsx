import type { FunctionalComponent } from 'vue'
import LocationImage from "@/static/images/location.webp?url";
import PhoneImage from "@/static/images/phone.webp?url";
import EmailImage from "@/static/images/email.webp?url";

const Footer: FunctionalComponent = () => {
  return (
    <footer class="mt-28 mx-auto max-w-[1180px] border-t border-white/10 pt-8 pb-16">
      <h3 class="text-5xl text-white/80 font-bold mb-[38px]">Contact Us</h3>
      <ul class="text-white/80 space-y-[30px] text-base">
        <li class="flex item-center gap-[14px]">
          <img src={LocationImage} alt="" width={25} class="inline-block align-top" />
          710 Whitewater Ave, Brea, CA 92860, United States
        </li>
        <li class="flex item-center gap-[14px]">
          <img src={PhoneImage} alt="" width={25} class="inline-block align-top" />
          +1 (702) 323-5463
        </li>
        <li class="flex item-center gap-[14px]">
          <img src={EmailImage} alt="" width={25} class="inline-block align-top" />
          Email: eternalenamel@gmail.com
        </li>
      </ul>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default Footer