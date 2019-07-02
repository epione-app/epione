<!-- Example coping hub activity -->
<template>
    <v-card 
    >
        <v-img 
            :src='"https://dummyimage.com/300x200/"+colour+"/000000.png"'
        />
    <v-card-title>
        <v-icon left>fa-life-ring</v-icon>
        <span class="headline">Example Activity: {{ component_title }}</span>
    </v-card-title>
    <v-card-actions>
        <v-spacer />
        <v-btn outline color="info">
            Example Action
        </v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {
        component_title: '',
        colour: '',
    }
}
</script>