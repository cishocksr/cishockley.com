'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { socialLinks } from '@/lib/config/social';
=======
import { socialLinks } from '@/config/site';


>>>>>>> 3201d94 (ref: made sitegofig. removed hardcoded soical and email)

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Check data.success instead of response.ok
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error('Web3Forms error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container-section max-w-2xl py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-12 space-y-6">
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
        />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            autoComplete="email"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            aria-required="true"
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="Project inquiry"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            aria-required="true"
            rows={6}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring focus:outline-none"
            placeholder="Tell me about your project or question..."
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-200">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-200">
            ✗ Something went wrong. Please try again or email me directly.
          </div>
        )}
      </form>

      <div className="flex flex-col items-center gap-4">
        {socialLinks
          .filter(link => link.name === 'Email')
          .map((link) => {
            const Icon = link.icon;
            const emailText = link.name === 'Email'
              ? link.url.slice(7)
              : link.url;
            return (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.label}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Icon className="h-5 w-5" />
                <span>{emailText}</span>
              </a>
            );
          })}
      </div>

      {/* Divider */}
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
<<<<<<< HEAD
          <span className="bg-background px-4 text-muted-foreground">
            Or reach out directly
=======
          <span className="bg-white px-4 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
            Connect on Social Media
>>>>>>> 3201d94 (ref: made sitegofig. removed hardcoded soical and email)
          </span>
        </div>
      </div>

      {/* Contact Info */}
<<<<<<< HEAD
      <div className="flex flex-col items-center gap-4">
        <a
          href={socialLinks.find((link) => link.name === 'Email')?.url ?? ''}
          aria-label={socialLinks.find((link) => link.name === 'Email')?.label ?? 'Send email'}
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <FiMail className="h-5 w-5" />
          {socialLinks.find((link) => link.name === 'Email')?.label ?? ''}
        </a>

        <div className="flex gap-6">
          {socialLinks
            .filter((link) => link.name !== 'Email')
            .map((link) => {
              const Icon =
                link.name === 'GitHub' ? FiGithub : FiLinkedin;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
        </div>
=======
      <div className="flex items-center gap-6 justify-center">
        {socialLinks
          .filter(link => link.name !== 'Email')
          .map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.label}
                target='_blank'
                rel='noopener noreferrer'
                className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Icon className="h-5 w-5" />
                {/* <span>{link.name}</span> */}
              </a>
            )
          })}
>>>>>>> 3201d94 (ref: made sitegofig. removed hardcoded soical and email)
      </div>
    </div>
  );
}
