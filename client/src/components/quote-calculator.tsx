import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Upload } from "lucide-react";
import { Link } from "wouter";

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

const uploadFormSchema = z.object({
  material: z.string({
    required_error: "Please select a material",
  }),
  quality: z.string({
    required_error: "Please select print quality",
  }),
  file: z.instanceof(File, { message: "Please upload a 3D model file" })
    .refine(
      (file) => {
        const validExtensions = ['.stl', '.obj', '.3mf'];
        return validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
      },
      { message: "Please upload a valid 3D model file (.stl, .obj, or .3mf)" }
    ),
  quantity: z.coerce.number().positive("Quantity must be at least 1"),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;
type UploadFormValues = z.infer<typeof uploadFormSchema>;

const materials = [
  { 
    id: "pla", 
    name: "PLA", 
    pricePerUnit: 0.05,
    image: "/materials/pla-sample.jpg",
    description: "Versatile material, great for most applications"
  },
  { 
    id: "abs", 
    name: "ABS", 
    pricePerUnit: 0.06,
    image: "/materials/abs-sample.jpg",
    description: "Durable and heat-resistant"
  },
  { 
    id: "petg", 
    name: "PETG", 
    pricePerUnit: 0.07,
    image: "/materials/petg-sample.jpg",
    description: "Strong and chemical resistant"
  },
  { 
    id: "nylon", 
    name: "Nylon", 
    pricePerUnit: 0.12,
    image: "/materials/nylon-sample.jpg",
    description: "Flexible and durable"
  },
  { 
    id: "tpu", 
    name: "TPU", 
    pricePerUnit: 0.15,
    image: "/materials/tpu-sample.jpg",
    description: "Highly flexible and elastic"
  }
] as const;

const printQualities = [
  { 
    id: "draft", 
    name: "Draft (0.3mm)", 
    multiplier: 0.8,
    image: "/quality/draft-quality.jpg",
    description: "Fast printing, visible layer lines"
  },
  { 
    id: "standard", 
    name: "Standard (0.2mm)", 
    multiplier: 1.0,
    image: "/quality/standard-quality.jpg",
    description: "Balanced speed and quality"
  },
  { 
    id: "fine", 
    name: "Fine (0.1mm)", 
    multiplier: 1.3,
    image: "/quality/fine-quality.jpg",
    description: "Smooth surface finish"
  }
] as const;

export default function QuoteCalculator() {
  const [quote, setQuote] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileSubmitted, setFileSubmitted] = useState(false);

  const dimensionsForm = useForm<QuoteFormValues>({
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

  const uploadForm = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
    defaultValues: {
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

    return Math.max(totalPrice, 10);
  }

  function onDimensionsSubmit(data: QuoteFormValues) {
    const estimatedPrice = calculateQuote(data);
    setQuote(estimatedPrice);
  }

  function onUploadSubmit(data: UploadFormValues) {
    setFileSubmitted(true);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      uploadForm.setValue('file', file);
    }
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
        <Tabs defaultValue="dimensions" className="space-y-6">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="dimensions">Enter Dimensions</TabsTrigger>
            <TabsTrigger value="upload">Upload Model</TabsTrigger>
          </TabsList>

          {/* Dimensions Calculator Form */}
          <TabsContent value="dimensions">
            {/* Material Quality Preview Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {printQualities.map((quality) => (
                <div key={quality.id} className="relative group cursor-pointer">
                  <img src={quality.image} alt={quality.name} className="aspect-square rounded-lg object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-xs px-2 text-center">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Material Samples Grid */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {materials.map((material) => (
                <div key={material.id} className="relative group cursor-pointer">
                  <img src={material.image} alt={material.name} className="aspect-square rounded-lg object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-xs px-2 text-center">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Form {...dimensionsForm}>
              <form onSubmit={dimensionsForm.handleSubmit(onDimensionsSubmit)} className="space-y-6">
                {/* Material Selection */}
                <FormField
                  control={dimensionsForm.control}
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

                {/* Print Quality Selection */}
                <FormField
                  control={dimensionsForm.control}
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

                {/* Dimensions Input */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={dimensionsForm.control}
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
                    control={dimensionsForm.control}
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
                    control={dimensionsForm.control}
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

                {/* Quantity Input */}
                <FormField
                  control={dimensionsForm.control}
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
          </TabsContent>

          {/* File Upload Form */}
          <TabsContent value="upload">
            {!fileSubmitted ? (
              <Form {...uploadForm}>
                <form onSubmit={uploadForm.handleSubmit(onUploadSubmit)} className="space-y-6">
                  {/* Material Selection */}
                  <FormField
                    control={uploadForm.control}
                    name="material"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Preferred Material</FormLabel>
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

                  {/* Print Quality Selection */}
                  <FormField
                    control={uploadForm.control}
                    name="quality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Desired Print Quality</FormLabel>
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

                  {/* File Upload */}
                  <FormField
                    control={uploadForm.control}
                    name="file"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Upload 3D Model</FormLabel>
                        <FormControl>
                          <div className="flex flex-col items-center justify-center w-full">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#00FF00]/20 border-dashed rounded-lg cursor-pointer bg-black/30 hover:bg-[#00FF00]/5"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-[#00FF00]" />
                                {selectedFile ? (
                                  <p className="text-sm text-white">{selectedFile.name}</p>
                                ) : (
                                  <>
                                    <p className="mb-2 text-sm text-white">
                                      <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-white/60">
                                      STL, OBJ, or 3MF (max 50MB)
                                    </p>
                                  </>
                                )}
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                accept=".stl,.obj,.3mf"
                                onChange={(e) => {
                                  handleFileChange(e);
                                  field.onChange(e.target.files?.[0]);
                                }}
                              />
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Model Preview Placeholder */}
                  <div className="mb-6">
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/30 border-2 border-dashed border-[#00FF00]/20">
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        {selectedFile ? (
                          <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Model" className="max-h-full max-w-full object-contain" />
                        ) : (
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#00FF00]/10 rounded-lg flex items-center justify-center">
                              <Upload className="w-8 h-8 text-[#00FF00]" />
                            </div>
                            <p className="text-white text-sm">Model preview will appear here</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>


                  {/* Quantity Input */}
                  <FormField
                    control={uploadForm.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Desired Quantity</FormLabel>
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
                    Submit for Quote
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="p-6 text-center">
                <Upload className="w-12 h-12 text-[#00FF00] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">File Received!</h3>
                <p className="text-white/60 mb-6">
                  Our team will analyze your 3D model and provide a custom quote based on its specifications.
                  We'll get back to you within 24 hours.
                </p>
                <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black">
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

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