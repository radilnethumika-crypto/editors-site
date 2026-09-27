export type Work = {
  id: number;
  title: string;
  category: "video" | "photo";
  tag: string;
  thumb: string;
  link?: string;
};

export const works: Work[] = [
  { id: 1, title: "Wedding Highlight", category: "video", tag: "Wedding", thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", link: "https://youtube.com" },
  { id: 2, title: "Product Ad", category: "video", tag: "Commercial", thumb: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800" },
  { id: 3, title: "YouTube Vlog Edit", category: "video", tag: "YouTube", thumb: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800" },
  { id: 4, title: "Portrait Retouch", category: "photo", tag: "Portrait", thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800" },
  { id: 5, title: "Product Photo", category: "photo", tag: "Product", thumb: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" },
  { id: 6, title: "Fashion Shoot", category: "photo", tag: "Fashion", thumb: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800" },
];
