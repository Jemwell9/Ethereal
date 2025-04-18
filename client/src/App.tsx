import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Animated3DGrid } from "@/components/ui/animated-3d-grid";
import Home from "@/pages/home";
import About from "@/pages/about";
import Portfolio  from "@/pages/about/portfolio";
import Blog  from "@/pages/about/blog";
import Booking from "@/pages/booking";
import Services from "@/pages/services";
import DesignServices from "@/pages/services/design-services";
import MaterialsSelection from "@/pages/services/materials-selection";
import PrintingExecution from "@/pages/services/printing-execution";
import DesignWorkshops from "@/pages/workshops/design";
import KidsWorkshops from "@/pages/workshops/3d-pen-kids";
import AdultWorkshops from "@/pages/workshops/3d-pen-adults";
import PrintingMastery from "@/pages/workshops/printing-mastery";
import ConsultPage from "@/pages/consult";
import NotFound from "@/pages/not-found";
import ContactPage from "@/pages/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black relative">
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen pt-24">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/public" component={Home} />
              <Route path="/about" component={About} />
              <Route path="about/portfolio" component={Portfolio} />
              <Route path="about/blog" component={Blog} />
              <Route path="/booking" component={Booking} />
              <Route path="/services" component={Services} />
              <Route path="/services/design" component={DesignServices} />
              <Route path="/services/materials" component={MaterialsSelection} />
              <Route path="/services/printing" component={PrintingExecution} />
              <Route path="/workshops/design" component={DesignWorkshops} />
              <Route path="/workshops/3d-pen-kids" component={KidsWorkshops} />
              <Route path="/workshops/3d-pen-adults" component={AdultWorkshops} />
              <Route path="/workshops/printing-mastery" component={PrintingMastery} />
              <Route path="/consult" component={ConsultPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
          <Toaster />
        </div>
        <Animated3DGrid variant="default" />
      </div>
    </QueryClientProvider>
  );
}