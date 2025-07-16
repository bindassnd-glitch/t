import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// All backend logic and types have been removed. Only UI remains.

const ContactForm = () => {
  return (
    <form
      className="max-w-2xl space-y-6 bg-white rounded-xl"
      action="https://formsubmit.co/ndjaat30@gmail.com"
      method="POST"
    >
      {/* Disable FormSubmit captcha */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Status messages removed, handled by alert system */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className='flex flex-col items-start gap-1.5'>
          <Label htmlFor="firstName" className='text-[#FF7A3D]'>First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="First Name" required />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <Label htmlFor="lastName" className='text-[#FF7A3D]'>Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Last Name" required />
        </div>
      </div>

      <div className='flex flex-col items-start gap-1.5'>
        <Label htmlFor="email" className='text-[#FF7A3D]'>Email *</Label>
        <Input id="email" name="email" type="email" placeholder="abc@gmail.com" required />
      </div>

      <div className='flex flex-col items-start gap-1.5'>
        <Label htmlFor="subject" className='text-[#FF7A3D]'>Subject *</Label>
        <Input id="subject" name="subject" placeholder="Subject" required />
      </div>

      <div className='flex flex-col items-start gap-1.5'>
        <Label htmlFor="message" className='text-[#FF7A3D]'>Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto px-10 py-6 bg-[#FF7A3D] cursor-pointer">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
