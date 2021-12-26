const link = document.querySelector(".link");
const transition = document.querySelector(".transition");
link.addEventListener("click", (e) =>
    {
        e.preventDefault();
        transition.classList.add("slide");
        setTimeout(() => {
            window.location = link.href;
        }, 900);
    }
)




VanillaTilt.init(document.querySelector(".js-tilt"), {
    max: 25,
    speed: 400,
    gyroscope:true
});

VanillaTilt.init(document.querySelectorAll(".js-tilt"));

