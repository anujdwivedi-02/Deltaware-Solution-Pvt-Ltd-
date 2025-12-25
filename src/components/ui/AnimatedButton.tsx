import "./AnimatedButton.css";
import { Link } from "react-router-dom";

export default function AnimatedButton({
  textName,
  type = "button",
  margin = "",
  href = "",
}: {
  textName: string;
  type?: "button" | "submit" | "reset";
  margin?: string;
  href?: string;
}) {
  if (href) {
    return (
      <Link to={href} className={`animated-button w-full ${margin}`}>
        <span className="fold"></span>

        <div className="points_wrapper">
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
        </div>

        <span className="inner">
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          >
            <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
          </svg>
          {textName}
        </span>
      </Link>
    );
  }

  return (
    <button type={type} className={`animated-button w-full ${margin}`}>
      <span className="fold"></span>

      <div className="points_wrapper">
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
        <i className="point"></i>
      </div>

      <span className="inner">
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
        </svg>
        {textName}
      </span>
    </button>
  );
}
