import { WorkExperience } from "../types"
import { technologySynonyms } from "./technologySynonyms"

export const experienceContainsTechnology = (experience: WorkExperience, technology: string): boolean => {
    return experience.tech_stack?.some((tech) => {
        const synonyms = technologySynonyms(String(tech))
        return synonyms?.some(synonym => synonym.toLowerCase() === technology.toLowerCase()) ?? false
    }) ?? false
}