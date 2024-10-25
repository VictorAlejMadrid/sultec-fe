export function formatPhoneNumber(value: string) {
  // Returns (99) 9.9999-9999
  const phoneNumber = value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{1})(\d{4})(\d{4})/, '$1.$2-$3')
    .replace(/(\.\d{4})\d+?$/, '');

  return phoneNumber.slice(0, 16);
}

export function capitalize(text: string) {
  return text.replace(
    /\b\w{3,}\b/g,
    (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
  );
}
