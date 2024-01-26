const Translate = (value: string): string => {
    let title = 'Home'
    switch(value){
        case 'Home':
            title = 'Home'
            break
        case 'employees':
            title = 'Funcionário'
            break
        case 'patients':
            title = 'Paciente'
            break
        case 'schedules':
            title = 'Agendamentos'
            break
        case 'calendary':
            title = 'Calendário'
            break
        case 'create':
            title = 'Cadastrar'
            break
        case 'update':
            title = 'Atualizar'
            break
    }
    return title
}

export default Translate;