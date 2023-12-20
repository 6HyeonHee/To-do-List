const btn = document.getElementById('btn'); // 버튼
let addValue = document.getElementById('addValue'); // 투두 추가
let result = document.getElementById('result') // 추가된 투두

// 투두 추가시
function addTodo(){
    if(addValue.value === false){
        alert('내용을 입력하세요!!');
    } else {
        let listItem = document.createElement("li");
        listItem.style.display = "flex"; // 부모 요소를 flex로 지정

        // 생선된 목록 옆에 삭제 버튼 추가
        let del = document.createElement("button");

        // 목록 생성 관련
        listItem.innerHTML = addValue.value;
        result.appendChild(listItem);
        listItem.appendChild(del);

        // 삭제 버튼 설정
        del.innerText = "x";
        del.innerText.marginLeft = "auto"; // 삭제 버튼을 오른쪽 끝으로
        del.style.fontSize = "20px";
        del.style.border = "none";
        //del.style.right = "17px";
        //del.style.marginTop = "10px";
        del.style.cursor = "pointer";
        del.addEventListener("click", deleteList); // 삭제버튼 클릭시 리스트 지우기
        del.style.position='relative';

        // 투두 완료시
        listItem.addEventListener("click", function(){
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "gray"
        });
    }

    // 투두 추가 후 초기화
    addValue.value = "";
    addValue.focus();
}

// 투두 삭제시
function deleteList(e){
    let removeOne = e.target.parentElement; // 선택한 목록 한개만 지우기(부모객체 삭제)
    removeOne.remove();
}

// 전체 목록 삭제 및 선택, 경고창
function allClearList(e){
    if(confirm("정말 삭제하시겠습니까?")==true){
        if(result.innerText==''){
            alert("삭제할 목록이 없습니다.");
        }else{
            result.innerText='';
        }
    }else{
        return false;
    }
}
