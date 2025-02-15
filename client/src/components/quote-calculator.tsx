import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

const quoteFormSchema = z.object({
  material: z.string({
    required_error: "Please select a material",
  }),
  quality: z.string({
    required_error: "Please select print quality",
  }),
  dimensions: z.object({
    length: z.coerce.number().positive("Length must be greater than 0"),
    width: z.coerce.number().positive("Width must be greater than 0"),
    height: z.coerce.number().positive("Height must be greater than 0"),
  }),
  quantity: z.coerce.number().positive("Quantity must be at least 1"),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const materials = [
  { id: "pla", name: "PLA", pricePerUnit: 0.05 },
  { id: "abs", name: "ABS", pricePerUnit: 0.06 },
  { id: "petg", name: "PETG", pricePerUnit: 0.07 },
  { id: "nylon", name: "Nylon", pricePerUnit: 0.12 },
  { id: "tpu", name: "TPU", pricePerUnit: 0.15 },
] as const;

const printQualities = [
  { id: "draft", name: "Draft (0.3mm)", multiplier: 0.8 },
  { id: "standard", name: "Standard (0.2mm)", multiplier: 1.0 },
  { id: "fine", name: "Fine (0.1mm)", multiplier: 1.3 },
] as const;

export default function QuoteCalculator() {
  const [quote, setQuote] = useState<number | null>(null);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
      },
      quantity: 1,
    },
  });

  function calculateQuote(values: QuoteFormValues): number {
    const material = materials.find(m => m.id === values.material);
    const quality = printQualities.find(q => q.id === values.quality);

    if (!material || !quality) return 10; // Minimum price

    const volume = 
      values.dimensions.length * 
      values.dimensions.width * 
      values.dimensions.height;

    const basePrice = volume * material.pricePerUnit;
    const qualityAdjustedPrice = basePrice * quality.multiplier;
    const totalPrice = qualityAdjustedPrice * values.quantity;

    // Add minimum price threshold
    return Math.max(totalPrice, 10);
  }

  function onSubmit(data: QuoteFormValues) {
    const estimatedPrice = calculateQuote(data);
    setQuote(estimatedPrice);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-black/50 border-[#00FF00]/20">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#00FF00]/10 rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6 text-[#00FF00]" />
          </div>
          <div>
            <CardTitle className="text-2xl text-white">Quote Calculator</CardTitle>
            <p className="text-sm text-white/60">Get an instant price estimate for your 3D printing project</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="material"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Material</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black/30 border-[#00FF00]/20 text-white">
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black/90 border-[#00FF00]/20">
                      {materials.map((material) => (
                        <SelectItem 
                          key={material.id} 
                          value={material.id}
                          className="text-white hover:bg-[#00FF00]/10"
                        >
                          {material.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Print Quality</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-black/30 border-[#00FF00]/20 text-white">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black/90 border-[#00FF00]/20">
                      {printQualities.map((quality) => (
                        <SelectItem 
                          key={quality.id} 
                          value={quality.id}
                          className="text-white hover:bg-[#00FF00]/10"
                        >
                          {quality.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="dimensions.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Length (mm)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-black/30 border-[#00FF00]/20 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Width (mm)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="bg-black/30 border-[#00FF00]/20 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Height (mm)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="bg-black/30 border-[#00FF00]/20 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Quantity</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      className="bg-black/30 border-[#00FF00]/20 text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit"
              className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black"
            >
              Calculate Quote
            </Button>
          </form>
        </Form>

        {quote !== null && (
          <div className="mt-6 p-4 border border-[#00FF00]/20 rounded-lg bg-black/30">
            <h3 className="text-lg font-semibold text-white mb-2">Estimated Quote</h3>
            <p className="text-3xl font-bold text-[#00FF00]">${quote.toFixed(2)}</p>
            <p className="text-sm text-white/60 mt-2">
              This is an estimate. Final price may vary based on specific requirements.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}