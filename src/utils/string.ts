export function locations(string: string, substring: string) {
  var a = [],
    i = -1
  while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i)
  return a
}
export function processLocations(sourceString: string, substring: string) {
  const totalLength = sourceString.length
  const result: {value: string; shouldDecorate: boolean}[] = []
  const indexPosSequence = locations(sourceString, substring)

  for (let i = 0; i < indexPosSequence.length; i++) {
    let index = indexPosSequence[i]
    if (i > 0) {
      index = index - indexPosSequence[i - 1] - 1
    }
    if (index === 0) {
      result.push({value: substring, shouldDecorate: true})
      sourceString = sourceString.substring(index + substring.length)
    }
    if (index > 0) {
      result.push({value: sourceString.substr(0, index), shouldDecorate: false})
      result.push({value: substring, shouldDecorate: true})
      sourceString = sourceString.substring(index + substring.length)
    }
    if (i === indexPosSequence.length - 1) {
      if (result.map((item) => item.value.length).reduceRight((pre, next) => pre + next) === totalLength) continue
      result.push({value: sourceString, shouldDecorate: false})
    }
  }

  return result
}
