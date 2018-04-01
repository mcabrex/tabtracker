<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span
                class="home"
                @click="navigateTo({
                    name: 'root'
                })"
            >Tabtracker</span>
        </v-toolbar-title>
        <!-- TODO: Implement Me -->
        <!-- <v-tooolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>       
        </v-tooolbar-items> -->
        <v-spacer></v-spacer>
        <v-tooolbar-items>
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                router to="login">
                Login
            </v-btn>

            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                router to="register">
                Sign Up
            </v-btn>
        </v-tooolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        cursor: pointer;
        
    }
    .home:hover {
        color: black
    }
</style>
