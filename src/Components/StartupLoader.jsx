"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../Lib/Loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Welcome here !",
  },
  {
    text: "Setting things up...",
  }
];

export function StartupLoader({loading}) {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      
    </div>
  );
}
