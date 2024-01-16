export function makeUrlFriendly(phrase: string) {
  // Convert to lowercase
  const lowercasePhrase = phrase.toLowerCase();

  // Replace spaces with hyphens
  const urlFriendlyPhrase = lowercasePhrase.replace(/\s+/g, "-");

  // Remove special characters
  const sanitizedPhrase = urlFriendlyPhrase.replace(/[^\w-]/g, "");

  return sanitizedPhrase;
}
