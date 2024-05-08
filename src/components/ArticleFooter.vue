<script setup>
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
    },
    shareicon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="article-footer">
        <div class="author-info">
          <img :src="avatarurl" :alt="`${authorname}`" class="author-info img">
            <div>
                <p>{{ authorname }}</p>
                <span>{{ articledate }}</span>
            </div>  
        </div>
        <div class="share-icon">
            <img :src="shareicon" alt="">
        </div>
    </div>
</template>

<style type="scss"></style>