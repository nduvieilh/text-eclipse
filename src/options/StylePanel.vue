<script>
  import { debounce } from 'lodash';
  import {
    VRow,
    VCol,
    VTextarea,
    VTextField,
    VBtn,
  } from 'vuetify/lib';
  export default {
    name: 'StylePanel',
    components: {
      VRow,
      VCol,
      VTextarea,
      VTextField,
      VBtn,
    },
    props: {
      styleDefinition: {
        type: Object,
        required: true,
        default: () => {}
      },
    },
    methods: {
      update: _.debounce(function() {
        this.$emit('set-style', this.styleDefinition);
      }, 2000, {leading: true}),
      remove() {
        this.$emit('remove-style', this.styleDefinition);
      }
    }
  };
</script>

<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          v-model="styleDefinition.name"
          @input="update()"
          label="Name"
          filled
          color="accent"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          v-model="styleDefinition.css"
          @input="update()"
          label="CSS Class"
          auto-grow
          filled
          color="accent"
          >
        </v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          text
          color="red"
          @click="remove()"
        >Delete</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
</style>
