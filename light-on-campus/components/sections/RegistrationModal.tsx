'use client';

import { useState, useEffect } from 'react';
import { RegistrationForm } from './RegistrationForm';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!isSubmitted) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted, onClose]);

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="font-sora font-extrabold text-[#0d1b2a] text-2xl mb-4 text-center">
          Register for the Conference
        </h2>
        {isSubmitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="text-green-600 font-bold text-xl">
              Thank you for registering! We look forward to seeing you.
            </div>
            <p className="text-gray-500 text-sm">
              Closing in {countdown} second{countdown !== 1 ? 's' : ''}...
            </p>
            <button
              onClick={onClose}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Close now
            </button>
          </div>
        ) : (
          <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
        )}
      </div>
    </div>
  );
}