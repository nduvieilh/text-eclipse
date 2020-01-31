<script>
import StorageService from '../StorageService';
import { 
    VBtn,
    VContainer,
    VDialog,
    VForm,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardActions,
    VTextField
} from 'vuetify/lib';
export default {
  components: {
    VBtn,
    VCard,
    VContainer,
    VDialog,
    VForm,
    VRow,
    VCol,
    VCardTitle,
    VCardActions,
    VTextField
  },
  data() {
      return {
          dialog: false,
          formValid: false,
          cssName: '',
          styleName: '',
      }
  },
  methods: {
      addStyle() {
          let storageService = new StorageService();
          storageService.getStyles().then(result => {
              result.push({
                  name: this.styleName, 
                  css: this.cssName
              });
              storageService.setStorage({styles: result}).then(() => {
                this.dialog = false;
              })
          })
      }
  }
};
</script>

<template>
<div>
    <v-btn
      fab
      small
      color="green"
      @click.stop="dialog = true"
    >
      Add Styles
    </v-btn>
    <v-dialog
    max-width="600"
    v-model="dialog">
        <v-card>
            <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            Add Style
            </v-card-title>
            <v-form
                v-model="formValid">
                <v-container>
                        <v-text-field
                            v-model="styleName"
                            label="Name"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="cssName"
                            label="Css"
                            required
                        ></v-text-field>
                </v-container>
            </v-form>
            <v-card-actions>
                <v-btn
                    color="primary"
                    @click.stop="addStyle"
                >
                    Add
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<style lang="scss" scoped>
</style>
