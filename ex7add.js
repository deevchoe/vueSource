const {createApp} = Vue;

createApp({
    data() {
        return{
            list : ['아이스 커피', '오렌지 쥬스', '밀크티', '바닐라 라떼'],
            objArr : [
                {site:'강릉', taketime:'4시간'},
                {site:'양양', taketime:'3시간'},
                {site:'청산도', taketime:'6시간'},
            ],
            myArr : ['일','이','삼','사','오'],
            numArr : [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가'); // 배열에 값을 집어 넣을 때는 push
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입');  // splice : 배열 요소를 제거하고 새 요소로 대체하는 함수
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        }
    }, 
}).mount('#app')