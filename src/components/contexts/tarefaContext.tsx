import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Tarefas {
    titulo: string;
    descricao: string;
}

interface PropsTarefaContext { tarefas: Array<Tarefas> }
export const TarefaContext = createContext({} as PropsTarefaContext)

interface PropsTarefaProvider {
    children: ReactNode
}
//export function TarefasProvider({props}) {
export function TarefasProvider({ children }: PropsTarefaProvider) {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        axios.get('/api/tarefas').then((res) => {
            console.log('Andressa acordou')
            console.log(res.data)
        })
    }, [])

    return (
        <TarefaContext.Provider value={{
            tarefas     //tarefas: tarefas
        }}>
            {children}
        </TarefaContext.Provider>
    )
}
