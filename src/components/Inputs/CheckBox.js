import React from "react";
// import { ReactComponent as Check } from "assets/icons/check-box-selected.svg";
import { ReactComponent as Uncheck } from "assets/icons/check-box-unselected.svg";

export default function Checkbox({ status, label, onClick, className }) {
  return (
    <div className={`flex ${className}`}>
      {status ? (
        // <Check
        //   data-testid="checked"
        //   onClick={onClick}
        //   className="cursor-pointer hide_tap"
        // />
        <p>Checked</p>
      ) : (
        <Uncheck
          data-testid="unchecked"
          onClick={onClick}
          className="cursor-pointer hide_tap"
        />
      )}
      {label ? (
        <p className="font-qanelas_m ml-[12px] text-brand_secondary text-14">
          {label}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

