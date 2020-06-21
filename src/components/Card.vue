<template>
    <div class="card_container">
        <div class="background"></div>
        <div class="content">
            <img :src="'https://firebasestorage.googleapis.com/v0/b/portfolio-b0c8c.appspot.com/o/certificates%2F'+cert+'.jpg?alt=media'">
            <div class="details">
                <a href="">
                    <img :src="'https://firebasestorage.googleapis.com/v0/b/portfolio-b0c8c.appspot.com/o/providers%2F'+provider+'?alt=media'"
                         :alt="provider">
                </a>
                <div class="text">
                    <h4>{{ name }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            cert: {
                type: String,
            },
            provider: {
                type: String,
            },
            name: {
                type: String,
            }
        },
    }
</script>

<style scoped lang="scss">
    .card_container {
        position: relative;

        .background {
            height: calc(100% - 30px);
            background-color: rgba(71, 70, 70, 0.67);
            border-radius: 20px;
            position: absolute;
            left: 30px;
            right: 0;
            top: 30px;
        }

        .content {
            position: relative;
            padding: 15px;
        }

        img {
            width: 100%;
            border-radius: 10px;
        }
    }


    .details {
        display: flex;
        margin-top: 10px;
        color: white;

        a {
            width: 15%;
        }

        img {
            border-radius: 5%;
        }

        .text {
            margin: auto 0;
            padding-left: 10px;
            width: 85%;

            h4 {
                margin: 0;
            }
        }
    }
</style>