export const setFile = files => {
  const filesStr = JSON.stringify(files)
  sessionStorage.f = filesStr
}

export const getFile = () => {
  const filesStr = sessionStorage.f

  if (filesStr) {
    const filesObj = JSON.parse(filesStr)
    return filesObj
  }
}