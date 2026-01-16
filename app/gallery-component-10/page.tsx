import Gallery from "@/components/shadcn-studio/blocks/gallery-component-10/gallery-component-10";

const galleryData = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-45.png",
    alt: "Image",
    className: "row-span-3",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-48.png",
    alt: "Image",
    className: "lg:row-span-2",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-43.png",
    alt: "Image",
    className: "row-span-5",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-47.png",
    alt: "Image",
    className: "lg:row-span-2",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-44.png",
    alt: "Image",
    className: "row-span-3",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-46.png",
    alt: "Image",
    className: "lg:row-span-2 max-lg:col-span-full",
  },
];

const GalleryPage = () => {
  return <Gallery data={galleryData} />;
};

export default GalleryPage;
