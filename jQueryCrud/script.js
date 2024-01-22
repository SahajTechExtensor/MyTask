$(document).ready(function () {
    alert("workingg!.");
    var SCBtn = "<button class='btn btn-sm btn-success btn-save'> Save</button> || <button class='btn btn-sm btn-danger btn-cancel'> Cancel</button>";
    $("#addNew").click(function () {
        alert("bten working!")
        var enty = "<tr>" +
            "<td class='Name'> <input type='text' class='name' name='name' placeholder='Enter name'></td>" +
            "<td class='City'><input type='text' placeholder='Enter Address' name='Address' class='Address'> </td>" +
            "<td class='Mobile'><input type='number' name='mobile' class='mobile' placeholder='Enter Mobile no.'> </td>" +
            "<td class='Option'>" + SCBtn + "</td></tr>";
        $("table tbody").append(enty);
    })



    $('table').on('click', '.btn-save', function Zxd() {
        // alert("bten working!")
        // var zaq = $('input[name=name]').val();
        //     console.log(zaq);
        if (($('input[name=name]').val()) && ($('input[name=Address]').val()) && ($('input[name=mobile]').val())){
            var EDBtn = "<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm btn-del' > Delete </button> ";
            const name = $(this).parent().parent().find(".name").val();
            $(this).parent().parent().find(".Name").html("" + name + "");
            const City = $(this).parent().parent().find(".Address").val();
            $(this).parent().parent().find(".City").html("" + City + "");
            const mobile = $(this).parent().parent().find(".mobile").val();
            $(this).parent().parent().find(".Mobile").html("" + mobile + "");
            $(this).parent().parent().find(".Option").html(EDBtn);
        }
        else{
            alert("Fill all text Box 😡");
        }
    })



    $('table').on('click', '.btn-cancel', function () {
        $(this).parent().parent().remove();
    })

    $('table').on('click', '.btn-edit', function () {
        const name = $(this).parent().parent().find(".Name").html();
        $(this).parent().parent().find(".Name").html("<input type='text' name='name' value='" + name + "' class='form-control name' placeholder='Enter Name'/>");

        const city = $(this).parent().parent().find(".City").html();
        $(this).parent().parent().find(".City").html("<input type='text' Address' name='Address' value='" + city + "' class='form-control Address' placeholder='Enter City'/>");

        const mobile = $(this).parent().parent().find(".Mobile").html();
        $(this).parent().parent().find(".Mobile").html("<input type='number' name='mobile' value='" + mobile + "' class='form-control mobile' placeholder='Enter Mobile'/>");

        $(this).parent().parent().find(".Option").html(SCBtn);
    })



    $('table').on('click', '.btn-del', function () {
        $(this).parent().parent().remove();
        // console.log(s);
    })
})














{/* <tr>
        <td><input type='text' name='name'  placeholder='Enter name' id='name'></td> 
        <td><input type='text' placeholder='Enter Address' name='Address' id='Address'> </td>  
        <td><input type='text' name='mobile' id='mobile' placeholder='Enter Mobile no.'> </td> 
        <td>
            <button class='btn btn-sm btn-success btn-save'> Save</button> 
            <button class='btn btn-sm btn-success btn-cancel'> Cancel</button>
        </td>
    <tr></tr> */}


// <td class='name'>Name</td>
// <td class='Address'>Address</td>
// <td class='Mobile'>Mobile</td>
// <td class='Option'>Option</td>