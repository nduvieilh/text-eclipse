<script>
  import {
    VRow,
    VCol,
    VSwitch,
    VSelect,
    VTextarea,
    VTextField,
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
    }
  };
</script>

<template>
  <div>
    <v-row>
        <v-col cols="6">
            <v-switch
                v-model="matchDefinition.active"
                label="Active"
            ></v-switch>
        </v-col>
        <v-col cols="6">
            <v-select
                label="Style"
                :items="styles"
                item-text="name"
                item-value="id"
                v-model="matchDefinition.style"
                filled
            >
            </v-select>
        </v-col>
    </v-row>
    <v-textarea
      v-model="cssString"
      label="Terms"
      hint="One Per Line"
      persistent-hint
      auto-grow
      filled
      color="accent"
      >
    </v-textarea>
  </div>
</template>

<style lang="scss" scoped>
</style>
