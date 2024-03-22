
type Mods = Record<string, boolean | string>

// classNames
export function cl(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([cl, value]) => Boolean(value))
        .map(([cl]) => cl)]
        .join(' ')
}