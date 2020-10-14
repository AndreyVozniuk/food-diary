export function dateToday() {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()
  return `${year}-${month}-${day}`
}

export function getOptionText(el) {
  return el.options[el.selectedIndex].text
}

export function getUniqueID(){
  return '_' + Math.random().toString(36).substr(2, 9)
}