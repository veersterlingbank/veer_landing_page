import React from "react";
import { ReactComponent as Uncheck } from "assets/icons/check-box-unselected.svg";
import { ReactComponent as Check } from "assets/icons/check-box-selected.svg";

export default function Checkbox({ status, label, onClick, className }) {
  return (
    <div className={`flex ${className}`}>
      <div>
        {status ? (
          <Check
            data-testid="checked"
            onClick={onClick}
            className="cursor-pointer hide_tap w-[18px]"
          />
        ) : (
          <Uncheck
            data-testid="unchecked"
            onClick={onClick}
            className="cursor-pointer hide_tap  w-[18px]"
          />
        )}
      </div>
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

