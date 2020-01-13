<template>
    <v-sheet
            height="100%"
            class="overflow-hidden"
            style="position: relative;"
    >

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
        >
            <v-list dense>

                <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-sheet>
</template>

<script>
    export default {
        data () {
            return {
                drawer: null,
                items: [
                    { title: 'Game History', icon: 'mdi-history' },
                    { title: 'Pay Table', icon: 'mdi-table' },
                    { title: 'Something Else', icon: 'mdi-backup-restore' },
                ],
            }
        },
        methods: {
            open() {
                this.drawer = !this.drawer;
            }
        }
    }
</script>