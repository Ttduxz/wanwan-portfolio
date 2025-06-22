'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { sendEmail, type FormState } from '@/lib/actions';
import Image from 'next/image';

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
    <section id="contact" className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-50 text-gray-800 lg:min-h-screen flex flex-col justify-center">
       <div
        aria-hidden="true"
        className="absolute top-0 -left-1/4 w-[40rem] h-[40rem] bg-gray-300/30 rounded-full filter blur-3xl opacity-20"
      ></div>
       <div
        aria-hidden="true"
        className="absolute bottom-0 -left-1/4 w-[50rem] h-[50rem] bg-amber-100/30 rounded-full filter blur-3xl opacity-35"
      ></div>
      <AnimatedSection>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Contact</h2>
              <p className="text-base leading-relaxed mb-12 font-light max-w-2xl mx-auto">
                I&apos;d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the form below or my contact details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Left Column: Contact Details */}
              <div className="text-base font-light text-gray-700 text-left md:mt-4">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 font-['Playfair_Display']">Contact Details</h3>
                <div className="flex flex-col items-start justify-center gap-5">
                  <a href="mailto:jirapatkantaros.work@gmail.com" className="inline-flex items-center gap-3 group">
                    <Image src="/email.svg" alt="Email" width={24} height={24} />
                    <span className="underline text-amber-800 group-hover:text-amber-900 font-medium transition-colors">jirapatkantaros.work@gmail.com</span>
                  </a>
                  <a href="https://line.me/ti/p/wanwanjirapat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                    <Image src="/line-me.png" alt="LINE" width={24} height={24} />
                    <span className="underline text-amber-800 group-hover:text-amber-900 font-medium transition-colors">wanwanjirapat</span>
                  </a>
                  <a href="tel:0659626152" className="inline-flex items-center gap-3 group">
                    <Image src="/phone_icon.png" alt="Phone" width={20} height={20} />
                    <span className="underline text-amber-800 group-hover:text-amber-900 font-medium transition-colors">0659626152</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Form */}
              <form
                ref={formRef}
                action={formAction}
                className="w-full bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6"
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 font-['Playfair_Display'] text-left">Send a Message</h3>
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
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
} 