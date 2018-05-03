<template>
    <div>

    <v-layout>
        <v-flex xs6>
            <song-metadata :song="song"/>
        </v-flex>

        <v-flex xs6 class="ml-2"> 
            <youtube :youtubeID="song.youtubeID" />    
        </v-flex>
    </v-layout>

    <v-layout class="mt-2">
        <v-flex xs6>
            <tab :song="song" />
        </v-flex>
        <v-flex xs6 class="ml-2">
            <lyrics :song="song" />
        </v-flex>
    </v-layout>

    </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import Youtube from './Youtube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsService from '@/services/SongsService'
//in order to use the Panel template we made make sure to include it in the components in the export default

export default {
    data() {
        return {
            song: {}
        }
    },
    async mounted(){
        const songId = this.$store.state.route.params.songId
        // get the vuex store's state and because we synced the route to our store in the main.js file, so whenever the route changes in the UI itll sync with the store so we can grab it, you can test this out in the vuex extension on chrome, the state has a route which is an object that has params
        this.song = (await SongsService.show(songId)).data
        // remember to include .data!!
    },
    components: {
        SongMetadata,
        Youtube,
        Lyrics,
        Tab
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
