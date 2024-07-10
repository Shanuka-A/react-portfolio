// src/utils.js
import { saveAs } from 'file-saver';

export const generateVCard = (name, phoneNumber, email) => {
  const vCardData = `
BEGIN:VCARD
VERSION:5.0
FN:${name}
TEL;TYPE=CELL:${phoneNumber}
EMAIL:${email}
END:VCARD
  `;

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  saveAs(blob, 'contact.vcf');
};
