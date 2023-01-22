import java.util.*

//Ctrl+Alt+L

class Normalizer {
    private fun contains(jobTitle: String, value: String): Boolean {
        val lowerJobTitle = jobTitle.lowercase()
        val lowerValue = value.lowercase()

        val splitedLowerValue = lowerValue.split(" ".toRegex()).toTypedArray()

        var result = false

        for (value in splitedLowerValue) {
            if (lowerJobTitle.contains(value)) {
                result = true
            }
        }

        return result
    }


    fun normalize(value: String): String {
        val jobTitles = arrayOf(
            "Architect",
            "Software engineer",
            "Quantity surveyor",
            "Accountant",
        )

        var result = ""

        for (jobTitle in jobTitles) {
            val match = contains(jobTitle, value)

            if (match) {
                result = jobTitle
            }
        }
        return result
    }
}