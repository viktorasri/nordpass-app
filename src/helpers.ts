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
