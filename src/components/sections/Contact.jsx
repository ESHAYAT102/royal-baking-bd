import Container from "../Container";
import Button from "../Button";
import FadeInOnScroll from "../ui/FadeInOnScroll";
import { FaFacebook } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { SiWhatsapp, SiMessenger, SiInstagram } from "react-icons/si";

export default function Contact() {
  return (
    <div id="contact" className="pt-20">
      <FadeInOnScroll direction="up" delay={0.2}>
        <h1 className="text-5xl font-medium text-center mb-12">Contact</h1>
      </FadeInOnScroll>
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll direction="up" delay={0.4}>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                Connect With Us Or See Our Content
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  target="blank"
                  link="https://www.facebook.com/banasree2021"
                  classNames="flex items-center justify-center gap-3 bg-blue-600 border-blue-600 hover:bg-transparent hover:text-blue-600"
                >
                  <FaFacebook className="text-xl" />
                  <span className="hidden sm:inline">Facebook</span>
                </Button>

                <Button
                  target="blank"
                  link="https://wa.me/8801739782358"
                  classNames="flex items-center justify-center gap-3 bg-green-600 border-green-600 hover:bg-transparent hover:text-green-600"
                >
                  <SiWhatsapp className="text-xl" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </Button>

                <Button
                  target="blank"
                  link="https://m.me/banasree2021"
                  classNames="flex items-center justify-center gap-3 bg-blue-500 border-blue-500 hover:bg-transparent hover:text-blue-500"
                >
                  <SiMessenger className="text-xl" />
                  <span className="hidden sm:inline">Messenger</span>
                </Button>

                <Button
                  target="blank"
                  link="https://www.instagram.com/royal_baking_bd"
                  classNames="flex items-center justify-center gap-3 bg-pink-600 border-pink-600 hover:bg-transparent hover:text-pink-600"
                >
                  <SiInstagram className="text-xl" />
                  <span className="hidden sm:inline">Instagram</span>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="up" delay={0.6}>
            <div>
              <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button
                  link="tel:+8801739782358"
                  classNames="flex items-center justify-center gap-3 bg-gray-800 border-gray-800 hover:bg-transparent hover:text-gray-800 h-16 text-lg"
                >
                  <IoCall className="text-2xl" />
                  <div className="text-left">
                    <p className="hidden md:block">+880 1739-782358</p>
                    <p className="md:hidden">Call</p>
                  </div>
                </Button>

                <Button
                  link="mailto:contact@royalbakingbd.com"
                  classNames="flex items-center justify-center gap-3 bg-gray-800 border-gray-800 hover:bg-transparent hover:text-gray-800 h-16 text-lg"
                >
                  <IoMail className="text-2xl" />
                  <div className="text-left">
                    <p className="hidden md:block">contact@royalbakingbd.com</p>
                    <p className="md:hidden">Mail</p>
                  </div>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </div>
  );
}
