<script setup>
const props = defineProps({
    articleimg: {
        type: String,
        required: true
    },
    articleheading: {
        type: String,
    },
    articledetails: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <img :src="articleimg" alt="Furniture" class="article-img">
    </div>
    <div class="details">
        <h2>
            {{ articleheading }}
        </h2>
        <p>
            {{ articledetails }}
        </p>
    </div>
</template>