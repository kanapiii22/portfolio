import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <main class="md:mx-40">
      <section class="mb-10 block m-auto w-3/4">
        <h1 class="text-center mt-10 mb-5 font-bold text-3xl tracking-wide whitespace-nowrap">
          About Me
        </h1>
        <div class="flex flex-col items-center">
          <div class=" items-center ">
            <img
              src="icon.png"
              alt="icon"
              class="w-52 aspect-square rounded-full border border-solid border-gray-300"
            />
            <p class="md:mb-0 mt-4 mb-1 text-lg font-bold text-center">
              Kanapiii<br />(Kanako Itoyama)
            </p>
          </div>
          <!-- ここにSVGアイコンを追加 -->
          <div class="flex items-center justify-center mt-4">
            <a href="https://github.com/kanapiii22" target="_blank" rel="noopener">
            <img src="github_icon.svg" alt="GitHub" class="w-12 h-12 mx-4 my-2" />
            </a>
            <a href="https://twitter.com/kanapiii2299" target="_blank" rel="noopener">
              <img src="x_icon.svg" alt="X" class="w-12 h-12 mx-4 my-2" />
            </a>
            <a href="https://instagram.com/iam_kanapiii22" target="_blank" rel="noopener">
              <img src="instagram_icon.svg" alt="Instagram" class="w-12 h-12 mx-4 my-2" />
            </a>
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
