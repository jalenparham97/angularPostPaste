"use strict";

const post = {
  bindings: {
    post: "<",
    deletePost: "&",
    index: "<"
  },

  template: `
  <section class="post__container">
    <h2 class="post__container--title">{{ $ctrl.post.title }}</h2>
    <p class="post__container--text">{{ $ctrl.post.text }}</p>
    <i class="fas fa-times delete--btn" ng-click="$ctrl.deletePost($index)"></i>
  </section>
  ` 
}




angular
  .module("app")
  .component("post", post);