"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3c57411a-93be-45b9-903d-1470641486ac");
  }, []);

  return null;
};