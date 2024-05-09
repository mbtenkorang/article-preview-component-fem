<script setup>
import { reactive } from "vue";
import Details from "./components/Details.vue";
import ArticleFooter from "./components/ArticleFooter.vue";

const articleData = reactive({
  articleimg: "./images/drawers.jpg",
  articleheading: "Shift the overall look and feel by adding these wonderful\
      touches to furniture in your home",
  articledetails: "Ever been in a room and felt like something was missing? Perhaps\
      it felt slightly bare and uninviting. I’ve got some simple tips\
      to help you make any room feel complete.",
  authorname: "Michelle Appleton",
  articledate: "28 Jun 2020"
})
</script>

<template>
  <article class="container flex flex-col md:flex-row">
    <Details :articleimg="articleData.articleimg" :articleheading="articleData.articleheading"
      :articledetails="articleData.articledetails" />
    <ArticleFooter :authorname="articleData.authorname" :articledate="articleData.articledate"/>
  </article>
</template>
