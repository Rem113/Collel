export function formatDate(date) {
    let str = date.toLocaleString()
    return str.substr(0, str.indexOf(' '))
}