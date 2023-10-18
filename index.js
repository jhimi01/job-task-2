function changeColors() {
    console.log(document.getElementsByClassName("title"));  // Add this line
    let rootStyles = document.documentElement.style;
    let wholeBgColor = getComputedStyle(document.documentElement).getPropertyValue("--whole-bg-color");
    let leftSectionBgColor = getComputedStyle(document.documentElement).getPropertyValue("--left-section-bg-color");

    let screenHeight = window.innerHeight;
    let scrollPosition = window.scrollY / screenHeight * 100;

    let othersContent = document.querySelector('.others-content');
    let imgincontent = document.querySelector('.img-in-content');
    

    if (scrollPosition > 95) {
        rootStyles.setProperty("--whole-bg-color", "#546de5");
        rootStyles.setProperty("--left-section-bg-color", "#778beb");
        othersContent.innerHTML = `
            <h1 class="title">ABC 3245657 Title</h1>
            <P>New content here</P>
            <div class="btn-grp">
                <button>New Button 1</button>
                <button>New Button 2</button>
            </div>
        `;
        imgincontent.innerHTML = `<h1 class="title">25M + DOWNLOAD</h1>
        <p>an appstore & google playstore</p>`

        // Trigger transition
        setTimeout(() => {
            document.querySelectorAll('.title, p, .btn-grp button').forEach(element => {
                element.classList.add('active');
            });
        }, 0);
    }
     else if (scrollPosition > 80) {
        rootStyles.setProperty("--whole-bg-color", "#f19066");
        rootStyles.setProperty("--left-section-bg-color", "#f7d794");
        othersContent.innerHTML = `
        <h1 class="title">ABC 878345 Title</h1>
        <P>New content here</P>
        <div class="btn-grp">
            <button>New Button 1</button>
            <button>New Button 2</button>
        </div>
    `;
    imgincontent.innerHTML = `<h1 class="title">25M + DOWNLOAD</h1>
    <p>an appstore & google playstore</p>
    <p>google playstore</p>`

    // Trigger transition
    setTimeout(() => {
        document.querySelectorAll('.title, p, .btn-grp button').forEach(element => {
            element.classList.add('active');
        });
    }, 0);
    }
     else if (scrollPosition > 55) {
        rootStyles.setProperty("--whole-bg-color", "#fff");
        rootStyles.setProperty("--left-section-bg-color", "#4834d4");
        othersContent.innerHTML = `
        <img class="small-img" src="images/world-communication-awards-for-best-digital-experience.png">
        <h1 class="title">ABC 123</h1>
        <P>Another New content here</P>
        <div class="btn-grp">
            <button>Another New Button 1</button>
            <button>Another New Button 2</button>
        </div>
    `;
    imgincontent.innerHTML = `
    <h1 class="title">25M + DOWNLOAD</h1>
    <p>an appstore & google playstore</p>`
    setTimeout(() => {
        document.querySelectorAll('.title, p, .btn-grp button, .small-img').forEach(element => {
            element.classList.add('active');
        });
    }, 0);
    } 
    else if (scrollPosition > 35) {
        rootStyles.setProperty("--whole-bg-color", "#30336b");
        rootStyles.setProperty("--left-section-bg-color", "#686de0");
        othersContent.innerHTML = `
        <h1 class="title">ABC 234</h1>
        <P>New content here</P>
        <div class="btn-grp">
            <button>New Button 1</button>
            <button>New Button 2</button>
        </div>
    `;
    imgincontent.innerHTML =  `
    <p>The Next Big</p>
    <h1 class="title">Blockchain</h1>
    <p>Revolution</p>`;
    // Trigger transition
    setTimeout(() => {
        document.querySelectorAll('.title, p, .btn-grp button').forEach(element => {
            element.classList.add('active');
        });
    }, 0);
    }
     else if (scrollPosition > 15) {
        rootStyles.setProperty("--whole-bg-color", "#e66767");
        rootStyles.setProperty("--left-section-bg-color", "#ea8685");
        othersContent.innerHTML = `
        <h1 class="title">ABC 345</h1>
        <P>Another New content here</P>
        <div class="btn-grp">
            <button>Coming soon</button>
            <button>Skip</button>
        </div>
    `;
    imgincontent.innerHTML =  `
    <p>Powered by advance</p>
    <h1 class="title">NASA</h1>
    <p>algorithms</p>`;
    setTimeout(() => {
        document.querySelectorAll('.title, p, .btn-grp button').forEach(element => {
            element.classList.add('active');
        });
    }, 0);
    } 
    else {
        rootStyles.setProperty("--whole-bg-color", "#000");
        rootStyles.setProperty("--left-section-bg-color", "#34495e");
        othersContent.innerHTML = `
        <h1 class="title">ABC 456</h1>
        <P>We are the best web developer company in the world</P>
        <div class="btn-grp">
            <button>Another New Button 1</button>
            <button>Another New Button 2</button>
        </div>
    `;
    imgincontent.innerHTML = `
    <p>Redefining</p>
    <h1 class="title">UX Strategy</h1>
    <p>and UI design</p>`;

    setTimeout(() => {
        document.querySelectorAll('.title, p, .btn-grp button').forEach(element => {
            element.classList.add('active');
        });
    }, 0);
    }
}

window.addEventListener("scroll", changeColors);
