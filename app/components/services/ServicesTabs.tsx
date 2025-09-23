
import { Button, TabItem, Tabs } from "flowbite-react";
import { List, ListItem } from "flowbite-react";

const TickIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 mr-2 text-green-500"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);
export function Servicestabs() {
    return (
        <Tabs aria-label="Tabs with icons" variant="underline">
            <TabItem active title="Psychiatry">
                <h2 className="text-2xl mb-3 text-accent text-left">Comprehensive Psychiatric Care</h2>
                <img
                    src="/ftp.jpg"
                    alt="tphoto"
                    className="w-full h-2xl rounded-sm mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <p className="text-gray-500 text-sm text-left mb-8">Our core focus is providing expert psychiatric evaluations and ongoing management for a wide range of mental health conditions. We believe in a collaborative approach, working with you to develop a personalized treatment plan that addresses your specific needs and goals, helping you navigate life's challenges with support and expert guidance.</p>

                <List className="leading-12 space-y-4 text-sm mb-5  text-left">
                    <ListItem className="text-accent" icon={TickIcon}>Psychiatric Evaluations & Diagnosis</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Personalized Medication Management</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Treatment for Mood, Psychosis, & Anxiety</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Trauma & Stress Support</ListItem>
                </List>
                <a className="px-8 py-3 text-sm text-left flex  underline">
                    Read More
                </a>

            </TabItem>
            <TabItem title="Weight Loss">
                Weight Loss
            </TabItem>
            <TabItem title="IV Hydration" >
                IV Hydration
            </TabItem>

        </Tabs>
    );
}
