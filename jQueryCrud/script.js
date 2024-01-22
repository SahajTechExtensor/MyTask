$(document).ready(function () {
    alert("workingg!.");
    $("#addNew").click(function () {
        alert("bten working!")
        var enty = "<tr>" +
            "<td class='Name'> <input type='text' class='name' placeholder='Enter name'></td>" +
            "<td class='City'><input type='text' placeholder='Enter Address' name='Address' class='Address'> </td>" +
            "<td class='Mobile'><input type='text' name='mobile' class='mobile' placeholder='Enter Mobile no.'> </td>" +
            "<td class='Option'><button class='btn btn-sm btn-success btn-save'> Save</button> || <button class='btn btn-sm btn-success btn-cancel'> Cancel</button></td><tr>";
        $("table tbody").append(enty);
    })

    $('table').on('click', '.btn-save', function () {
        alert("bten working!")
        var EDBtn = "<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm' > Delete </button> ";
        const name = $(this).parent().parent().find(".name").val();
        $(this).parent().parent().find(".Name").html("" + name + "");
        const City = $(this).parent().parent().find(".Address").val();
        $(this).parent().parent().find(".City").html("" + City + "");
        const mobile = $(this).parent().parent().find(".mobile").val();
        $(this).parent().parent().find(".Mobile").html("" + mobile + "");
        $(this).parent().parent().find(".Option").html(EDBtn);
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