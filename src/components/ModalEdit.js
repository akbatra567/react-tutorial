import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit(
    {
        isOpen, 
        setIsOpen,
        description, 
        value, 
        isExpense, 
        setDescription, 
        setValue, 
        setIsExpense

    }){
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm 
                    description = {description}
                    value = {value}
                    isExpense = {isExpense}
                    setDescription = {setDescription}
                    setValue = {setValue}
                    setIsExpense = {setIsExpense} 
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}><Icon name='times' /></Button>
                <Button onClick={() => setIsOpen(false)} primary>OK</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit
