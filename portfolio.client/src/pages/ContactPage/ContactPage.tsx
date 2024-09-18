import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { ContactFormData } from '../../interface/contact';

const ContactPage: React.FC = () => {
  const handleFormSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-6">
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;