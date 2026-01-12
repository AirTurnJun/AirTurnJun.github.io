import AppIntegration from "@/components/shadcn-studio/blocks/app-integration-07/app-integration-07";

const integrationApps = [
  {
    name: "Audible",
    image: "https://m.media-amazon.com/images/I/71JDCnIbihL._h1_.png",
  },
  {
    name: "Pandora",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMa1v1lEba0_8Fxd_GLXnQv_PILIwaYgbWg&s",
  },
  {
    name: "Crunchy Roll",
    image: "https://m.media-amazon.com/images/I/41o03HyOYlL._h1_.png",
  },
  {
    name: "Netflix",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfMsBrdwHs2cERuR7Xobq60wvaxm4OLPJqA&s",
  },
  {
    name: "Prime Video",
    image: "https://i.pinimg.com/736x/5c/27/08/5c270885ac43345c20f747bfbd856348.jpg",
  },
  {
    name: "YouTube",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/1280px-YouTube_play_button_square_%282013-2017%29.svg.png",
  },
  {
    name: "Spotify",
    image: "https://cdn.jim-nielsen.com/watchos/512/spotify-music-and-podcasts-2020-03-19.png?rf=1024",
  },
  {
    name: "Apple Music",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png",
  },
];

export const AppIntegrationSection = () => {
  return <AppIntegration integrations={integrationApps} />;
};
