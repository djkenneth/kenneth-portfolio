import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Mock coordinates for San Francisco
  const location = {
    lat: 37.7749,
    lng: -122.4194,
    name: 'San Francisco, CA',
    address: 'San Francisco Bay Area, California, USA',
    timezone: 'PST (UTC-8)',
    workingHours: 'Mon-Fri, 9:00 AM - 6:00 PM'
  };

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${location?.lat},${location?.lng}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-card rounded-2xl shadow-brand-lg border border-border overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Location & Availability</h3>
              <p className="text-sm text-text-secondary">Based in {location?.name}</p>
            </div>
          </div>
          <button
            onClick={openInGoogleMaps}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            title="Open in Google Maps"
          >
            <Icon name="ExternalLink" size={16} className="text-text-secondary" />
          </button>
        </div>
      </div>
      {/* Map Container */}
      <div className="relative h-64 bg-muted">
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={32} className="text-text-secondary mx-auto mb-2" />
              <p className="text-sm text-text-secondary">Loading map...</p>
            </div>
          </div>
        )}
        
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title={location?.name}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${location?.lat},${location?.lng}&z=12&output=embed`}
          onLoad={handleMapLoad}
          className="border-0"
        />
      </div>
      {/* Location Details */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="MapPin" size={16} className="text-accent mt-1" />
              <div>
                <h4 className="font-medium text-primary">Address</h4>
                <p className="text-sm text-text-secondary">{location?.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="Clock" size={16} className="text-accent mt-1" />
              <div>
                <h4 className="font-medium text-primary">Working Hours</h4>
                <p className="text-sm text-text-secondary">{location?.workingHours}</p>
                <p className="text-xs text-text-secondary mt-1">Timezone: {location?.timezone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="Globe" size={16} className="text-accent mt-1" />
              <div>
                <h4 className="font-medium text-primary">Remote Work</h4>
                <p className="text-sm text-text-secondary">Available worldwide</p>
                <p className="text-xs text-text-secondary mt-1">Flexible timezone collaboration</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="Plane" size={16} className="text-accent mt-1" />
              <div>
                <h4 className="font-medium text-primary">Travel</h4>
                <p className="text-sm text-text-secondary">Available for on-site projects</p>
                <p className="text-xs text-text-secondary mt-1">Within reasonable distance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Preferences */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium text-primary mb-4">Collaboration Preferences</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-muted rounded-lg">
              <Icon name="Video" size={20} className="text-accent mx-auto mb-2" />
              <p className="text-xs font-medium text-primary">Video Calls</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <Icon name="MessageSquare" size={20} className="text-accent mx-auto mb-2" />
              <p className="text-xs font-medium text-primary">Slack/Teams</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <Icon name="Users" size={20} className="text-accent mx-auto mb-2" />
              <p className="text-xs font-medium text-primary">In-Person</p>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <Icon name="Mail" size={20} className="text-accent mx-auto mb-2" />
              <p className="text-xs font-medium text-primary">Email</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationMap;