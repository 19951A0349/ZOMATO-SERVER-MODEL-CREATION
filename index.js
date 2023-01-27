const state= {
    task List=[],
};

//dom manipulations
const taskModal= document.querySelector(".task__modal__body")
const taskContent =document.querySelector(".task__contents")

//console.log(taskModal)

//getElementbyId(),getElementByClass(),getElemByTagName()
// >>these r used from js to insert any kind of HTML which would b reflected on UI

//querySelector()
// >>these r used from js to insert any kind of HTML which would b reflected on UI

//to create a card on home page
const htmlTaskContent = ({id,title,description,type,url})=>


  ${
    url &&
    <img width="100%" src=$(url) alt='card image here class ='img-fluid place__holder__image mb-3'/'
  }
  <strong class ="text -sm text muted">created on ${date.toDateString()}</string>
  <h2 class="my -3">$(title)</h2>
  <p class='lead'>${description}</p>

  </div>;

  const updateLocalStorage=()=>{
    LocalStorage.setitem(
      "tasks",
      JSON .stringfy({
        tasks:state.taskList,
      });
    );
  };
