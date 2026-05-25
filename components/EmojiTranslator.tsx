'use client';

import { useState } from 'react';
import { translateToEmoji, getEmojiCount } from '@/lib/translator';

export default function EmojiTranslator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleTranslate = () => {
    const result = translateToEmoji(input);
    setOutput(result);
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emojiCount = getEmojiCount(input);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your text
        </label>
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-lg"
          placeholder="Type something here... example: I love pizza and music"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleTranslate}
          className="mt-4 w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-200"
        >
          Translate to Emoji ✨
        </button>
      </div>

      {output && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">Result</h2>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
            >
              {copied ? 'Copied! ✓' : 'Copy to Clipboard'}
            </button>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl min-h-[80px] text-xl leading-relaxed break-words">
            {output || <span className="text-gray-400">Translation will appear here...</span>}
          </div>
          {emojiCount > 0 && (
            <p className="mt-3 text-sm text-gray-500">
              {emojiCount} word{emojiCount !== 1 ? 's' : ''} translated to emojis
            </p>
          )}
        </div>
      )}
    </div>
  );
}
