<script>
  import { debounce } from 'lodash';
  import {
    VRow,
    VCol,
    VTextarea,
    VTextField,
    VBtn,
    VTabs,
    VTab,
    VTabItem,
    VTabsSlider,
    VIcon,
  } from 'vuetify/lib';
  export default {
    name: 'StylePanel',
    components: {
      VRow,
      VCol,
      VTextarea,
      VTextField,
      VBtn,
      VTabs,
      VTab,
      VTabItem,
      VTabsSlider,
      VIcon,
    },
    props: {
      styleDefinition: {
        type: Object,
        required: true,
        default: () => {}
      },
    },
    data() {
      return {
        tab: null
      }
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
    <v-text-field
      v-model="styleDefinition.name"
      @input="update()"
      label="Name"
      filled
      color="accent"
    >
    </v-text-field>
    <v-tabs
      class="mb-3"
      fixed-tabs
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab>class</v-tab>
      <v-tab>:hover</v-tab>
      <v-tab>:before</v-tab>
      <v-tab>:after</v-tab>

      <v-tab-item>
        <v-textarea
          v-model="styleDefinition.selectors.class"
          @input="update()"
          label="class"
          auto-grow
          filled
          color="accent"
          >
        </v-textarea>
      </v-tab-item>
      <v-tab-item>
        <v-textarea
          v-model="styleDefinition.selectors.hover"
          @input="update()"
          label=":hover"
          auto-grow
          filled
          color="accent"
          >
        </v-textarea>
      </v-tab-item>
      <v-tab-item>
        <v-textarea
          v-model="styleDefinition.selectors.before"
          @input="update()"
          label=":before"
          auto-grow
          filled
          color="accent"
          >
        </v-textarea>
      </v-tab-item>
      <v-tab-item>
        <v-textarea
          v-model="styleDefinition.selectors.after"
          @input="update()"
          label=":after"
          auto-grow
          filled
          color="accent"
          >
        </v-textarea>
      </v-tab-item>
    </v-tabs>
    <v-btn
      text
      color="red"
      @click="remove()"
    >Delete</v-btn>
  </div>
</template>

<style lang="scss" scoped>
</style>
