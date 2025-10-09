import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonial = ({ testimonials }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
        Client Testimonials
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-brand-sm hover:shadow-brand-md transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <Icon name="Quote" size={24} className="text-accent/60" />
            </div>
            
            {/* Testimonial Text */}
            <p className="text-text-primary text-sm leading-relaxed mb-6 italic">
              "{testimonial?.content}"
            </p>
            
            {/* Client Info */}
            <div className="flex items-center space-x-3">
              <Image
                src={testimonial?.avatar}
                alt={testimonial?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-primary text-sm">
                  {testimonial?.name}
                </h4>
                <p className="text-text-secondary text-xs">
                  {testimonial?.position}
                </p>
                <p className="text-text-secondary text-xs">
                  {testimonial?.company}
                </p>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-1 mt-4 pt-4 border-t border-border">
              {[...Array(5)]?.map((_, starIndex) => (
                <Icon
                  key={starIndex}
                  name="Star"
                  size={14}
                  className={`${
                    starIndex < testimonial?.rating
                      ? 'text-yellow-400 fill-current' :'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-xs text-text-secondary ml-2">
                {testimonial?.rating}/5
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientTestimonial;