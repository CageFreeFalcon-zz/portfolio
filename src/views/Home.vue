<template>
    <div class="home">
        <glitch :contents="contents"></glitch>
        <p>Laravel / Vue / MySQL</p>
        <router-link type="button" class="btn btn-outline-primary" to="/contact">Contact Me</router-link>
    </div>
</template>

<script>
    import Glitch from "../components/Glitch";

    export default {
        name: 'Home',
        components: {
            Glitch,
        },
        data() {
            return {
                contents: [
                    'Hi,',
                    'I\'m Rakesh',
                    'Full Stack Web Developer.'
                ]
            }
        },
        methods: {},
    }
</script>

<style scoped>

</style>
