// import QuestionClient from './questionClient'

// export const dynamic = 'force-dynamic' // Optional: disables caching during dev

// interface PageProps {
//   params: {
//     id: string
//   }
// }

// const QuestionPage = async ({ params }: PageProps) => {

//   return <QuestionClient languageId={params.id} />;
// };

// export default QuestionPage;


import QuestionClient from './questionClient';

export const dynamic = 'force-dynamic'; // Optional: disables caching during dev

interface PageProps {
  params: {
    id: string;
  };
}

// અહીં SEO માટે metadata export
export async function generateMetadata({ params }: PageProps) {
  const languageName = params.id.toUpperCase(); // અથવા તમારું logic language name fetch કરવા માટે

  return {
    title: `${languageName} Interview Questions - Prepare & Crack Interviews | YourSiteName`,
    description: `Explore curated interview questions for ${languageName}. Get ready for your next tech interview with detailed answers and expert tips.`,
    keywords: `${languageName}, interview questions, coding interview, tech interview, programming`,
    openGraph: {
      title: `${languageName} Interview Questions - Prepare & Crack Interviews | YourSiteName`,
      description: `Explore curated interview questions for ${languageName}. Get ready for your next tech interview with detailed answers and expert tips.`,
      url: `https://yourwebsite.com/question/${params.id}`,
      siteName: "YourSiteName",
      images: [
        {
          url: 'https://yourwebsite.com/og-image.png',
          width: 800,
          height: 600,
          alt: 'Interview Questions OG Image',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${languageName} Interview Questions - Prepare & Crack Interviews | YourSiteName`,
      description: `Explore curated interview questions for ${languageName}. Get ready for your next tech interview with detailed answers and expert tips.`,
      images: ['https://yourwebsite.com/og-image.png'],
    },
  };
}

const QuestionPage = async ({ params }: PageProps) => {
  return <QuestionClient languageId={params.id} />;
};

export default QuestionPage;
