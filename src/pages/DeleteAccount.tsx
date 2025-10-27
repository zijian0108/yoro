import type { FunctionalComponent } from 'vue'
import BgImage from '@/static/images/delete-account/bg.webp?url'
import DeleteAccountImg01 from '@/static/images/delete-account/center-page.webp?url'
import DeleteAccountImg02 from '@/static/images/delete-account/center-set.webp?url'
import { BulletTitle } from './_shared'
import Footer from '@/components/Footer'

const DeleteAccount: FunctionalComponent = () => {
  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}
    >
      <div class="max-w-6xl max-w-[1180px] mx-auto py-10">
        <BulletTitle class="mt-[180px] justify-center text-[60px] mb-[6px]" text="DELETE ACCOUNT" />

        <section class="rounded-3xl bg-white/5 border border-white/10 p-6 mb-10 mt-8">
          <h2 class="text-[41px] font-bold mb-3">Important Information</h2>
          <p class="text-white/80 text-[25px] leading-relaxed mb-4">
            Before you proceed with deleting your account, please read the following carefully:
          </p>
          <ul class="list-disc pl-6 text-white/80 space-y-2 text-[18px]">
            <li>Deleting your account is permanent and irreversible.</li>
            <li>
              All of your data, including personal information, will be
              permanently deleted.
            </li>
            <li>
              You will no longer be able to access your account or any
              associated services.
            </li>
            <li>
              Any outstanding orders, tasks, or other pending items will be
              lost.
            </li>
          </ul>
          <h2 class="text-[41px] font-bold mt-12 mb-3">Delete Account</h2>
          <p class="text-white/80 text-[25px] leading-relaxed mb-4">
            To proceed with deleting your account, please follow these steps:
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex justify-center">
              <img src={DeleteAccountImg01} alt="Delete Account Step 1" class="h-[744px] object-contain" />
            </div>
            <div class="flex justify-center">
              <img src={DeleteAccountImg02} alt="Delete Account Step 2" class="h-[744px] object-contain" />
            </div>
          </div>
          <ul class="list-disc pl-6 mt-[30px] text-white/80 space-y-2 text-[18px]">
            <li>
              Please note that the process may take some time to complete depending on the amount of data associated with your account. Once your account is deleted, you will receive a confirmation email.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  )
}

DeleteAccount.displayName = 'DeleteAccount'

export default DeleteAccount
