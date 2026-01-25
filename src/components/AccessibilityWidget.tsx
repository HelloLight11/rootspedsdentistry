'use client';

import { useState, useEffect } from 'react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
  }, [highlightLinks]);

  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    setHighlightLinks(false);
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#2d5a27] text-white rounded-full shadow-lg hover:bg-[#478449] transition-all duration-300 flex items-center justify-center"
        aria-label="Accessibility Options"
        title="Accessibility Options"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#2d5a27] text-white px-4 py-3 flex items-center justify-between">
            <h3 className="font-semibold">Accessibility Options</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close accessibility panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Size: {fontSize}%
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                  className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-lg font-bold"
                  aria-label="Decrease text size"
                >
                  A-
                </button>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-[#2d5a27] rounded-full transition-all"
                    style={{ width: `${((fontSize - 80) / 40) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => setFontSize(Math.min(120, fontSize + 10))}
                  className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center text-lg font-bold"
                  aria-label="Increase text size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">High Contrast</span>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  highContrast ? 'bg-[#2d5a27]' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={highContrast}
                aria-label="Toggle high contrast"
              >
                <span
                  className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Highlight Links */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Highlight Links</span>
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  highlightLinks ? 'bg-[#2d5a27]' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={highlightLinks}
                aria-label="Toggle highlight links"
              >
                <span
                  className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    highlightLinks ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              className="w-full py-2 text-sm text-[#2d5a27] border border-[#2d5a27] rounded-lg hover:bg-[#2d5a27] hover:text-white transition-colors"
            >
              Reset to Default
            </button>
          </div>

          <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500 text-center">
            ADA & California Accessibility Compliant
          </div>
        </div>
      )}
    </>
  );
}
