let sltAnsId = null;
let sltXId = null;
function showAns(ansId, xId) {
    let ansBox = document.getElementById(ansId);
    let x = document.getElementById(xId);


    if (sltAnsId && sltXId !== null && sltAnsId && sltXId !== ansId && xId) {
        let currAnsId = document.getElementById(sltAnsId);
        let currXId = document.getElementById(sltXId);
        currAnsId.style.display = "none";
        currAnsId.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
        currXId.style.transform = "";
        currXId.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
        currAnsId.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
    }

    if (ansBox.style.display === "none" || ansBox.style.display === "") {
        ansBox.style.display = "flex";
        x.style.transform = "rotate(45deg)";
        x.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
        ansBox.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
        sltAnsId = ansId;
        sltXId = xId;
    } else {
        ansBox.style.display = "none";
        x.style.transform = "";
        x.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
        ansBox.style.transition = "all 0.25s cubic-bezier(0.5, 0, 0.1, 1)";
        sltAnsId = null;
        sltXId = null;
    }

}