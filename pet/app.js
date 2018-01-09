const clients = [
    {id: "1", firstName: "Hope", lastName: "S", title: "Miss"},
    {id: "2", firstName: "Hope", lastName: "R", title: "Mrs"},
    {id: "3", firstName: "Hope", lastName: "X", title: "Miss"}
];

$(document).ready(function () {
    const emptySearchResults = (displayValue) => {
        $("#searchResults").empty();
        if (displayValue) {
            $("#searchResults").attr("style", displayValue);
        }

    };
    const hideSearch = () => {
        emptySearchResults("display:none");
        $("#searchBar").attr("style", "display: none");
    };


    $("#home").click(() => {
        $("#searchBar").attr("style", "display: none");
        $("#clientDetailsSection").attr("style", "display: none");
        $("#petSection").attr("style", "display: none");
        $("#actionSection").attr("style", "display: none");
        $("#clients").removeClass("w3-blue");
        $("#home").addClass("w3-blue");
    });

    $('#reception,#reports,#settings,#tools').click(() => {
        alert("under construction")
    });

    $("#clients").click(() => {
        $("#home").removeClass("w3-blue");
        $("#clients").addClass("w3-blue");

        let flag = "display: none";
        const value = $("#searchBar").attr("style");
        if (value === "display: none") {
            flag = "display: block";
        }
        $("#searchBar").attr("style", flag);
    });

    $("#search").keyup((event) => {
        if (event.keyCode === 27) {
            hideSearch();
            return;
        }

        const value = $("#search").val();
        const result = [];
        if (value && value !== "") {
            clients.forEach(client => {
                if (client.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    result.push(client);
                }
            });
        }

        if (result.length) {
            emptySearchResults("display:block");
            result.forEach(client => {
                $("#searchResults").append(`<li id="${client.id}">${client.title} ${client.lastName} ${client.firstName}</li>`)
            });

            $("#searchResults li").click((event) => {
                const id = event.target.id;
                hideSearch();
                displayClientDetails(id);
            })
        } else {
            emptySearchResults("display:none");
        }
    });

    const displayClientDetails = (clientId) => {
        $("#clientDetailsSection").attr("style", "display: block");
        $("#petSection").attr("style", "display: block");
        let client = undefined;
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].id === clientId) {
                client = clients[i];
                break;
            }
        }
        $("#name").text(`${client.title} ${client.lastName} ${client.firstName}`);
    };

    $("#petDetails tbody tr").click((event) => {
        $("#actionSection").hide();
        $("#actionSection").show();
    });

    $("#clientEdit").click(()=>{
        $("#clientEditModal").show();
    })
});
