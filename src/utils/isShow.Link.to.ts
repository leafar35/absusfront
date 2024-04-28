export const isShowLinkTo = (profile?: string, permission?: string[], to?: string): boolean => {
    if(profile == 'Administrador')
        return true
    if((permission && to)){
        const rule = permission.filter(value => value.split(':')[1] == to)
        return rule.length !== 0
    }
    return false
}