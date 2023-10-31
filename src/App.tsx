import Modal from "react-modal";
import { Header } from "./components/Header";
import { ListTarefas } from "./components/ListTarefas";
import { GlobalStyle } from "./styles/global";
import { CustomModal } from "./components/CustomModal";
import { useState } from "react";
import { TarefasProvider } from "./contexts/tarefaContext";

Modal.setAppElement("#root");

function App() {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    function abrirModal() {
        setIsVisibleModal(true);
    }
    function fecharModal() {
        setIsVisibleModal(false);
    }

    return (
        <>
            <TarefasProvider>
                <GlobalStyle />
                <Header abrirModal={abrirModal} />

                <ListTarefas />

                <CustomModal
                    modalVisible={isVisibleModal}
                    fecharModal={fecharModal}
                />
            </TarefasProvider>
        </>
    );
}

export default App;
