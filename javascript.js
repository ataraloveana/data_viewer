function Data() {
    var url = document.getElementById("urlInput").value;
    var tableContainer = document.querySelector(".table-container");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    var responseData = JSON.parse(xhr.responseText);
                    var table = "<table>";
                    table += "<tr>";

                    var keys = Object.keys(responseData[0]);
                    for (var i = 0; i < keys.length; i++) {
                        table += "<th>" + keys[i] + "</th>";
                    }
                    table += "</tr>";

                    for (var j = 0; j < responseData.length; j++) {
                        table += "<tr>";
                        for (var k = 0; k < keys.length; k++) {
                            table += "<td>" + responseData[j][keys[k]] + "</td>";
                        }
                        table += "</tr>";
                    }

                    table += "</table>";
                    tableContainer.innerHTML = table;
                } catch (error) {
                    tableContainer.innerHTML = "Gagal mengurai data JSON.";
                }
            } else {
                tableContainer.innerHTML = "Gagal mengambil data dari URL. Status: " + xhr.status;
            }
        }
    };
    xhr.send();
}
