'use client';
import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { RegistrationForm } from './RegistrationForm'; // Import the new form component

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="register" className="bg-white py-20 px-4">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[28px] border-2 border-gold/20 p-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, #fff8ed 0%, #ffffff 60%)",
            }}
          >
            {/* Decorative circle */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                top: -80,
                right: -80,
                width: 300,
                height: 300,
                background: "rgba(245,166,35,0.07)",
              }}
            />

            <span className="inline-block bg-teal-light text-teal-dark text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Free Registration
            </span>

            <h2
              className="font-sora font-extrabold text-[#0d1b2a] mb-3"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
            >
              Ready to Be the Light?
            </h2>
            <p className="text-[#7a96ab] text-[1.05rem] mb-10 max-w-xl mx-auto">
              Secure your spot at the Christian Student Conference — it&apos;s
              free and open to all campus students.
            </p>

            {isSubmitted ? (
              <div className="text-center text-green-600 font-bold text-xl">
                Thank you for registering! We look forward to seeing you.
              </div>
            ) : (
              <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
            )}

            <p className="text-[0.82rem] text-[#7a96ab] mt-6">
              Seats are limited.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}