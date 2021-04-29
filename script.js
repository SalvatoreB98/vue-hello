window.addEventListener("load", function (event) {
    const vue = new Vue(
        {
            el: '#vueContainer',
            data: {
                message: "MESSAGE FROM VUE",
                classes: "big-font",
                img: 'retro.jpg',
            },
            methods: {

            }

        }
    );
})
