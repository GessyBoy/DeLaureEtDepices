import React from "react";
import Logo from "../components/Logo";
import banniere from "../assets/banniere.jpg";
import iconLogin from "../assets/user-login-icon.png";

function Header() {
  return (
    <div className="flex justify-between items-center bg-black">
      <div>
        <Logo className="w-full h-auto absolute" />
      </div>
      <div className="flex-1">
        <img
          src={banniere}
          alt="Banniere_De_Laure_et_depices"
          className="w-1000 h-48"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <button
          type="button"
          className="inline-block bg-white rounded-full border-2 border-warning px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 hover:text-white"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Home
        </button>
        <button
          type="button"
          className="inline-block bg-white rounded-full border-2 border-warning px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 hover:text-white"
          onClick={() => {
            window.location.href = "/produits";
          }}
        >
          Produits
        </button>
        <button
          type="button"
          className="inline-block bg-white rounded-full border-2 border-warning px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 hover:text-white"
          onClick={() => {
            window.location.href = "/panier";
          }}
        >
          Panier
        </button>
        <button
          type="button"
          className="inline-block bg-white rounded-full border-2 border-warning px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 hover:text-white"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Connexion
        </button>
      </div>
      <div className="flex-1">
        <a href="/login">
          <img
            src={iconLogin}
            alt="iconLogin"
            className="w-20 h-20 bg-white hover:bg-or cursor-pointer ml-2"
          />
        </a>
        <h3 className="text-white hiden text-1xl font-bold bg-gradient-to-r bg-clip-text text-transparent">
          Se connecter
        </h3>
      </div>
    </div>
  );
}

export default Header;
