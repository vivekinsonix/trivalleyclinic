"use client";

import { ThemeProvider, createTheme } from "flowbite-react";


const customTheme = createTheme({
    navbar: {
        root: {
            base: "bg-primary dark:bg-primary py-4 rounded-none text-accent",
            rounded: {
                on: "rounded-none",
                off: "",
            },
        },
        brand: {
            base: "flex items-center space-x-2 text-2xl font-bold text-accent",
        },
        toggle: {
            base: "text-gray-200 hover:text-accent focus:ring-0 focus:ring-accent rounded-lg",
        },
        collapse: {
            base: "mt-8 md:mt-0 flex flex-col md:flex-row md:space-x-6",
        },
        link: {
            base: "text-accent dark:text-accent pt-2 flex items-center hover:text-accent transition-colors duration-200 border-0",
            active: {
                on: "text-accent font-normal hover:text-accent dark:text-accent bg-highlight lg:bg-transparent dark:lg:bg-transparent",
                off: "text-accent dark:text-accent hover:text-accent dark:hover:text-accent",
            },
        },
    },

    button: {
        base: "relative flex border-2 border-accent items-center justify-center rounded-none text-center font-normal focus:outline-none focus:ring-4",
        disabled: "pointer-events-none opacity-50",
        fullSized: "w-full",
        grouped:
            "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
        pill: "rounded-full",
        size: {
            xs: "h-8 px-3 text-xs",
            sm: "h-9 px-3 text-sm",
            md: "h-10 px-5 text-sm",
            lg: "h-16 px-5 text-base",
            xl: "h-[52px] px-6 text-base",
        },
        color: {
            default:
                "bg-primarysky text-accent hover:primarysky/70 cursor-pointer dark:bg-primarysky focus:ring-none " +
                "dark:bg-primarysky dark:hover:bg-primarysky dark:focus:ring-none",
        },
        outlineColor: {
            "default": "border bg-primaryteal  border-primaryteal rounded-0 text-accent hover:border-primaryteal hover:bg-primaryteal/70 hover:text-accent focus:ring-primary-300 shadow-2xl dark:border-primaryteal dark:text-accent dark:hover:border-primaryteal dark:hover:bg-primaryteal/70 cursor-pointer dark:hover:text-accent dark:focus:ring-primary",
        }
    },
    card: {
        root: {
            base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-white",
            children: "flex h-full flex-col justify-center gap-4 p-6",
            horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row"
            },
            href: "hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        img: {
            base: "",
            horizontal: {
                off: "rounded-t-lg",
                on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }
        }
    },
    tabs: {
        base: "flex flex-col gap-2",
        tablist: {
            base: "flex text-center",
            variant: {
                default: "flex-wrap border-b border-primarysky dark:border-gray-700",
                underline:
                    "-mb-px flex-wrap border-b border-primarysky dark:border-gray-700",
                pills:
                    "flex-wrap space-x-2 text-lg font-medium text-gray-500 dark:text-gray-400",
                fullWidth:
                    "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-lg font-medium shadow dark:divide-gray-700 dark:text-gray-900",
            },
            tabitem: {
                base: "flex items-center justify-center rounded-t-lg lg:p-4 p-3 text-lg font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-700 disabled:dark:text-gray-900",
                variant: {
                    default: {
                        base: "rounded-t-lg",
                        active: {
                            on: "bg-gray-100 text-black dark:bg-gray-800 dark:text-primary-500",
                            off: "text-gray-800 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-800",
                        },
                    },
                    underline: {
                        base: "rounded-t-lg",
                        active: {
                            on: "rounded-t-lg border-b-6 border-accent  text-black dark:border-accent dark:text-black",
                            off: "border-b-2 border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-800",
                        },
                    },
                    pills: {
                        base: "",
                        active: {
                            on: "rounded-lg bg-primary-600 text-white",
                            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
                        },
                    },
                    fullWidth: {
                        base: "ml-0 flex w-full rounded-none first:ml-0",
                        active: {
                            on: "rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
                            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
                        },
                    },
                },
                icon: "mr-2 h-5 w-5",
            },
        },
        tabitemcontainer: {
            base: "",
            variant: {
                default: "",
                underline: "",
                pills: "",
                fullWidth: "",
            },
        },
        tabpanel: "py-3",
    },
});
export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}