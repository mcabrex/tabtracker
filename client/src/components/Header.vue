<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <router-link
                class="home"
                tag="span"
                :to="{name: 'root'}">
                Tabtracker</router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn 
                flat
                dark
                router to="/songs">
                Browse
            </v-btn>
        </v-toolbar-items>
        
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
                v-if="$store.state.isUserLoggedIn"
                flat
                dark
                @click="logout">
                Logout
            </v-btn>
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                router to="/login">
                Login
            </v-btn>

            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                router to="/register">
                Sign Up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('setToken',null)
            this.$store.dispatch('setUser',null)
            // TODO: redirect to homepage
            this.$router.push({
                name: 'root'
            })
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
