import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact03Page = () => (
  <div className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <b className="text-primary">Contact Us</b>
      <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight">
        We&apos;d love to hear from you
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Our friendly team is always here to chat.
      </p>
      <div className="mt-14 md:mt-24 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="bg-primary/10 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Email</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link
            className="font-bold text-primary tracking-tight"
            href="mailto:akashmoradiya3444@gmail.com"
          >
            akashmoradiya3444@gmail.com
          </Link>
        </div>
        <div className="bg-primary/10 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
            <MessageCircle />
          </div>
          <h3 className="mt-8 font-bold text-xl">Live chat</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link className="font-bold text-primary tracking-tight" href="#">
            Start new chat
          </Link>
        </div>
        <div className="bg-primary/10 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Office</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <Link
            className="font-bold text-primary tracking-tight"
            href="https://map.google.com"
            target="_blank"
          >
            100 Smith Street Collingwood <br /> VIC 3066 AU
          </Link>
        </div>
        <div className="bg-primary/10 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Phone</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Mon-Fri from 8am to 5pm.
          </p>
          <Link
            className="font-bold text-primary tracking-tight"
            href="tel:akashmoradiya3444@gmail.com"
          >
            +1 (555) 000-0000
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact03Page;
