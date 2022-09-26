
type Mods = Record<string, boolean | string>

export const buildClassNames = (names: string[], mods: Mods = {}): string => {
    return [
        ...names.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}


