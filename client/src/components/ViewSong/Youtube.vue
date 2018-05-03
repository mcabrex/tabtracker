<template>
    <panel title="Youtube Video">
        <youtube 
        :video-id="youtubeID"
        player-width="550"
        player-height="330">
        </youtube>
    </panel>

</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed';

export default {
    props: [
        'youtubeID'
    ],
    components: {
        VueYouTubeEmbed
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
