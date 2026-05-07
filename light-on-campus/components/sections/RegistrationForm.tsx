'use client';
import React, { useState } from 'react';

interface RegistrationFormProps {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
  error: string | null;
}

interface FormData {
  full_name: string;
  email: string;
  student_id: string;
  university_name: string;
  phone_number: string;
  dietary_restrictions: string;
  how_heard: string;
}

export function RegistrationForm({ onSubmit, isLoading, error }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    student_id: '',
    university_name: '',
    phone_number: '',
    dietary_restrictions: '',
    how_heard: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    if (!formData.full_name) errors.full_name = 'Full name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }
    if (!formData.university_name) errors.university_name = 'University name is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  const inputBase =
    'mt-1.5 block w-full rounded-lg bg-gray-50 border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-all focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200';

  const labelBase = 'flex items-center gap-1.5 text-xs font-medium tracking-wide text-gray-500 uppercase';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

        {/* Header */}
        <div className="mb-7">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 border border-gray-200 rounded-full px-3 py-1 mb-4 uppercase tracking-widest">
            Event registration
          </span>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Join us at the summit</h1>
          <p className="text-sm text-gray-400">Fill in your details below to secure your spot.</p>
        </div>

        <hr className="border-gray-100 mb-7" />

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="full_name" className={labelBase}>
                Full name <span className="text-red-400 text-xs">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={`${inputBase} ${formErrors.full_name ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
              />
              {formErrors.full_name && (
                <p className="mt-1.5 text-xs text-red-500">{formErrors.full_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelBase}>
                Email <span className="text-red-400 text-xs">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@university.edu"
                className={`${inputBase} ${formErrors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
              />
              {formErrors.email && (
                <p className="mt-1.5 text-xs text-red-500">{formErrors.email}</p>
              )}
            </div>
          </div>

          {/* University + Student ID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="university_name" className={labelBase}>
                University <span className="text-red-400 text-xs">*</span>
              </label>
              <input
                type="text"
                name="university_name"
                id="university_name"
                value={formData.university_name}
                onChange={handleChange}
                placeholder="e.g. UCT"
                className={`${inputBase} ${formErrors.university_name ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''}`}
              />
              {formErrors.university_name && (
                <p className="mt-1.5 text-xs text-red-500">{formErrors.university_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="student_id" className={labelBase}>
                Student ID{' '}
                <span className="text-gray-300 font-normal normal-case tracking-normal text-xs">optional</span>
              </label>
              <input
                type="text"
                name="student_id"
                id="student_id"
                value={formData.student_id}
                onChange={handleChange}
                placeholder="e.g. STU12345"
                className={inputBase}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone_number" className={labelBase}>
              Phone number{' '}
              <span className="text-gray-300 font-normal normal-case tracking-normal text-xs">optional</span>
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="+27 81 000 0000"
              className={inputBase}
            />
          </div>

          {/* Dietary */}
          <div>
            <label htmlFor="dietary_restrictions" className={labelBase}>
              Dietary restrictions{' '}
              <span className="text-gray-300 font-normal normal-case tracking-normal text-xs">optional</span>
            </label>
            <textarea
              name="dietary_restrictions"
              id="dietary_restrictions"
              value={formData.dietary_restrictions}
              onChange={handleChange}
              rows={3}
              placeholder="e.g. vegetarian, nut allergy…"
              className={`${inputBase} resize-none`}
            />
          </div>

          {/* How heard */}
          <div>
            <label htmlFor="how_heard" className={labelBase}>
              How did you hear about us?{' '}
              <span className="text-gray-300 font-normal normal-case tracking-normal text-xs">optional</span>
            </label>
            <select
              name="how_heard"
              id="how_heard"
              value={formData.how_heard}
              onChange={handleChange}
              className={inputBase}
            >
              <option value="">Select one…</option>
              <option value="social_media">Social media</option>
              <option value="friend">Friend / word of mouth</option>
              <option value="university_event">University event</option>
              <option value="website">Website</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 text-white text-sm font-medium transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <>Registering…</>
            ) : (
              <>Register now <span aria-hidden="true">→</span></>
            )}
          </button>

          {error && (
            <p className="text-center text-sm text-red-500 mt-3">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}