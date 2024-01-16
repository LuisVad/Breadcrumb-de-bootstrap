<script setup>
import VueRouter from 'vue-router';
</script>

<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Electronicos",
          href: "/#/electronicos",
          name:"electronicos"
        },
        {
          text: "Videojuegos",
          active: true
        },
      ],
    };
  },
};
</script>