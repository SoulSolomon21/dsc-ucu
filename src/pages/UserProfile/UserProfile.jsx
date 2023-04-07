import React, { useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import './UserProfile.css'
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const UserProfile = () => {

    const { user } = useAuth()
    const [member, setMember] = useState(user)
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [editedMember, setEditedMember] = useState({
        name: "",
        email: "",
        phone: "",
        role: user.role,
    });

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setEditedMember({ ...member });
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedMember(null);
        setEditedMember({ name: "", email: "", phone: "", role: user.role });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleSaveMember = () => {
        setMember(editedMember);

        const Update = async (edited) => {
            await axios.put(`https://web-takehome-production.up.railway.app/api/update/${user.id}`,edited)
            .then(function(response) {
                console.log(response)
            })
        }
        Update(editedMember)
        handleModalClose();
    };
    
    return (
        <div className="admin-page">
            <h1>My Profile</h1>
            <div className="row">
                    <div className="col-lg-4 mb-3">
                        <Card className="light-card">
                            <Card.Img variant="top" src={member.image} />
                            <Card.Body>
                                <Card.Text>Name: {member.name}</Card.Text>
                                <Card.Text>Email: {member.email}</Card.Text>
                                <Card.Text>Phone: {member.phoneNumber}</Card.Text>
                                <Card.Text>Role: {member.role}</Card.Text>
                                <Button variant="primary" onClick={() => handleMemberClick(member)}>
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
            <Modal show={showModal} onHide={handleModalClose} centered className="modal-blur">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMember ? "Edit Member" : "Add Member"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                value={editedMember.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={editedMember.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter phone number"
                                name="phone"
                                value={editedMember.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" value={editedMember.role} disabled />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <>
                        <Button variant="primary" onClick={handleSaveMember}>
                            Save Changes
                        </Button>
                    </>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default UserProfile