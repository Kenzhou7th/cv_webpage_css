function searchSubjects() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let firstYearSubjects = document.querySelectorAll(".first-year ul li");
    let secondYearSubjects = document.querySelectorAll(".second-year ul li");
    let firstYearContainer = document.querySelector(".first-year");
    let secondYearContainer = document.querySelector(".second-year");

    let firstYearVisible = false;
    let secondYearVisible = false;

    firstYearSubjects.forEach(subject => {
        let text = subject.textContent.toLowerCase();
        if (text.includes(input)) {
            subject.style.display = "block";
            firstYearVisible = true;
        } else {
            subject.style.display = "none";
        }
    });

    secondYearSubjects.forEach(subject => {
        let text = subject.textContent.toLowerCase();
        if (text.includes(input)) {
            subject.style.display = "block";
            secondYearVisible = true;
        } else {
            subject.style.display = "none";
        }
    });

    /* Para tago if di magpakita kay nakakita nag lain */
    firstYearContainer.style.display = firstYearVisible ? "block" : "none";
    secondYearContainer.style.display = secondYearVisible ? "block" : "none";
}