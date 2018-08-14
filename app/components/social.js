"use strict";

const socialPost = {

  template: `
    <section>
      <div class="header">
        <h1 class="header--title">PostPaste</h1>
        <button class="header--btn" ng-click="$ctrl.form = true">New Post</button>
      </div>
      
      <post-form on-submit="$ctrl.pastePost(newPost);" ng-if="$ctrl.form === true"></post-form>

      <section class="postList__container">
        <post ng-repeat="post in $ctrl.postList track by $index" post="post" index="$index" delete-post="$ctrl.deletePost(index)"></post>
      </section>
    </seciton>
  `, 

  controller: function() {
    const vm = this;
    vm.postList = [];
    vm.form = false;

    vm.pastePost = function(newPost) {
      console.log("submitted");
      vm.postList.unshift(angular.copy(newPost));
      vm.form = false;
    }

    vm.deletePost = function(index) {
      vm.postList.splice(index, 1);
    }
  }
}




angular
  .module("app")
  .component("socialPost", socialPost);