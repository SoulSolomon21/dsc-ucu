import React, { useEffect, useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import './Admin.css'
import axios from "axios";

const AdminPage = () => {
    const [members, setMembers] = useState([]);

    const fetchUsers = async () => {
        await axios.get('https://web-takehome-production.up.railway.app/api')
        .then((response) => {
          console.log(response.data.memberData);
          setMembers(response.data.memberData)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
    useEffect(() => {
      fetchUsers()
    }, [])
    
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [editedMember, setEditedMember] = useState({
        name: "",
        email: "",
        phone: "",
        role: "Club Member",
    });

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setEditedMember({ ...member });
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedMember(null);
        setEditedMember({ name: "", email: "", phone: "", role: "Club Member" });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleSaveMember = async () => {
        setMembers((prevMembers) =>
            prevMembers.map((member) =>
                member.id === selectedMember.id ? { ...member, ...editedMember } : member
            )
        );
        
        handleModalClose();
    };

    const handleAddMember = () => {
        const newMember = {
            id: members.length + 1,
            ...editedMember,
            image: `https://picsum.photos/seed/${members.length + 1}/200/300`,
        };
        setMembers((prevMembers) => [...prevMembers, newMember]);
        handleModalClose();
    };

    const handleDeleteMember = () => {
        setMembers((prevMembers) =>
            prevMembers.filter((member) => member.id !== selectedMember.id)
        );
        handleModalClose();
    };

    return (
        <div className="admin-page">
            <h1>Club Members</h1>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add Member
            </Button>
            <div className="row">
                {members.map((member) => (
                    <div key={member.id} className="col-lg-4 mb-3">
                        <Card className="light-card">
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>Email: {member.email}</Card.Text>
                                <Card.Text>Phone: {member.phone}</Card.Text>
                                <Card.Text>Role: {member.role}</Card.Text>
                                <Button variant="primary" onClick={() => handleMemberClick(member)}>
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onHide={handleModalClose} centered className="modal-blur">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMember ? "Edit Member" : "Add Member"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" value={editedMember.name} disabled />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Choose role"
                                name="role"
                                as="select"
                                value={editedMember.role}
                                onChange={handleInputChange}
                            >
                                <option value="Member">Member</option>
                                <option value="President">President</option>
                                <option value="Vice President">Vice President</option>
                                <option value="Treasurer">Treasurer</option>
                                <option value="Secretary">Secretary</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" value={editedMember.email} disabled />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" value={editedMember.phone} disabled />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {selectedMember ? (
                        <>
                            <Button variant="danger" onClick={handleDeleteMember}>
                                Delete
                            </Button>
                            <Button variant="primary" onClick={handleSaveMember}>
                                Save Changes
                            </Button>
                        </>
                    ) : (
                        <Button variant="primary" onClick={handleAddMember}>
                            Add Member
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdminPage