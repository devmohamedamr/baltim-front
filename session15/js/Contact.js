let template = document.createElement("template")
template.innerHTML = `
    <style>
        .box{
            width: 100%;
            height: 600px;
            background: blue;
        }
    </style>
    <div class="box"></div>
`

export default class Contact extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}


customElements.define("contact-component",Contact)