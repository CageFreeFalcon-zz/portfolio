<template>
    <div class="about row">
        <div class="col-lg-6 order-lg-1 p-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-b0c8c.appspot.com/o/contactimg.png?alt=media"
                 class="img-fluid rounded-top rounded-lg position-sticky">
        </div>
        <div class="col-lg-6 order-lg-0 para">
            <glitch :contents="['About']" class="contactglitch"></glitch>
            <p>Hi i'm Rakesh Ghorai, I am highly enthused about my work and tasks. I always use creative approach to
                solve any problem. I have
                an extremely versatile skill set and I'm always energetic and eager to learn new skills and keep
                developing myself to consistently achieve better results. I also understand the importance of being
                interactive and enjoy communicating with others. I am able to handle multiple tasks on a daily
                basis.</p>
            <p>It would be a lovely opportunity to work for an organization that provides me the chance to show my
                skills and improve my knowledge and grow along with the organization's objective.</p>
            <a type="button" class="btn btn-outline-primary btn-lg" href="#">
                Download My CV
                <svg viewBox="0 0 512 512" style="width: 1.4rem;margin-left: 10px">
                    <path fill="currentColor" fill-opacity="0.5"
                          d="M320 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3a19.37 19.37 0 0 1-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24a23.94 23.94 0 0 1 24-24h80a23.94 23.94 0 0 1 24 24z"></path>
                    <path fill="currentColor"
                          d="M488 352H341.3l-49 49a51.24 51.24 0 0 1-72.6 0l-49-49H24a23.94 23.94 0 0 0-24 24v112a23.94 23.94 0 0 0 24 24h464a23.94 23.94 0 0 0 24-24V376a23.94 23.94 0 0 0-24-24zm-120 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm64 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"></path>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
    import Glitch from "../components/Glitch";

    export default {
        name: "About",
        components: {
            Glitch
        }
    }
</script>
