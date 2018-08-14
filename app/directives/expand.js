"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: ($element) => {
      $element.on("focus", function() {
        $element.css("")
      });
    }
  }

  

}


angular
  .module("app")
  .directive("expandOnFocus", expandOnFocus);