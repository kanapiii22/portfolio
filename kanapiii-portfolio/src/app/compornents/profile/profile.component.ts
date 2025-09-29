import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <main class="md:mx-40">
      <section class="mb-10 block m-auto w-3/4">
        <h1 class="text-center mt-10 mb-5 font-bold text-3xl tracking-wide whitespace-nowrap">
          About Me
        </h1>
        <div class="flex flex-col items-center md:flex-row justify-center">
          <div class="flex flex-col items-center min-w-[220px] min-h-[208px]">
            <img
              src="icon.png"
              alt="icon"
              class="w-52 aspect-square rounded-full border border-solid border-gray-300"
            />
            <p class="md:mb-0 mt-4 mb-1 text-lg font-bold text-center">Kanapiii<br />(Kanako Itoyama)</p>
          </div>
        </div>
      </section>
      <section class="mb-10 block m-auto w-3/4">
        <h1 class="text-center mt-10 mb-2 font-bold text-3xl tracking-wide whitespace-nowrap">
          Blog
        </h1>
        <p class="text-center">Coming soon...</p>
      </section>
    </main>
    <footer class="text-center text-gray-400 text-xs my-10">
      <p>© 2025 Kanapiii</p>
    </footer>
  `,
})
export class ProfileComponent {}
