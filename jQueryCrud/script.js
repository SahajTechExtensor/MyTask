$(document).ready(function () {
    alert("workingg!.");
    loadData();
    var SCBtn = "<button class='btn btn-sm btn-success btn-save'> Save</button> || <button class='btn btn-sm btn-danger btn-cancel'> Cancel</button>";
    $("#addNew").click(function input() {
        alert("bten working!")
        var enty = "<tr>" +
            "<td class='Name'> <input type='text' class='name' name='name' placeholder='Enter name'> <input id='txtId' name='txtId' type='hidden' class='form-control txt'></td>" +
            "<td class='City'><input type='text' placeholder='Enter Address' name='Address' class='Address'> </td>" +
            "<td class='Mobile'><input type='text' name='mobile' class='mobile' placeholder='Enter Mobile no.'> </td>" +
            "<td class='Option'>" + SCBtn + "</td></tr>";
        $("table tbody").append(enty);
    })

    $('#btnClear').click(function () {
        //   cleanFrom();
        let localData = localStorage.getItem('LocalData');
        let localArray = JSON.parse(localData);
        localArray = [];
        localStorage.setItem('LocalData', JSON.stringify(localArray));
        loadData();
    });

    var EDBtn = "<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm btn-del' > Delete </button> ";
    $('table').on('click', '.btn-save', function Zxd() {
        // alert("bten working!")
        // var zaq = $('input[name=name]').val();
        //     console.log(zaq);
        if (($('input[name=name]').val()) && ($('input[name=Address]').val()) && ($('input[name=mobile]').val())) {
            // var EDBtn = "<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm btn-del' > Delete </button> ";
            // var Id = $(this).parent().parent().find(".txt").attr("data-id")
            var name = $(this).parent().parent().find(".name").val();
            var City = $(this).parent().parent().find(".Address").val();
            var mobile = $(this).parent().parent().find(".mobile").val();
            // $(this).parent().parent().find(".Option").html(EDBtn);
            // console.log(Id);
            AddTolocalStorage(name, City, mobile);
        }
        else {
            alert("Fill all text Box 😡");
        }
    });

    $('table').on('click', '.btn-cancel', function () {
        $(this).parent().parent().remove();
    })

    $('table').on('click', '.btn-edit', function () {
        var UPBtn = "<button class='btn btn-sm btn-success btn-update '> UpData</button> || <button class='btn btn-sm btn-danger btn-cancel'> Cancel</button>";

        let Id = $(this).parent().parent().find(".Name").attr("data-id");
        // $(this).parent().parent().find(".Name").html("<input type='hidden' name='txtId' value='" + Id + "' class='form-control txtId' placeholder='Enter Name'/>");

        var name = $(this).parent().parent().find(".Name").html();
        $(this).parent().parent().find(".Name").html("<input type='text' name='name' value='" + name + "' class='form-control name' placeholder='Enter Name'/>");

        var City = $(this).parent().parent().find(".City").html();
        $(this).parent().parent().find(".City").html("<input type='text' Address' name='Address' value='" + City + "' class='form-control Address' placeholder='Enter City'/>");

        var mobile = $(this).parent().parent().find(".Mobile").html();
        $(this).parent().parent().find(".Mobile").html("<input type='text' name='mobile' value='" + mobile + "' class='form-control mobile' placeholder='Enter Mobile'/>");

        $(this).parent().parent().find(".Option").html(UPBtn);

        console.log(Id);

        // $('table').on('click', '.btn-update', function () {
        //     console.log("onUpdate");
        //     // let Id = Number.parseInt($('input[name=txtId]').val());
        //     var Newname = $('input[name=name]').val();
        //     var NewCity = $('input[name=Address]').val();
        //     var NewMobile = $('input[name=mobile]').val();
        //     updateData(Id, Newname, NewCity, NewMobile);
        // });

    });

    $('table').on('click', '.btn-update', function () {
        console.log("onUpdate");
        let Id = $(this).parent().parent().find(".Name").attr("data-id");
        var Newname = $('input[name=name]').val();
        var NewCity = $('input[name=Address]').val();
        var NewMobile = $('input[name=mobile]').val();
        updateData(Id, Newname, NewCity, NewMobile);
    });



    $('table').on('click', '.btn-del', function () {
        let RowId = $(this).parent().parent().find(".Name").attr("data-id");
        console.log(RowId);
        DeleteRow(RowId);
    })

    $('table').DataTable();

});


// ----------------------------------------------------------------------


function loadData() {
    let localData = localStorage.getItem('LocalData');
    console.log("Onload");
    // console.log(localData);
    if (localData) {
        $("table tbody").html("");
        let localArray = JSON.parse(localData);
        console.log(localArray);
        let index = 1;
        var SCBtn = "<button class='btn btn-sm btn-success btn-save'> Save</button> || <button class='btn btn-sm btn-danger btn-cancel'> Cancel</button>";
        localArray.forEach(element => {
            let dynamicTR = "<tr>" +
                "<td class='Name txtId' data-id=" + element.id + ">" + element.name + "</td>" +
                "<td class='City'>" + element.address + "</td>" +
                "<td class='Mobile'>" + element.Contact + "</td>" +
                "<td class='Option'>" + EDBtn + "</td></tr>";
            $("table tbody").append(dynamicTR);
            index++;
        });
    }
}
var EDBtn = "<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm btn-del' > Delete </button> ";
function AddTolocalStorage(v1, v2, v3) {
    let localData = localStorage.getItem('LocalData');
    if (localData) {
        let localArray = JSON.parse(localData);
        const obj = {
            id: localArray.length + 1,
            name: v1,
            address: v2,
            Contact: v3
        };
        localArray.push(obj);
        // console.log(localArray)
        localStorage.setItem('LocalData', JSON.stringify(localArray));
        loadData();
    } else {
        const arryObj = [];
        const obj = {
            id: 1,
            name: v1,
            address: v2,
            Contact: v3
        };
        arryObj.push(obj);
        console.log(arryObj)
        localStorage.setItem('LocalData', JSON.stringify(arryObj));
        loadData();
    }
}



function DeleteRow(id) {
    let localData = localStorage.getItem('LocalData');
    let localArray = JSON.parse(localData);
    let i = 0;
    while (i < localArray.length) {
        if (localArray[i].id === Number(id)) {
            localArray.splice(i, 1);
        } else {
            ++i;
        }
    }
    localStorage.setItem('LocalData', JSON.stringify(localArray));
    loadData();
}
function updateData(id, NewName, NewCity, NewMobile) {

    let localData = localStorage.getItem('LocalData');
    let localArray = JSON.parse(localData);
    const oldRecord = localArray.find(m => m.id == id);
    console.log(oldRecord)
    oldRecord.id = Number.parseInt(id);
    oldRecord.name = NewName;
    oldRecord.address = NewCity;
    oldRecord.Contact = NewMobile;
    localStorage.setItem('LocalData', JSON.stringify(localArray));
    loadData();
}
