import format from "date-fns/format";
import addHours from "date-fns/addHours";
import differenceInMinutes from "date-fns/differenceInMinutes";

/**
 * @param {string} dateLeft
 * @param {string} dateRight
 * @returns {boolean}
 */
export const isSameDay = (dateLeft, dateRight) => {
  return new Date(dateLeft).getDate() == new Date(dateRight).getDate();
};

/**
 *
 * @param {string} ts
 * @returns {string}
 */
export const formatTime = (ts) => {
  return format(new Date(ts), "H:mm");
};

/**
 * @param {string} closeAt
 * @param {number | Date} now
 * @returns {string}
 */
export const formatCloseAt = (closeAt, now = new Date()) => {
  if (new Date(closeAt) < new Date(now)) {
    return "投票締切";
  }

  if (new Date(closeAt) > addHours(new Date(now), 2)) {
    return "投票受付中";
  }

  return `締切${differenceInMinutes(new Date(closeAt), now)}分前`;
};
