/**
 * Returns a formatted duration
 * @param {number} durationInMilliseconds The source duration in milliseconds.
 * @returns {string} Returns the formatted duration. (Ex. 23:43 or 02:34:00)
 */
export default function formatDuration(durationInMilliseconds: number) {
  if (durationInMilliseconds && !isNaN(durationInMilliseconds)) {
    const seconds = Math.floor((durationInMilliseconds / 1000) % 60);
    const minutes = Math.floor((durationInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((durationInMilliseconds / (1000 * 60 * 60)) % 24);

    const formattedHours = (hours === 0) ? null : (hours < 10) ? '0' + hours : hours.toString();
    const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes.toString();
    const formattedSeconds = (seconds < 10) ? '0' + seconds : seconds.toString();

    return (formattedHours ? formattedHours + ':' : '') + formattedMinutes + ':' + formattedSeconds;
  }
}