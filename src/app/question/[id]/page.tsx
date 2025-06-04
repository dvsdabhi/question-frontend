import QuestionClient from './questionClient'

export const dynamic = 'force-dynamic'

type PageProps = {
  params: Promise<{ id: string }>;
};

// const QuestionPage = async ({ params }: PageProps) => {
//    const { id } = await params;
//   return <QuestionClient languageId={id} />;
// };

// export default QuestionPage;


// import QuestionClient from './questionClient';

// export const dynamic = 'force-dynamic';

// type Params = Promise<{ id: string }>

export async function generateMetadata({ params }: PageProps) {

  const { id } = await params;

  return {
    title: `Interview Questions - Prepare & Crack Interviews | YourSiteName`,
    description: `Explore curated interview questions for. Get ready for your next tech interview with detailed answers and expert tips.`,
    keywords: ` interview questions, coding interview, tech interview, programming`,
    openGraph: {
      title: ` Interview Questions - Prepare & Crack Interviews | YourSiteName`,
      description: `Explore curated interview questions for Get ready for your next tech interview with detailed answers and expert tips.`,
      url: `https://yourwebsite.com/question/${id}`,
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
      title: `Interview Questions - Prepare & Crack Interviews | YourSiteName`,
      description: `Explore curated interview questions for. Get ready for your next tech interview with detailed answers and expert tips.`,
      images: ['https://yourwebsite.com/og-image.png'],
    },
  };
}


const QuestionPage = async ({ params }: PageProps) => {
   const { id } = await params;
  return <QuestionClient languageId={id} />;
};

export default QuestionPage;
