import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
export const alt = "forma — Ideias bem desenvolvidas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f5f6f2",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        color: "#242622",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {site.name}.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          lineHeight: 1.05,
          letterSpacing: -4,
        }}
      >
        <span>Boas ideias merecem</span>
        <span style={{ color: "#7b856f" }}>uma forma digital.</span>
      </div>
      <div style={{ fontSize: 19 }}>
        Sites · Aplicações web · Soluções digitais
      </div>
    </div>,
    size,
  );
}
