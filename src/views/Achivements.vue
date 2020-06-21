<template>
    <div class="achivement">
        <glitch :contents="['Achivements']" class="contactglitch"></glitch>
        <div class="row">
            <div class="col-12 col-md-6 pb-4" v-for="achivement in certificates" :key="achivement">
                <card :cert="achivement.cert" :provider="achivement.provider" :name="achivement.name"></card>
            </div>
        </div>
    </div>
</template>

<script>
    import Glitch from "../components/Glitch";
    import Card from "../components/Card";

    export default {
        name: "Achivements",
        components: {
            Glitch,
            Card
        },
        data() {
            return {
                'certificates': [
                    {
                        cert: 'cert1',
                        provider: 'coursera.jpg',
                        name: 'Data Collection and Processing with Python'
                    }, {
                        cert: 'cert2',
                        provider: 'coursera.jpg',
                        name: 'Bacic Image Classification with Tensorflow'
                    }, {
                        cert: 'cert3',
                        provider: 'coursera.jpg',
                        name: 'Machine Learning'
                    }, {
                        cert: 'cert4',
                        provider: 'coursera.jpg',
                        name: 'Ptyhon Basics'
                    }, {
                        cert: 'cert5',
                        provider: 'coursera.jpg',
                        name: 'Ptyhon Functions, Files and Dictionaries'
                    }, {
                        cert: 'cert6',
                        provider: 'hackerrank.png',
                        name: 'JAVA ( Basic )'
                    }, {
                        cert: 'cert7',
                        provider: 'hackerrank.png',
                        name: 'Ptyhon ( Bacic )'
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>