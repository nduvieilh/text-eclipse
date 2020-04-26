<template>
    <v-card
        class="mx-auto container-page"
        max-width="1200"
        flat
    >
        <slot />
    </v-card>
</template>

<script>
export default {
    name: 'container-page'
}
</script>