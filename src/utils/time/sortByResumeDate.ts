import moment from "moment"
import { WorkExperience } from "../../types"
import { resumeDateToDate } from "./resumeDateToDate"

/**
 * sortByResumeDate
 * - Sorts an array of work experiences by start_date and end_date
 * - Handles "Present" as current date
 * - Expects YYYY-MM or YYYY
 * - Returns the sorted array
 * @param experiences - The array of work experiences to sort
 * @returns The sorted array
 */
export const sortByResumeDate = (experiences: WorkExperience[]): WorkExperience[] => {
    return [...experiences].sort((a, b) => {
        const aStart = moment(resumeDateToDate(a.start_date))
        const bStart = moment(resumeDateToDate(b.start_date))
        if (aStart.isBefore(bStart)) return -1
        if (aStart.isAfter(bStart)) return 1
        return 0
    })
}