import type { FunctionalComponent } from 'vue'
import { BulletTitle, PhoneMock } from './_shared'

const DeleteAccount: FunctionalComponent = () => {
  return (
    <div class="min-h-screen text-white bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <BulletTitle text="DELETE ACCOUNT" />

        <section class="rounded-3xl bg-white/5 border border-white/10 p-6 mb-10 mt-8">
          <h2 class="text-2xl font-bold mb-3">Important Information</h2>
          <ul class="list-disc pl-6 text-white/80 space-y-2 text-sm">
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
        </section>

        <section class="rounded-3xl bg-white/5 border border-white/10 p-6 mb-10">
          <h2 class="text-2xl font-bold mb-3">Delete Account</h2>
          <p class="text-white/80 text-sm leading-relaxed mb-4">
            To proceed with deleting your account, please follow these steps:
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <PhoneMock class="h-80" />
            <PhoneMock class="h-80" />
          </div>
          <p class="text-white/60 text-xs mt-4">
            The process may take time depending on your data size. After
            deletion, you will receive a confirmation email.
          </p>
        </section>

        <footer class="border-t border-white/10 pt-8">
          <h3 class="text-2xl font-bold mb-3">Contact Us</h3>
          <ul class="text-white/80 space-y-2 text-sm">
            <li>Email: retreatblissful506@gmail.com</li>
          </ul>
          <p class="text-white/30 text-xs mt-6">
            Copyright © 2024 ETERNALENAMEL LLC.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default DeleteAccount
