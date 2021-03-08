export const getSortedPasswordListByCount = (list: { value: string; count: string }[]) => {
    const sortedList = [...list].sort(
        (a: { value: string; count: string }, b: { value: string; count: string }) =>
            parseInt(b.count) - parseInt(a.count)
    )
    return sortedList
}

export const getSortedPasswordListByName = (list: { value: string; count: string }[]) => {
    const sortedList = [...list].sort((a: { value: string; count: string }, b: { value: string; count: string }) => {
        if (a.value < b.value) {
            return -1
        }
        if (a.value > b.value) {
            return 1
        }
        return 0
    })
    return sortedList
}

export const validateFormEmail = (email: string) => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return regEx.test(email.toLowerCase())
}

export const validateFormName = (name: string) => {
    return name.length === 0 ? false : true
}
