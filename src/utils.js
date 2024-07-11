// utils.js

export const generateVCard = (name, phoneNumber, email, address) => {
  const vCardString = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phoneNumber}
EMAIL:${email}
ADR:${address}
END:VCARD`;

  const blob = new Blob([vCardString], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'thanuja.vcf';
  document.body.appendChild(a);
  a.click();

  // Clean up
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
