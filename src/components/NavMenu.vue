<template>
    <div class="menu d-lg-block" id="menuID">
        <ul>
            <li v-for="(link,i) in links" :key="link" :style="'transition-delay:'+i*0.1+'s;animation-delay:'+i*0.1+'s'">
                <router-link :to="link.link">{{link.name}}</router-link>
                <span class="menu-num">0{{i+1}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
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
        props: {
            hide: {
                type: Boolean,
            },
        },
        watch: {
            hide(newValue) {
                const el = document.getElementById('menuID');
                if (!newValue) {
                    el.classList.add('anim')
                } else {
                    el.classList.remove('anim')
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "~bootstrap/scss/bootstrap-grid";

    .menu {
        top: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: 50;
        padding-top: 200px;
        padding-left: 40px;
        background-image: url("../assets/lines.png");
        background-size: cover;
        visibility: hidden;

        @include media-breakpoint-up('lg') {
            visibility: visible;
        }

        &.anim {
            visibility: visible;

            li {
                left: 0;
                opacity: 1;
            }
        }

        @include media-breakpoint-up('lg') {
            padding-top: 231px;
        }
    }

    a {
        color: #ffffff;
        font-size: 42px;
        text-decoration: none;
        transition: color 0.3s;

        &.router-link-exact-active {
            color: #ff6363;

            &:after {
                width: 110%;
            }
        }

        &:hover {
            color: #ff6363;
            text-decoration: none;

            &:after {
                width: 110%;
            }
        }

        &:after {
            content: '';
            display: block;
            width: 0;
            height: 15px;
            background-color: #333;
            transition: width .3s;
            position: absolute;
            left: -5%;
            bottom: 8px;
            z-index: -1;
        }
    }

    .menu-num {
        position: absolute;
        top: 5px;
        color: #666;
        left: -25px;
    }


    li {
        display: table;
        line-height: normal;
        position: relative;
        margin-bottom: 20px;
        transition: left 300ms, opacity 300ms;
        left: -100px;
        opacity: 0;

        @include media-breakpoint-up('lg') {
            animation-name: links;
            animation-duration: 300ms;
            animation-fill-mode: forwards;
        }
    }

    @keyframes links {
        to {
            left: 0;
            opacity: 1;
        }
    }
</style>