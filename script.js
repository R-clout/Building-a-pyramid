const character = "!";
const counts = 8
const rows = [];

for(let i = 0; i < counts; i++){
    rows.push(padRow(i + 1, counts));
}


function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 *rowNumber) + " ".repeat(rowCount - rowNumber);
}

let results = "";
for(const row of rows){
    results = results + "\n" + row;
}

console.log(results)