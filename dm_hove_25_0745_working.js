const image = document.getElementById("dmPicture");
const sectionElements = [{
    numberId: "noOne",
    imageSrc: "https://townplanningsolutions.com/wp-content/uploads/2019/08/ApprovedProject1.png",
    textId: "textOne"
  },
  {
    numberId: "noTwo",
    imageSrc: "https://townplanningsolutions.com/wp-content/uploads/2019/08/ApprovedProject2.png",
    textId: "textTwo"
  },
  {
    numberId: "noThree",
    imageSrc: "https://townplanningsolutions.com/wp-content/uploads/2019/08/ApprovedProject.png",
    textId: "textThree"
  }
];
const myBoxShadow = ["noOne", "noTwo", "noThree"];
let images = image.getElementsByTagName("img");

myBoxShadow.forEach(function(hoverId) {
  let hoverName = document.getElementById(hoverId);
  hoverName.addEventListener("mouseover", function(hoverElements) {
    console.log("Hovering over elements bub your checking out ", hoverId);
    let hoverNumber = hoverId;
    let showElement = sectionElements.find(x => {
      if (x.numberId === hoverId) {
        return x;
      };
      console.log(x);
    });

    document.getElementById(showElement.textId).style.display = 'inline-block';
    images[0].src = (showElement.imageSrc);
    document.getElementById(showElement.numberId).style.boxShadow = '0px 1px 50px 0px rgba(21,124,21,0.99)';

    let turnOffOthers = myBoxShadow.filter(function(hoverValue) {
      return hoverValue !== hoverNumber;
    });
    console.log(turnOffOthers);
    turnOffOthers.forEach(function(disappear) {
      let disappearElement = sectionElements.find(obj => {
        if (obj.numberId === disappear) {
          return obj;
        };
      });
      document.getElementById(disappearElement.textId).style.display = 'none';
      document.getElementById(disappearElement.numberId).style.boxShadow = '0px 1px 50px 0px rgba(0,0,0,0.1)';
    });
  }, false);
});
