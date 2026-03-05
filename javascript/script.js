// Your javascript goes here
const scenes = [
    {
        boxId: "storyBox1",
        textId: "storyText1",
        buttonId: "btn1",
        text: "Welcome! You have been chosen to read about the journey of how the Zenger family’s home was brought to life. From the first sketches on paper to the final brick, every corner of this house tells a story.",
        showHouse: false
    },
    {
        boxId: "storyBox2",
        textId: "storyText2",
        buttonId: "btn2",
        text: "It all began with careful planning. The family worked closely with architects and designers, sketching out floor plans, choosing materials, and imagining the spaces where their memories would be made. Every decision mattered.",
        showHouse: true
    },
    {
        boxId: "storyBox3",
        textId: "storyText3",
        buttonId: "btn3",
        text: "Construction day arrived, and the site buzzed with activity. Builders laid the foundation, framed the walls, and raised the roof. Slowly, the vision on paper began to rise into the real world, brick by brick.",
        showHouse: true
    },
    {
        boxId: "storyBox4",
        textId: "storyText4",
        buttonId: "btn4",
        text: "As the final touches were added—painting, decorating, and landscaping—the house transformed into a home. Each window, each door, and every room reflected the family’s personality and dreams.",
        showHouse: true
    },
    {
        boxId: "storyBox5",
        textId: "storyText5",
        buttonId: "btn5",
        text: "Finally, the moment came. The Zenger family stepped inside their new home for the first time, filled with excitement and pride. This wasn’t just a house; it was the story of their efforts, dreams, and love made tangible.",
        showHouse: true
    }
];


const clickSound = document.getElementById("clickSound");

let currentScene = 0;


function typeWriter(text, elementId, callback) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        } else {
            if (callback) callback();
        }
    }

    type();
}

function showScene(index) {
    const scene = scenes[index];

    if (index > 0) {
        document.getElementById(scenes[index - 1].boxId).style.display = "none";
    }

    document.getElementById(scene.boxId).style.display = "block";

    if (scene.showHouse) {
        document.getElementById("house").classList.add("show");
    }


    typeWriter(scene.text, scene.textId, () => {
        if (scene.buttonId) {
            document.getElementById(scene.buttonId).style.display = "inline-block";
        }
    });

    if (scene.buttonId) {
        document.getElementById(scene.buttonId).onclick = () => {
            clickSound.play();
            currentScene++;
            if (currentScene < scenes.length) {
                showScene(currentScene);
            } else {
                console.log("All scenes completed!");
            }
        };
    }
}
showScene(currentScene);
