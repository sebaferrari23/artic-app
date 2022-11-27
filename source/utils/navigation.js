/** @format */

let rootTabNavigation = null;
let currentStackNavigation = null;

export function getCurrentStackNavigation() {
  return currentStackNavigation;
}

export function setCurrentStackNavigation(navigation) {
  currentStackNavigation = navigation;
}

export function getRootTabNavigation() {
  return rootTabNavigation;
}

export function setRootTabNavigation(navigation) {
  rootTabNavigation = navigation;
}
