<template>
    <div class="container-fluid">
        <div class="row" id="app">
            <div class="col-12 col-lg-3 navport d-flex justify-content-between p-0 align-items-lg-start align-items-center position-relative">
                <div class="img-container" :class="{'invisible':show}">
                    <router-link to="/">
                        <img src="./assets/logoSmall.png" alt="LOGO" width="100%">
                    </router-link>
                </div>
                <div class="d-lg-none mr-4" @click="show=!show">
                    <!--                    <img src="./assets/menu.png" class="" alt="hamburger" width="40px" @click="show=!show">-->
                    <Hamburger :close="!show"></Hamburger>
                </div>
            </div>
            <div class="menu d-lg-block position-absolute" :class="{'d-none':!show}">
                <ul>
                    <li v-for="(link,i) in links" :key="link">
                        <router-link :to="link.link" @click="show=!show">{{link.name}}</router-link>
                        <span class="menu-num">0{{i+1}}</span>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-9 route-container" style="height: 100vh">
                <!--                <router-view/>-->
                <Loading></Loading>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from "./components/Loading";
    import Hamburger from "./components/Hamburger";

    export default {
        components: {Hamburger, Loading},
        data() {
            return {
                show: false,
                links: [
                    {
                        name: 'Home',
                        link: '/'
                    },
                    {
                        name: 'About',
                        link: '/about'
                    },
                    {
                        name: 'Skills',
                        link: '/skills'
                    },

                    {
                        name: 'My Work',
                        link: '/mywork'
                    },
                    {
                        name: 'Contact',
                        link: '/contact'
                    },
                ]
            }
        },
        comments: {
            Loading,
            Hamburger
        },
    }
</script>

<style lang="scss">
    @import './styles/Styles';

    .menu {
        background-image: url("./assets/lines.png");
        background-size: cover;
    }
</style>
