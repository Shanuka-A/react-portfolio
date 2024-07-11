// src/utils.js
import { VCARD, FNProperty, TelProperty, EmailProperty, AdrProperty } from 'vcard4';
import { saveAs } from 'file-saver';

export const generateVCard = (name, phoneNumber, email, address) => {
  const vCard = new VCARD();
  
  vCard.add(new FNProperty(name));
  vCard.add(new TelProperty(phoneNumber, { type: 'cell' }));
  vCard.add(new EmailProperty(email));
  vCard.add(new AdrProperty({ street: address }));

  const vCardData = vCard.toString();
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  saveAs(blob, 'contact.vcf');
};
