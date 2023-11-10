import { FC, useContext } from "react";
import { PirateGamesContext } from "../../PirateGamesContext";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";

const Contactanos: FC = () => {
const { setShowModal, showModal } = useContext(PirateGamesContext);

return (
    <>
    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <ModalHeader>
            <ModalTitle>Contactanos</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="name@example.com" autoFocus/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button onClick={() => setShowModal(false)}>
                Enviar
            </Button>
        </ModalFooter>
    </Modal>
    </>
);
};

export { Contactanos };
