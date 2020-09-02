//先處理時鐘表面的線條、點點、星星記號，使用js陸續放入
let clockFace = document.querySelector('.clockFace');
for (let i = 1; i <= 72; i++) {
    //新增DOM節點
    //因為把線條、星星、點點計算進去，所以時鐘表面上總共有72個分段
    let node = document.createElement('div');
    let degree = 360 / 72 * i;
    node.style.transform = `rotate(${degree}deg)`;
    if (i % 6 == 0) {
        //line
        node.classList.add('line');
        //因為數字會隨著線條的角度旋轉，所以必須加上負值的角度，把數字轉回來
        node.innerHTML = `
        <span class="pm" style="transform:rotate(${-degree}deg);">${i / 6 + 12}</span>
        <span class="am" style="transform:rotate(${-degree}deg);">${i / 6}</span>
        `;
    } else if (i % 3 == 0) {
        //star
        node.classList.add('star');
    } else {
        //dot
        node.classList.add('dot');
    }
    clockFace.appendChild(node);
}

//接著處理指針(分針、時針、秒針)的部分
let hourHand = document.querySelector('.clockBack .hourHand');
let secondHand = document.querySelector('.clockBack .secondHand');
let minuteHand = document.querySelector('.clockBack .minuteHand');
setInterval(
    function () {
        //取得目前時間
        let time = new Date();
        let second = time.getSeconds();
        let minute = time.getMinutes()+second/60;
        let hour=time.getHours()+minute/60;
        hourHand.style.transform = `rotate(${(hour % 12) / 12 * 360}deg)`;
        minuteHand.style.transform = `rotate(${minute / 60 * 360}deg)`;
        secondHand.style.transform = `rotate(${second / 60 * 360}deg)`;
    }, 1000);