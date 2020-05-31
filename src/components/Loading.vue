<template>
    <div class="loader">
        <svg viewBox="0 0 922.778 781.623" id="Group2">
            <defs>
                <linearGradient spreadMethod="pad" id="logor" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:rgb(255, 99, 99);stop-opacity:1;"/>
                    <stop offset="100%" style="stop-color:rgb(255, 189, 105);stop-opacity:1;"/>
                </linearGradient>
                <linearGradient spreadMethod="pad" id="logoegl" x1="81%" y1="0%" x2="0%" y2="57%">
                    <stop offset="0%" style="stop-color:rgb(255, 99, 99);stop-opacity:1;"/>
                    <stop offset="100%" style="stop-color:rgb(255, 189, 105);stop-opacity:1;"/>
                </linearGradient>
            </defs>
            <g transform="translate(-83.014 -181.5)">
                <path class="letter"
                      d="M745.688,700h-232l-75-208h-53l-58,208h-210l24.067-90.577c32.486-24.156,64.749-46.607,86.094-61.187,23.152-15.815,38.779-26.019,38.935-26.12-.056.092-8.007,13.057-16.218,27.451-4.856,8.512-8.9,15.926-12.012,22.036-3.893,7.636-6.34,13.242-7.273,16.664,8.563-6.431,18.3-13.926,29.572-22.6l.005,0h0c24.137-18.582,54.176-41.708,87.826-65.923C388.2,471.3,424.288,447.385,459,426.638c20.572-12.3,40.781-23.519,60.065-33.357,21.136-10.782,41.813-20.233,61.458-28.091a519.039,519.039,0,0,1,61.439-20.473c10.287-2.68,20.472-4.915,30.272-6.645,10.127-1.787,20.132-3.085,29.739-3.858,26.325,0,50.214,4.711,71,14-29.952,44.8-72.251,80.483-116.051,97.9L745.688,700Zm67.486-454.534c-22.438-45.334-66.016-68.32-129.525-68.32-7.621-19.972-59.127-39-153.09-56.554-82.07-15.334-181.286-26.573-250.065-33.3L303.688,0h283c10.822,0,21.329.287,31.229.854s19.495,1.43,28.515,2.565,17.725,2.575,25.9,4.282c8.155,1.7,16.02,3.723,23.376,6a205.05,205.05,0,0,1,20.951,7.731A170.081,170.081,0,0,1,735.279,30.9,148.566,148.566,0,0,1,751.67,42.1a137.212,137.212,0,0,1,26.473,27.638,149.135,149.135,0,0,1,10.275,16.447,170.727,170.727,0,0,1,8.429,18.207,205.141,205.141,0,0,1,6.68,19.971c7.51,26.829,11.161,58.766,11.161,97.636a186.342,186.342,0,0,1-1.513,23.464Z"
                      transform="translate(108.312 183)" fill="url(#logor)"/>
                <g transform="matrix(1, 0, 0, 1, 83.01, 181.5)">
                    <path class="eagle"
                          d="M332.373,310.453c-33.68-22.823-85.973-23.709-157.766-8.863C514.957,155.568,757.811,197,791.491,229.8c0,0,14.328-96.61-126.744-96.61-22.159-23.709-51.394-52.071-167.516-52.071S0,90.644,0,90.644l248.171-50.3L167.533,0S658.577,33.834,683.649,99.542c106.035,0,164.141,64.088,143.006,216.128,0,0-31.253-59.061-124.682-59.061C527.178,270.671,314.8,447.936,231.281,510.662c4.09-15,35.5-66.152,35.5-66.152S69.133,573.471,22.158,636.622C38.112,573.471,246.4,335.935,332.373,310.453ZM596.619,141.964c-12.91-5.245-26.222-32.274-26.222-32.274l74.634,28.643s-21.156,5.289-36.744,5.289C603.683,143.622,599.563,143.16,596.619,141.964Z"
                          transform="translate(25.3 79.11)" fill="url(#logoegl)"/>
                </g>
            </g>
        </svg>
        <p>Wait The Page Is Loading</p>
        <div class="container">
            <div class="item-1"></div>
            <div class="item-2"></div>
            <div class="item-3"></div>
            <div class="item-4"></div>
            <div class="item-5"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        mounted() {
            let el = document.querySelector('#Group2');
            el.classList.add('anim');
            setTimeout(() => {
                this.$emit('timeout')
            }, 2500)
        }
    }
</script>

<style scoped lang="scss">
    $color-1: #eed968;
    $color-2: #eece68;
    $color-3: #eec368;
    $color-4: #eead68;
    $color-5: #ee8c68;

    $color: $color-1, $color-2, $color-3, $color-4, $color-5;

    @mixin anim() {
        @keyframes scale {
            0% {
                transform: scale(1);
            }
            50%,
            75% {
                transform: scale(2.5);
            }
            78%, 100% {
                opacity: 0;
            }
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible;
        animation-delay: 1s;
    }

    @for $i from 1 through 5 {
        .item-#{$i} {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            @include anim();
            background-color: nth($color, $i);
            margin: 7px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:before {
                content: '';
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: nth($color, $i);
                opacity: 0.7;
                animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
                animation-delay: 200ms * $i;
                transition: 0.5s all ease;
                transform: scale(1);
            }
        }
    }

    .loader {
        position: absolute;
        color: $color-5;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: black;
        height: 100%;
        justify-content: center;
        align-items: center;

        p {
            font-family: 'Yellowtail', cursive;
            font-size: 35px;
            margin-bottom: 5px;
        }

        #Group2 {
            width: 200px;

            .letter {
                stroke-dasharray: 3632.75, 3632.75;
                stroke-dashoffset: -3632.75;
            }

            .eagle {
                stroke-dasharray: 4541.72, 4541.72;
                stroke-dashoffset: -4541.72;
            }
        }

        path {
            stroke-linejoin: round;
            stroke-width: 10;
            stroke-opacity: 1;
            stroke: #ff3636;
            fill-opacity: 0;
            animation-duration: 2000ms;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
            animation-name: animate_logo;
        }

    }

    @keyframes animate_logo {
        80% {
            stroke-dashoffset: 0;
            fill-opacity: 0;
            stroke-opacity: 1;
        }
        to {
            stroke-opacity: 0;
            fill-opacity: 1;
        }

    }

</style>