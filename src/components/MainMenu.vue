<template>
    <v-list nav>
        <v-list-item-group 
            color="primary"
            v-model="item"
        >

            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                link
                :href="item.url"
            >
                <v-list-item-action>
                    <v-icon v-text="item.icon" />
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text" />
                </v-list-item-content>
            </v-list-item>

        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: 'main-menu',
    data: () => ({
        _item: 0,
        items: [
            { 
                text: 'Home',
                icon: 'mdi-home',
                url: '/',
            }, { 
                text: 'Features',
                icon: 'mdi-star-circle-outline',
                url: '/features' 
            }, { 
                text: 'Get',
                icon: 'mdi-puzzle',
                url: '/get' 
            }, { 
                text: 'Example Configs',
                icon: 'mdi-code-json',
                url: '/example-configs' 
            },
        ]
    }),
    computed: {
        item: {
            get() { return this.items.findIndex((item) => this.$route.path === item.url) || this._item || 0 },
            set(item) {
                this._item = item;
            }
        },
    }
}
</script>