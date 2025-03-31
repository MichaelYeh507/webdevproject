const button = document.getElementById('hamburger-btn');
function hamburger(){
  console.log(document.querySelector('.off-screen-menu').classList.contains('active'));
  if (  document.querySelector('.off-screen-menu').classList.contains('active')){
    document.querySelector('.off-screen-menu').classList.remove('active');
  } else {
    document.querySelector('.off-screen-menu').classList.add('active');
  }
}


// Gallery slider functionality
const images = $(".gallery-image");
let currentIndex = 0;

function showImage(index) {
  console.log("Showing image at index: " + index);
  images.removeClass("active");
  images.eq(index).addClass("active");
  console.log(1);
}

console.log($($(".gallery-prev")[0]));
$($(".gallery-prev")[0]).click(function () {
  console.log("prev");

  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
});
console.log($($(".gallery-next")[0]))
$($(".gallery-next")[0]).click(function () {
  console.log("next");
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

// Handle subscribe form submission if present
const form = document.getElementById("subscribe-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Subscribe form submitted.");
    alert("Thank you for subscribing!");
    form.reset();
  });
}