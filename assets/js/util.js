//fetchen api data GitHub
fetch('https://api.github.com/repos/anthonyaich/gitCursus/commits')
    .then(response => response.json())
    .then(data => {
        const gitInfo = document.querySelector('[data-git-info]');
        gitInfo.innerHTML = new Date(data[0].commit.author.date).toLocaleDateString() + " &nbsp;<b>By:</b> " + data[0].commit.author.name;
    }).catch(error => console.log(error));


// bash eerste woord geel maken
const bashClasses = document.querySelectorAll('.bash');
bashClasses.forEach(bashClass => {
    bashClass.innerHTML = bashClass.innerHTML.replace(/(\w+)/, '<span style="color: #ffd33d;margin-left:6px;">$1</span>');
});

//scroll loading bar
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    document.querySelector(".progress").style.width = `${(scrolled / scrollable) * 100}%`;
    document.querySelector("#percentage__progress").innerHTML =
        `${Math.round((scrolled / scrollable) * 100)}%`;
});

//when when scrolled 380px add class bg-red-400 to navbar
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 340) {
        nav.classList.add('bg-gradient-to-r', 'from-fuchsia-600', 'to-pink-600');
    } else {
        nav.classList.remove('bg-gradient-to-r', 'from-fuchsia-600', 'to-pink-600');
    }

});


//if device is not a computer alert user to use a computer
if (window.innerWidth < 1024) {

    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Please use a computer to view this website");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newDiv);

    //style the div
    newDiv.style.backgroundColor = "#f56565";
    newDiv.style.color = "#fff";
    newDiv.style.padding = "1rem";
    newDiv.style.textAlign = "center";
    newDiv.style.fontSize = "1.5rem";
    newDiv.style.fontWeight = "bold";
    newDiv.style.position = "fixed";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.style.width = "100%";
    newDiv.style.zIndex = "999";
}