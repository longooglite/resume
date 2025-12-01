import moment from "moment"
import { WorkExperience } from "../../types"
import { resumeDateToDate } from "./resumeDateToDate"
import { sortByResumeDate } from "./sortByResumeDate"

/**
 * takes in an array of work experience
 * and returns an array of percentages
 * based on the start date of the work experience
 * and the current date
 * @param experiences - The array of work experiences
 * @returns The array of percentages
 */
export const startDatesToPercentages = (experiences: WorkExperience[]) => {
    const sortedExperiences = sortByResumeDate(experiences)
    const firstExperienceStartDate = moment(resumeDateToDate(sortedExperiences[0].end_date))
    const lastExperienceEndDate = moment(resumeDateToDate(sortedExperiences[sortedExperiences.length - 1].end_date))
    const totalMonths = lastExperienceEndDate.diff(firstExperienceStartDate, 'months')
    const experienceMappedToNumberOfMonths = sortedExperiences.map(experience => {
        const experienceStartDate = moment(resumeDateToDate(experience.start_date))
        const experienceEndDate = moment(resumeDateToDate(experience.end_date))
        const experienceDuration = experienceEndDate.diff(experienceStartDate, 'months')
        return {
            [experience.company]: experienceDuration
        }
    })
    return {
        firstExperienceStartDate,
        lastExperienceEndDate,
        totalMonths,
        experienceMappedToNumberOfMonths
    }
}