const ul = document.querySelector('ul');
let a = 10;
function Test(a, b) {
    let li = '';
    let beforepage = b - 1;
    let afterpage = b + 1;
    if (b > 1) {
        li += `<li class="btn" onclick="Test(a, ${b - 1})"><i class="fas fa-angle-left"></i></li>`;
    }
    for (let pagelength = beforepage; pagelength <= afterpage; pagelength++) {
        if (pagelength > a) {
            continue;
        }
        if (pagelength == 0) {
            pagelength = pagelength + 1;
        }
        if (b == pagelength) {
            liActive = 'active';
        } else {
            liActive = '';
        }
        li += `<li class="numb ${liActive}" onclick="Test(a, ${pagelength})" ><span>${pagelength}</span></li>`;
    }
    if (b < a) {
        li += `<li class="btn" onclick="Test(a, ${b + 1})"><i class="fas fa-angle-right"></i></li>`
    }
    ul.innerHTML = li;
}
Test(a, 2)