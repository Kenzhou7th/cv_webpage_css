function searchSubjects() {
    let input = document.getElementById("searchBar").value.toLowerCase().trim();
    let yearContainers = document.querySelectorAll(".subjects-container > div");
    let hasResults = false;

    yearContainers.forEach(container => {
        let subjects = container.querySelectorAll("ul li");
        let yearHasMatch = false;
        let matchedSubjects = [];

        subjects.forEach(subject => {
            let text = subject.textContent.toLowerCase();
            if (text.includes(input)) {
                matchedSubjects.push(subject);
                yearHasMatch = true;
                hasResults = true;
            }
        });

        // Clear old list
        container.querySelector("ul").innerHTML = "";
        matchedSubjects.forEach(subject => container.querySelector("ul").appendChild(subject));

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