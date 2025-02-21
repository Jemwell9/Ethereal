import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Animated3DGrid } from "@/components/ui/animated-3d-grid";
import Home from "@/pages/home";
import About from "@/pages/about";
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
import React from 'react';

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black text-white p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4">Please try refreshing the page</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#00FF00] text-black px-4 py-2 rounded hover:bg-[#00FF00]/90"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-black relative">
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
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
    </ErrorBoundary>
  );
}