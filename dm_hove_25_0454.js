const image = document.getElementById("dmPicture");
const sectionElements = [
      {
  	numberId:"noOne",
	imageSrc:"https://townplanningsolutions.com/wp-content/uploads/2019/08/ApprovedProject1.png",
  	textId:"textOne"
},
  {
  	numberId:"noTwo",
	imageSrc:"https://townplanningsolutions.com/wp-content/uploads/2019/08/ApprovedProject2.png",
  	textId:"textTwo"
},
  {
  	numberId:"noThree",
	imageSrc:"https://townplanningsolutions.com/wp-content/uploads/2019/08/ApprovedProject.png",
  	textId:"textThree"
}
  ];
const myBoxShadow = ["noOne","noTwo","noThree"];

myBoxShadow.forEach(function(hoverId){
  let hoverName = document.getElementById(hoverId);
	hoverName.addEventListener("mouseover", function( hoverElements ) {
  console.log("Hovering over elements bub your checking out ",hoverId);
      let hoverNumber = hoverId;
      let turnOffOthers = myBoxShadow.filter(function(hoverValue){
        	return hoverValue !== hoverNumber;
        });
        console.log(turnOffOthers);
      turnOffOthers.forEach(function(disappear){
        let disappearElement= sectionElements.find(obj => {
          	obj.numberId === disappear;
        });
       console.log(disappearElement);
      });
}, false);
});
