window.addEventListener("load", function (event) {
    const vue = new Vue(
        {
            el: '#vueContainer',
            data: {
                message: "MESSAGE FROM VUE",
                classes: `big-font ${randomColor()}`, 
                img: 'retro.jpg',
            },
            methods: {
                
            }

        }
    );
})

var mapColor = ['orange', 'fucsia', 'yellow']
function randomColor() {
    randomNumber = Math.floor(Math.random() * 3);
    return mapColor[randomNumber];
}