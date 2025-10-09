import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    contactPreference: '',
    gdprConsent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'Website Maintenance' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months+', label: '6+ Months' }
  ];

  const contactPreferenceOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'linkedin', label: 'LinkedIn Message' },
    { value: 'video-call', label: 'Video Call' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 20) {
      newErrors.message = 'Message must be at least 20 characters long';
    }

    if (!formData?.contactPreference) {
      newErrors.contactPreference = 'Please select your preferred contact method';
    }

    if (!formData?.gdprConsent) {
      newErrors.gdprConsent = 'Please consent to data processing';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        contactPreference: '',
        gdprConsent: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl p-8 shadow-brand-lg border border-border text-center"
      >
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-semibold text-primary mb-4">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out! I'll get back to you within 24 hours via your preferred contact method.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-8 shadow-brand-lg border border-border"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">Start a Project</h3>
          <p className="text-sm text-text-secondary">Let's discuss your next big idea</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={formData?.name}
          onChange={(e) => handleInputChange('name', e?.target?.value)}
          error={errors?.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@company.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Company/Organization"
          type="text"
          placeholder="Your Company Name"
          value={formData?.company}
          onChange={(e) => handleInputChange('company', e?.target?.value)}
        />

        <Select
          label="Project Type"
          placeholder="Select project type"
          options={projectTypeOptions}
          value={formData?.projectType}
          onChange={(value) => handleInputChange('projectType', value)}
          error={errors?.projectType}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Select
          label="Budget Range"
          placeholder="Select budget range"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => handleInputChange('budget', value)}
        />

        <Select
          label="Timeline"
          placeholder="Select timeline"
          options={timelineOptions}
          value={formData?.timeline}
          onChange={(value) => handleInputChange('timeline', value)}
        />
      </div>
      <div className="mb-6">
        <Select
          label="Preferred Contact Method"
          placeholder="How would you like me to contact you?"
          options={contactPreferenceOptions}
          value={formData?.contactPreference}
          onChange={(value) => handleInputChange('contactPreference', value)}
          error={errors?.contactPreference}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-primary mb-2">
          Project Details <span className="text-destructive">*</span>
        </label>
        <textarea
          placeholder="Tell me about your project, goals, and any specific requirements..."
          value={formData?.message}
          onChange={(e) => handleInputChange('message', e?.target?.value)}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
            errors?.message ? 'border-destructive' : 'border-border'
          }`}
        />
        {errors?.message && (
          <p className="text-sm text-destructive mt-1">{errors?.message}</p>
        )}
      </div>
      <div className="mb-8">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData?.gdprConsent}
            onChange={(e) => handleInputChange('gdprConsent', e?.target?.checked)}
            className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-accent"
          />
          <div className="text-sm">
            <span className="text-primary">
              I consent to the processing of my personal data for the purpose of project communication and collaboration. 
            </span>
            <span className="text-text-secondary block mt-1">
              Your data will be handled securely and never shared with third parties.
            </span>
          </div>
        </label>
        {errors?.gdprConsent && (
          <p className="text-sm text-destructive mt-2">{errors?.gdprConsent}</p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="left"
          className="bg-gradient-accent border-0 flex-1"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          iconName="Calendar"
          iconPosition="left"
          onClick={() => window.open('https://calendly.com/kenneth-pineda', '_blank')}
        >
          Schedule Call
        </Button>
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-text-secondary text-center">
          Expected response time: Within 24 hours • Secure form processing • GDPR compliant
        </p>
      </div>
    </motion.form>
  );
};

export default ContactForm;