// components/ConfigureAmplify.tsx
"use client";

import { Amplify } from "aws-amplify";

import outputs from "@/amplify_outputs.json";
import { useEffect } from "react";

export default function ConfigureAmplifyClientSide() {
  useEffect(() => {
    Amplify.configure(outputs, { ssr: true });
  }, []);

  return null;
}
