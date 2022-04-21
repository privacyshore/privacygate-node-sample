new Vue({
        el: '#app',
        data: {
            count: 1,
            price: 99,
        },
        computed: {
            total() {
                return this.count * this.price
            }
        },
        methods: {
            submit() {
                return axios.get(`http://localhost:3000/checkout?total=${this.total}&count=${this.count}`).then(res => {
                    this.redirect(res.data)
                })
            },
            redirect(url) {
                if (url) return window.open(url, '_blank')
            }
        }
    })

