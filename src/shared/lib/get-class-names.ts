
type Mods = Record<string, boolean | string>

export const getClassNames = (names: string[], mods: Mods): string => {
    return [
        ...names,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}


