<template>
    <div class="response" :class="{success:success,error:!success}">
        <svg class="notification_icon" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" v-if="success">
            <path fill-rule="evenodd"
                  d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd"
                  d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
        </svg>
        <svg class="notification_icon" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" v-else>
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd"
                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd"
                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
        <p v-if="success" class="notification_text">Thanks for your Response</p>
        <p v-else class="notification_text">Something went wrong. <br> Plese try again</p>
    </div>
</template>

<script>
    export default {
        name: "Response",
        props: {
            success: {
                type: Boolean,
                default: true
            },
        },
        mounted() {
            setTimeout(() => {
                this.$emit('closenoti')
            }, 3000)
        }
    }
</script>

<style lang="scss">
    .response {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        color: white;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
    }

    .success {
        background-color: rgb(143, 226, 103);
        box-shadow: 0 0 20px rgb(127, 255, 64);
    }

    .error {
        background-color: rgb(226, 103, 146);
        box-shadow: 0 0 20px rgb(255, 64, 153);
    }

    .notification_icon {
        margin: auto;
    }

    .notification_text {
        margin: 10px 0 0;
        text-align: center;
    }
</style>