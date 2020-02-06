<script>
  import { debounce } from 'lodash';
  import {
    VRow,
    VCol,
    VSwitch,
    VSelect,
    VTextarea,
    VTextField,
    VBtn,
  } from 'vuetify/lib';
  export default {
    name: 'MatchPanel',
    components: {
      VRow,
      VCol,
      VSwitch,
      VSelect,
      VTextarea,
      VTextField,
      VBtn,
    },
    props: {
      matchDefinition: {
        type: Object,
        required: true,
        default: () => {}
      },
      styles: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    computed: {
      cssString: {
          get() {
              return this.matchDefinition.strings.join('\n');
          },
          set(value) {
              this.matchDefinition.strings = value.split('\n');
          }
      },
    },
    methods: {
      update: _.debounce(function(){
        this.$emit('set-match', this.matchDefinition);
      }, 2000, {leading: true}),
      remove() {
        (() => {
        this.$emit('remove-match', this.matchDefinition);
        })();
      }
    },
  };
</script>

<template>
  <div>
    <v-row>
        <v-col cols="6">
            <v-switch
                v-model="matchDefinition.active"
                @change="update()"  
                label="Active"
            ></v-switch>
        </v-col>
        <v-col cols="6">
            <v-select
                v-model="matchDefinition.style"
                @change="update()"
                label="Style"
                :items="styles"
                item-text="name"
                item-value="id"
                filled
            >
            </v-select>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          v-model="cssString"
          @input="update()"
          label="Terms"
          hint="One Per Line"
          persistent-hint
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
