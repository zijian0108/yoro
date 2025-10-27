import type { FunctionalComponent } from 'vue'
import BgImage from '@/static/images/delete-account/bg.webp?url'
import DeleteAccountImg01 from '@/static/images/delete-account/center-page.webp?url'
import DeleteAccountImg02 from '@/static/images/delete-account/center-set.webp?url'
import EmailImage from '@/static/images/email.webp?url'
import { BulletTitle } from './_shared'
import circleLeftImage from '@/static/images/circle-left.webp?url'

const DeleteAccount: FunctionalComponent = () => {
  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="max-w-6xl max-w-[1180px] mx-auto py-6 md:py-10 px-4 md:px-0">
        <BulletTitle class="mt-[80px] md:mt-[180px] justify-center text-[36px] md:text-[60px] mb-[6px]" text="DELETE ACCOUNT" />

        <section class="rounded-[20px] md:rounded-3xl bg-white/5 border border-white/10 p-6 md:p-12 mb-10 mt-6 md:mt-8">
          <h2 class="text-[28px] md:text-[41px] font-bold mb-3 md:mb-6">Important Information</h2>
          <p class="text-white/80 text-[16px] md:text-[20px] leading-relaxed mb-4 md:mb-6">
            Before you proceed with deleting your account, please read the following carefully:
          </p>
          <ul class="space-y-3 md:space-y-4 text-[14px] md:text-[18px] mb-8 md:mb-12">
            <li class="flex items-start gap-3">
              <div class="flex items-center h-[33px] w-[9px] shrink-0">
                <img src={circleLeftImage} alt="" class="w-full h-[9px] object-cover"/>
              </div>
              <span class="text-white/80 leading-[33px] text-[24px]">Deleting your account is permanent and irreversible.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex items-center h-[33px] w-[9px] shrink-0">
                <img src={circleLeftImage} alt="" class="w-full h-[9px] object-cover"/>
              </div>
              <span class="text-white/80 leading-[33px] text-[24px]">All of your data, including personal information, will be permanently deleted.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex items-center h-[33px] w-[9px] shrink-0">
                <img src={circleLeftImage} alt="" class="w-full h-[9px] object-cover"/>
              </div>
              <span class="text-white/80 leading-[33px] text-[24px]">You will no longer be able to access your account or any associated services.</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex items-center h-[33px] w-[9px] shrink-0">
                <img src={circleLeftImage} alt="" class="w-full h-[9px] object-cover"/>
              </div>
              <span class="text-white/80 leading-[33px] text-[24px]">Any outstanding orders, tasks, or other pending items will be lost.</span>
            </li>
          </ul>
          
          <h2 class="text-[28px] md:text-[41px] font-bold mb-3 md:mb-6">Delete Account</h2>
          <p class="text-white/80 text-[16px] md:text-[20px] leading-relaxed mb-6 md:mb-8">
            To proceed with deleting your account, please follow these steps:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div class="flex justify-center">
              <img src={DeleteAccountImg01} alt="Delete Account Step 1" class="w-full max-w-[400px] md:max-w-none md:h-[744px] object-contain" />
            </div>
            <div class="flex justify-center">
              <img src={DeleteAccountImg02} alt="Delete Account Step 2" class="w-full max-w-[400px] md:max-w-none md:h-[744px] object-contain" />
            </div>
          </div>
          <ul class="space-y-3 md:space-y-4 text-[14px] md:text-[18px]">
            <li class="flex items-baseline gap-6">
              <div class="flex items-center h-[33px] w-[9px] shrink-0">
                <img src={circleLeftImage} alt="" class="w-full h-[9px] object-cover"/>
              </div>
              <span class="text-white/80 text-[24px] leading-[33px]">Please note that the process may take some time to complete depending on the amount of data associated with your account. Once your account is deleted, you will receive a confirmation email.</span>
            </li>
          </ul>
          
          <h2 class="text-[28px] md:text-[41px] font-bold mt-8 md:mt-12 mb-3 md:mb-6">Contact Us</h2>
          <p class="text-white/80 text-[24px] leading-relaxed mb-4">
            If you have any questions or concerns, please do not hesitate to contact our customer support team:
          </p>
          <div class="flex items-center gap-1 text-white/80 text-[24px]">
            <img src={EmailImage} alt="Email" width={24} />
            <span>Email: </span>
            <a href="mailto:retreatblissful506@gmail.com" class="text-white hover:text-pink-400 transition-colors">
              retreatblissful506@gmail.com
            </a>
          </div>
        </section>
        <footer class="mt-30 border-t border-white/30 pt-[18px] text-center pb-[64px] text-[14px]">
          Copyright: © 2024 ETERNALENAMEL LLC.
        </footer>
      </div>
    </div>
  )
}

DeleteAccount.displayName = 'DeleteAccount'

export default DeleteAccount
