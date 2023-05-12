import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Registration from "./registration";
import { MemoryRouter } from 'react-router-dom'; // dodajte MemoryRouter

test('renders sign up button', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <Registration />
    </MemoryRouter>
  );
  const button = getByRole('button', { name: /Sign up/i });
  expect(button).toBeInTheDocument();
});
