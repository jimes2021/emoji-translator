import emojiDict from './emoji-dict';

export function translateToEmoji(text: string): string {
  if (!text.trim()) return '';

  const words = text.split(/\s+/);
  const translated = words.map((word) => {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (clean && emojiDict[clean]) {
      return word.replace(new RegExp(clean, 'i'), emojiDict[clean]);
    }
    return word;
  });

  return translated.join(' ');
}

export function getEmojiCount(text: string): number {
  const translated = translateToEmoji(text);
  const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;
  const matches = translated.match(emojiRegex);
  return matches ? matches.length : 0;
}
