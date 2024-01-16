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
          text: "Cocinas",
          href: "/#/cocinas",
          name:"cocinas"
        },
        {
          text: "Estufas",
          active: true
        },
      ],
    };
  },
};
</script>