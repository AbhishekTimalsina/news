export function FormatDate(unformattedDate) {
  if (!unformattedDate) unformattedDate = new Date()
  let date = new Date(unformattedDate)
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
  return formattedDate
}
