function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        callback(element);
        observer.disconnect();
      }
    });
  }).observe(element);
}

function observeAllAnimationTags() {
  const elements = document.querySelectorAll(".animated")

  elements.forEach(element => {
    prepareAnimation(element)
    onVisible(element, triggerAnimation)
  })
}

function triggerAnimation(element) {
  console.log(element)
  activiesAnimation(element, getAnimationsValues(element).animation_name)
}

/**
* @returns return a `string[]` 
  */
function getAnimationsValues(element) {
  const classesDom = element.classList || [];
  const classesArr = [];

  classesDom.forEach(c => {
    classesArr.push(c)
  })

  console.log(classesArr)

  const animationName = classesArr.find(c => c.includes("animated-anim"))

  if (!animationName) {
    console.error(element, `does not contains a animation name`)
    return null;
  }

  const i = classesArr.findIndex(c => c == animationName)
  classesArr.splice(i, 1)

  return {
    animation_name: animationName.replace("animated-anim-", ""),
    args: classesArr
  }

}

function prepareFadeinAnimation(element, args) {
  const baseText = "animated-fadein-"

  const level = 100;

  const direction = args.find(c => c.includes(baseText));

  if (!direction) {
    return
  }

  switch (direction.replace(baseText, '')) {
    case "bottom":
      element.style.transform = `translateY(${level}px)`
      break

    case "left":
      element.style.transform = `translateX(${level}px)`
      break

    case "right":
      element.style.transform = `translateX(${-level}px)`
      break
  }
}

function prepareAnimation(element) {
  const animations = getAnimationsValues(element)
  console.log(animations)

  switch (animations.animation_name) {
    case ("fadein"):
      prepareFadeinAnimation(element, animations.args)
      break
  }
}

function activiesAnimation(element, animationName) {
  switch (animationName) {
    case ("fadein"):
      fadein(element)
      break
  }
}

function fadein(element) {
  element.style.visibility = "visible";
  element.style.opacity = 1;
  element.style.transform = "translateY(0px)"
}

observeAllAnimationTags();

