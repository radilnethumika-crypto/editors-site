export const services = [
  {
    type: "Video Editing",
    packages: [
      { name: "Basic", price: "$25", features: ["Up to 3 min edit", "Cuts + transitions", "Background music", "1 revision", "3-day delivery"] },
      { name: "Standard", price: "$60", features: ["Up to 10 min edit", "Color grading", "Motion graphics", "Subtitles", "3 revisions", "5-day delivery"], popular: true },
      { name: "Premium", price: "$150", features: ["Unlimited length", "Advanced VFX", "Custom animation", "Sound design", "Unlimited revisions", "7-day delivery"] },
    ],
  },
  {
    type: "Photo Editing",
    packages: [
      { name: "Basic", price: "$10", features: ["Up to 10 photos", "Color correction", "Retouching", "1 revision"] },
      { name: "Standard", price: "$25", features: ["Up to 30 photos", "Advanced retouch", "Skin smoothing", "Background cleanup", "3 revisions"], popular: true },
      { name: "Premium", price: "$60", features: ["Up to 100 photos", "Full manipulation", "Composite work", "Unlimited revisions"] },
    ],
  },
];
