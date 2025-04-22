const Footer = () => {
  return (
    <footer className="bg-[#FFF6F0] text-gray-700 px-6 md:px-4 pt-20 pb-6">
      <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Store Info */}
        <div className="space-y-2 ">
          <h3 className="text-4xl font-bold mt-10 ">BookBridge</h3>
          <p className="text-sm  lg:px-12">— STORE —</p>
          <address className="not-italic font-Inter text-sm mt-2 mb-0">
            2005 Stokes Isle Apt. 896,
            <br />
            Venaville 10010, USA
          </address>
          <p className="text-sm font-Inter">info@yourdomain.com</p>
          <p className="text-sm font-Inter">(+68) 120034509</p>
        </div>

        {/* Customer Service */}
        <div className="space-y-2">
          <h4 className="font-bold text-xl my-11 ">Customer Service</h4>
          <ul className="space-y-1 text-sm font-Inter">
            <li>Shipping Options</li>
            <li>My Wishlist</li>
            <li>My Account</li>
            <li>Return Policy</li>
            <li>Shopping FAQs</li>
          </ul>
        </div>

        {/* About */}
        <div className="space-y-2">
          <h4 className="font-bold text-xl my-11 ">Our Store</h4>
          <ul className="space-y-1 text-sm font-Inter">
            <li>About us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Our Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-bold text-xl my-11 ">Our Newsletter</h4>
          <p className="text-sm font-Inter">
            Leave your email to get all hot deals & news which benefit you most!
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 border border-gray-300 text-sm"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 text-sm uppercase font-Inter"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-screen-xl mx-auto mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs font-Inter">
          © 2025 EzOrder. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
