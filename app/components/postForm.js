"use strict";

const postForm = {
  bindings: {
    onSubmit: "&"
  },

  template: `
    <form class="post__form" ng-submit="$ctrl.onSubmit({ newPost: $ctrl.postInfo })">
      <input type="text" ng-model="$ctrl.postInfo.title" placeholder="Post Title">
      <textarea type="text" ng-model="$ctrl.postInfo.text" placeholder="Post Message"></textarea>
      <button class="paste--btn">Paste</button>
    </form>
  `
}




angular
  .module("app")
  .component("postForm", postForm);