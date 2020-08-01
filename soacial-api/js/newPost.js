$(document).ready(function () {
    let form_data = new FormData();

    $("#new-post").on("click", function (e) {
        if ($("#post-content").val() == "") {
            preventPost(e);
        }
    });


    $("#new-pic").on("change", function (e) {
        if ($("#new-pic").prop('files')[0] && $("#new-pic").prop('files')[0].size < 5242880) {
            let file = e.target.files[0].name;
            let extension = file.substr((file.lastIndexOf('.') + 1));
            switch (extension) {
                case 'png':
                case 'jpg':
                case 'svg':
                case 'gif':
                    addFile(file)
                    break;
                default:
                    preventPost(e);
                    break;
            }
        }
    });

    function addFile(name) {

        form_data.append('image', $("#new-pic").prop('files')[0]);

        $("#add-image").append("<li>" + name + "</li>");

        $.ajax(
            {
                url: 'ajax/imageAjax.php',
                data: form_data,
                type: 'post',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                success: function (result) {
                    console.log(result);
                }
            });
    }

    function preventPost(e) {
        e.preventDefault();
    }
});