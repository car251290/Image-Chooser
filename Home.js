
(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            //filteraddin()
            //the call back fuction to display the addin 
            displayimage();
            displayimages2();
            displayimages3();
            displayimages4();
            displayimages5()

            // the filter for search the image.
            // filterImages();
            //the new fuction 
            //myFunction();
            // If not using Word 2016, use fallback logic.
            if (!Office.context.requirements.isSetSupported('WordApi', '1.1')) {
                console.log('Sorry. The tutorial add-in uses Word.js APIs that are not available in your version of Office.');
            }
            // Do something that is only available via the new APIs
            //Selection of image, insert image
            $('.imgchooser').on('click', function (event) {
                var image = event.currentTarget.querySelector("img");
                var src = image.src;
                console.log("insert image");
                //if this the image of the Image

                //to insert the image from the function!
                toDataURL(src, function (dataUrl) {
                    insertImages(dataUrl);

                });
            });
            $('.imgchooser2').on('click', function (event) {
                var image = event.currentTarget.querySelector("img");

                var src = image.src;
                console.log("insert image2");
                //if this the image of the Image

                //to insert the image from the function!
                toDataURL(src, function (dataUrl) {
                    insertImages(dataUrl);

                });
            });

            $('.imgchooser3').on('click', function (event) {
                var photo = event.currentTarget.querySelector("img");

                var src = photo.src;
                console.log("insert image3");
                //if this the image of the Image

                //to insert the image from the function!
                toDataURL(src, function (dataUrl) {
                    insertImages(dataUrl);

                });
            });

            $('.imgchooser4').on('click', function (event) {
                var picture = event.currentTarget.querySelector("img");

                var src = picture.src;
                console.log("insert image4");
                //if this the image of the Image

                //to insert the image from the function!
                toDataURL(src, function (dataUrl) {
                    insertImages(dataUrl);

                });
            });

            $('.imgchooser5').on('click', function (event) {
                var img = event.currentTarget.querySelector("img");

                var src = img.src;
                console.log("insert image5");
                //if this the image of the Image

                //to insert the image from the function!
                toDataURL(src, function (dataUrl) {
                    insertImages(dataUrl);

                });
            });


        });
    };
    //Function for display the imagine in the addin
    function displayimage() {

        // array of Strings of objects to display the image.
        var Logo = ["freedownload.jpg", "photocopy.jpg", "Montreal123.jpg", "aurora.jpg", "Calgary.jpg"];
        //forlook for the image.
        for (var i = 0; i < Logo.length; i++) {
            var image = Logo[i];
            //add-in container for display the imagine with the url and the class html addin 
            $('.myimage-container').append(
                '<div class="imgchooser">' +
                '<tr id="Technology-Equipment"><td><img src = "http://localhost/41NewImageChooserWeb/Images/' + image + '"style="width:100%" height="100%" "align="right" "" alt = "Logo"  ></td></tr> ' +
                '</div>'
            );
            //forlook for the image.
            //  $(".imgchooser").show();
        }

    }
    function displayimages2() {
        var Images = ["wolf.jpg", "imgforest.jpg", "human-brain.jpg", "altstadt.jpg", "blackholeresize.jpg"];
        for (var i = 0; i < Images.length; i++) {
            var images = Images[i];
            //add-in container for display the imagine with the url and the class html addin 
            $('.myimage-container2').append(
                '<div class="imgchooser2">' +
                '<tr><td><img src = "http://localhost/41NewImageChooserWeb/Images/' + images + '"style="width:100%" height="100%" "align="right" "" alt = "Images"  ></td></tr> ' +
                '</div>'
            );
        }
        //forlook for the image.
        // $(".imgchooser2").show();
    }

    function displayimages3() {
        var photo = ["aurora.jpg", "blackhole.jpg", "imgforest.jpg", "altstadt.jpg", "blackholeresize.jpg"];
        for (var i = 0; i < photo.length; i++) {
            var images = photo[i];
            //add-in container for display the imagine with the url and the class html addin 
            $('.myimage-container3').append(
                '<div class="imgchooser3">' +
                '<tr><td><img src = "http://localhost/41NewImageChooserWeb/Images/' + images + '"style="width:100%" height="100%" "align="right" "" alt = "photo"  ></td></tr> ' +
                '</div>'
            );

        }
        //forlook for the image.
        // $(".imgchooser3").show();
    }
    function displayimages4() {
        var pictures = ["blackhole.jpg", "altstadt.jpg", "wolf.jpg", "vancouver-skyline.jpg", "blackholeresize.jpg", "Calgary.jpg"];
        for (var i = 0; i < pictures.length; i++) {
            var images = pictures[i];
            //add-in container for display the imagine with the url and the class html addin 
            $('.myimage-container4').append(
                '<div class="imgchooser4">' +
                '<tr><td><img src = "http://localhost/41NewImageChooserWeb/Images/' + images + '"style="width:100%" height="100%" "align="right" "" alt = "pictures"  ></td></tr> ' +
                '</div>'
            );

        }
        //forlook for the image.
        // $(".imgchooser3").show();
    }

    function displayimages5() {
        var img = ["wolf.jpg", "CanadianVancouver.jpg", "rocky-canada.jpg", "lake-Canada.jpg"];
        for (var i = 0; i < img.length; i++) {
            var images = img[i];
            //add-in container for display the imagine with the url and the class html addin 
            $('.myimage-container5').append(
                '<div class="imgchooser5">' +
                '<tr><td><img src = "http://localhost/41NewImageChooserWeb/Images/' + images + '"style="width:100%" height="100%" "align="right" "" alt = "img"  ></td></tr> ' +
                '</div>'
            );

        }
        //forlook for the image.
        // $(".imgchooser3").show();
    }



    //the new fuction for the sort of the Image for search of my image

    // toDataUrl fuction to get the date of the image
    function toDataURL(url, callback) {
        //method for the request of the data
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result.split(',')[1]);
                //callback(getSelection(insertImages))
            }
            reader.readAsDataURL(xhr.response);
        };
        //to open the url and get the data of the image selected
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
        console.log('toDataURL');
    }
    function insertImages(base64) {
        Word.run(function (context) {
            // Queue a command to get the current selection.
            // Create a proxy range object for the selection.
            var range = context.document.getSelection();
            // Queue a command to replace the selected text.
            range.insertInlinePictureFromBase64(base64, Word.InsertLocation.replace);
            // Synchronize the document state by executing the queued commands,
            // and return a promise to indicate task completion.
            return context.sync().then(function () {
                console.log('Added an image.');
            });
        })
            .catch(function (error) {
                console.log('Error: ' + JSON.stringify(error));
                if (error instanceof OfficeExtension.Error) {
                    console.log('Debug info: ' + JSON.stringify(error.debugInfo));
                }
            });
    }

    // Disaple the zoon of the add-in
    $(document).keydown(function (event) {
        if (event.ctrlKey == true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
            event.preventDefault();
        }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscor Hey
        // 61 Plus key  +/= key
    });
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    });

    // Disaple the zoon of the add-in
    $(document).ready(function () {
        $(document).keydown(function (event) {
            if (event.ctrlKey == true && (event.which == '107' || event.which == '109')) {
                alert('disabling zooming ! ');
                event.preventDefault();
            }
        });
    })

})();