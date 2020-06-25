<template lang="html">
    <form class="form search" @submit.prevent="$emit('input', myValue)">
        <label for="header-search">Waar ben je naar op zoek?</label>
        <input type="search" v-model="myValue" id="header-search" name="header-search" class="search inline"/>
        <input type="submit" value="Zoeken"/>
    </form>
</template>

<script lang="js">
  export default {
    name: 'search',
    props: ['value'],
    data () {
      return {
        myValue: this.value
      }
    }
  }
</script>


