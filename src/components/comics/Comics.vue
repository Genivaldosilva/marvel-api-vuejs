<template>
  <section>
    <div class="text-2xl text-gray-600" v-if="loading">Loading...</div>
    <ul v-if="!loading">
      <li class="mb-5" v-for="item in comics" :key="item.id">
        <h2 class="font-bold text-2xl mb-3 md:hidden">{{ item.title }}</h2>
        <div class="md:flex">
          <img
            class="md:max-w-xs"
            :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
            :alt="`Imagem of ${item.title}`"
          />
          <div class="md:ml-5">
            <h2 class="font-bold text-2xl mb-3 hidden md:block">{{ item.title }}</h2>
            <p v-if="item.description" v-html="item.description"></p>
            <p v-else>No description.</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import api from "../../services/api";

export default {
  name: "Comics",

  data() {
    return {
      loading: true,
      comics: []
    };
  },

  created() {
    api.getComics().then(({ data }) => {
      this.comics = data.data.results;
      this.loading = false;
    });
  }
};
</script>
