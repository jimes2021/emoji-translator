import EmojiTranslator from '@/components/EmojiTranslator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Words to Emoji Translator - Free Online Tool',
  description:
    'Free online Words to Emoji Translator. Convert your text into emojis instantly. No sign-up required. Fast, easy, and fun to use!',
};

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <header className="text-center pt-16 pb-8 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Words to Emoji Translator
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Free online tool to instantly convert your words and phrases into
          emojis. Just type your text, click translate, and see your words turn
          into fun emojis!
        </p>
      </header>

      <section className="px-4 pb-4">
        <EmojiTranslator />
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is a Words to Emoji Translator?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A Words to Emoji Translator is a free online tool that converts
            English words and phrases into their corresponding emoji symbols.
            Instead of typing emojis manually or scrolling through your emoji
            keyboard, simply type regular text and let our tool do the
            conversion for you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our translator supports over 800 common English words across
            categories including emotions, food, animals, activities, objects,
            places, and more. Each word is matched to the most appropriate emoji
            for natural, readable translations.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
            How to Use
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Type or paste your text into the input box above</li>
            <li>Click the &ldquo;Translate to Emoji&rdquo; button</li>
            <li>Your text appears with words replaced by emojis</li>
            <li>Click &ldquo;Copy to Clipboard&rdquo; to copy the result</li>
          </ol>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
            Why Use an Emoji Translator?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Make your social media posts more engaging and fun</li>
            <li>Add emojis to messages without searching through emoji menus</li>
            <li>Create unique captions for Instagram, TikTok, and Twitter</li>
            <li>Learn emoji meanings while translating</li>
            <li>100% free — no sign-up, no download, no watermarks</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
            FAQ
          </h3>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-gray-800">
                Is this tool really free?
              </h4>
              <p className="text-gray-700">
                Yes! Our Words to Emoji Translator is completely free. No
                registration, no hidden fees, no limits on usage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Does it work on mobile?
              </h4>
              <p className="text-gray-700">
                Absolutely. The tool works on all devices — desktop, tablet, and
                mobile. Just open it in your browser.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Can I translate entire sentences?
              </h4>
              <p className="text-gray-700">
                Yes! You can translate single words, phrases, or entire
                paragraphs. Only words with matching emojis in our dictionary
                will be converted — the rest stays as-is.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Words to Emoji Translator. Free
          online tool. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          <a
            href="/privacy"
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </main>
  );
}
