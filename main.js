homeSection = document.querySelector("#home-tab");
menuSection = document.querySelector("#menu-tab");
contactSection = document.querySelector("#contact-tab");
mainContent = document.querySelector("#content");



homeSection.addEventListener("click", ()=>{
    mainContent.innerHTML= `
    <div class="home-sec">
    <div class="top-sec">
        <h2>Projects</h2>
    </div>


    <div class="projects">
        <div class="status-n-title">
        <div class="project-status pending"></div>
        <p class="project-title">
            Flex Display 
        </p>
    </div>
        <a href="">View</a>
    </div>


    <div class="projects">
        <div class="status-n-title">
            <div class="project-status completed"></div>
            <p class="project-title">
                Animation 
            </p>
        </div>
        <a href="https://oluchukwudivine.github.io/my-pacman/" target="_blank">View</a>
    </div>
    <div class="projects">
        <div class="status-n-title">
            <div class="project-status pending"></div>
            <p class="project-title">
                Box shadow 
            </p>
        </div>
        <a href="">View</a>
    </div>
    <div class="projects">
        <div class="status-n-title">
            <div class="project-status completed"></div>
            <p class="project-title">
                Car wash website 
            </p>
        </div>
        <a href="https://oluchukwudivine.github.io/UI-design-sample/" target="_blank">View</a>
    </div>
    <div class="projects">
        <div class="status-n-title">
            <div class="project-status completed"></div>
            <p class="project-title">
                Facebook form clone
            </p>
        </div>
        <a href="https://oluchukwudivine.github.io/facebook-form-clone/" target="_blank">View</a>
    </div>
    <div class="projects">
        <div class="status-n-title">
            <div class="project-status completed"></div>
            <p class="project-title">
               Email web-app clone
            </p>
        </div>
        <a href="https://oluchukwudivine.github.io/gmail-clone/" target="_blank">View</a>
    </div>
    <div class="projects">
        <div class="status-n-title">
            <div class="project-status completed"></div>
            <p class="project-title">
                Unidel webpage clone 
            </p>
        </div>
        <a href="https://oluchukwudivine.github.io/UNIDEL-CLONE/" target="_blank">View</a>
    </div>
</div>
    `
});

menuSection.addEventListener("click", ()=>{
    mainContent.innerHTML= `
    <div class="menu-sec">
    <p>This section is still in development</p>
    </div>
    `
});

contactSection.addEventListener("click", ()=>{
    mainContent.innerHTML= `
    <div class="contact-sec">
    <h3>
        Contact me via the following channels
    </h3>
    <div class="links-wrap">
    <li>
        <a href="https://twitter.com/theScriptDev">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <p>X (formerly Twitter)</p>
        </a>
    </li>
    <li>
        <a href="https://github.com/OluchukwuDivine">
            <i class="fa fa-github" aria-hidden="true"></i>
            <p>Github</p>
        </a>
    </li>
    <li>
        <a href="https://wa.me/+2347088893708">
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
            <p>Whatsapp</p>
        </a>
    </li>
    <li>
        <a href="https://instagram.com/oluchukwu_x">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <p>Instagram</p>
        </a>
    </li>
</div>
</div>
    `
});