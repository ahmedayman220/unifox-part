let draw_items_fillter = [{
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/1.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Design"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/2.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Mation"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/3.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Print"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/4.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Video"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/5.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Video"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/6.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Print"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/7.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Mation"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/8.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Design"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/9.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Design"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/10.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Mation"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/11.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Print"
        },
        {
            src: "https://preview-unifox.netlify.app/assets/images/portfolio/12.jpg",
            header_hover: "Project Title Here",
            prag_hover: "Project Title Here",
            fillter: "Video"
        }
    ]
    // draw item choose
let draw_item_choose_obj = [{
            name: "About",
            src: "https://preview-unifox.netlify.app/assets/images/panel/1.jpg",
            pra: "About teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful Nor again is there anyone who loves or pursues or desires to obtain consequences that are extremel. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure.",
            id: "About",
        },
        {
            name: "Contact",
            src: "https://preview-unifox.netlify.app/assets/images/panel/2.jpg",
            pra: "Contact teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful Nor again is there anyone who loves or pursues or desires to obtain consequences that are extremel. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure.",
            id: "Contact",
        },
        {
            name: "Service",
            src: "https://preview-unifox.netlify.app/assets/images/panel/3.jpg",
            pra: "Service teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful Nor again is there anyone who loves or pursues or desires to obtain consequences that are extremel. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure.",
            id: "Service",
        },
    ]
    // ============ draw items portifolios

function draw_item(x) {
    let draw_map_item = (x).map((item) => {
        return `
        <div class="col-lg-3 col-12 mt-4">
        <div class="show-image-hover">
            <img src="${item.src}" class="" alt="" data-id="Design" />
            <div class="image-hover d-flex">
                <div class="image-hover-h3-h5">
                    <h3>${item.header_hover}</h3>
                    <h5>${item.prag_hover}</h5>
                    </div>
                <div class="image-hover-icon">
                    <i class="fas fa-camera"></i>
                    <i class="fas fa-camera"></i>
                    <i class="fas fa-camera"></i>
                </div>
            </div>
        </div>
    </div>
        `
    })

    let content_draw = document.querySelector(".portoflios-item")
    draw_map_item = draw_map_item.join("")
    content_draw.innerHTML = draw_map_item

}

draw_item(draw_items_fillter)

// function click btns fillters
function fillter() {
    let buttons_fillter = document.querySelectorAll(".buttons-fillter button")
    buttons_fillter.forEach((btn) => {
        btn.addEventListener("click", () => {
            // clear $$ add class active
            buttons_fillter.forEach(item => {
                item.classList.remove("active")
                btn.classList.add("active")
            })

            //  fillter btn
            let name_data_id = btn.getAttribute("data-id")
            if (name_data_id == "All") {
                draw_item(draw_items_fillter)
            } else {
                let btn_fillter = draw_items_fillter.filter((new_item) => new_item.fillter == name_data_id)
                draw_item(btn_fillter)
            }
        })
    });
}
fillter()



// navBar footer
let btn_bar_footer = document.querySelector(".btn-nave-footer")
let footer_respone = document.querySelector(".footer-respons")
let copyWrite = document.querySelector("#copy-write")
let navigation_footer = document.querySelector("#ul-navigation-footer")

footer_respone.style.height = copyWrite.offsetHeight + "px"

btn_bar_footer.addEventListener("click", () => {
    if (footer_respone.offsetHeight == copyWrite.offsetHeight) {
        footer_respone.style.height = copyWrite.offsetHeight + navigation_footer.offsetHeight + "px"
    } else {
        footer_respone.style.height = copyWrite.offsetHeight + "px"

    }
})


// function draw item choose

let btn_choose = document.querySelectorAll(".navigate-choose li")
btn_choose.forEach((btn) => {
    btn.addEventListener("click", () => {

        btn_choose.forEach((Class_active) => {
            Class_active.classList.remove("active")
            btn.classList.add("active")
        })

        data_id = btn.getAttribute("id")
        let choose_fillter = draw_item_choose_obj.find((item_obj) => item_obj.name == data_id)
        console.log(choose_fillter);
        let desc_navigate = document.querySelector(".desc-navigate")
        desc_navigate.innerHTML = `
            <div>
            <img src="${choose_fillter.src}">
            <div class="clear"></div>
            <p id="${choose_fillter.id} ">${choose_fillter.pra}</p>
            </div>
                `
    })
})

// youtube model
let youtube = document.querySelector(".text-icon-choose i")
let model_youtube = document.querySelector("#model-youtube")
let icon_model = document.querySelector(".icon-model i")

youtube.addEventListener("click", () => {
    model_youtube.classList.add("show-model")
        // body.classList.add("overflow-hidden")
})
icon_model.addEventListener("click", () => {
    model_youtube.classList.remove("show-model")
        // body.classList.remove("overflow-hidden")

})