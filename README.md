# Image-Chooser

The work Experencie I am using is in the JavaScript in this moment I am updating the image chooser to make it more functionable, the updates will be soon in the github a complate change in this opportunity.

# The Project with my experience in Javascript

This project was one of the first coding experiences with Web application name( Add-ins) using Visual Studio and the language of Javascript, HTML and CSS for making an Array of images and display images (JPG) using simple selection double click in the document Word.
Also, I use the CSS and the HTML for making the design of the Add-in the best way as possible, for the user to make the selection easier.

Every subject has an Array of images that will be displayed in a table for making the display I made a function for getting the call back function of the database of the images that are stored in the URL.

# New Image chooser
as word has improve the experence the user select the icons, I am makinng this web application to deplayment easier for everyone I improve the code to make it easier as possible.

# SharePoint

A SharePoint Add-in is a self-contained piece of functionality that extends the capabilities of SharePoint websites to solve a well-defined business problem.
Add-ins don't have custom code that runs on SharePoint servers. Instead, all custom logic moves "up" to the cloud, or "down" to client computers, or "over" to an on-premises server that is outside the SharePoint farm or SharePoint Online subscription. Keeping custom code off SharePoint servers provides reassurance to SharePoint administrators that the add-in can't harm their servers or reduce the performance of their SharePoint Online websites.

All SharePoint Add-ins that users install get a tile on the Site Contents page of the SharePoint website. Clicking the tile runs the add-in.
A SharePoint Add-in is configured using an add-in manifest—an XML file that declares the add-in's basic properties, where it runs, and what SharePoint should do when the add-in starts

# Javascript function for using the URL and display the images
I made to select image in a sort way to getting better understanding how to build it.
to get database storeted in Sharepoint

This Ecma Standard defines the ECMAScript 2023 Language. It is the fourteenth edition of the ECMAScript Language Specification. Since publication of the first edition in 1997, ECMAScript has grown to be one of the world's most widely used general-purpose programming languages. It is best known as the language embedded in web browsers but has also been widely adopted for server and embedded applications.

# Update the Css and Html I am updating this application.
I making easier this application too also I change the looking because can be easier for the user.

   # Function for display the imagine in the addin
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

# CSS 
# This is part of my search bar I use for creating a search bar for an easy looking of the Images in the Add-in

# search bar 
.search {
    display: block;
    float: left;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 120%;
    border: 35px solid #e1dfdd;
    font-size: 18px;
    text-align: center;
    padding: 14px 20px 14px 40px;
    margin-bottom: 12px;
}
# The Html for the selection 
the filter and how to make it work in the 3 different tables, where there are showing the images.
# Html 

I use a <script> for the accion of the search bar and I put the code in the HTML.
       <script>
 # JavaScript
        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("imgchooser");
            table2 = document.getElementById("imgchooser2");
            table3 = document.getElementById("imgchooser3");
            tr = table.getElementsByTagName("tr");

            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }

        }
        
        ## The new Arrow function and the display images with a Button in the Tab 
        
          function Arrow() {

            var btnLeft, btnRight, content, clickedIndex

            btnLeft = document.getElementById("btnL");
            btnRight = document.getElementById("btnR");
            content = document.getElementById("content");
            clickedIndex = 0;

            btnRight.addEventListener("click", goRight);
            btnLeft.addEventListener("click", goLeft);

            function goRight() {
                if (clickedIndex < 2) {
                    clickedIndex = clickedIndex + 1;
                    content.style.marginLeft = -190 * clickedIndex + "px";  
                }

            }
            function goLeft() {
                if (clickedIndex > 0) {
                    clickedIndex = clickedIndex - 1;
                    content.style.marginLeft = -190 * clickedIndex + "px";  

                }
            }

        }

//Card images function filter
        filterSelection("All")
        function filterSelection(c) {
          // Button();
            var x, i;
            x = document.getElementsByClassName("filterDiv");
            // x.show('all')
            if (c == "All") c = "";
            for (i = 0; i < x.length; i++) {
                RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
            }

        }

        function AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) === -1) {
                    element.className += " " + arr2[i];
                }
            }
        }

        function RemoveClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        }

        // Add active class to the current button (highlight it)
        function Button() {
            var btnContainer = document.getElementById("myBtnContainer");
            var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var cur = document.getElementsByClassName(" active");
                    cur[0].className = cur[0].className.replace(" active", "");
                    this.className += "active";
                });
            }

        }


    </script>
    
    
    # The container of the image, are in a <div>
    # HTML
    <div>
        <table align="right" style="width:60%"> <tr style="height:.5px"><td id="table">Technology-Equipment</td></tr> </table>

        <table class="myimage-container" align="right" style="width:60%">

            <tr class="table" style="height:10px"><td></td></tr>
        </table>
    </div>
