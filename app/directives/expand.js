"use strict";

function expandOnFocus() {
  return {
    restrict: "A",
    link: ($scope, $element, $attrs) => {
      $element.on("focus", function() {
        $element.css("padding", "20px");
      });
      $element.on("blur", function() {
        $element.css("padding", "10px");
      });
    }
  }

  

}


angular
  .module("app")
  .directive("expandOnFocus", expandOnFocus);