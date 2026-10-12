import { cookies } from "next/headers"

const useServerDarkMode = async (defaultTheme = 'dark') => {
    return defaultTheme
    // return cookies().get('theme')?.value ?? defaultTheme
}

export default useServerDarkMode