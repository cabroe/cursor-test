import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SettingsHeader from "./SettingsHeader";

describe("SettingsHeader", () => {
  it("rendert den Titel Einstellungen", () => {
    render(<SettingsHeader />);
    expect(screen.getByText("Einstellungen")).toBeInTheDocument();
  });
}); 