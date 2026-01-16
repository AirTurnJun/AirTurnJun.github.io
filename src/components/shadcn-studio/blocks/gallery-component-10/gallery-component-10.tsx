type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
}[];

const Gallery = ({ data }: { data: GalleryImage }) => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Image Grids */}
          {data.map((image, index) => (
            <div key={index} className={image.className}>
              <img src={image.src} alt={image.alt} className="h-full w-full rounded-lg object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
