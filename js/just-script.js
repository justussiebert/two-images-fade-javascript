const containerImagesOuter = document.querySelector(".imageContainerOuter");
const containerImageTop = document.getElementById("imageContainerInner2");
const containerImageBottom = document.getElementById("imageContainerInner1");
const spanStory1Goats = document.getElementById("storyGoats");
const spanStory2Before = document.getElementById("storyBeforeAfter");
const containerTitle = document.querySelector("#containerTitle");

let state = {
  containerImageTopWidth: "50%",
  imageUrl: "../img/",
  storyActive: 0,
  story: [
    {
      storyId: 1,
      storyTitle: "Goats & Ginster",
      storyImage1: "ginster-2020-05-09.jpg",
      storyImage2: "ziegen-2020-05-09.jpg",
    },
    {
      storyId: 2,
      storyTitle: "Before & After",
      storyImage1: "teich-vor-duerre.jpg",
      storyImage2: "teich-waehrend-duerre.jpg",
    },
  ],
};

function changeWidthOfContainer(container, event) {
  if (event.buttons === 1) {
    event.preventDefault();

    const target = event.target;
    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();
    // Get Mouse position in target
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //console.log("Mouse X: " + x + ", Mouse Y:" + y);
    // change width of container, set width to mouse position
    container.style.width = x + "px";
  }
}

containerImagesOuter.addEventListener("mousedown", function (e) {
  changeWidthOfContainer(containerImageTop, e);
});
containerImagesOuter.addEventListener("mousemove", function (e) {
  changeWidthOfContainer(containerImageTop, e);
});
spanStory1Goats.addEventListener("click", function (e) {
  state.storyActive = 0;
  renderWebsiteWithStateData();
});
spanStory2Before.addEventListener("click", function (e) {
  state.storyActive = 1;
  renderWebsiteWithStateData();
});

function initState() {
  state.storyActive = 1;
  state.containerImageTopWidth = "50%";
}

function renderWebsiteWithStateData() {
  containerImageTop.style.width = state.containerImageTopWidth;

  for (let i = 0; i < state.story.length; i++) {
    if (i == state.storyActive) {
      //console.log(state.story.length);
      //console.log(state.story[i].storyImage1);
      const bgImage1 = state.story[i].storyImage1;
      const bgImage2 = state.story[i].storyImage2;
      containerImageTop.style.backgroundImage =
        "url(" + state.imageUrl + bgImage1 + ")";
      containerImageBottom.style.backgroundImage =
        "url(" + state.imageUrl + bgImage2 + ")";
      containerTitle.innerText = state.story[i].storyTitle;
      break;
    }
  }
}

// on load of website: get fresh state, and render website with it (width of top image container, selected story)
window.onload = function () {
  initState();
  //console.log(state);
  renderWebsiteWithStateData();
};
