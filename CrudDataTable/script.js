$(document).ready(function () {
    const table = $('.table').DataTable();
    loadData();
    $("form").on("submit", function (event) {
        event.preventDefault();
        var data = $(this).serializeArray();
        console.log(data[0].value);
        console.log(data[1].value);
        console.log(data[2].value);
        console.log(data[3].value);
        console.log(data[4].value);
        // table.row.add([
        // data[1].value,
        // data[2].value,
        // data[3].value,
        // data[4].value
        // ]).draw();
        let localData = localStorage.getItem('LocalData');
        if (localData) {
            let localArray = JSON.parse(localData);
            const obj = {
                id: localArray.length + 1,
                name: data[1].value,
                address: data[2].value,
                Contact: data[3].value,
                role: data[4].value
            };
            table.row.add([data[1].value, data[2].value, data[3].value, data[4].value]).draw();
            localArray.push(obj);
            console.log(localArray)
            localStorage.setItem('LocalData', JSON.stringify(localArray));
            console.log(localArray)
            // table.rows.add(localArray).draw(false);
            // loadData();
        } else {
            const arryObj = [];
            const obj = {
                id: 1,
                name: data[1].value,
                address: data[2].value,
                Contact: data[3].value,
                role: data[4].value
            };
            table.row.add([data[1].value, data[2].value, data[3].value, data[4].value]).draw();
            arryObj.push(obj);
            console.log(arryObj)
            localStorage.setItem('LocalData', JSON.stringify(arryObj));
            // table.DataTable.rows.add(JSON.stringify(localArray)).draw(false);
            // loadData();
        }
        // event.preventDefault();
    });

    $('#btnClear').click(function () {
        //   table();
        let localData = localStorage.getItem('LocalData');
        let localArray = JSON.parse(localData);
        localArray = [];
        localStorage.setItem('LocalData', JSON.stringify(localArray));
        table.clear().draw();
    });

    function loadData() {

        let localData = localStorage.getItem('LocalData');
        console.log("Onload");
        // console.log(localData);
        if (localData) {
            $("table tbody").html("");
            let localArray = JSON.parse(localData);

            let index = 1;
            localArray.forEach(element => {
                console.log(element);
                table.row.add([
                    element.name,
                    element.address,
                    element.Contact,
                    element.role
                ]).draw();
                index++;
            });
        }
    }

    $('#nams').click(function () {
        var groupColumn = 2;
        var table = $('.table').DataTable({
            columnDefs: [{ visible: false, targets: groupColumn }],
            order: [[groupColumn, 'asc']],
            displayLength: 25,
            drawCallback: function (settings) {
                var api = this.api();
                var rows = api.rows({ page: 'current' }).nodes();
                var last = null;

                api.column(groupColumn, { page: 'current' })
                    .data()
                    .each(function (group, i) {
                        if (last !== group) {
                            $(rows)
                                .eq(i)
                                .before(
                                    '<tr class="group"><td colspan="5">' +
                                    group +
                                    '</td></tr>'
                                );

                            last = group;
                        }
                    });
            }
        });
    });

})

