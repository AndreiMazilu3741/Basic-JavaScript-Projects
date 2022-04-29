function dictionary_Function() {
    var employees_jobs = {
        John_Smith : "Manager",
        Marry_Garcia : "Secretary",
        George_Michaelson : "Driver",
        William_Moore : "Security",
    }
    delete employees_jobs.George_Michaelson
    document.getElementById("Dictionary").innerHTML = employees_jobs.George_Michaelson; // this will return undefined due to delete operator
}
