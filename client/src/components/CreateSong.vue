<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Song Metadata">
                <v-text-field
                label="Title"
                required
                :rules="[required]"
                v-model="song.title"
                ></v-text-field>

                <v-text-field
                label="Artist"
                required
                :rules="[required]"
                v-model="song.artist"
                ></v-text-field>

                <v-text-field
                label="Genre"
                required
                :rules="[required]"
                v-model="song.genre"
                ></v-text-field>

                <v-text-field
                label="Album"
                required
                :rules="[required]"
                v-model="song.album"
                ></v-text-field>

                <v-text-field
                label="AlbumImageUrl"
                required
                :rules="[required]"
                v-model="song.albumImageUrl"
                ></v-text-field>

                <v-text-field
                label="YoutubeID"
                required
                :rules="[required]"
                v-model="song.youtubeID"
                ></v-text-field>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-text-field
                label="Tab"
                required
                :rules="[required]"
                multi-line
                v-model="song.tab"
                ></v-text-field>

                <v-text-field
                label="Lyrics"
                required
                :rules="[required]"
                multi-line
                v-model="song.lyrics"
                ></v-text-field>
            </panel>
            <div class="danger-alert" v-if="error">
                <!-- v-if makes this div appear only conditionally -->
                {{error}}
            </div>
            <v-btn 
                dark
                class="cyan"
                @click="create"
                >
                Create Song
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeID: null,
                lyrics: null,
                tab: null
            },
            error: null,
            required: (value) => !!value || 'Required.'
        }
    },
    methods: {
        async create() {
            this.error = null
            //call api
            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every((key => !!this.song[key]))
            if(!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields'
                return
                //pass in return to get get out of this method before trying to post
            }
            try {
                await SongsService.post(this.song)
                this.$router.push({
                    name: 'songs'
                })
            } catch(err) {
                console.log(err)
            }
        }
    },
    components: {
        Panel
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
