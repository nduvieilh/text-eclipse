<template>
  <Layout>
    <container-page>
      <v-row>
        <v-col cols="12" md="6" align-self="center">
          <v-card flat>
            <v-card-title>
              Customizable Highlight Styling
            </v-card-title>
            <v-card-text>
              Style your matches using existing web technologies. 
              <br>
              Add style properties for: 
              <ul>
                <li><code>class</code></li>
                <li><code>:hover</code> </li>
                <li><code>:before</code> </li>
                <li><code>:after</code></li>
              </ul>
              <br>
              Make your styles as basic or as expressive as you would like.
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
        <v-col cols="12" md="6" align-self="center">
          <div class="style-example-container d-flex justify-center display-3 text-no-wrap ">
            <span class="style-example-before">{{styleExample.before}}</span>
            <span class="style-example" :class="styleExample.class">
              {{styleExample.title}}
            </span>
            <span class="style-example-after">{{styleExample.after}}</span>
          </div>
        </v-col>
      </v-row>

      <v-spacer />

      <v-row>
        <v-col cols="12" md="6" order-md="2" align-self="center">
          <v-card flat>
            <v-card-title>
              Advanced Search Matches
            </v-card-title>
            <v-card-text>
              Unlimited search term matches powered by <a href="https://en.wikipedia.org/wiki/Regular_expression" target="_blank">Regular Expressions <v-icon>mdi-wiki</v-icon></a>. 
            </v-card-text>
            <v-card-text>
              <v-textarea
                v-model="matchText"
                filled
                persistant-hint
                hint="One per line"
                label="Terms"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" order-md="1" align-self="center">
          <v-card-text class="highlight">
            <span>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Ut id sollicitudin erat. Nullam accumsan sodales nunc <span>mollis</span> consequat. 
            Quisque sapien dui, accumsan quis odio eget, bibendum <span>mollis</span> <span>lorem</span>. Nulla lacus justo, auctor id mollis id, tempor et libero. <span>Maecenas</span> dictum, 
            ex vitae faucibus pretium, <span>massa</span> leo suscipit nunc, id vehicula est arcu sed sapien. Donec laoreet felis in orci volutpat, at ullamcorper ante 
            efficitur. Fusce rutrum turpis ac purus pretium, sit amet tristique orci gravida. Nullam gravida <span>mattis</span> risus, euismod sollicitudin <span>magna</span> 
            gravida rhoncus. Donec a justo <span>magna</span>. Duis quis libero ut ipsum tempus fermentum. Nulla tristique feugiat ex scelerisque dictum. Fusce non consequat quam.
          </v-card-text>
        </v-col>
      </v-row>

      <v-spacer />

      <v-row>
        <v-col cols="12" md="6" align-self="center">
          <v-card flat>
            <v-card-title>
              Google Account Syncing
            </v-card-title>
            <v-card-text>
              Have your settings travel with you from computer to computer with Google chrome sync.  Just <a href="https://support.google.com/chrome/answer/185277" target="_external">turn on sync</a> and your style and match rules with follow along.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" align-self="center" class="text-center">
          <v-icon class="feature-icon orange--text text-shadow">mdi-cloud-sync-outline</v-icon>
        </v-col>
      </v-row>

      <v-spacer />

      <v-row>
        <v-col cols="12" md="6" order-md="2" align-self="center">
          <v-card flat>
            <v-card-title>
              Page Specific Control
            </v-card-title>
            <v-card-text>
              Don't want highlighting on every page?  Easily control which pages text-eclipse will run on with chrome's built-in site-access control.  Right click on the text-eclipse icon in the top right to specify page specific rules.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" order-md="1" align-self="center">
          <g-image src="/images/site-access-control.png" class="image-shadow mx-auto" />
        </v-col>
      </v-row>

      <v-spacer />

      <v-row>
        <v-col cols="12" md="6" align-self="center">
          <v-card flat>
            <v-card-title>
              Automatic Search Term Highlighting
            </v-card-title>
            <v-card-subtitle class="primary--text">
              Coming Soon
            </v-card-subtitle>
            <v-card-text>
              Find content in your pages easier with automatic search term highlighting.  Search terms from a previous search engine query will automatically get a search term highlighting rule applied making it easier to continue your search on subsequent pages.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" align-self="center">
          <g-image src="/images/automatic-term-highlighting.png" class="mx-auto" />
        </v-col>
      </v-row>

      <v-spacer />

      <v-row>
        <v-col cols="12" md="6" order-md="2" align-self="center">
          <v-card flat>
            <v-card-title>
              Import/Export Settings
            </v-card-title>
            <v-card-subtitle class="primary--text">
              Coming Soon
            </v-card-subtitle>
            <v-card-text>
              Import/Export your matches and styles to easily share them with others.  Check out the example configs page for sample exports that you can include in your config.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" order-md="1" align-self="center" class="text-center">
          <v-icon class="feature-icon orange--text text-shadow">mdi-export-variant</v-icon>
        </v-col>
      </v-row>
    </container-page>
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
        },
        {
          title: 'Bold blue',
          before: 'lorem ',
          after: ' ipsum',
          class: 'style-example-bold-blue',
        },
        {
          title: 'Blur',
          before: 'lorem ',
          after: ' ipsum',
          class: 'style-example-blur',
        }
      ],
      styleExampleIndex: 0,
      styleExampleInterval: null,
      matchText: `lorem\n\\bm\\w{3,}\\b `,

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
  .v-card__title {
    font-size: 2rem;
    line-height: 2.5rem;
    word-break: normal;
  }

  code {
    margin-right: 5px;
    display: inline-block;
  }

  .style-example-container {
    overflow: hidden;
    position: relative;
    padding: 1em;
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
    &-bold-blue {
      color: blue;
      font-weight: bold;
    }
    &-blur {
      filter: blur(5px);
    }
  }
  
  .feature-icon {
    font-size: 20rem;
  }

  .highlight > span {
    background: #FF07;
    margin: -0.4em;
    padding: 0.4em;
    border-radius: 5px;
    font-weight: bold;
  }

  $shadow: 3px 3px 10px lightgray;

  .image-shadow {
    filter: drop-shadow($shadow)
  }

  .text-shadow {
    text-shadow: $shadow;
  }

  .spacer {
    margin: 5rem 0;
  }
</style>