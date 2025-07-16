/*
 ! [Note]: The main use of this file is to prevent hydration error in case of Calender component in BookingForm because
 ! the first time calender renders on server it takes newDate() in the format 'DD/MM' but in case of client side render
 ! it take newDate() in the format 'MM/DD'. So, this file basically prevents the initial server render and for the 
 calender to only take newDate() from client side 
*/



'use client';

import dynamic from 'next/dynamic';

const BookingForm = dynamic(() => import('./BookingForm'), {
  ssr: false
});

export default BookingForm;
