<template>
    <v-bottom-nav app fixed shift mandatory :active.sync="bottomNav" :value="authed">
        <v-btn 
            color="primary"
            flat
            value="diary"
            :to="{ name: 'journalHome' }"
            relpace
        >
            <span>Journal</span>
            <v-icon>fa-book</v-icon>
        </v-btn>
        <v-btn
            color="accent"
            flat
            value="home"
            :to="{ name: 'home' }"
            replace
        >
            <span>Home</span>
            <v-icon>fa-home</v-icon>
        </v-btn>
        <v-btn
            color="ternary"
            flat
            value="coping"
            :to="{ name: 'copingHome' }"
            replace
        >
            <span>Coping Tools</span>
            <v-icon>fa-life-ring</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>
<script>
export default {
    data () {
        return {
            bottomNav: 'home',
        }
    },
    props: {
        authed: Boolean,
    }
}
</script>

