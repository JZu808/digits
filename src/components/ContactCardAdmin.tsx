'use client';

import { Card, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single contact card for the admin page, including the owner. */
const ContactCardAdmin = ({ contact }: { contact: Contact & { owner: string } }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} alt={`${contact.firstName} ${contact.lastName}`} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;