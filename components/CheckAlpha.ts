const checkAlpha = (str: string) => {
    return /^[a-zA-Z ]+$/.test(str)
}

export default checkAlpha