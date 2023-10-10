import Modal from 'react-modal'
import { FormContainer } from './styles'

interface PropsCustomModal {
    abrirModal: () => void;
}

export function CustomModal() {
    return(
        <Modal
            isOpen={true}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type='button'
                className='react-modal-close'
            >
                x
            </button>

            <FormContainer>
                <h2>Cadastrar Tarefa</h2>

                <input type="text" placeholder='Título' />
                <textarea placeholder='Descrição' />
                <button type='submit'> Cadastrar </button>

            </FormContainer>

        </Modal>
    )
}
