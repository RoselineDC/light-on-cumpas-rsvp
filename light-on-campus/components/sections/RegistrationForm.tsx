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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // Clear error when user starts typing
    }));
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    if (!formData.full_name) errors.full_name = 'Full Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.university_name) errors.university_name = 'University Name is required';
    // Student ID and Phone Number are optional, so no validation here

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="full_name"
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        />
        {formErrors.full_name && <p className="mt-2 text-sm text-red-600">{formErrors.full_name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        />
        {formErrors.email && <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
      </div>

      <div>
        <label htmlFor="student_id" className="block text-sm font-medium text-gray-700">Student ID (Optional)</label>
        <input
          type="text"
          name="student_id"
          id="student_id"
          value={formData.student_id}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="university_name" className="block text-sm font-medium text-gray-700">University Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="university_name"
          id="university_name"
          value={formData.university_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        />
        {formErrors.university_name && <p className="mt-2 text-sm text-red-600">{formErrors.university_name}</p>}
      </div>

      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
        <input
          type="tel"
          name="phone_number"
          id="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="dietary_restrictions" className="block text-sm font-medium text-gray-700">Dietary Restrictions (Optional)</label>
        <textarea
          name="dietary_restrictions"
          id="dietary_restrictions"
          value={formData.dietary_restrictions}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        ></textarea>
      </div>

      <div>
        <label htmlFor="how_heard" className="block text-sm font-medium text-gray-700">How did you hear about us? (Optional)</label>
        <select
          name="how_heard"
          id="how_heard"
          value={formData.how_heard}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm"
        >
          <option value="">Please select</option>
          <option value="social_media">Social Media</option>
          <option value="friend">Friend/Word of Mouth</option>
          <option value="university_event">University Event</option>
          <option value="website">Website</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-navy bg-gold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Registering...' : 'Register Now'}
        </button>
      </div>

      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </form>
  );
}