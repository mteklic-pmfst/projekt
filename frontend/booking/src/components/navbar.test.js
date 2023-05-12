import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './navbar';

test('renders "HappyLife" in navbar brand', () => {
  render(<Nav />);
  const brandElement = screen.getByText(/HappyLife/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders "Home" link in navbar', () => {
  render(<Nav />);
  const homeLinkElement = screen.getByText(/Home/i);
  expect(homeLinkElement).toBeInTheDocument();
});

test('renders "About us" link in navbar', () => {
  render(<Nav />);
  const aboutUsLinkElement = screen.getByText(/About us/i);
  expect(aboutUsLinkElement).toBeInTheDocument();
});

test('renders "Rooms" link in navbar', () => {
  render(<Nav />);
  const roomsLinkElement = screen.getByText(/Rooms/i);
  expect(roomsLinkElement).toBeInTheDocument();
});

test('renders "Sign Up" button in navbar', () => {
  render(<Nav />);
  const signUpButtonElement = screen.getByText(/Sign Up/i);
  expect(signUpButtonElement).toBeInTheDocument();
});

test('renders "Login" button in navbar', () => {
  render(<Nav />);
  const loginButtonElement = screen.getByText(/Login/i);
  expect(loginButtonElement).toBeInTheDocument();
});
