<script>
  import {
    VTextarea,
    VTextField,
  } from 'vuetify/lib';
  export default {
    name: 'StylePanel',
    components: {
      VTextarea,
      VTextField,
    },
    props: {
      styleDefinition: {
        type: Object,
        required: true,
        default: () => {}
      },
    },
    methods: {
      update() {
        this.$emit('setStyle', this.styleDefinition);
      }
    }
  };
</script>

<template>
  <div>
    <v-text-field
      v-model="styleDefinition.name"
      @blur="update()"
      label="Name"
      filled
      color="accent"
    >
    </v-text-field>
    <v-textarea
      v-model="styleDefinition.css"
      @blur="update()"
      label="CSS Class"
      auto-grow
      filled
      color="accent"
      >
    </v-textarea>
  </div>
</template>

<style lang="scss" scoped>
</style>
