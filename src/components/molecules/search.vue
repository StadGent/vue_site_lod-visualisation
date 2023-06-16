<template>
  <form class="form search" @submit.prevent="$emit('update:value', myValue)">
    <label for="header-search">Waar ben je naar op zoek?</label>
    <input type="search" v-model="myValue" id="header-search" name="header-search" class="search inline" />
    <input type="submit" value="Zoeken" />
  </form>
</template>

<script>
export default {
  name: 'Search',
  props: ['value'],
  data() {
    return {
      myValue: this.value
    };
  }
};
</script>
