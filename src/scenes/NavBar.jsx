export default function Navbar() {
  return (
    <nav className="w-full bg-blue py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div className="text-3xl font-opensans font-bold">GŁ</div>
        <div className="flex gap-16 font-poppins font-semibold">
          <div>Home</div>
          <div>Experiences</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Contacts</div>
        </div>
      </div>
    </nav>
  );
}
