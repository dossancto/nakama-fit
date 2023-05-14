const leftarrow = document.getElementById("leftarrow");
const rightarrow = document.getElementById("rightarrow");
const comments = document.getElementById("commentsection");

leftarrow.addEventListener("click", function(){
    PassarSlides(-1);
});
rightarrow.addEventListener("click", function(){
    PassarSlides(1);
});

function PassarSlides(dir){
    const pos = parseFloat(comments.dataset.position) + dir;
    const finalpos = Math.min(Math.max(pos, 0), 2);
    comments.dataset.position = finalpos;

    comments.querySelectorAll("p").forEach((comment, index) => {
        if (index === finalpos) {
          comment.classList.add("active");
        } else {
          comment.classList.remove("active");
        }
    });
}