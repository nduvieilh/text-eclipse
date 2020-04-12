<template>
  <Layout>
    <container-card>

      <v-row>
        <v-col cols="6">
          <v-card flat>
            <v-card-title>
              Customizable highlight styling
            </v-card-title>
            <v-card-text>
              Unlimited style combinations powered by CSS.  Add style properties for: 
              <code>class</code> <code>:hover</code> <code>:before</code> <code>:after</code>
              Make your styles as expressive or as basic as you would like.
            </v-card-text>
            <v-card-actions>
              <v-radio-group label="Try out these examples" v-model="styleExampleIndex" @change="stopStyleExampleRotate">
                <v-radio
                  v-for="(example, n) in styleExamples"
                  :key="n"
                  :label="example.title"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" align-self="center">
          <div class="style-example-container d-flex justify-center display-3">
            <span class="style-example-before">{{styleExample.before}}</span>
            <span class="style-example" :class="styleExample.class">
              {{styleExample.title}}
            </span>
            <span class="style-example-after">{{styleExample.after}}</span>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          example here
        </v-col>
        <v-col cols="6">
          <v-card flat>
            <v-card-title>
              Customizable highlight styling
            </v-card-title>
            <v-card-text>
              Unlimited style combinations powered by CSS.  Add style properties for <code>class</code> <code>:hover</code> <code>:before</code> <code>:after</code>
            </v-card-text>
          </v-card>
        </v-col>
        
      </v-row>

      - Advanced highlight styling
        - highlight
        - redact
        - blur
        - pre/post fix
        - hover style
      - Advanced search term matches
        - Multiple terms
        - Regex matches
      - Google acount syncing
      - Page specific control
      - Automatic search term highlighting (Coming Soon)
      - Import/Export settings (Coming Soon)

    </container-card>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'How to get'
  },
  data() {
    return {
      styleExamples: [
        {
          title: 'Highlight',
          before: 'lorem ',
          after: ' ipsum',
          class: 'style-example-highlight',
        },
        {
          title: 'Redact',
          before: 'lorem ',
          after: ' ipsum',
          class: 'style-example-redact',
        }
      ],
      styleExampleIndex: 0,
      styleExampleInterval: null,
    }
  },
  mounted() {
    this.startStyleExampleRotate();
  },
  methods: {
    startStyleExampleRotate(interval) {
      interval = interval || 5000;

      this.styleExampleInterval = setInterval(() => {
        this.styleExampleIndex = (++this.styleExampleIndex % this.styleExamples.length);
        
      }, interval);
    },
    stopStyleExampleRotate() {
      console.log('cleared');
      clearInterval(this.styleExampleInterval);
    }
  },
  computed: {
    styleExample() {
      return this.styleExamples[this.styleExampleIndex];
    }
  }
}
</script>

<style scoped lang="scss">
  code {
    margin-right: 5px;
    display: inline-block;
  }

  .style-example-container {
    overflow: hidden;
    position: relative;
    &:before, &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 250px;
      z-index: 1;
    }
    &:before {
      background: linear-gradient(90deg, white, transparent);
      left: 0;
    }
    &:after {
      background: linear-gradient(-90deg, white, transparent);
      right: 0;
    }
  }
  .style-example {
    z-index: 2;
    &-highlight {
      $size: 0.4em;

      background: #FF07;
      margin: -$size; 
      padding: $size;
      border-radius: $size / 2;
      font-weight: bold;
      box-shadow: $size/2 $size/2 $size/2 #0004;
    }

    &-redact {
      background: black;
      color: black;

      &:hover {
        color: gray;
      }
    }
  }
</style>