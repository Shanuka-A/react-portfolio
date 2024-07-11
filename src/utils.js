// src/utils.js
import { generate } from 'vcard';
import { saveAs } from 'file-saver';

export const generateVCard = (name, phoneNumber, email, address) => {
  const vCard = generate({
    version: '3.0',
    name: { firstNames: name },
    telephone: phoneNumber,
    email: email,
    address: { street: address },
  });

  const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
  saveAs(blob, 'contact.vcf');
};
