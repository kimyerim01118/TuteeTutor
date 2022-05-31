const array=[
    "바나나",
    "딸기",
    "포도",
    "망고",
    "키위",
    "자두",
    "체리",
    "사과"
];
array.map((item)=> console.log(item));
array.splice(7)// 7부터 끝까지 자름
array.forEach((item,index)=> console.log(index,'번째는',item,'이다.'));
array.map((item,i)=>{console.log(i)})

array.filter((item)=> item==="바나나");// 바나나에서 걸려서 바나나를 리턴(배열값은 변동 x);
array.filter((item)=> item!=="바나나");// 바나나만 걸러내고 이 외의 것을 리턴(배열값은 변동 x);

array.reverse(); // 배열 뒤집기



