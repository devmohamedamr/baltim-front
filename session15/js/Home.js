let template = document.createElement("template")
template.innerHTML = `
    <style>
        .box{
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
    <div class="box"></div>
`

export default class Home extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content)
    }
}


customElements.define("home-component",Home)