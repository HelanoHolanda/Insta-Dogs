import IconFooter from "../Public/IconFooter.svg";

const Footer = () => {
  return (
    <div className="h-40 bg-bg-footer pt-12 px-4">
      <div className="flex flex-col justify-center items-center ">
        <img src={IconFooter} alt="" />
        <p className="font-sans mt-4 text-footer">
          Dogs. Alguns direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
