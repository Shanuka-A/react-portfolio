// src/utils.js
import vCard from 'vcard-generator';
import { saveAs } from 'file-saver';

export const generateVCard = (name, phoneNumber, email, address) => {
  const card = vCard();

  card
    .addName(name)
    .addPhoneNumber(phoneNumber, 'HOME')
    .addEmail(email)
    .addAddress(address);

  const vCardData = card.toString('3.0');
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  saveAs(blob, 'contact.vcf');
};
