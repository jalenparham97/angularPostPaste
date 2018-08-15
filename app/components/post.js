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
    <i class="fas fa-thumbs-up like--btn" ng-click="$ctrl.likeButton()"> {{ $ctrl.likeCount }}</i>
    <i class="fas fa-thumbs-down dislike--btn" ng-click="$ctrl.disLikeButton()"> {{ $ctrl.disLikeCount }}</i>
    <i class="fas fa-times delete--btn" ng-click="$ctrl.deletePost($index)"></i>
  </section>
  `,
  
  controller: function() {
    const vm = this;
    vm.likeCount = null;
    vm.disLikeCount = null;

    vm.likeButton = function() {
      console.log(vm.likeCount);
      vm.likeCount += 1;
    }
    vm.disLikeButton = function() {
      console.log(vm.likeCount);
      vm.disLikeCount += 1;
    }
  }
}




angular
  .module("app")
  .component("post", post);