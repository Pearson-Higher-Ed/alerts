const Helper = {
  whichTransitionEvent: () => {
    let transition;
    const transitions = {
      transition: 'animationend',
      WebkitTransition: 'webkitAnimationEnd'
    };
    Object.keys(transitions).forEach((transitionKey) => {
      if (document.getElementById('demo-target1').style[transitionKey] !== undefined) {
        transition = transitions[transitionKey];
      }
    });
    return transition;
  }
};

export default Helper;
