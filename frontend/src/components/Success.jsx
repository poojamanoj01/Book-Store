import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Success = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Show success alert after component mounts
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'Thank you for your purchase. Your payment has been processed successfully.',
      confirmButtonText: '  Continue Shopping',
      confirmButtonColor: '#4caf50',
      allowOutsideClick: false, // Prevent closing the alert by clicking outside
    }).then((result) => {
      // If the confirm button is clicked
      if (result.isConfirmed) {
        // Navigate to the dashboard ("/")
        navigate('/');
      }
    });
  }, [navigate]);

  return null; // No need for additional UI since the alert is displayed
};

export default Success;
