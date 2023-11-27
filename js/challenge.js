document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;
    let paused = false;
    const timer = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const heart = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const resumeButton = document.getElementById("resume");
    const likes = document.querySelector(".likes");
    const comment = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("list");
  
    function resetTimer() {
        timer.innerText = counter;
    }

    function incrementTimer() {
        counter++;
        resetTimer();
    }

    function decrementTimer() {
        counter--;
        resetTimer();
    }

    const intervalId = setInterval(function () {
        if (!paused) {
            incrementTimer();
        }
    }, 1000);

    plusButton.addEventListener("click", function () {
        incrementTimer();
    });

    minusButton.addEventListener("click", function () {
        decrementTimer();
    });

    heart.addEventListener("click", function () {
        if (!paused) {
            const like = document.createElement("li");
            like.innerText = `Number ${counter} has been liked!`;
            likes.appendChild(like);
        }
    });

    pauseButton.addEventListener("click", function () {
        paused = true;
        pauseButton.disabled = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
        heart.disabled = true;
        resumeButton.disabled = false;
    });
  
    resumeButton.addEventListener("click", function () {
        paused = false;
        pauseButton.disabled = false;
        plusButton.disabled = false;
        minusButton.disabled = false;
        heart.disabled = false;
        resumeButton.disabled = true;
    });

    comment.addEventListener("submit", function (event) {
        event.preventDefault();
        const comment = document.createElement("p");
        comment.innerText = commentInput.value;
        commentList.appendChild(comment);
        commentInput.value = "";
    });
  });