<template>
  <transition name="fade" mode="out-in">
    <nav v-if="crumbs && crumbs.length"
         class="breadcrumb section--default" aria-labelledby="system-breadcrumb">
      <div class="content-container">
        <h2 id="system-breadcrumb" class="visually-hidden">Breadcrumb</h2>
        <ol class="breadcrumb no-style">
          <li v-for="(crumb, index) in crumbs" :key="'crumb-' + index">
            <router-link v-if="crumb.link" :to="{ name: crumb.link }">{{ crumb.name }}</router-link>
            <span v-else>{{ crumb.name }}</span>
          </li>
        </ol>
      </div>
    </nav>
  </transition>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const crumbs = ref([]);

    const updateCrumbs = () => {
      crumbs.value = route.meta ? route.meta.breadcrumb : [];
    };

    watch(() => route, updateCrumbs);
    onMounted(updateCrumbs);

    return {
      crumbs
    };
  }
};
</script>
