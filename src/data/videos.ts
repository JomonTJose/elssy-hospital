// Real videos from the Elssy Hospital YouTube channel:
// https://www.youtube.com/@ElssyHospital
export type Video = {
  id: string;
  title: string;
};

export const facilityVideo: Video = {
  id: "Fo6__x9RiuU",
  title: "Elssy Hospital Facilities",
};

export const learningSeries: Video[] = [
  {
    id: "Jqm6j1II2VQ",
    title: "Varicose Vein Treatment | ಉಬ್ಬಿರುವ ರಕ್ತನಾಳ ಚಿಕಿತ್ಸೆ",
  },
  {
    id: "KSFWvLS_Bdc",
    title: "Gall Bladder Stone | ಪಿತ್ತಕೋಶದ ಕಲ್ಲು",
  },
  {
    id: "ZeGM8lkvc7Q",
    title: "Hernia Treatments | ಹರ್ನಿಯಾ ಚಿಕಿತ್ಸೆಗಳು",
  },
];

export const youtubeChannelUrl = "https://www.youtube.com/@ElssyHospital";
