<template>
    <div class="home">
        <glitch :contents="contents"></glitch>
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
    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 0;
        padding-left: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    .btn {
        width: 50%;
        max-width: 400px;
        margin-top: 20px;
        padding: 10px;
    }
</style>
