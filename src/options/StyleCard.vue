<script>
  import {
    VTextarea,
    VTextField,
  } from 'vuetify/lib';
  export default {
    name: 'StyleCard',
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
    }
  };
</script>

<template>
  <div>
    <v-text-field
      v-model="styleDefinition.name"
      label="Name"
      :full-width="true"
      outlined
      filled
    >
      <template slot="append-outer">
        <span :style="styleDefinition.css">
          {{styleDefinition.name}}
        </span>
      </template>
    </v-text-field>
    <v-textarea
      v-model="styleDefinition.css"
      :auto-grow="true"
      :full-width="true"
      outlined
      filled
      >
    </v-textarea>
  </div>
</template>

<style lang="scss" scoped>
</style>
