function firstpageon() {
    const firstpage = document.getElementsByClassName("first-page")[0];
    const secondpage = document.getElementsByClassName("second-page")[0];
    const lastpage = document.getElementsByClassName("last-page")[0];

    firstpage.style.display = "block";
    secondpage.style.display = "none";
    lastpage.style.display = "none";
}

function secondpageon() {
    const firstpage = document.getElementsByClassName("first-page")[0];
    const secondpage = document.getElementsByClassName("second-page")[0];
    const lastpage = document.getElementsByClassName("last-page")[0];

    firstpage.style.display = "none";
    secondpage.style.display = "block";
    lastpage.style.display = "none";
}

function lastpageon() {
    const firstpage = document.getElementsByClassName("first-page")[0];
    const secondpage = document.getElementsByClassName("second-page")[0];
    const lastpage = document.getElementsByClassName("last-page")[0];

    firstpage.style.display = "none";
    secondpage.style.display = "none";
    lastpage.style.display = "block";
}

function calcAnswers() {
    try {
        const a1 = document.querySelector('input[name="1"]:checked').value;
        const a2 = document.querySelector('input[name="2"]:checked').value;
        const a3 = document.querySelector('input[name="3"]:checked').value;
        const a4 = document.querySelector('input[name="4"]:checked').value;
        const a5 = document.querySelector('input[name="5"]:checked').value;
        const a6 = document.querySelector('input[name="6"]:checked').value;
        const a7 = document.querySelector('input[name="7"]:checked').value;
        const a8 = document.querySelector('input[name="8"]:checked').value;
        const a9 = document.querySelector('input[name="9"]:checked').value;
        const a10 = document.querySelector('input[name="10"]:checked').value;
        const a11 = document.querySelector('input[name="11"]:checked').value;
        const a12 = document.querySelector('input[name="12"]:checked').value;
        let percentage = 0;
    
        if (a1 == 2) {
            percentage += 3;
        }
        if (a2 == 2) {
            percentage += 6;
        }
        if (a3 == 0) {
            percentage += 4;
        }
        if (a4 == 0) {
            percentage += 10;
        }
        if (a5 == 2) {
            percentage += 8;
        }
        if (a6 == 2) {
            percentage += 3;
        }
        if (a7 == 2) {
            percentage += 12;
        }
        if (a8 == 2) {
            percentage += 11;
        }
        if (a9 == 2) {
            percentage += 13;
        }
        if (a10 == 1) {
            percentage += 4;
        }
        if (a11 == 1) {
            percentage += 12;
        }
        if (a12 == 0) {
            percentage += 14;
        }
        window.alert("마지막 문항은 재미로 넣은 문항으로, 점수에 반영되지 않습니다!!");
        result(percentage);
    }
    catch {
        window.alert("문제를 모두 풀었는지 확인해 주세요!!");
    }
}

function result(p) {
    const title = document.getElementsByClassName("title-container")[0];
    const test = document.getElementsByClassName("test-container")[0];
    const percent = document.getElementsByClassName("result-container")[0];

    percent.style.display = "block";
    title.style.display = "none";
    test.style.display = "none";
    document.getElementsByClassName("percentage")[0].innerHTML = `${p}%`;
    let result = document.getElementsByClassName("result")[0];
    let resultMessage = document.getElementsByClassName("result-message")[0];
    p = parseInt(p);
    if (p==0) {
        result.innerHTML = "(주관안 ON)";
        resultMessage.innerHTML= "당신은 주관안 보유자입니다.<br>객관적인 사고를 위해 노력하세요.";
    }
    else if (0<p&&p<20) {
        result.innerHTML = "(거의 주관안이라고 봐야됨)";
        resultMessage.innerHTML= "당신은 주관안을 끼고 있는 경우가 빈번합니다.<br>완전한 주관안은 아니지만, 객관적인 사고를 위해 노력하세요.";
    }
    else if (20<=p&&p<40) {
        result.innerHTML = "(주관안과 맨눈 사이)";
        resultMessage.innerHTML = "당신은 거의 맨눈을 보유하고 있습니다.<br>조금만 더 객관적 사고를 위해 노력하면 맨눈에 도달할 수 있습니다.";
    }
    else if (40<=p&&p<60) {
        result.innerHTML = "(맨눈)";
        resultMessage.innerHTML = "당신은 맨눈을 보유하고 있습니다.<br>상황에 따라 주관적 해석과 객관적 해석을 병행합니다.";
    }
    else if (60<=p&&p<80) {
        result.innerHTML = "(객관안을 향해 가는중)";
        resultMessage.innerHTML = "맨눈을 벗어나서 객관안을 향해 가는 중입니다.<br>주관적 해석보다는 객관적 해석을 하는 경우가 조금 더 많습니다.";
    }
    else if (80<=p&&p<100) {
        result.innerHTML="(거의 객관안)";
        resultMessage.innerHTML = "객관안을 장착할 날이 머지 않았습니다.";
    }
    else if (p==100) {
        result.innerHTML="(객관안 ON)"
        resultMessage.innerHTML="당신은 객관안 보유자입니다!!<br>주관적 해석을 하는 경향은 거의 없습니다."
    }
}

function radioClick(i,v) {
    let radio = document.getElementsByName(i)[v];
    radio.checked = true;
}