
import { Button, Card, TabItem, Tabs } from "flowbite-react";
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
            <TabItem className="mt-5" active title="Psychiatry">
<Card className="bg-white rounded-2xl p-5 text-center shadow-lg border-0">


         <div className="grid md:grid-cols-5 grid-col-1 gap-4">
                <div className="col-span-3">
                             <h2 className="text-2xl mb-3 text-accent text-left">Comprehensive Psychiatric Care</h2>
                
                <p className="text-gray-500 text-sm text-left mb-8 leading-7 ">Our core focus is providing expert psychiatric evaluations and ongoing management for a wide range of mental health conditions. We believe in a collaborative approach, working with you to develop a personalized treatment plan that addresses your specific needs and goals, helping you navigate life&apos;s challenges with support and expert guidance.</p>

                <List className="leading-12 space-y-6 text-sm mb-5  text-left">
                    <ListItem className="text-accent" icon={TickIcon}>Psychiatric Evaluations & Diagnosis</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Personalized Medication Management</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Treatment for Mood, Psychosis, & Anxiety</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Trauma & Stress Support</ListItem>
                </List>
                         <Button outline
                        color="default"
                        size="lg"
                        className="px-6 py-3 h-10 text-lg font-semibold shadow-lg mt-12"
                    >
                          Read More
                    </Button>
                </div>




                <div className="lg:col-span-2 col-span-3 flex justify-center">
         <div className="relative w-[280px] sm:w-[220px] md:w-[350px] lg:aspect-[12/16.5]  aspect-[12/16.5]  border-4 border-accent overflow-hidden shadow-2xl mx-auto">
  {/* Background Image */}
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="/cm.jpg"
    alt="Phone background"
  />

  {/* Dark overlay on hover */}
  <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-all duration-300"></div>

  {/* Simulated notch */}
  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl"></div> */}
</div>


                </div>
</div>
    
</Card>
            </TabItem>
            <TabItem title="Weight Loss">
                <Card className="bg-white rounded-2xl p-5 text-center shadow-lg border-0">
                       <div className="grid md:grid-cols-5 grid-col-1 gap-4">
                <div className="col-span-3">
                             <h2 className="text-2xl mb-3 text-accent text-left">Medical Weight Loss Programs</h2>
                
                <p className="text-gray-500 text-sm text-left mb-8 leading-7">Our physician-led weight loss programs integrate medical expertise with a deep understanding of the psychological factors influencing weight. We move beyond simple diets to create sustainable, healthy lifestyle changes tailored to your body and mind, providing the tools and support you need to achieve and maintain your weight loss goals.</p>

                <List className="leading-16 space-y-4 text-sm mb-5  text-left">
                    <ListItem className="text-accent" icon={TickIcon}>Physician-Supervised Plans</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Metabolic & Health Assessments</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Medication Options When Appropriate</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Behavioral & Lifestyle Coaching</ListItem>
                </List>
                          <Button outline
                        color="default"
                        size="lg"
                        className="px-6 py-3 h-10 text-lg font-semibold shadow-lg mt-12 "
                    >
                          Read More
                    </Button>
                </div>




                <div  className="lg:col-span-2 col-span-3 flex justify-center">
         <div className="relative w-[280px] sm:w-[220px] md:w-[350px]  lg:aspect-[12/16.5]  aspect-[12/16.5]   border-4 border-accent overflow-hidden shadow-2xl mx-auto">
  {/* Background Image */}
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="/wl.jpg"
    alt="Phone background"
  />

  {/* Dark overlay on hover */}
  <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-all duration-300"></div>

  {/* Simulated notch */}
  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl"></div> */}
</div>


                </div>
</div>
</Card>
            </TabItem>
            <TabItem title="IV Hydration" >
                  <Card className="bg-white rounded-2xl p-5 text-center shadow-lg border-0">
                     <div className="grid md:grid-cols-5 grid-col-1 gap-4">
                <div className="col-span-3">
                             <h2 className="text-2xl mb-3 text-accent text-left">IV Infusion Therapy</h2>
                
                <p className="text-gray-500 text-sm text-left mb-8 leading-7">Rehydrate, replenish, and revitalize with our IV infusion therapies. Designed to deliver essential vitamins, minerals, and hydration directly into your bloodstream for maximum absorption, our treatments can help boost energy, improve recovery, and enhance overall wellness under the safety and supervision of medical professionals.</p>

                <List className="leading-12 space-y-4 text-sm mb-5  text-left">
                    <ListItem className="text-accent" icon={TickIcon}>Hydration & Electrolyte Blends</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Vitamin & Nutrient Infusions</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Energy & Wellness Cocktails</ListItem>
                    <ListItem className="text-accent" icon={TickIcon}>Administered in a Safe, Clinical Setting</ListItem>
                </List>
         
                          <Button outline
                        color="default"
                        size="lg"
                        className="px-6 py-3 h-10 text-lg font-semibold shadow-lg mt-12"
                    >
                          Read More
                    </Button>
                </div>




                <div  className="lg:col-span-2 col-span-3 flex justify-center">
         <div className="relative w-[280px] sm:w-[220px] md:w-[350px]  lg:aspect-[12/16.5]  aspect-[12/16.5]  border-4 border-accent overflow-hidden shadow-2xl mx-auto">
  {/* Background Image */}
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="/dh.jpg"
    alt="Phone background"
  />

  {/* Dark overlay on hover */}
  <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-all duration-300"></div>

  {/* Simulated notch */}
  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl"></div> */}
</div>


                </div>
</div>
</Card>
            </TabItem>

        </Tabs>
    );
}
