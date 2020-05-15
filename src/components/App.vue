<template>
  <div id="app" class="h-full flex flex-col justify-between">
    <header class="py-5">
      <nav>
        <ul class="flex justify-center">
          <li>
            <router-link to="/" class="block p-2">Home</router-link>
          </li>
          <li>
            <router-link to="/characters" class="block p-2 mx-2">Characters</router-link>
          </li>
          <li>
            <router-link to="/comics" class="block p-2">Comics</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="px-4 xl:max-w-screen-xl mx-auto">
      <router-view></router-view>
    </main>
    <footer>
      <div class="py-5 px-2 text-center">By Genivaldo Silva</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
