const compare = <T, K extends keyof T>(a: T, b: T, property: K, isAscending: boolean): number => {
  const valueA = a[property]
  const valueB = b[property]

  if (valueA === valueB) {
    return 0
  }

  if (isAscending) {
    return valueA < valueB ? -1 : 1
  } else {
    return valueA > valueB ? -1 : 1
  }
}

const sortByProperty = <T, K extends keyof T>(data: T[], property: K, isAscending: boolean): T[] => {
  return data.sort((a, b) => compare(a, b, property, isAscending))
}

export default sortByProperty
