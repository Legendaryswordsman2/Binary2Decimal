// document.getElementById("myButton").addEventListener("click", myFunction);
let convertButton = document.getElementsByClassName("convertButton")[0];

if (convertButton != null)
    convertButton.addEventListener("click", ConvertBinary);

let binaryInput = document.getElementById("binaryInput");
binaryInput.addEventListener("input", RemoveInvalid);

function ConvertBinary() {
    let binaryNum = document.getElementById("binaryInput").value;
    let finalNum = 0;

    // console.log(binaryNum);

    // console.log(Math.pow(2, 1))
    binaryNum = binaryNum.split('').reverse().join('');
    for (let i = 0; i < binaryNum.length; i++) {
        // console.log(binaryNum[i]);
        if (binaryNum[i] == 1)
            finalNum += Math.pow(2, i);
    }

    // console.log(finalNum);
    // alert(finalNum);

    document.getElementById("Result").innerText = finalNum.toLocaleString('en-US');
}

function RemoveInvalid(){
    console.log("Test");
    binaryInput.value = binaryInput.value.replace(/[^01]/g, '');
}