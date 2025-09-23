
import {
    Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,
} from "flowbite-react";




export function Header() {
    return (
        <>

            <Navbar fluid rounded>
                <NavbarBrand href="https://insonix.com">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center hidden lg:block text-accent whitespace-nowrap text-xl font-semibold dark:text-accent headingclass uppercase">Tri-Valley-Clinic</span>
                    <span className="self-center lg:hidden text-accent whitespace-nowrap text-xl font-semibold dark:text-accent headingclass">TVC</span>
                </NavbarBrand>
                <div className="flex md:order-2 bg-primary ">
                    <Button href="#schedule" className="lg:px-8 lg:py-4 lg:h-12 lg:text-lg text-sm font-semibold shadow-lg m-auto" outline >Request Appointment</Button>
                    <NavbarToggle className="ml-2" />
                </div>
                <NavbarCollapse>
                    {/* <NavbarLink href="#" active>
                        Home
                    </NavbarLink> */}
                    <NavbarLink href="#services" active>Services</NavbarLink>
                    <NavbarLink href="#doctors" >Our Doctors</NavbarLink>
                    <NavbarLink href="#schedule" >Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>

        </>
    );
}
