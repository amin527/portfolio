import { Outlet, ScrollRestoration } from "react-router";
import { profile } from "../data/portfolio";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <Header name={profile.name} />
      <main className="container">
        <Outlet />
      </main>
      <Footer profile={profile} />
      <ScrollRestoration />
    </>
  );
}
