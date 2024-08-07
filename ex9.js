const { createApp } = Vue;

createApp({
    data() {
        return {
            name: '',
            java: 0,
            react: 0,
            vue: 0,
            scoreArr: [],
            resultAllScore: 0,
        };
    },
    methods: {
        addList() {
            this.scoreArr.push({
                name: this.name,
                java: this.java,
                react: this.react,
                vue: this.vue
            });

            this.resultAllScore += this.java + this.react + this.vue;


        }
    },
    computed:{  // computed properties : 함수처럼 작동. 차이는 계산된 프로퍼티가 의존하는 요소가 변경되면 반응
        total(){
            return this.java + this.react + this.vue;
        }
    }
}).mount('#app');