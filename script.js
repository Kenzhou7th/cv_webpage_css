function searchSubjects() {
    let input = document.getElementById("searchBar").value.toLowerCase().trim();
    let yearContainers = document.querySelectorAll(".subjects-container > div");

    let hasResults = false;

    yearContainers.forEach(container => {
        let subjects = container.querySelectorAll("ul li");
        let yearHasMatch = false;

        subjects.forEach(subject => {
            let text = subject.textContent.toLowerCase();
            if (text.includes(input)) {
                subject.style.display = "list-item";
                yearHasMatch = true;
                hasResults = true;
            } else {
                subject.style.display = "none";
            }
        });

        container.style.display = yearHasMatch ? "block" : "none";
    });

    let noResultsMessage = document.getElementById("noResults");
    if (!hasResults) {
        if (!noResultsMessage) {
            noResultsMessage = document.createElement("p");
            noResultsMessage.id = "noResults";
            noResultsMessage.textContent = "No matching courses found.";
            noResultsMessage.style.color = "red";
            document.getElementById("subjects").appendChild(noResultsMessage);
        }
    } else if (noResultsMessage) {
        noResultsMessage.remove();
    }
}