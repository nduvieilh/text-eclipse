<template>
    <v-card
        class="mx-auto container-card"
        max-width="1200"
        elevation="7"
    >
        <slot />
    </v-card>
</template>

<script>
export default {
    name: 'container-card'
}
</script>

<style scoped>
    .container-card {
        margin-top: -64px;
        z-index: 5;
    }
</style>