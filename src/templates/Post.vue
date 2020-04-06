<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.post.title }}</h1>
      <span>{{ $page.post.date }}</span>
      <g-image :src="$page.post.image"/>
      <div class="content" v-html="$page.post.content" />
      <h1>{{ $page.post.test }}</h1>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        icon
        date (format: "D MMMM, YYYY")
        content
        image
    }
  }
</page-query>

<style>
</style>