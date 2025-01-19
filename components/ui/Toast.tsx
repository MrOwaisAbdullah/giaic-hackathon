"use client";

import { useNotifications } from '@/app/context/NotificationContext';
import React, { useEffect, useState } from 'react';

interface ToastProps {
  notification: {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
  };
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ notification, onClose }) => {
  const [progress, setProgress] = useState(100); // Progress starts at 100%

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onClose(); // Close the toast when progress reaches 0
          return 0;
        }
        return prev - 1; // Decrease progress by 1% every 30ms
      });
    }, 35); // Adjust the interval for smoother or faster animation

    return () => clearInterval(timer);
  }, [onClose]);

  const baseStyles = "fixed top-4 right-4 z-50 rounded-[5px] px-4 py-2 text-white transform transition-all duration-300 ease-in-out";
  
  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500"
  };

  return (
    <div className={`${baseStyles} ${typeStyles[notification.type]} overflow-hidden`}>
      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-white/50 transition-all duration-30 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
      {/* Toast Message */}
      {notification.message}
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <>
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </>
  );
};