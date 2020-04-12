<template>
  <Layout>
    <container-card>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <g-image class="image-banner" :src="slide" />
        </v-carousel-item>
      </v-carousel>
      <v-card-title class="display-2 justify-center">
        Boost your search tools
      </v-card-title>
      <v-card-text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>

        <div style="height: 5000px"></div>
      </v-card-text>
    </container-card>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Text Eclipse',
  },
  data() {
    return {
      slides: [
        '/images/example_emoji.png',
        '/images/example_blur.png',
        '/images/example_branding.png',
        '/images/example_highlight.png',
        '/images/example_redact.png',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .image-banner {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    object-position: top;
  }
</style>