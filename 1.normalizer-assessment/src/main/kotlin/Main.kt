fun main(args: Array<String>) {
    var inputs = arrayOf(
        "Java Engineer",
        "C# Engineer",
        "Accountant",
        "Chief Accountant",
        "Frontend Architect",
        "Cloud Architect",
        "Junior Quantity surveyor",
        "Senior Quantity surveyor",
    )

    val normalizer = Normalizer()

    for (input in inputs) {
        val normalizedInput = normalizer.normalize(input)

        println(normalizedInput)
    }

}