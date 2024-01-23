import React, { useEffect, useState } from 'react';
import Api from '../../../services/api';
import { Input } from '../../../components/Inputs';
import { Button } from '../../../components/Buttom';
import { MdAccessTime } from "react-icons/md";
import SelectInput from '../../../components/SelectInput';
import { Container, Content, Form, Title, FormTitle } from '../styles';
import { IUserEntity } from '../../../shared/iuser';
import { ISchedule } from '../../../shared/ischedule';
import { IOptionProps } from '../../../shared/iselectinput';
import { useNavigate } from 'react-router-dom';

const CreateSchedule: React.FC = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState<Array<IOptionProps>>([])
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [localization, setlocalization] = useState<string>('')
    const [scheduleData, setSchedule] = useState<string>('')
    const [userId, setUserId] = useState<number>(0)

    useEffect(() => {
        async function getUsers(){
            const response = await Api.get('user')
            const usermap = response.data.map((user: IUserEntity) => {
                return { label: user.email_cellphone, value: user.id} 
            })
            setOptions(usermap)
        }
        getUsers()
    }, [])

    async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let schedule: ISchedule
        schedule = {
            title: title,
            category: category,
            localization: localization,
            schedule: new Date(scheduleData),
            userId: userId
        }
        const response = await Api.post('schedule', schedule)
        if(response.data){
            return alert('sucesso')
        }
        alert('error')
    }

    function handleGoBack(){        
        navigate(-1)
    }

    return (
        <Container>
            <Title>
                <MdAccessTime />
                Agendar
            </Title>
            <Content>
                <Form onSubmit={handleCreate}>
                    <FormTitle>
                        Cadastrar
                    </FormTitle>

                    {/* <Input 
                        type="text"
                        placeholder="Titulo"
                        required
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                    <Input 
                        type="text"
                        placeholder="Categoria"
                        required
                        onChange={ (e) => setCategory(e.target.value) }
                    />

                    <Input 
                        type="text"
                        placeholder="Localização"
                        required
                        onChange={ (e) => setlocalization(e.target.value) }
                    />

                    <Input
                        type="date"
                        placeholder="Dia da Consulta"
                        required
                        onChange={ (e) => setSchedule(e.target.value) }
                    /> */}

                    <SelectInput
                        options={options}
                        change={(e) => setUserId(parseInt(e.target.value))}
                    />

                    {/* <Button type="submit">Cadastrar</Button>
                    <Button type="button" onClick={() => handleGoBack()}>Voltar</Button> */}
                </Form>
            </Content>

        </Container>
    );
}

export default CreateSchedule;