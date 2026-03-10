const XKCD = "https://xkcd.now.sh/?comic="

const stat = document.getElementById("num");
const resetBtn = document.getElementById("reset");
const Img = document.getElementById("imgxkcd");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let imgnum = 0;
const maximgnum = 3217;

const fetchIssue = (n) => {
    url = XKCD+n
    console.log(`request to ${url}:`);
    let promise = fetch(url);
    promise.then((response => {
        return response.json();
    }))
    .then((json) => {
        imgnum = json.num;
        console.log(`num = ${imgnum}`);
        stat.innerText = `Current number : ${imgnum}`;
        Img.src = `${json.img}`
    })
}

fetchIssue("latest")

resetBtn.addEventListener("click", () => {
    fetchIssue("latest");
});

const next = () => {
    if (imgnum < maximgnum) {
        nextBtn.innerText = "→";
        prevBtn.innerText = "←";
        fetchIssue(imgnum + 1);
    }
    else {nextBtn.innerText = "Limite atteinte !"};
};

nextBtn.addEventListener("click", next)

const previous = () => {
    if (imgnum > 1) {
        nextBtn.innerText = "→";
        prevBtn.innerText = "←";
        fetchIssue(imgnum-1);
    }
    else {prevBtn.innerText = "Limite atteinte !"};
};

prevBtn.addEventListener("click", previous)