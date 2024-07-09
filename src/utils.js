// src/utils.js
import { saveAs } from 'file-saver';

export const generateVCard = (name, phoneNumber) => {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=VOICE,HOME,MSG:${phoneNumber}
END:VCARD
  `;

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  saveAs(blob, 'contact.vcf');
};
