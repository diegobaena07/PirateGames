import "./Contactanos.css";
import { FC, useContext, useRef, useState } from "react";
import { PirateGamesContext } from "../../PirateGamesContext";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const Contactanos: FC = () => {
    const { setShowModal, showModal } = useContext(PirateGamesContext);

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const successAlert = () => {
        Swal.fire({
            title: 'Enviado',
            text: 'Su mensaje se ha enviado exitosamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 2200
        });
    }

    const negadoAlert = () => {
        Swal.fire({
            title: 'No enviado',
            text: 'Su mensaje no se puedo enviar, por favor intente mas tarde',
            icon: 'error',
            showConfirmButton: false,
            timer: 2200
        });
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const Enviar = useRef<HTMLFormElement | string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Enviar.current) {
            emailjs.sendForm('service_2pbi92k', 'template_czjwkrd', Enviar.current, '-qDQtL9eTpNcuTrYl')
                .then((result) => {
                    successAlert();
                }, (error) => {
                    negadoAlert();
                });
        } else {
            console.error("El ref Enviar.current es nulo.");
        }
        setForm({
            nombre: "",
            email: "",
            mensaje: ""
        });
        console.log(form);
        setShowModal(false);
    }

    return (
        <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} backdrop="static">
            <Form onSubmit={(e) => handleSubmit(e)} ref={Enviar as React.RefObject<HTMLFormElement>}>
                <ModalHeader closeButton className="cabecera cabeceraTotal">
                    <ModalTitle>Contactanos</ModalTitle>
                </ModalHeader>
                <ModalBody className="contenido cabeceraTotal">
                    <Form.Group className="m-2">
                        <Form.Label>¿Quién nos contacta?</Form.Label>
                        <Form.Control
                            className="imput-form"
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            placeholder="Nombre completo"
                            autoFocus
                            onChange={(e) => handleFormChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="imput-form"
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="email@example.com"
                            onChange={(e) => handleFormChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Label>Dejanos saber tu consulta...</Form.Label>
                        <Form.Control
                            className="imput-form"
                            as="textarea"
                            rows={4}
                            name="mensaje"
                            value={form.mensaje}
                            onChange={(e) => handleFormChange(e)}
                        />
                    </Form.Group>
                </ModalBody>
                <ModalFooter className="abajo cabeceraTotal">
                    <Button type="submit">
                        Enviar
                    </Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
};

export { Contactanos };