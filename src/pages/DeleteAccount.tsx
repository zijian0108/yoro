import type { FunctionalComponent } from 'vue'
import BgImage from '@/static/images/delete-account/bg.webp?url'
import DeleteAccountImg01 from '@/static/images/delete-account/center-page.webp?url'
import DeleteAccountImg02 from '@/static/images/delete-account/center-set.webp?url'
import EmailImage from '@/static/images/email.webp?url'
import { BulletTitle } from './_shared'
import circleLeftImage from '@/static/images/circle-left.webp?url'

const DeleteAccount: FunctionalComponent = () => {
  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black 2xl:px-4"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="max-w-[1180px] mx-auto py-10 px-4 2xl:px-0">
        <BulletTitle class="mt-[180px] justify-center text-[60px] mb-[80px]" text="DELETE ACCOUNT" />

        <section class="rounded-3xl bg-white/5 border border-white/10 p-12 mb-10 mt-8">
          <h2 class="text-[41px] font-bold mb-6">Important Information</h2>
          <p class="text-white/80 text-[20px] leading-relaxed mb-6">
            Before you proceed with deleting your account, please read the following carefully:
          </p>
          <ul class="space-y-4 text-[18px] mb-12">
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
          
          <h2 class="text-[41px] font-bold mb-6">Delete Account</h2>
          <p class="text-white/80 text-[20px] leading-relaxed mb-8">
            To proceed with deleting your account, please follow these steps:
          </p>
          <div class="grid grid-cols-2 gap-8 mb-8">
            <div class="flex justify-center">
              <img src={DeleteAccountImg01} alt="Delete Account Step 1" class="h-[744px] object-contain" />
            </div>
            <div class="flex justify-center">
              <img src={DeleteAccountImg02} alt="Delete Account Step 2" class="h-[744px] object-contain" />
            </div>
          </div>
          <ul class="space-y-4 text-[18px]">
            <li class="flex items-baseline gap-6">
              <div class="flex items-center h-[33px] w-[9px] shrink-0">
                <img src={circleLeftImage} alt="" class="w-full h-[9px] object-cover"/>
              </div>
              <span class="text-white/80 text-[24px] leading-[33px]">Please note that the process may take some time to complete depending on the amount of data associated with your account. Once your account is deleted, you will receive a confirmation email.</span>
            </li>
          </ul>
          
          <h2 class="text-[41px] font-bold mt-12 mb-6">Contact Us</h2>
          <p class="text-white/80 text-[24px] leading-relaxed mb-4">
            If you have any questions or concerns, please do not hesitate to contact our customer support team:
          </p>
          <div class="flex items-center gap-1 text-white/80 text-[24px] flex-wrap">
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
