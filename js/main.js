
// Object that holds the info

const userInfo = [
  {
    id: 1,
    userName: "Tanya Sinclair",
    title: "UX Engineer",
    caption: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    userImage: "images/image-tanya.jpg",
  },

  {
    id: 2,
    userName: "John Tarkpor",
    title: "Junior Front-end Developer",
    caption: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    userImage: "images/image-john.jpg",
  }

];
const clientImg = document.querySelector('#clientImg');
const clientName = document.querySelector('#clientName');
const clientTitle = document.querySelector('#title');
const clientCaption = document.querySelector('#testmonialCaption');

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let counter = 0;

// intial item data of loaded document
window.addEventListener('DOMContentLoaded', function () {
  showClient(counter);
});

// function for setting items
function showClient() {

  const customerReview = userInfo[counter];

  clientName.textContent = customerReview.userName;
  clientTitle.textContent = customerReview.title;
  clientCaption.textContent = customerReview.caption;
  clientImg.src = customerReview.userImage;

}


// next Button

nextBtn.addEventListener('click', () => {

  counter++;
  if (counter > userInfo.length - 1) {
    counter = 0;
  }

  showClient(counter);
});

// prev button

prevBtn.addEventListener('click', () => {

  counter--;
  if (counter < 0) {
    counter = userInfo.length - 1;
  }

  showClient(counter);
});