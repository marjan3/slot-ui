<template>
    <v-dialog v-model="dialog" :max-width="options.width" :style="{ zIndex: options.zIndex }" @keydown.esc="cancel" scrollable>
        <v-card>
            <v-toolbar dark dense flat>
                <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
                <v-spacer/>
                <v-btn icon @click.native="close">
                    <v-icon>mdi-window-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text v-show="!!message" class="pa-4">{{ message }}</v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    /**
     * Vuetify Confirm Dialog component
     *
     * Insert component where you want to use it:
     * <confirm ref="confirm"></confirm>
     *
     * Call it:
     * this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})
     * Or use await:
     * if (await this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })) {
     *   // yes
     * }
     * else {
     *   // cancel
     * }
     *
     * Alternatively you can place it in main App component and access it globally via this.$root.$confirm
     * <template>
     *   <v-app>
     *     ...
     *     <confirm ref="confirm"></confirm>
     *   </v-app>
     * </template>
     *
     * e
     */
    export default {
        data: () => ({
            dialog: false,
            message: null,
            title: null,
            options: {
                color: 'primary',
                width: 290,
                zIndex: 200
            }
        }),
        methods: {
            open() {
                this.dialog = true;
                this.title = "Rules";
                this.message = "message";
                return new Promise((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                })
            },
            close() {
                this.resolve(false);
                this.dialog = false;
            }
        }
    }
</script>