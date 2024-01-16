import React, { useEffect, useState } from 'react';
import Api from '../../../services/api';
import Input from '../../../components/Inputs';
import Button from '../../../components/Buttom';
import { MdAccessTime } from "react-icons/md";
import SelectInput from '../../../components/SelectInput';
import { Container, Content, Form, Title, FormTitle } from '../styles';
import { IUserEntity } from '../../../shared/iuser';
import { ISchedule } from '../../../shared/ischedule';
import { IOptionProps } from '../../../shared/iselectinput';
import { useNavigate, useParams } from 'react-router-dom';

const Updatechedule: React.FC = () => {
    const navigate = useNavigate();
    const scheduleId = useParams()
    const [options, setOptions] = useState<Array<IOptionProps>>([])
    const [id, setId] = useState<number>()
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [localization, setlocalization] = useState<string>('')
    const [scheduleData, setSchedule] = useState<string>('')
    const [userId, setUserId] = useState<number>(0)

    useEffect(() => {
        async function getUsers(){
            const response = await Api.get('user')
            console.log(response)
            const usermap = response.data.map((user: IUserEntity) => {
                return { label: user.email_cellphone, value: user.id} 
            })
            setOptions(usermap)
        }

        async function getSchedule(){
            const response = await Api.get(`schedule/${scheduleId.id}`)
            setId(response.data.id)
            setTitle(response.data.Title)
            setCategory(response.data.Category)
            setlocalization(response.data.localization)
            setSchedule(response.data.schedule)
            setUserId(response.data.userId)
        }

        getSchedule()
        getUsers()
    }, [])

    async function handleUpdate() {
        let schedule: ISchedule
        schedule = {
            id: id,
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
                Atualizar
            </Title>
            <Content>
                <Form onSubmit={() => handleUpdate() }>
                    <FormTitle>
                        Atualizar
                    </FormTitle>

                    <Input 
                        type="text"
                        placeholder="Titulo"
                        required
                        value={title}
                        onChange={ (e) => setTitle(e.target.value) }
                    />

                    <Input 
                        type="text"
                        placeholder="Categoria"
                        required
                        value={category}
                        onChange={ (e) => setCategory(e.target.value) }
                    />

                    <Input 
                        type="text"
                        placeholder="Localização"
                        required
                        value={localization}
                        onChange={ (e) => setlocalization(e.target.value) }
                    />

                    <Input
                        type="date"
                        placeholder="Dia da Consulta"
                        required
                        value={scheduleData}
                        onChange={ (e) => setSchedule(e.target.value) }
                    />

                    <SelectInput
                        options={options}
                        defaultValue={userId}
                        change={(e) => setUserId(parseInt(e.target.value))}
                    />

                    <Button type="submit">Atualizar</Button>
                    <Button type="button" onClick={() => handleGoBack()}>Voltar</Button>
                </Form>
            </Content>

        </Container>
    );
}

export default Updatechedule;