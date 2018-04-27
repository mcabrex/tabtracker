<template>
    <panel title="Youtube Video">
        <youtube 
        :video-id="youtubeID"
        player-width="500"
        player-height="200">

        </youtube>
    </panel>

</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed';

export default {
    props: [
        'youtubeID'
    ],
    components: {
        Panel,
        VueYouTubeEmbed
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
