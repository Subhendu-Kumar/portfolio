import VisitMeLinks from "./VisitMeLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-4 px-10 w-full bg-[#082245] flex items-center justify-between text-base">
      <div className="flex items-center">
        <p>&copy; {currentYear}&nbsp;&nbsp;</p>
        <p className="hover:underline">Subhendu Kumar</p>
      </div>
      <VisitMeLinks />
    </div>
  );
}

export default Footer;
