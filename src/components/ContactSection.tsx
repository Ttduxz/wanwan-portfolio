'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { sendEmail, type FormState } from '@/lib/actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-amber-800 text-white rounded-md px-4 py-3 font-semibold shadow-md hover:shadow-lg hover:bg-amber-900 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactSection() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, formAction] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message.includes('successfully')) {
      formRef.current?.reset();
    }
  }, [state]);


  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-50 text-gray-800 lg:min-h-screen flex flex-col justify-center">
      <AnimatedSection>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Contact</h2>
            <p className="text-base leading-relaxed mb-8 font-light max-w-2xl mx-auto">
              I&apos;d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the form below or by email.
            </p>
            <form
              ref={formRef}
              action={formAction}
              className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mx-auto mb-8 flex flex-col gap-6"
            >
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1 text-left">Your Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" className="form-input w-full border border-gray-300 rounded-md px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                {state.errors?.name && <p className="text-red-500 text-xs mt-1 text-left">{state.errors.name[0]}</p>}
              </div>
              <div className="form-group">
                 <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1 text-left">Your Email</label>
                <input id="email" name="email" type="email" placeholder="john.doe@example.com" className="form-input w-full border border-gray-300 rounded-md px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                 {state.errors?.email && <p className="text-red-500 text-xs mt-1 text-left">{state.errors.email[0]}</p>}
              </div>
              <div className="form-group">
                 <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1 text-left">Your Message</label>
                <textarea id="message" name="message" placeholder="Your message..." rows={4} className="form-input w-full border border-gray-300 rounded-md px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                {state.errors?.message && <p className="text-red-500 text-xs mt-1 text-left">{state.errors.message[0]}</p>}
              </div>

              <SubmitButton />

              {state.message && (
                <p className={`mt-2 text-sm text-center ${state.errors ? 'text-red-500' : 'text-green-600'}`}>
                  {state.message}
                </p>
              )}
            </form>
            <div className="text-base font-light text-gray-700 text-center">
              Or email me directly: <a href="mailto:jirapatkantaros.work@gmail.com" className="underline text-amber-800 hover:text-amber-900 font-medium">jirapatkantaros.work@gmail.com</a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
} 