import React from 'react';
import { Container, ChartContainer, LegendContainer, Legend, Header } from './styles';

interface IHistoryBoxProps {
    data: {
        month: string,
        amountEntry: number,
        amountOutput: number,
    }[],
    lineCOlorAmountEntry: string,
    lineCOlorAmountOutput: string,
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineCOlorAmountEntry, lineCOlorAmountOutput
}) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>

            <LegendContainer>
                <Legend color={lineCOlorAmountEntry}>
                    <div></div>
                    <span>Entradas</span>
                </Legend>
           
                <Legend color={lineCOlorAmountOutput}>
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>

        <ChartContainer>
        </ChartContainer>
    </Container>
)

export default HistoryBox;