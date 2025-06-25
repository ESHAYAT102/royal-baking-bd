export default function Footer() {
  return (
    <footer className="font-semibold bg-gray backdrop-blur-sm flex flex-col gap-6 justify-between items-center w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <div>
        <a href="/" className="text-2xl lg:text-4xl w-full text-center">
          Royal Baking BD.
        </a>
      </div>
      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#about">About</a>
        <a href="/blog">Blog</a>
      </div>
      <div className="mt-4 text-center">
        <p>
          &copy; All Rights Reserved. Designed And Developed By{" "}
          <a className="underline" target="blank" href="https://eshayat.com">
            Eshayat
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
