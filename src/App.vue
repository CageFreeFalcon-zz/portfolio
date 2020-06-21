<template>
    <div class="container-fluid">
        <div id="particles" style=""></div>
        <div class="row" id="app">
            <nav class="col-12 col-lg-4 col-xl-3 navport d-flex">
                <transition enter-active-class="animated fadeIn faster"
                            leave-active-class="animated fadeOut faster"
                            appear-active-class="animated fadeIn">
                    <div class="img-container mx-lg-auto" v-show="!menuOpened">
                        <router-link to="/"></router-link>
                    </div>
                </transition>
                <div class="d-lg-none p-2 mr-3 ml-auto align-self-center position-relative" style="z-index: 100"
                     @click="menuOpened=!menuOpened">
                    <div class="hamicon" :class="{opened:menuOpened}"></div>
                    <Hamburger :close="!menuOpened"></Hamburger>
                </div>
                <NavMenu :hide="!menuOpened"></NavMenu>
            </nav>
            <div class="col-12 col-lg-8 col-xl-9 offset-lg-3 route-container" v-show="!menuOpened">
                <router-view class="view"></router-view>
                <Loading v-if="showloader" @timeout="showloader=false"></Loading>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from "./components/Loading";
    import Hamburger from "./components/Hamburger";
    import NavMenu from "./components/NavMenu";

    export default {
        components: {
            Hamburger,
            Loading,
            NavMenu
        },
        data() {
            return {
                menuOpened: false,
                showloader: false,
            }
        },
        watch: {
            $route() {
                this.menuOpened = false;
                this.showloader = true;
            }
        },
        mounted() {
            require('particles.js')
            this.$nextTick(() => {
                // eslint-disable-next-line no-undef
                particlesJS('particles', {
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                        },
                        "opacity": {
                            "value": 0.7,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 80,
                                "size_min": 0.2,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 120,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 5,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 800,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 800,
                                "size": 80,
                                "duration": 2,
                                "opacity": 0.8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 100,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                })
            })
        }
    }
</script>

<style lang="scss">
    @import 'assets/styles/Styles';

    .img-container {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-b0c8c.appspot.com/o/logoSmall.png?alt=media");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    #particles {
        height: 100vh;
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
