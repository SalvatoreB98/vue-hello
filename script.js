window.addEventListener("load", function (event) {
    const vue = new Vue(
        {
            el:'#vueContainer',
            data: {
                message:  "TITOLO H1",
                classes: "big-font",
                img: 'retro.jpg',

            },
            methods: {

            }

        }
    );
})