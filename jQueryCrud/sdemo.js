function addNewRow() {
    table.row
        .add([
            counter + '.1',
            counter + '.2',
            counter + '.3',
            counter + '.4',
            counter + '.5'
        ])
        .draw(false);
 
    counter++;
}
 
const table = new DataTable('#example');
let counter = 1;
 
document.querySelector('#addRow').addEventListener('click', addNewRow);
 
// Automatically add a first row of data
addNewRow();