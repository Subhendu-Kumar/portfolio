import links from "../scripts/Links";
import { clsx } from "clsx";
import PropTypes from "prop-types";

function VisitMeLinks({ className }) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      Visit me At :
      {links.map((data, index) => {
        return (
          <a
            key={index}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.icon}
          </a>
        );
      })}
    </div>
  );
}

VisitMeLinks.propTypes = {
  className: PropTypes.string,
};

VisitMeLinks.defaultProps = {
  className: "",
};

export default VisitMeLinks;
