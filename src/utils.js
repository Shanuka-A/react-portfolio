// src/utils.js
import { saveAs } from 'file-saver';

export const generateVCard = (name, phoneNumber, email, address) => {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
N:${name};;;;
TEL;TYPE=CELL:${phoneNumber}
EMAIL;TYPE=INTERNET:${email}
ADR;TYPE=HOME:;;${address};;;
END:VCARD
  `;

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  saveAs(blob, 'contact.vcf');
};
