export function FormatDate(unformattedDate) {
  let date = new Date(unformattedDate)
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
  return formattedDate
}
