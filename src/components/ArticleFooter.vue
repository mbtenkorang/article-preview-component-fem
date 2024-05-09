<script setup>
import {ref, Transition} from 'vue';
import facebookLogo from "../assets/images/icon-facebook.svg";
import  twitterLogo from "../assets/images/icon-twitter.svg";
import pinterestLogo from "../assets/images/icon-pinterest.svg";
import shareIcon from "../assets/images/icon-share.svg";


const props = defineProps({
    authorname: {
        type: String,
        required: true
    },
    articledate: {
        type: String,
        required: true
    },
    avatarurl: {
        type: String,
        required: true
    }
})

const show = ref(true);

const handleShowElement = () =>{
    show.value = !show.value;
}
</script>

<template>
    <Transition name="slide">
    <div  v-if="show" class="article-footer">
        <div class="author-info">
          <img :src="avatarurl" :alt="`${authorname}`" class="author-info img">
            <div>
                <p>{{ authorname }}</p>
                <span>{{ articledate }}</span>
            </div>  
        </div>
        <div class="bg-lightgrayblue share-icon" @click="handleShowElement">
            <img :src="shareIcon" alt="">
        </div>
    </div>
    <div v-else class="article-footer bg-darkgrayblue mx-0 px-7 pt-6">
        <p  class="uppercase tracking-[5px] text-lightgrayblue text-2xl">share</p>
        <div class="flex items-baseline">
        <a href="https://facebook.com" target="_blank" class="mr-6"><img :src="facebookLogo" alt=""></a>
        <a href="" class="mr-6"><img :src="twitterLogo" alt=""></a>
        <a href=""><img :src="pinterestLogo" alt=""></a>
        </div>
        <div class="bg-grayblue share-icon" @click="handleShowElement">
            <img :src="shareIcon" alt="">
        </div>
    </div>
    </Transition>
</template>

<style>
.slide-enter-active, .slide-up-leave-active{
    transition: all 0.25s ease-in;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.slide-leave-to{
    opacity: 0;
    transform: translateX(-30px);
}
</style>