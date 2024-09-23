import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-deep-blue pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="flex justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            GRZEGORZ ŁOŚ
          </p>
          <p className="font-playfair text-sm  text-yellow">
            ©2024 Łoś. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
